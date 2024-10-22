import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
  const location = useLocation();
  const currentPath =
    location.pathname === "/" ? "Home" : location.pathname.slice(1);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Content", path: "/content" },
    { name: "Taxonomy", path: "/taxonomy" },
    { name: "Team", path: "/team" },
  ];

  return (
    <header>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={currentPath === item.name ? "active" : ""}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
