import axiosInstance from "@/api/axios";
import { create } from "zustand";

interface SidebarDrawState {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const useSidebarDrawState = create<SidebarDrawState>()((set) => ({
  isOpen: false,
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}));

type AuthState = {
  isAuthenticated: boolean;
  checkAuthentication: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  checkAuthentication: async () => {
    try {
      const response = await axiosInstance.get("/api/fetch-and-store-emails");
      if (response.headers["set-cookie"]) {
        set({ isAuthenticated: true });
      }
    } catch (error) {
      console.error("Authentication check failed:", error);
      set({ isAuthenticated: false });
    }
  },
}));

type SearchState = {
  q: string;
  setQ: (q: string) => void;
};

export const useSearchStore = create<SearchState>((set) => ({
  q: "",
  setQ: (q) => set({ q }),
}));
