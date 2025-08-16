import { create } from 'zustand';

interface MousePosition {
  x: number;
  y: number;
}

interface AppState {
  // Mouse tracking
  mousePosition: MousePosition;
  setMousePosition: (position: MousePosition) => void;

  // Navigation
  currentPage: string;
  setCurrentPage: (page: string) => void;

  // UI States
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;

  // Theme (for future dark/light mode)
  theme: 'dark' | 'light';
  toggleTheme: () => void;

  // Loading states
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export const useStore = create<AppState>((set) => ({
  // Mouse tracking
  mousePosition: { x: 0, y: 0 },
  setMousePosition: (position) => set({ mousePosition: position }),

  // Navigation
  currentPage: 'home',
  setCurrentPage: (page) => set({ currentPage: page }),

  // UI States
  isMenuOpen: false,
  setIsMenuOpen: (isOpen) => set({ isMenuOpen: isOpen }),

  // Theme
  theme: 'dark',
  toggleTheme: () => set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),

  // Loading states
  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
}));