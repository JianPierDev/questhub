import { Heart, Star } from "lucide-react";
import { useNavigate } from "react-router";
import { useAuth } from "../../features/auth/hooks/use-auth";

export function GamesGrid({
  id,
  image,
  name,
  rating,
  platforms = [],
  released,
}) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  return (
    <article
      className="group bg-[#1A222B] rounded-3xl overflow-hidden border border-white/5 hover:border-green-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40"
      onClick={() => navigate(`/game/${id}`)}
    >
      <div className="relative overflow-hidden h-56">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          src={image}
          alt={name}
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#0F1419] via-transparent to-transparent" />

        <div className=" absolute top-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full text-yellow-300 border border-white/10">
          <Star className="fill-yellow-300 text-yellow-300" size={14} />

          <span className="text-sm font-semibold">{rating}</span>
        </div>
        <button
          className="group/heart absolute bg-white bottom-4 right-4 backdrop-blur-md p-2 rounded border border-white/10 shadow-lg hover:shadow-red-500/20"
          onClick={(e) => {
            e.stopPropagation();

            if (!isAuthenticated) {
              navigate("/login", {
                state: {
                  from: "/wishlist",
                },
              });

              return;
            }

            navigate("/wishlist");
          }}
        >
          <Heart
            className="text-black group-hover/heart:text-red-500 transition-colors"
            size={14}
          />
        </button>
      </div>

      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-white text-xl font-bold line-clamp-1 group-hover:text-green-400 transition-colors duration-300">
            {name}
          </h3>

          <p className="text-gray-500 text-sm mt-1">
            {released || "Unknown release"}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {platforms.slice(0, 3).map((platform) => (
            <span
              key={platform.id}
              className="bg-white/5 text-gray-300 text-xs px-3 py-1 rounded-full border border-white/5"
            >
              {platform.name}
            </span>
          ))}
        </div>

        <button className="w-full mt-2 bg-green-500/10 hover:bg-green-500 text-green-400 hover:text-black font-semibold py-3 rounded-2xl transition-all duration-300 cursor-pointer">
          Buy Now
        </button>
      </div>
    </article>
  );
}
