import "./styles/index.scss";
import { classNames } from "shared/lib/className/classNames";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={() => toggleTheme()}>Change theme</button>
    </div>
  );
};
