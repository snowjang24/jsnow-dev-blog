import React from "react";
import { Link } from "gatsby";
import { MdFolder, MdQueueMusic } from "react-icons/md";
import { IoMdPricetags } from "react-icons/io";

import * as Styled from "./styled";
import jsnow_logo from "../../../static/jsnow_logo.svg";

export default ({ className }) => {
  const routes = [
    { name: "posts", url: "/posts", icon: MdFolder },
    { name: "tags", url: "/tags", icon: IoMdPricetags },
    { name: "music", url: "/music", icon: MdQueueMusic },
  ];
  return (
    <Styled.Header className={className}>
      <div className="logo-container">
        <Link to="/">
          <img src={jsnow_logo} className="logo-img" alt="jsnow blog logo" />
          <span className="blog-name">JSnow Blog</span>
        </Link>
      </div>
      <Styled.Navbar className="navbar">
        {routes.map((route) => (
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
