import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
  switchable: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = "theme";

interface ThemeProviderProps {
  children: React.ReactNode;
  /** Used when the visitor has expressed no preference and the OS says nothing. */
  defaultTheme?: Theme;
  /** When false the theme is pinned and the toggle hides itself. */
  switchable?: boolean;
}

function readStored(): Theme | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "light" || v === "dark" ? v : null;
  } catch {
    return null;
  }
}

function systemTheme(): Theme | null {
  try {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
    if (window.matchMedia("(prefers-color-scheme: light)").matches) return "light";
  } catch {
    /* matchMedia unavailable */
  }
  return null;
}

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  switchable = true,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (!switchable) return defaultTheme;
    return readStored() ?? systemTheme() ?? defaultTheme;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    if (!switchable) return;
    // Follow the OS, but only while the visitor has made no explicit choice.
    if (readStored()) return;
    let mq: MediaQueryList;
    try {
      mq = window.matchMedia("(prefers-color-scheme: dark)");
    } catch {
      return;
    }
    const onChange = (e: MediaQueryListEvent) => {
      if (!readStored()) setThemeState(e.matches ? "dark" : "light");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [switchable]);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    if (switchable) {
      try {
        localStorage.setItem(STORAGE_KEY, t);
      } catch {
        /* storage unavailable — the choice just will not persist */
      }
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
        switchable,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
