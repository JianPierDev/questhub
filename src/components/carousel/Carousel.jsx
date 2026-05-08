import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon, Star } from "lucide-react";
import { listGames } from "./data/initial-data";

export function Carousel() {
  const [currentSlice, setCurrentSlice] = useState(0);

  const game = listGames[currentSlice];

  const handleNext = () => {
    setCurrentSlice((prev) => (prev + 1) % listGames.length);
  };

  const handlePrev = () => {
    setCurrentSlice((prev) => (prev === 0 ? listGames.length - 1 : prev - 1));
  };

  return (
    <section className="relative bg-[#0F1419] pt-16">
      <div className="relative w-[90%] max-w-7xl mx-auto">
        <div className="grid gap-8 xl:grid-cols-[2fr_1fr] items-start">
          <div className="relative rounded-xl overflow-hidden border border-slate-700 shadow-lg">
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition cursor-pointer hidden md:flex"
              onClick={handlePrev}
            >
              <ArrowLeftIcon size={24} />
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition cursor-pointer hidden md:flex"
              onClick={handleNext}
            >
              <ArrowRightIcon size={24} />
            </button>
            <img
              className="w-full h-64 object-cover object-center md:h-96 lg:h-125"
              src={game.background_image}
              alt={game.name}
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 p-4">
              <div className="absolute bottom-0 left-0 p-4 xl:hidden">
                <h3 className="text-2xl font-bold text-white md:text-3xl">
                  {game.name}
                </h3>
                <p className="flex items-center gap-1 text-yellow-300">
                  <Star className="fill-yellow-300" size={18} /> {game.rating}
                </p>
              </div>
            </div>
          </div>

          <div className="h-full flex flex-col justify-center gap-4">
            <div className="hidden xl:flex xl:flex-col">
              <h3 className="text-3xl font-bold text-white">{game.name}</h3>
              <div className="flex items-center gap-2 text-yellow-300">
                <Star className="fill-yellow-300" size={20} />
                <p>{game.rating}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 md:gap-4 xl:grid-cols-2">
              {game.screenshots?.map((screenshot, index) => (
                <img
                  className="w-full h-30 md:h-40 rounded-xl object-cover"
                  key={index}
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                />
              ))}
            </div>
            <span className="text-lg text-slate-400 font-medium">
              Lo más vendido
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
