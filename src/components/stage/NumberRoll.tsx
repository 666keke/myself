const DIGITS = "0123456789";

/**
 * Renders a number where only the digits that change roll; static glyphs (".", ",") stay put.
 * Columns are keyed from the right so a growing value doesn't re-roll existing digits.
 */
export default function NumberRoll({ value, className }: { value: string; className?: string }) {
  const chars = value.split("");

  return (
    <span className={`roll ${className ?? ""}`} aria-label={value} role="img">
      {chars.map((char, index) => {
        const key = chars.length - index;
        const digit = DIGITS.indexOf(char);
        if (digit === -1) {
          return (
            <span key={key} className="roll__static" aria-hidden="true">
              {char}
            </span>
          );
        }
        return (
          <span key={key} className="roll__col" aria-hidden="true">
            <span className="roll__strip" style={{ transform: `translateY(${-digit * 10}%)` }}>
              {DIGITS.split("").map((d) => (
                <span key={d}>{d}</span>
              ))}
            </span>
          </span>
        );
      })}
    </span>
  );
}
