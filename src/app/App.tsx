import { Routes, Route, Link } from "react-router-dom";
import "./styles/index.scss";
import { Suspense } from "react";
import { classNames } from "shared/lib/className/classNames";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to={"/about"}>Main</Link>
      <Link to={"/main"}>About</Link>
      <button onClick={() => toggleTheme()}>Change theme</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Suspense>
    </div>
  );
};
