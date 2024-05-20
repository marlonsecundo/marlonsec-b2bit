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

  const changeInFireFox = () => {
    document.documentElement.setAttribute("data-theme", userTheme);
  };

  useEffect(() => {
    if (userTheme === "light")
      document.documentElement.classList.remove("dark");
    else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  // daisy ui theme controller doest support firefox new versions
  useEffect(() => {
    changeInFireFox();
  }, [userTheme]);

  return { onThemeCheckChange, userTheme };
}
