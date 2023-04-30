import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>Multilingual with React</h1>
      <p>
        {t("HELLO")} {t("PERSONAL_INFORMATION.JEFF")}
      </p>
      <p>{t("CURRENT_AGE", { age: 22 })}</p>
      <div>
        <Link to={"/about"}>{t("TO_ABOUT_PAGE")}</Link>
      </div>
    </div>
  );
}
