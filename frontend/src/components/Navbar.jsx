import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const { lang, toggleLanguage } = useContext(LanguageContext);
  const { t, setLang } = useContext(LanguageContext);

  return (
    <nav className={`p-4 flex justify-between ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`}>
      <div className="font-bold text-xl">Mandag BSKS</div>
      <div className="space-x-4">
        <Link to="/">{lang === "en" ? "Home" : "Startseite"}</Link>
        <Link to="/about">{lang === "en" ? "About" : "Über uns"}</Link>
        <Link to="/projects">{lang === "en" ? "Projects" : "Projekte"}</Link>
        <Link to="/donate">{lang === "en" ? "Donate" : "Spenden"}</Link>
        <Link to="/contact">{lang === "en" ? "Contact" : "Kontakt"}</Link>
        <button onClick={toggleDarkMode} className="ml-2">
          {darkMode ? "Light" : "Dark"}
        </button>
        <button onClick={toggleLanguage} className="ml-2">
          {lang === "en" ? "DE" : "EN"}
        </button>
        <h1>{t("projects")}</h1>

<button onClick={() => setLang("en")}>EN</button>
<button onClick={() => setLang("de")}>DE</button>
      </div>
    </nav>
  );
}
