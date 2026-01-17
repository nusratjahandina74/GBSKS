import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";

export default function Navbar() {
  const { toggleTheme } = useContext(ThemeContext);
  const { lang, setLang, t } = useContext(LanguageContext);

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white p-4 flex justify-between items-center">
      <div className="flex gap-4">
        <Link to="/">{t("home")}</Link>
        <Link to="/projects">{t("projects")}</Link>
        <Link to="/about">{t("about")}</Link>
        <Link to="/contact">{t("contact")}</Link>
      </div>

      <div className="flex gap-3 items-center">
        {/* Language */}
        <button
          onClick={() => setLang(lang === "en" ? "de" : "en")}
          className="px-2 py-1 border rounded"
        >
          {lang === "en" ? "DE" : "EN"}
        </button>

        {/* Theme */}
        <button
          onClick={toggleTheme}
          className="px-2 py-1 border rounded"
        >
          🌓
        </button>

        {/* Login */}
        <Link
          to="/login"
          className="px-3 py-1 bg-blue-600 text-white rounded"
        >
          {t("login")}
        </Link>
      </div>
    </nav>
  );
}
