export default function SectionHeading({
  eyebrow,
  title,
  desc,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <div className="text-xs font-semibold tracking-[0.18em] text-white/60">
          {eyebrow.toUpperCase()}
        </div>
      )}
      <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {desc && <p className="mt-3 max-w-2xl text-white/70">{desc}</p>}
    </div>
  );
}