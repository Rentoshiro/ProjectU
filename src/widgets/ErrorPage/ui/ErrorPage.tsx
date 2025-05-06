import React from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/className/classNames";
import { Button } from "shared/ui/Button/Button";
import cls from "./ErrorPage.module.scss";

export const ErrorPage = () => {
  const { t } = useTranslation();

  const handleBackToMainPage = () => {
    window.location.href = "/";
  };

  const handleRefreshPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.errorpage, {}, [])}>
      <h1>{t("Error happend")}</h1>
      <Button onClick={handleRefreshPage}>{t("Back to main page")}</Button>
      <Button onClick={handleRefreshPage}>{t("Refresh page")}</Button>
    </div>
  );
};
