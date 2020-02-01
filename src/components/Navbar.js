import React from "react";
import { Link } from "gatsby";
import classNames from "classnames";

import "./navbar.scss";

import jsnow_logo from "../../static/jsnow_logo.svg";

const Navbar = ({ className }) => {
  return (
    <header className={classNames(className, "navbar")}>
      <nav className="navbar__container _responsive">
        <div className="navbar__logo">
          <Link to="/">
            <img src={jsnow_logo} alt="jsnow blog logo" />
          </Link>
        </div>
        <ul className="navbar__menu menu">
          <li className="menu__btn">
            <Link to="/posts">Posts</Link>
          </li>
          <li className="menu__btn">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
