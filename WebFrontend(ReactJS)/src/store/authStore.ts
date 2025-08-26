import { create } from 'zustand';

type User = {
  id: string;
  email: string;
  name?: string;
};

type AuthState = {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
};

const persisted = sessionStorage.getItem('authStore');
const initial = persisted ? JSON.parse(persisted) as Partial<AuthState> : {};

export const useAuthStore = create<AuthState>((set, get) => ({
  isAuthenticated: initial.isAuthenticated ?? false,
  user: initial.user ?? null,
  token: initial.token ?? null,
  login: (user, token) => {
    set({ isAuthenticated: true, user, token });
    sessionStorage.setItem('authStore', JSON.stringify({ isAuthenticated: true, user, token }));
  },
  logout: () => {
    set({ isAuthenticated: false, user: null, token: null });
    sessionStorage.removeItem('authStore');
  }
}));
