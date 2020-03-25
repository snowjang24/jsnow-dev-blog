import React from "react";
import { Link } from "gatsby";

import * as Styled from "./styled";
import jsnow_logo from "../../../static/jsnow_logo.svg";

export default ({ className }) => {
  return (
    <Styled.Header className={className}>
      <div className="logo-container">
        <Link to="/">
          <img src={jsnow_logo} alt="jsnow blog logo" />
        </Link>
      </div>
      <Styled.Navbar className="navbar">
        <li className="btn-container">
          <Link to="/posts">Posts</Link>
        </li>
        <li className="btn-container">
          <Link to="/about">About</Link>
        </li>
      </Styled.Navbar>
    </Styled.Header>
  );
};
