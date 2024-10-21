import axiosInstance from "@/lib/utils";
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
      const response = await axiosInstance.get("/api/email-metadata");
      if (response.headers["set-cookie"]) {
        set({ isAuthenticated: true });
      }
    } catch (error) {
      console.error("Authentication check failed:", error);
      set({ isAuthenticated: false });
    }
  },
}));
