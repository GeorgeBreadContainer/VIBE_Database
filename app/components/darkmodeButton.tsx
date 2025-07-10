import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="px-4 py-2 mt-4 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white transition"
    >
      Toggle {isDark ? "Light" : "Dark"} Mode
    </button>
  );
}
