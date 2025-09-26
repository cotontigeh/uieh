import { useTheme } from "uieh/hooks";

export const Theme = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <div onClick={toggleTheme} className="cursor-pointer">
      <span className={theme === "dark" ? "font-bold" : undefined}>Dark</span>/
      <span className={theme === "light" ? "font-bold" : undefined}>Light</span>
    </div>
  );
};
