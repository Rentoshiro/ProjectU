import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation("main");
  return <div className="main-page">{t("Main page")}</div>;
};

export default MainPage;
