import { Routes, Route, Link } from "react-router-dom";
import { Counter } from "./components/Counter";
import "./styles/index.scss";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { Suspense, useState } from "react";
import { useTheme } from "./theme/useTheme";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Link to={"/about"}>Main</Link>
      <Link to={"/main"}>About</Link>
      <button onClick={() => toggleTheme()}>Change theme</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Suspense>
    </div>
  );
};
