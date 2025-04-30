import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation("about"); // Specify the namespace if needed
  return (
    <div>
      <h1>{t("About page")}</h1>
    </div>
  );
};

export default AboutPage;
