import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import classNames from "classnames";

import "./header.scss";

import jsnow_logo from "../../static/jsnow_logo.svg";

const Header = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className={classNames(className, "header")}>
      <nav className="header__container _responsive">
        <div className="header__logo">
          <Link to="/">
            <img src={jsnow_logo} />
          </Link>
        </div>
        <ul className="header__menu menu">
          <li className="menu__btn">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="menu__btn">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
