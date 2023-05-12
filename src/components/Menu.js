import React, { useState } from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";
function Menu(props) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };
  const handleOptionSelect = () => {
    setMenuOpen(false);
  };

  return (
    <div className="menu-bar">
      <div
        className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={handleMenuToggle}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isMenuOpen && (
        <div className="menu">
          <ul>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/translator"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "blue",
                      }
                    : { color: "black" }
                }
                onClick={handleOptionSelect}
              >
                Translator
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "blue",
                      }
                    : { color: "black" }
                }
                onClick={handleOptionSelect}
              >
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      )}
      
    </div>
  );
}

export default Menu;
