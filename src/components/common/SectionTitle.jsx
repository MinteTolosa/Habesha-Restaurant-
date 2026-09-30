export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="section-kicker">{eyebrow}</p>}
      <h2 className="mt-2 font-display text-h2 font-bold leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 leading-7 text-muted">{description}</p>
      )}
    </div>
  );
}