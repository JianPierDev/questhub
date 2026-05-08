import { useState, useEffect } from "react";
import { getGamesDynamic } from "../services/get-games-dynamic";

export const useGetGamesDynamic = ({ developer, genres, page_size }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getGamesDynamic({ developer, genres, page_size })
      .then((data) => setGames(data.results))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [developer, genres, page_size]);

  return { games, loading, error };
};
