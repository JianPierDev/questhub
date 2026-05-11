import { useAuth } from "../../features/auth/hooks/use-auth";
import { User } from "lucide-react";
import Logotipe from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router";
import Avatar from "../../assets/cat.jpg"; // foto por defecto

export function Header() {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="bg-[#141922] py-4 sticky top-0 z-50">
      <div className="w-[90%] max-w-7xl mx-auto text-white">
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
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
              <>
                <button
                  onClick={() => navigate("/wishlist")}
                  className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-500 shadow-lg hover:scale-105 transition-transform"
                >
                  <img
                    src={user?.avatar || Avatar}
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                  />
                </button>

                <button
                  onClick={logout}
                  className="text-sm hover:text-red-400 transition cursor-pointer"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition">
                  <span className="text-white">
                    <User />
                  </span>
                </div>
              </Link>
            )}

          </div>
        </div>
      </div>
    </header>
  );
}