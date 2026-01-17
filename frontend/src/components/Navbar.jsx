import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setLang("en")}
          className={lang === "en" ? "font-bold" : ""}
        >
          EN
        </button>
        <button
          onClick={() => setLang("de")}
          className={lang === "de" ? "font-bold" : ""}
        >
          DE
        </button>
      </div>
    </nav>
  );
}
