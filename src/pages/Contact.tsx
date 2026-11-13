import { useState, type ChangeEvent, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, ArrowUpRight, Check, Copy, Send } from "lucide-react";
import PageHead from "@/components/PageHead";
import { Reveal, RevealItem } from "@/components/Reveal";
import { contactChannels, profile } from "@/content/site";
import { supabase } from "@/lib/supabase";
import { ease, softSpring } from "@/lib/motion";

const empty = { name: "", email: "", subject: "", message: "" };
type Status = { type: "idle" | "loading" | "success" | "error"; message: string };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });
  const [copied, setCopied] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "" });
    const { error } = await supabase.from("contact_messages").insert([form]);
    if (error) {
      console.error("Error sending message:", error);
      setStatus({ type: "error", message: `Message failed to send. ${error.message}` });
      return;
    }
    setStatus({ type: "success", message: "Sent. I’ll get back to you soon." });
    setForm(empty);
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  const loading = status.type === "loading";

  return (
    <>
      <PageHead eyebrow="Contact" title="Let’s make something useful.">
        <p className="lede">Open to research collaborations, product roles, and thoughtful conversations.</p>
      </PageHead>

      <section className="wrap section contact">
        <Reveal className="contact__side">
          <RevealItem className="email-card">
            <span className="mono">Fastest</span>
            <a href={`mailto:${profile.email}`} className="email-card__addr">{profile.email}</a>
            <button type="button" className="btn btn-line email-card__copy" onClick={copyEmail} aria-live="polite">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={copied ? "y" : "n"}
                  className="inline-flex items-center gap-2"
                  initial={{ opacity: 0, y: 8, filter: "blur(3px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -8, filter: "blur(3px)" }}
                  transition={{ duration: 0.22, ease: ease.out }}
                >
                  {copied ? <Check size={15} /> : <Copy size={15} />} {copied ? "Copied" : "Copy address"}
                </motion.span>
              </AnimatePresence>
            </button>
          </RevealItem>
          <RevealItem className="channels">
            {contactChannels.filter((c) => c.label !== "Email").map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="channels__row">
                <span className="mono">{c.label}</span>
                <span>{c.value}</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ))}
            <a href={profile.github} target="_blank" rel="noreferrer" className="channels__row">
              <span className="mono">GitHub</span>
              <span>666keke</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </RevealItem>
          <RevealItem as="p" className="body">Based in Beijing; moving to Toronto in Fall 2026. Remote-friendly now.</RevealItem>
        </Reveal>

        <motion.form
          onSubmit={onSubmit}
          className="form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: ease.expo, delay: 0.2 }}
        >
          <div className="form__pair">
            <label className="field">
              <input name="name" value={form.name} onChange={onChange} required placeholder=" " autoComplete="name" />
              <span>Name</span>
            </label>
            <label className="field">
              <input type="email" name="email" value={form.email} onChange={onChange} required placeholder=" " autoComplete="email" />
              <span>Email</span>
            </label>
          </div>
          <label className="field">
            <input name="subject" value={form.subject} onChange={onChange} required placeholder=" " />
            <span>Subject</span>
          </label>
          <label className="field">
            <textarea name="message" value={form.message} onChange={onChange} required rows={7} placeholder=" " />
            <span>Message</span>
          </label>

          <div className="form__foot">
            <AnimatePresence mode="wait">
              {(status.type === "success" || status.type === "error") && (
                <motion.p
                  key={status.type}
                  role="status"
                  className={`form__status is-${status.type}`}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: ease.out }}
                >
                  {status.type === "success" ? <Check size={15} /> : <AlertCircle size={15} />} {status.message}
                </motion.p>
              )}
            </AnimatePresence>
            <motion.button type="submit" disabled={loading} className="btn btn-solid form__send" layout transition={softSpring}>
              {loading ? <span className="win__spin form__spin" aria-hidden="true" /> : <Send size={15} />}
              {loading ? "Sending…" : "Send message"}
            </motion.button>
          </div>
        </motion.form>
      </section>
    </>
  );
}
