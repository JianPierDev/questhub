import { useEffect, useState } from "react"
import { getGameMovies } from "../services/get-games-movies"

export const useGetGamesMovies = (id) => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] =  useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getGameMovies(id)
            .then(data => setMovies(data.results))
            .catch(error => setError(error.message))
            .finally(() => setLoading(false))
    }, [id])

    return {movies, loading, error}
}