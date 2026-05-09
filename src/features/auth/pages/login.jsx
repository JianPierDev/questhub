import { Mail, Lock, Gamepad2 } from "lucide-react";
import { useAuth } from "../hooks/use-auth";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation()

  const from = location.state?.from || "/"

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login({ username: form.username, password: form.password });
      navigate(from, {replace: true});
    } catch {
      alert("Username or password are incorrects");
    }
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center px-8 sm:px-6 bg-linear-to-br from-[#0F1419] via-[#131C24] to-[#0b2a1f] overflow-hidden relative">
      <section className="z-10 w-full max-w-md bg-[#1A222B]/90 backdrop-blur-2xl border border-white/10 rounded-4xl shadow-2xl shadow-black/40 p-6 sm:p-8 md:p-10">
        <div className="flex flex-col items-center mb-8 sm:mb-10">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-[1.8rem] bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-5">
            <Gamepad2 size={42} className="text-green-400" />
          </div>

          <h1 className="text-white font-black text-3xl sm:text-4xl text-center">
            Welcome Back
          </h1>

          <p className="text-gray-400 text-sm sm:text-base text-center mt-3 max-w-xs">
            Inicia sesión para seguir explorando tus juegos favoritos
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm text-gray-300 mb-2 block">Usuario</label>

            <div className="flex items-center gap-3 bg-[#0F1419] border border-white/5 focus-within:border-green-500/40 rounded-2xl px-4 py-3.5 transition-all">
              <Mail size={18} className="text-gray-500 shrink-0" />

              <input
                className="w-full bg-transparent outline-none text-white placeholder:text-gray-500 text-sm sm:text-base"
                type="text"
                placeholder="example@email.com"
                autoComplete="username"
                onChange={(e) => setForm({ ...form, username: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Contraseña
            </label>

            <div className="flex items-center gap-3 bg-[#0F1419] border border-white/5 focus-within:border-green-500/40 rounded-2xl px-4 py-3.5 transition-all">
              <Lock size={18} className="text-gray-500 shrink-0" />

              <input
                className="w-full bg-transparent outline-none text-white placeholder:text-gray-500 text-sm sm:text-base"
                type="password"
                placeholder="•••••••••"
                autoComplete="current-password"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-row items-center justify-between gap-3 text-sm">
            <label className="flex items-center gap-2 text-gray-400">
              <input className="accent-green-500" type="checkbox" />
              Recuérdame
            </label>

            <button
              className="text-green-400 hover:text-green-300 transition-colors text-left sm:text-right"
              type="submit"
            >
              Forgot password?
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-400 active:scale-[0.98] text-black font-bold py-3.5 rounded-2xl transition-all duration-300 mt-2 cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Social */}
        <div className="flex items-center gap-4 my-7">
          <div className="h-px bg-white/10 w-full" />

          <span className="text-gray-500 text-xs sm:text-sm">OR</span>

          <div className="h-px bg-white/10 w-full" />
        </div>

        <div className="space-y-3">
          <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white py-3 rounded-2xl transition-all duration-300 text-sm sm:text-base cursor-pointer">
            Continue with Google
          </button>
        </div>

        {/* Footer */}
        <p className="flex justify-center gap-2 text-gray-500 text-sm mt-8">
          ¿No tienes cuenta?
          <span className="text-green-400 hover:text-green-300 cursor-pointer transition-colors">
            Regístrate
          </span>
        </p>
      </section>
    </main>
  );
}
