import "./styles/index.scss";
import { classNames } from "shared/lib/className/classNames";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar/Sidebar";
import { Suspense, useEffect } from "react";
import { AppRouter } from "./providers/router";

export function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}
