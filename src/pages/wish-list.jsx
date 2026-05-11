import { Header } from "../common/header/header";
import { Heart, Mail, Globe, Gamepad2, Star, Trophy } from "lucide-react";
import Avatar from "../assets/cat.jpg"

export function WishListPage() {
  const wishlist = [
    {
      id: 326243,
      name: "Elden Ring",
      image: "https://media.rawg.io/media/games/b29/b294fdd866dcdb643e7bab370a552855.jpg",
      genre: "Souls-like",
      rating: 4.9,
    },
    {
      id: 2,
      name: "God of War: Ascension",
      image: "https://media.rawg.io/media/games/c13/c13815d4923dc9778ff959985ad4dd43.jpg",
      genre: "Action",
      rating: 3.84,
    },  
  ];
  return (
    <>
      <Header />
      <main className="text-white px-4 sm:px-6 lg:px-8 py-8">
        <div className="w-[90%] max-w-7xl mx-auto">
          <section className="bg-[#1A222B]/90 backdrop-blur-xl border border-white/10 rounded-4xl p-6 sm:p-8 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-2xl shadow-black/30">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-green-500/40 shadow-lg shadow-green-500/20">
                <img
                  src={Avatar}
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center sm:text-left">
                <h1 className="text-3xl font-black">Don Romer</h1>

                <div className="space-y-2 mt-3">
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-400">
                    <Mail size={16} />
                    <span>don@gmail.com</span>
                  </div>

                  <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-400">
                    <Globe size={16} />
                    <span>Perú</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT STATS */}
            <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
              <div className="bg-white/5 border border-white/5 rounded-3xl p-5 text-center min-w-35">
                <Gamepad2 className="mx-auto text-green-400 mb-2" size={24} />

                <h3 className="text-2xl font-black">124</h3>

                <p className="text-gray-400 text-sm">Juegos</p>
              </div>

              <div className="bg-white/5 border border-white/5 rounded-3xl p-5 text-center min-w-35">
                <Trophy className="mx-auto text-yellow-400 mb-2" size={24} />

                <h3 className="text-2xl font-black">37</h3>

                <p className="text-gray-400 text-sm">Logros</p>
              </div>
            </div>
          </section>

          {/* WISHLIST */}
          <section className="mt-10">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="text-green-400" />

              <h2 className="text-2xl sm:text-3xl font-black">
                Lista de deseos
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {wishlist.map((game) => (
                <article
                  key={game.id}
                  className="group bg-[#1A222B] rounded-3xl overflow-hidden border border-white/5 hover:border-green-500/20 transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={game.image}
                      alt={game.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-[#0F1419] via-transparent to-transparent" />

                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
                      <Star
                        className="fill-yellow-300 text-yellow-300"
                        size={14}
                      />

                      <span className="text-sm font-semibold">
                        {game.rating}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold group-hover:text-green-400 transition-colors">
                      {game.name}
                    </h3>

                    <p className="text-gray-400 mt-1">{game.genre}</p>

                    <button className="w-full mt-5 bg-green-500/10 hover:bg-green-500 text-green-400 hover:text-black font-semibold py-3 rounded-2xl transition-all duration-300">
                      Comprar juego
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
