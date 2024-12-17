import { useTheme } from "@nextui-org/use-theme";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [darkMode, setDarkMode] = useState(theme === "dark");

  useEffect(() => {
    setDarkMode(theme === "dark");
  }, [theme]);

  const toggleDarkMode = () => {
    const newTheme = darkMode ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`
        w-16 h-8 rounded-full p-1 transition-colors duration-200 ease-in-out
        ${darkMode ? "bg-indigo-600" : "bg-gray-300"}
      `}
      aria-label="Toggle dark mode"
    >
      <div
        className={`
          w-6 h-6 rounded-full transition-transform duration-200 ease-in-out flex items-center justify-center
          ${darkMode ? "translate-x-8 bg-white" : "translate-x-0 bg-white"}
        `}
      >
        {darkMode ? (
          <Moon className="h-4 w-4 text-indigo-600" />
        ) : (
          <Sun className="h-4 w-4 text-yellow-500" />
        )}
      </div>
    </button>
  );
};
