import { useEffect, useState } from "react";

export function useController() {
  const [userTheme, setUserTheme] = useState(
    localStorage.getItem("theme") ?? "light"
  );

  const onThemeCheckChange = (checked: boolean) => {
    if (checked) {
      setUserTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      return;
    }

    setUserTheme("dark");
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
  };

  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  return { onThemeCheckChange, userTheme };
}
