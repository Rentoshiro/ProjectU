import { classNames } from "shared/lib/className/classNames";
import { Button } from "shared/ui/Button/Button";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const BugButon = () => {
  const [error, setError] = useState(false);

  const throwError = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error("Error from BugButton");
    }
  }, [error]);

  const { t } = useTranslation();

  return (
    <Button
      className={classNames("bug-button", {}, [])}
      theme="outline"
      onClick={throwError}
    >
      {t("ErrorBtn")}
    </Button>
  );
};
