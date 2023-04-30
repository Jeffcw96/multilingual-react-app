import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { cn, en } from "./languages";

i18n.use(initReactI18next).init({
  resources: {
    cn: { translation: cn },
    en: { translation: en },
  },
  lng: "en",
  fallbackLng: "en",
});

export default i18n;
