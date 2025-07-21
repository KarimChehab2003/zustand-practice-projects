import { create } from "zustand";

interface ThemeStore {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  isDarkTheme: false,
  toggleTheme: () => set((state) => ({ isDarkTheme: !state.isDarkTheme })),
}));

export const selectTheme = (state: ThemeStore) => state.isDarkTheme;
export const selectToggleTheme = (state: ThemeStore) => state.toggleTheme;
