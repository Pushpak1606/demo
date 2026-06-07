import { create } from 'zustand';

interface AuthState {
  accessToken: string | null;
  role: "patient" | "doctor" | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  setAuth: (token: string, role: "patient" | "doctor") => void;
  clearAuth: () => void;
  refreshToken: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  role: null,
  isAuthenticated: false,
  isLoading: true,

  setAuth: (token, role) =>
    set({ accessToken: token, role, isAuthenticated: true, isLoading: false }),

  clearAuth: () =>
    set({ accessToken: null, role: null, isAuthenticated: false }),

  refreshToken: async () => {
    try {
      const res = await fetch("/api/auth/refresh", { method: "POST" });
      if (!res.ok) throw new Error("Refresh failed");
      const { accessToken, role } = await res.json();
      set({ accessToken, role, isAuthenticated: true });
    } catch {
      set({ accessToken: null, role: null, isAuthenticated: false });
    }
  },
}));
