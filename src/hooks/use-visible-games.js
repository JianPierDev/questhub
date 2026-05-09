import { useWindowWidth } from "./use-window-with";

export function useVisibleGames(games) {
  const width = useWindowWidth();

  if (!games) return [];

  if (width < 768) return games.slice(0, 4);       // mobile
  if (width < 1280) return games.slice(0, 3);      // tablet
  return games.slice(0, 4);                        // desktop
}