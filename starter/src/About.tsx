import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <div>{t("ABOUT_ME")}</div>
      <div>
        <Link to={"/"}>{t("TO_HOME_PAGE")}</Link>
      </div>
    </>
  );
}
