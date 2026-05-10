import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";

import { Header } from "../common/header/header";
import { GamesGrid } from "../components/games-grid/games-grid";
import { Pagination } from "../components/pagination/pagination";
import { CategorySkeleton } from "../skeletons/category-skeleton";
import { useGetGamesDynamic } from "../hooks/use-get-games-dynamic";

export function CategoryPage() {
  const { devName, genreName } = useParams();
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const page = Number(searchParams.get("page")) || 1;

  const { games, totalGames, loading, error } = useGetGamesDynamic({
    developer: devName,
    genres: genreName,
    page,
  });

  const totalPages = Math.min(Math.ceil(totalGames / 10), 5);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);

    return () => clearTimeout(handler);
  }, [searchTerm]);

  const filteredGames = debouncedSearch
    ? games.filter((game) =>
        game.name.toLowerCase().includes(debouncedSearch.toLowerCase()),
      )
    : games;

  if (loading) return <CategorySkeleton />;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <>
      <Header />
      <div className="w-[90%] max-w-7xl mx-auto py-12">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">
            Juegos de {devName || genreName}
          </h1>
          <Pagination page={page} totalPages={totalPages} />
        </div>

        <div className="w-full mb-6">
          <input
            type="text"
            placeholder="Buscar en esta categoría..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#1A222B] text-white placeholder-gray-400 focus:outline-none border border-white/10"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
            <GamesGrid
              key={game.id}
              id={game.id}
              image={game.background_image}
              name={game.name}
              rating={game.rating}
              platforms={
                game.platforms?.map((platform) => platform.platform) || []
              }
            />
          ))}
        </div>
      </div>
    </>
  );
}
