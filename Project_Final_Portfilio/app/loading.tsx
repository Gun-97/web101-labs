export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0b1120]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-cyan-400/20 border-t-cyan-400" />
        <p className="font-display text-sm tracking-widest text-slate-500">
          LOADING
        </p>
      </div>
    </div>
  );
}
