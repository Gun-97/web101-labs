import SkillRow from "./SkillRow";

export default function SkillCategoryCard({ category }) {
  const Icon = category.icon;

  return (
    <div className="glass reveal group relative overflow-hidden rounded-[24px] border border-cyan-400/15 p-5 transition duration-300 hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-violet-500/10" />

      <div className="relative">
        {/* Category header */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-white">
              {category.title}
            </h3>
            <p className="mt-1 text-sm leading-6 text-slate-400">
              {category.description}
            </p>
          </div>
        </div>

        {/* Skills list */}
        <div className="mt-5 flex flex-wrap gap-2.5">
          {category.skills.map((s) => (
            <SkillRow key={s} name={s} />
          ))}
        </div>
      </div>
    </div>
  );
}
