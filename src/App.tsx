import { Routes, Route, Link } from "react-router-dom";
import { Counter } from "./components/Counter";
import "./index.scss";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { Suspense } from "react";

export const App = () => {
  return (
    <div className="app">
      <Link to={"/about"}>Main</Link>
      <Link to={"/main"}>About</Link>
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
