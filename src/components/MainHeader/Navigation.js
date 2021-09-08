import React from "react";

import classes from "./Navigation.module.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/profile_page"> Profile </Link>
        </li>
        <li>
          <Link to="/order"> Order Summary </Link>
        </li>

        {/* <li>
          <button onClick={handler}>Order Summary</button>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
