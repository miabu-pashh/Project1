import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "../css/Header.css";

const Header = () => {
  const [selectedTab, setSelectedTab] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    setSelectedTab(path === "/" ? "Home" : path.slice(1));
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Content", path: "/content" },
    { name: "Taxonomy", path: "/taxonomy" },
    { name: "Team", path: "/team" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav>
        <motion.ul>
          {navItems.map((item) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: navItems.indexOf(item) * 0.1,
              }}
            >
              <Link
                to={item.path}
                className={selectedTab === item.name ? "active" : ""}
                onClick={() => setSelectedTab(item.name)}
              >
                {item.name}
              </Link>
              {selectedTab === item.name && (
                <motion.div
                  className="underline"
                  layoutId="underline"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </motion.header>
  );
};

export default Header;
