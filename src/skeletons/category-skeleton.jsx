
import { Header } from "../common/header/header";
import { GamesGridSkeleton } from "./games-grid-skeleton";

export function CategorySkeleton() {
  return (
    <>
      <Header />

      <section className="w-[90%] max-w-7xl mx-auto py-12 animate-pulse">

        <div className="h-10 w-72 bg-white/5 rounded-2xl mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7">
          {Array.from({ length: 12 }).map((_, index) => (
            <GamesGridSkeleton key={index} />
          ))}
        </div>
      </section>
    </>
  );
}
