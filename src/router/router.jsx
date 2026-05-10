import { createBrowserRouter } from "react-router";

import { Home } from "../app/home/home";
import { Game } from "../app/game/game";
import { Login } from "../app/login/login";
import { RouterLayout } from "./router-layout";
import { Category } from "../app/developer/category";
import { WishList } from "../app/wish-list/wish-list";
import { ProtectedRoute } from "../features/auth/components/protected-route";

export const router = createBrowserRouter([
  {
    Component: RouterLayout,
    children: [
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
        path: "/search",
        Component: Category,
      },
      {
        path: "/game/:gameId",
        Component: Game,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        Component: ProtectedRoute,
        children: [
          {
            path: "/wishlist",
            Component: WishList,
          },
        ],
      },
    ],
  },
]);
