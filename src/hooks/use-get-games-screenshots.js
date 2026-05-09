import { useState, useEffect } from "react";
import { getGamesScreenshots } from "../services/get-games-screenshots";

export const useGetGamesScreenshots = (id) => {
  const [screenshots, setScreenshots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getGamesScreenshots(id)
      .then((data) => setScreenshots(data.results))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [id]);

  return { screenshots, loading, error };
};
