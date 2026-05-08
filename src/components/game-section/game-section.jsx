import { useNavigate } from "react-router";

import { ChevronRight } from "lucide-react";

import { GamesGrid } from "../games-grid/games-grid";
import { useVisibleGames } from "../../features/hooks/use-visible-games";
import { useGetGamesDynamic } from "../../features/hooks/use-get-games-dynamic";

export function GameSection({ title, developer, genres }) {
  const { games, loading, error } = useGetGamesDynamic({
    developer,
    genres,
  });
  const visibleGames = useVisibleGames(games);
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="w-[90%] max-w-7xl mx-auto py-12">
        <p className="text-gray-400 text-center animate-pulse text-lg">
          Loading games...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-[90%] max-w-7xl mx-auto py-12">
        <p className="text-red-500 text-center">{error}</p>
      </div>
    );
  }

  return (
    <section className="w-[90%] max-w-7xl mx-auto pt-14">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-4xl font-extrabold text-white tracking-tight">
            {title}
          </h2>

          <div className="w-20 h-1 bg-green-500 rounded-full mt-3" />
        </div>

        <button
          className="flex items-center gap-2 text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5 px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer"
          onClick={() =>
            navigate(developer ? `/developer/${developer}` : `/genre/${genres}`)
          }
        >
          See more
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7">
        {visibleGames.map((game) => (
          <div
            className="cursor-pointer"
            key={game.id}
            onClick={() => navigate(`/game/${game.id}`)}
          >
            <GamesGrid
              image={game.background_image}
              name={game.name}
              rating={game.rating}
              released={game.released}
              platforms={game.platforms?.map((p) => p.platform) || []}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
