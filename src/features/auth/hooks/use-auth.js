import { loginService } from "../services/auth-service";
import { useAuthStore } from "../store/auth-store";

export const useAuth = () => {
  const { token, setToken, logout, hydrated } = useAuthStore();

  const login = async ({ username, password }) => {
    const newToken = await loginService({
      username,
      password,
    });

    setToken(newToken);
  };

  return {
    token,
    hydrated,
    login,
    logout,
    isAuthenticated: !!token,
  };
};
