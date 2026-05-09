export function GamesGridSkeleton() {
  return (
    <article
      className="animate-pulse bg-[#1A222B] rounded-3xl overflow-hidden border border-white/5
      "
    >
      <div className="h-56 bg-white/5" />

      <div className="p-5 space-y-4">
        <div className="space-y-2">
          <div className="h-6 bg-white/5 rounded-xl w-3/4" />

          <div className="h-4 bg-white/5 rounded-xl w-1/2" />
        </div>

        <div className="flex gap-2">
          <div className="h-7 w-16 bg-white/5 rounded-full" />
          <div className="h-7 w-20 bg-white/5 rounded-full" />
          <div className="h-7 w-14 bg-white/5 rounded-full" />
        </div>

        <div className="h-12 bg-white/5 rounded-2xl w-full" />
      </div>
    </article>
  );
}
