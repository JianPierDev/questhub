import { useAuth } from "../../features/auth/hooks/use-auth"
import { Menu, Search, ShoppingCart, User } from "lucide-react";
import Logotipe from "../../assets/logo.svg";
import { Link } from "react-router";

export function Header() {
  const { isAuthenticated, logout } = useAuth();
  return (
    <header className="bg-[#141922] py-4 sticky top-0 z-50">
      <div className="w-[90%] max-w-7xl mx-auto text-white">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-[1fr_3fr_1fr]">
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

          <div className="flex justify-end items-center gap-4 md:col-start-3">
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

          <div className="col-span-full flex items-center gap-2 border border-slate-600 rounded-lg px-3 py-2 bg-slate-700 md:row-start-1 md:col-start-2 md:col-end-3">
            <Search />
            <input
              className="w-full bg-transparent text-white placeholder-slate-400 focus:outline-none"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    </header>
  );
}
