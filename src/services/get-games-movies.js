const RAWG_KEY = import.meta.env.VITE_RAWG_API_KEY

export const getGameMovies = async (id) => {
    const response = await fetch(`https://api.rawg.io/api/games/${id}/movies?key=${RAWG_KEY}`)

    if(!response) {
        throw new Error("An error occurred");
    }

    return response.json()
}