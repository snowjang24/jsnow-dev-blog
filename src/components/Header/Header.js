import React from "react";
import { Link } from "gatsby";

import * as Styled from "./styled";
import jsnow_logo from "../../../static/jsnow_logo.svg";

export default ({ className }) => {
  const routes = [
    { name: "POSTS", url: "/posts" }
    // { name: "ABOUT", url: "/about" }
  ];
  return (
    <Styled.Header className={className}>
      <div className="logo-container">
        <Link to="/">
          <img src={jsnow_logo} alt="jsnow blog logo" />
        </Link>
      </div>
      <Styled.Navbar className="navbar">
        {routes.map(route => (
          <li className="btn-container">
            <Link to={route.url}>{route.name}</Link>
          </li>
        ))}
      </Styled.Navbar>
    </Styled.Header>
  );
};
