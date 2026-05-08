import { createBrowserRouter } from "react-router";
import { Home } from "../app/home/home";
import { Category } from "../app/developer/category";
import { Game } from "../app/game/game";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/developer/:devName",
    Component: Category,
  },
  {
    path: "/genre/:genreName",
    Component: Category,
  },
  {
    path: "/game/:gameId",
    Component: Game,
  }
]);
