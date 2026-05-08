import { GamesGrid } from "../components/games-grid/games-grid";
import { useParams } from "react-router";
import { Header } from "../common/header/header";
import { useGetGamesDynamic } from "../features/hooks/use-get-games-dynamic";

export function CategoryPage() {
  const { devName, genreName } = useParams();
  const { games, loading, error } = useGetGamesDynamic({
    developer: devName,
    genres: genreName,
  });

  if (loading) return <p>Loading games...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Header />
      <div className="w-[90%] max-w-7xl mx-auto py-12">
        <h1 className="text-3xl font-bold text-white mb-6">
          Juegos de {devName}
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {games.map((game) => (
            <GamesGrid
              key={game.id}
              image={game.background_image}
              name={game.name}
              rating={game.rating}
              platforms={game.platforms?.map((p) => p.platform) || []}
            />
          ))}
        </div>
      </div>
    </>
  );
}
