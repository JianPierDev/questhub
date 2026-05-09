import { createBrowserRouter } from "react-router";

import { Home } from "../app/home/home";
import { Game } from "../app/game/game";
import { Login } from "../app/login/login";
import { Category } from "../app/developer/category";
import { ProtectedRoute } from "../features/auth/components/protected-route";
import { WishList } from "../app/wish-list/wish-list";

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
      }
    ]
  }
]);
