import { GamesGridSkeleton } from "./games-grid-skeleton";

export function GameSectionSkeleton() {
  return (
    <section className="w-[90%] max-w-7xl mx-auto pt-14 animate-pulse">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="h-10 w-52 bg-white/5 rounded-xl" />

          <div className="w-20 h-1 bg-white/5 rounded-full mt-3" />
        </div>

        <div className="h-11 w-32 bg-white/5 rounded-xl" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7">
        {Array.from({ length: 4 }).map((_, index) => (
          <GamesGridSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}
