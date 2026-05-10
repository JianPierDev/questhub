import { useAuth } from "../../features/auth/hooks/use-auth";
import { Menu, ShoppingCart, User } from "lucide-react";
import Logotipe from "../../assets/logo.svg";
import { Link } from "react-router";

export function Header() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-[#141922] py-4 sticky top-0 z-50">
      <div className="w-[90%] max-w-7xl mx-auto text-white">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Menu className="cursor-pointer hover:text-slate-300" />
            <Link to={"/"}>
              <img
                className="w-full object-contain"
                src={Logotipe}
                alt="logotipe"
              />
            </Link>
          </div>

          <div className="flex justify-end items-center gap-4">
            {isAuthenticated ? (
              <button
                onClick={logout}
                className="text-sm hover:text-red-400 transition cursor-pointer"
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <User className="cursor-pointer hover:text-slate-300" />
              </Link>
            )}
            <ShoppingCart className="cursor-pointer hover:text-slate-300" />
          </div>
        </div>
      </div>
    </header>
  );
}
