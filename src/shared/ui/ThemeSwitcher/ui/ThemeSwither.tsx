import { classNames } from "shared/lib/className/classNames";
import cls from "./ThemeSwitcher.module.scss";
import { useTheme, Theme } from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Button } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      theme="clear"
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? (
        <LightIcon className={cls.icon} />
      ) : (
        <DarkIcon className={cls.icon} />
      )}
    </Button>
  );
};
