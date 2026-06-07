import { create } from 'zustand';

interface UIState {
  sidebarCollapsed: boolean;
  activeModal: string | null;
  theme: "light" | "dark";
  toggleSidebar: () => void;
  openModal: (id: string) => void;
  closeModal: () => void;
  setTheme: (t: "light" | "dark") => void;
}

export const useUiStore = create<UIState>((set) => ({
  sidebarCollapsed: false,
  activeModal: null,
  theme: "light",
  toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
  openModal: (id) => set({ activeModal: id }),
  closeModal: () => set({ activeModal: null }),
  setTheme: (theme) => set({ theme }),
}));
