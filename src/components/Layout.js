import React from "react";
import styled from "styled-components";
import "./layout.scss";

import Navbar from "./Navbar";
import Footer from "../components/Footer";
import Head from "../components/Head";

const Layout = ({ children, title }) => {
  return (
    <div className="main">
      <Head title={title} />
      <Navbar className="main__navbar" />
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
