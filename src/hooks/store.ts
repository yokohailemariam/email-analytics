import { create } from "zustand";

interface SidebarDrawState {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const useSidebarDrawState = create<SidebarDrawState>()((set) => ({
  isOpen: false,
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}));
