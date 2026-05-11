import { Mail, Globe } from "lucide-react";

import Tweeter from "../../assets/tweeter.svg";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";

export function Footer() {
  return (
    <footer className="bg-[#141922] text-white mt-16">
      <div className="w-[90%] max-w-7xl mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">GameHub</h3>
          <p className="text-gray-400 text-sm">
            Your go-to place to discover, follow, and buy the best games in the
            world.
          </p>
          <div className="flex items-center gap-3 text-gray-400">
            <Mail size={16} />
            <span>contact@gamehub.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <Globe size={16} />
            <span>www.gamehub.com</span>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-green-400 transition-colors cursor-pointer">
              Home
            </li>
            <li className="hover:text-green-400 transition-colors cursor-pointer">
              Wishlist
            </li>
            <li className="hover:text-green-400 transition-colors cursor-pointer">
              Category
            </li>
            <li className="hover:text-green-400 transition-colors cursor-pointer">
              Offers
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Follow us</h4>
          <div className="flex items-center gap-4">
            {[Facebook, Tweeter, Instagram].map((icon, index) => (
              <button
                key={index}
                className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full border border-white/10 shadow-lg hover:bg-green-500/20 hover:scale-110 transition-transform duration-300"
                aria-label={`Enlace a ${index === 0 ? "Facebook" : index === 1 ? "Twitter" : "Instagram"}`}
              >
                <img src={icon} alt="" className="w-5 h-5 object-contain" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-10 py-4 text-center text-gray-500 text-sm">
        © 2026 GameHub. All rights reserved.
      </div>
    </footer>
  );
}
