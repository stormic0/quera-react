import React from "react";
import { useTheme, THEME } from "../../contexts/theme";

const Sidebar = (props) => {
  const { theme } = useTheme();

  return (
    <aside
      className={`right-sidebar sidebar-${
        theme === THEME.LIGHT ? "light" : "dark"
      }`}
      id="sidebarbg"
      data-sidebarbg="skin6"
    >
      <div className="sidebar-nav">
        <ul className="nav p-0" id="sidebar-nav">
          {props.routes
            .filter((route) => !route.redirect && route.showInNav)
            .map((route, index) => (
              <li
                className={
                  (route.pro ? " active active-pro" : "") + " sidebar-item"
                }
                key={index}
              >
                <a
                  href="/"
                  className="nav-link sidebar-link"
                  activeclassname="active"
                >
                  <i className={route.icon} />
                  <span className="hide-menu">{route.name}</span>
                </a>
              </li>
            ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
