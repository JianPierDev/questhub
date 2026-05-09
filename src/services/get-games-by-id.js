const RAWG_KEY = import.meta.env.VITE_RAWG_API_KEY;

export const getGamesById = async (id) => {
  const response = await fetch(
    `https://api.rawg.io/api/games/${id}?key=${RAWG_KEY}`
  );

  if(!response.ok) {
    throw new Error("An error occurred");
  }

  return response.json()
};
