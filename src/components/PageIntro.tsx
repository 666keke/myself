interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function PageIntro({
  eyebrow,
  title,
  description,
}: PageIntroProps) {
  return (
    <div className="max-w-4xl">
      <span className="kicker">{eyebrow}</span>
      <h1 className="section-title mt-6 text-[color:var(--ink)]">{title}</h1>
      <p className="body-large mt-6 max-w-3xl">{description}</p>
    </div>
  );
}
