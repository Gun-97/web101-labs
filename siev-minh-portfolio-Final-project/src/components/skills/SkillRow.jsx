export default function SkillRow({ name }) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-cyan-400/15 bg-slate-950/50 px-3 py-2 text-sm text-slate-200">
      <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,.7)]" />
      <span>{name}</span>
      <span className="text-xs text-slate-500">Intermediate</span>
    </div>
  );
}
