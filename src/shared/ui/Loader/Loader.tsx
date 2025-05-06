import cls from "./Loader.module.scss";
import { classNames } from "shared/lib/className/classNames";

interface LoaderProps {
  className?: string;
}
export const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={classNames(cls.ldsripple, {}, [className])}>
      <div></div>
      <div></div>
    </div>
  );
};
