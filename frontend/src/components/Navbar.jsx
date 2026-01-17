import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";

export default function Navbar() {
  const { toggleTheme } = useContext(ThemeContext);
  const { lang, setLang, t } = useContext(LanguageContext);
  const location = useLocation();
  const navigate = useNavigate();

  // admin logged in?
  const isAdmin = localStorage.getItem("admin") === "true";

  // active link style (optional)
  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/"); // logout করলে home এ যাবে
  };

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-3 flex items-center">
      {/* LEFT: Logo */}
      <Link to="/" className="flex items-center gap-2 min-w-[180px]">
        <img
          src="/logo.png"
          alt="GBSKS Logo"
          className="w-10 h-10 rounded-full object-cover"
        />
      </Link>

      {/* CENTER: Links */}
    {/* CENTER: Links */}
<div className="flex-1 flex justify-center">
  <div className="flex gap-10 text-[16px] font-medium">
    <Link to="/" className={isActive("/") ? "font-semibold" : ""}>
      {t("home")}
    </Link>

    <Link to="/about" className={isActive("/about") ? "font-semibold" : ""}>
      {t("about")}
    </Link>

    <Link to="/projects" className={isActive("/projects") ? "font-semibold" : ""}>
      {t("projects")}
    </Link>

    {/* Donate শুধু তখনই দেখাবে যখন admin login করা নেই */}
    {!isAdmin && (
      <Link to="/donate" className={isActive("/donate") ? "font-semibold" : ""}>
        {t("donate")}
      </Link>
    )}

    <Link to="/contact" className={isActive("/contact") ? "font-semibold" : ""}>
      {t("contact")}
    </Link>
  </div>
</div>


      {/* RIGHT: Actions */}
      <div className="min-w-[180px] flex justify-end gap-3 items-center">
        {/* Language */}
        <button
          onClick={() => setLang(lang === "en" ? "de" : "en")}
          className="px-2 py-1 border rounded"
          title="Change language"
        >
          {lang === "en" ? "DE" : "EN"}
        </button>

        {/* Theme */}
        <button
          onClick={toggleTheme}
          className="px-2 py-1 border rounded"
          title="Toggle theme"
        >
          🌓
        </button>

        {/* Login / Logout (same design) */}
        {!isAdmin ? (
          <Link to="/login" className="px-3 py-1 bg-blue-600 text-white rounded">
            Login
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            className="px-3 py-1 bg-blue-600 text-white rounded"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
