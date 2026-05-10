import { useState, useEffect } from "react";
import { getGamesDynamic } from "../services/get-games-dynamic";

export const useGetGamesDynamic = ({ developer, genres, page = 1, search }) => {
  const [games, setGames] = useState([]);
  const [totalGames, setTotalGames] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getGamesDynamic({ developer, genres, page, search })
      .then((data) => {
        setGames(data.results);
        setTotalGames(data.count);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [developer, genres, page, search]);

  return { games, totalGames, loading, error };
};
