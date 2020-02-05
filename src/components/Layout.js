import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import "./layout.scss";

import Navbar from "./Navbar";
import Footer from "../components/Footer";
import Head from "../components/Head";

const Layout = ({ children, title, scrollDirection }) => {
  console.log(scrollDirection);
  return (
    <div className="main">
      <Head title={title} />
      <Navbar
        className={classNames("main__navbar", {
          _active: !scrollDirection
        })}
      />

      <StyledBlock />
      <div className="main__container">{children}</div>

      <Footer className="main__footer" />
    </div>
  );
};

const StyledBlock = styled.div`
  height: 116px;
  width: 100%;
`;

export default Layout;
