import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      hydrated: false,

      setToken: (token) => set({ token }),

      logout: () => set({ token: null }),

      setHydrated: (state) => set({ hydrated: state }),
    }),
    {
      name: "auth-store",

      onRehydrateStorage: () => (state) => {
        state.setHydrated(true);
      },
    },
  ),
);
