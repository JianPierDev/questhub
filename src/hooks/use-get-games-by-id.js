import { useEffect, useState } from "react";
import { getGamesById } from "../services/get-games-by-id";

export const useGetGamesById = (id) => {
  const [game, setGame] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getGamesById(id)
      .then(data => setGame(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [id]);

  return { game, loading, error }
};
