import React from "react";
import { Link } from "gatsby";
import classNames from "classnames";

import * as Styled from "./styled";

import jsnow_logo from "../../../static/jsnow_logo.svg";

export default ({ className }) => {
  return (
    <Styled.Navbar className={classNames(className, "header")}>
      <nav className="navbar _responsive">
        <div className="logo-container">
          <Link to="/">
            <img src={jsnow_logo} alt="jsnow blog logo" />
          </Link>
        </div>
        <Styled.Menu>
          <li className="btn-container">
            <Link to="/posts">Posts</Link>
          </li>
          <li className="btn-container">
            <Link to="/about">About</Link>
          </li>
        </Styled.Menu>
      </nav>
    </Styled.Navbar>
  );
};
