import React from "react";
import { Link } from "gatsby";
import { MdFolder } from "react-icons/md";

import * as Styled from "./styled";
import jsnow_logo from "../../../static/jsnow_logo.svg";

export default ({ className }) => {
  const routes = [{ name: "posts", url: "/posts", icon: MdFolder }];
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
            <Link to={route.url}>
              <route.icon />
            </Link>
          </li>
        ))}
      </Styled.Navbar>
    </Styled.Header>
  );
};
