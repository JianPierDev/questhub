const RAWG_KEY = import.meta.env.VITE_RAWG_API_KEY;

export const getGamesScreenshots = async (id) => {
  const response = await fetch(
    `https://api.rawg.io/api/games/${id}/screenshots?key=${RAWG_KEY}`
  );

  if(!response.ok) {
    throw new Error("An error occurred");
  }

  return response.json()
};
