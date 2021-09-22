import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <ul>
        <li> Home</li>
        <li>
          <NavLink activeClassName="active" to="/movies">
            Movies
          </NavLink>
        </li>

        <li>
          <NavLink activeClassName="active" to="/series">
            TV Series
          </NavLink>
        </li>

        <li>Bucket</li>
      </ul>
    </div>
  );
};

export default Navigation;
