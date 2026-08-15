export default function BlobBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-600/25 blur-[100px] animate-blob" />
      <div
        className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-[100px] animate-blob"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-blue-500/15 blur-[100px] animate-blob"
        style={{ animationDelay: "8s" }}
      />
    </div>
  );
}
