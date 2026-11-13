import { useEffect, useRef, useState } from "react";
import { AnimatePresence, animate, motion, useMotionValue, useReducedMotion } from "framer-motion";
import { Check, RotateCcw } from "lucide-react";
import NumberRoll from "./NumberRoll";
import { ease, softSpring } from "@/lib/motion";

const STEPS = [
  { fn: "search_flights", args: "PEK → YYZ, 2026-09", ms: "214ms" },
  { fn: "filter", args: "price < 900", ms: "9ms" },
  { fn: "hold_fare", args: "AC 32 · ¥5,840", ms: "121ms" },
];
const BARS = [0.34, 0.38, 0.36, 0.44, 0.41, 0.5, 0.48, 0.57, 0.55, 0.63, 0.68];
const BASE_REWARD = 0.42;
const TUNED_REWARD = 0.87;

class Cancelled extends Error {}

/**
 * Looping faux-UI hero: the cursor runs an RL rollout, tool calls resolve one by one,
 * the reward rolls up, then the cursor starts a new rollout so the loop has no visible seam.
 * Every state change has a cause on screen. Pauses while off-screen or in a hidden tab.
 */
export default function Stage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const targets = useRef<Record<"run" | "reset", HTMLElement | null>>({ run: null, reset: null });
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [shown, setShown] = useState(reduce ? STEPS.length : 0);
  const [settled, setSettled] = useState(reduce ? STEPS.length : 0);
  const [rewardOpen, setRewardOpen] = useState(Boolean(reduce));
  const [reward, setReward] = useState(reduce ? TUNED_REWARD : BASE_REWARD);
  const [pressed, setPressed] = useState<string | null>(null);
  const [cursorReady, setCursorReady] = useState(false);

  useEffect(() => {
    const stage = stageRef.current;
    if (reduce || !stage) return;
    let alive = true;
    let visible = true;
    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting), { threshold: 0.15 });
    io.observe(stage);

    // Waits count only time the stage is actually watchable.
    const wait = (ms: number) =>
      new Promise<void>((resolve, reject) => {
        let left = ms;
        let last = performance.now();
        const tick = (now: number) => {
          if (!alive) return reject(new Cancelled());
          if (visible && !document.hidden) left -= now - last;
          last = now;
          if (left <= 0) resolve();
          else requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });

    const rest = () => ({ x: stage.clientWidth * 0.64, y: stage.clientHeight * 0.92 });
    const pointAt = (name: "run" | "reset") => {
      const el = targets.current[name];
      if (!el) return rest();
      const s = stage.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      return { x: r.left - s.left + r.width * 0.58, y: r.top - s.top + r.height * 0.62 };
    };

    // Different easing on each axis bends the path into a shallow, hand-like arc; time scales with distance.
    const move = async (to: { x: number; y: number }) => {
      const distance = Math.hypot(to.x - x.get(), to.y - y.get());
      const duration = Math.min(1.05, 0.42 + distance / 1500);
      await Promise.all([
        animate(x, to.x, { duration, ease: ease.inOut }),
        animate(y, to.y, { duration, ease: [0.3, 0.75, 0.35, 1] }),
      ]);
    };

    const click = async (name: "run" | "reset") => {
      await move(pointAt(name));
      await wait(140);
      setPressed(name);
      await wait(160);
      setPressed(null);
    };

    const script = async () => {
      const start = rest();
      x.set(start.x);
      y.set(start.y);
      setCursorReady(true);
      while (alive) {
        await wait(900);
        await click("run");
        for (let i = 1; i <= STEPS.length; i++) {
          setShown(i);
          await wait(560);
          setSettled(i);
          await wait(180);
        }
        setRewardOpen(true);
        await wait(420);
        setReward(TUNED_REWARD);
        await wait(2400);
        await click("reset");
        setRewardOpen(false);
        setReward(BASE_REWARD);
        setSettled(0);
        setShown(0);
        await move(rest());
      }
    };

    script().catch((error) => {
      if (!(error instanceof Cancelled)) throw error;
    });

    return () => {
      alive = false;
      io.disconnect();
    };
  }, [reduce, x, y]);

  return (
    <div
      ref={stageRef}
      className="stage"
      role="img"
      aria-label="Animated demo: an RL rollout calls three tools in order and its reward rises from 0.42 to 0.87."
    >
      <div className="stage__window" aria-hidden="true">
        <div className="win__bar">
          <span className="win__lights">
            <i />
            <i />
            <i />
          </span>
          <span className="win__title">rollouts — tool-use-rl</span>
        </div>
        <div className="win__body">
          <aside className="win__side">
            <span className="ph ph--w60" />
            <span className="win__side-row is-active">
              <span className="win__side-dot" /> run 1,240
            </span>
            <span className="ph ph--w80" />
            <span className="ph ph--w50" />
            <span className="ph ph--w70" />
            <span className="win__side-gap" />
            <span className="ph ph--w40" />
            <span className="ph ph--w60" />
          </aside>

          <div className="win__main">
            <div className="win__prompt">
              <span className="win__label">Task</span>
              <p>Find the cheapest flight from Beijing to Toronto in September.</p>
            </div>

            <div className="win__actions">
              <span
                ref={(el) => (targets.current.run = el)}
                className="win__run"
                data-pressed={pressed === "run"}
              >
                Run rollout
              </span>
              <span className="ph ph--w30" />
            </div>

            <ol className="win__steps">
              <AnimatePresence>
                {STEPS.slice(0, shown).map((step, index) => (
                  <motion.li
                    key={step.fn}
                    className="win__step"
                    initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, transition: { duration: 0.2, ease: ease.inOut } }}
                    transition={{ duration: 0.45, ease: ease.expo }}
                  >
                    <span className="win__step-icon" data-done={index < settled}>
                      <AnimatePresence mode="popLayout" initial={false}>
                        {index < settled ? (
                          <motion.span
                            key="done"
                            initial={{ scale: 0.4, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={softSpring}
                          >
                            <Check size={12} strokeWidth={3} />
                          </motion.span>
                        ) : (
                          <motion.span key="spin" className="win__spin" exit={{ opacity: 0, scale: 0.6 }} />
                        )}
                      </AnimatePresence>
                    </span>
                    <code>
                      <b>{step.fn}</b>({step.args})
                    </code>
                    <motion.span
                      className="win__ms"
                      animate={{ opacity: index < settled ? 1 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      {step.ms}
                    </motion.span>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ol>

            <div className="win__filler">
              <span className="ph ph--w70" />
              <span className="ph ph--w50" />
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {rewardOpen && (
          <motion.div
            className="stage__reward"
            aria-hidden="true"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98, transition: { duration: 0.24, ease: ease.inOut } }}
            transition={{ duration: 0.6, ease: ease.expo }}
          >
            <div className="reward__head">
              <span className="win__label">Episode reward</span>
              <motion.span
                className="reward__delta"
                animate={{ opacity: reward > BASE_REWARD ? 1 : 0, x: reward > BASE_REWARD ? 0 : -4 }}
                transition={{ duration: 0.4, ease: ease.out, delay: 0.25 }}
              >
                +{(TUNED_REWARD - BASE_REWARD).toFixed(2)}
              </motion.span>
            </div>
            <NumberRoll value={reward.toFixed(2)} className="reward__value" />
            <div className="reward__bars">
              {BARS.map((h, i) => (
                <span key={i} style={{ transform: `scaleY(${h})` }} />
              ))}
              <span className="is-now" style={{ transform: `scaleY(${reward})` }} />
            </div>
            <span
              ref={(el) => (targets.current.reset = el)}
              className="reward__reset"
              data-pressed={pressed === "reset"}
            >
              <RotateCcw size={13} strokeWidth={2.2} /> New rollout
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {!reduce && (
        <motion.div
          className="stage__cursor"
          aria-hidden="true"
          style={{ x, y, opacity: cursorReady ? 1 : 0 }}
          data-pressed={pressed !== null}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
              d="M4 2.5 18 10l-6.2 1.6L9 17.8z"
              fill="currentColor"
              stroke="var(--surface)"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      )}
    </div>
  );
}
