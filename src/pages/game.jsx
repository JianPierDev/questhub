import { useParams } from "react-router";
import { Header } from "../common/header/header";
import { useGetGamesById } from "../features/hooks/use-get-games-by-id";
import { useGetGamesScreenshots } from "../features/hooks/use-get-games-screenshots";
import { Star } from "lucide-react";

export function GamePage() {
  const { gameId } = useParams();

  const {
    game,
    loading: gameLoading,
    error: gameError,
  } = useGetGamesById(gameId);

  const {
    screenshots,
    loading: screenshotLoading,
    error: screenshotError,
  } = useGetGamesScreenshots(gameId);

  if (gameLoading || screenshotLoading) {
    return (
      <div className="min-h-screen bg-[#0F1419] text-white flex items-center justify-center">
        <p className="animate-pulse text-lg">Loading game...</p>
      </div>
    );
  }

  if (gameError || screenshotError) {
    return (
      <div className="min-h-screen bg-[#0F1419] text-red-500 flex items-center justify-center">
        <p>Hubo un error al cargar el juego.</p>
      </div>
    );
  }

  return (
    <>
      <Header />

      <main className="bg-[#0F1419] min-h-screen pb-16">
        <div className="w-[90%] max-w-7xl mx-auto pt-10">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              className="w-full h-125 object-cover"
              src={game.background_image}
              alt={game.name}
            />

            <div className="absolute inset-0 bg-linear-to-t from-[#0F1419] via-[#0F1419]/20 to-transparent" />

            <div className="absolute bottom-8 left-8 text-white">
              <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-lg">
                {game.name}
              </h1>

              <div className="flex flex-wrap gap-2 mt-4">
                {game.genres?.map((genre) => (
                  <span
                    className="bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-sm border border-white/10"
                    key={genre.id}
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
            <div className="lg:col-span-2 space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Screenshots</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {screenshots?.map((screenshot) => (
                    <img
                      className="rounded-2xl cursor-pointer hover:scale-[1.02] hover:brightness-110 transition-all duration-300 shadow-lg"
                      key={screenshot.id}
                      src={screenshot.image}
                      alt={game.name}
                    />
                  ))}
                </div>
              </section>

              <section className="bg-[#1A222B] border border-white/5 rounded-3xl p-6 shadow-xl">
                <h2 className="text-2xl font-bold text-white mb-4">
                  About the Game
                </h2>
                <p className="text-gray-300 leading-8">
                  {game.description_raw}
                </p>
              </section>
            </div>

            <aside className="h-fit sticky top-6">
              <div className="bg-[#1A222B] border border-white/5 rounded-3xl p-6 shadow-2xl text-white space-y-6">
                <div className="flex items-center gap-3 bg-yellow-400/10 text-yellow-300 px-4 py-3 rounded-2xl w-fit">
                  <Star className="fill-yellow-300 text-yellow-300" size={20} />
                  <span className="font-bold text-lg">{game.rating}</span>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Release Date</p>
                  <p className="font-semibold">{game.released || "Unknown"}</p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Metacritic</p>
                  <p className="font-semibold">{game.metacritic || "N/A"}</p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm mb-2">Platforms</p>
                  <div className="flex flex-wrap gap-2">
                    {game.platforms?.map((platform) => (
                      <span
                        className="bg-white/5 px-3 py-1 rounded-full text-sm"
                        key={platform.platform.id}
                      >
                        {platform.platform.name}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-green-500/20 cursor-pointer">
                  Buy Game
                </button>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
