const RAWG_KEY = import.meta.env.VITE_RAWG_API_KEY;

export const getGamesDynamic = async ({
  developer,
  genres,
  page_size = 12,
  page,
  search,
}) => {
  let url = `https://api.rawg.io/api/games?key=${RAWG_KEY}&page_size=${page_size}`;

  if (developer) url += `&developers=${developer}`;
  if (genres) url += `&genres=${genres}`;
  if (page) url += `&page=${page}`;
  if (search) url += `&search=${search}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("An error occurred while fetching games");
  }

  return response.json();
};
