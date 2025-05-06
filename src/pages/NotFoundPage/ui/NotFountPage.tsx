import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/className/classNames";
import cls from "./NotFoundPage.module.scss";

interface NotFountPage {
  className?: string;
}

export const NotFountPage = ({ className }: NotFountPage) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.notfoundpage, {}, [className])}>
      <h1>{t("PageNotFound")}</h1>
    </div>
  );
};
