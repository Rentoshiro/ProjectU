import { Link } from "react-router-dom";
import "./styles/index.scss";
import { classNames } from "shared/lib/className/classNames";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { AppRouter } from "./providers/router";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={() => toggleTheme()}>Change theme</button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <AppRouter />
    </div>
  );
};
