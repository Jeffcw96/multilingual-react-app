import "./App.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("ABOUT_ME")}</h1>
      <div>
        <Link to={"/"}>{t("TO_HOME_PAGE")}</Link>
      </div>
    </>
  );
}
