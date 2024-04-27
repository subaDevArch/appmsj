import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { UserPlus, UserCheck, UserX, LayoutGrid, Home } from "lucide-react";

function NavLinks() {
  const { isAuthenticated, logout, user } = useAuth();
  const [highlightedIcon, setHighlightedIcon] = useState(null);

  const handleIconClick = (icon) => {
    setHighlightedIcon(icon === highlightedIcon ? null : icon);
    // Aquí puedes realizar otras acciones relacionadas con el clic del icono si es necesario
  };

  return (
    <div className="flex gap-4">
      <Link
        to="/"
        className="flex flex-col items-center px-4 py-1 rounded-sm"
        onClick={() => handleIconClick("home")}
      >
        <Home className={`w-8 h-8 ${highlightedIcon === "home" ? "text-blue-500" : ""}`} />
        <span className="text-xs">Inicio</span>
      </Link>
      <Link
        to="/apps"
        className="flex flex-col items-center px-4 py-1 rounded-sm"
        onClick={() => handleIconClick("apps")}
      >
        <LayoutGrid className={`w-8 h-8 ${highlightedIcon === "apps" ? "text-blue-500" : ""}`} />
        <span className="text-xs">Apps</span>
      </Link>

      {isAuthenticated ? (
        <Link
          to="/"
          className="flex flex-col items-center px-4 py-1 rounded-sm"
          onClick={() => {
            handleIconClick("logout");
            logout();
          }}
        >
          <UserX className={`w-8 h-8 mb-1.5 ${highlightedIcon === "logout" ? "text-blue-500" : ""}`} />
          <span className="text-xs">Logout</span>
        </Link>
      ) : (
        <Link
          to="/login"
          className="flex flex-col items-center px-4 py-1 rounded-sm"
          onClick={() => handleIconClick("login")}
        >
          <UserCheck className={`w-8 h-8 ${highlightedIcon === "login" ? "text-blue-500" : ""}`} />
          <span className="text-xs">Login</span>
        </Link>
      )}
    </div>
  );
}

function Nav() {
  return (
    <nav className="z-10 flex justify-center w-full py-1.5 bg-gray-100 border-t border-gray-400">
      <NavLinks />
    </nav>
  );
}

export default Nav;
