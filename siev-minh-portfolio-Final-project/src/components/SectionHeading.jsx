export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="reveal mx-auto max-w-2xl text-center">
      <p className="font-display text-base font-medium tracking-widest text-cyan-400">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-slate-400">{description}</p>
      )}
    </div>
  );
}
