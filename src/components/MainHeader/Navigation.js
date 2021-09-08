import React from "react";

import classes from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/profile_page" style={{ textDecoration: "none" }}>
            {" "}
            Profile{" "}
          </Link>
        </li>
        <li>
          <Link to="/order" style={{ textDecoration: "none" }}>
            {" "}
            Order Summary{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
