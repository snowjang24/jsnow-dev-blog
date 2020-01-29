import React from "react";

import "./layout.scss";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "../components/Head";

const Layout = ({ children, title }) => {
  return (
    <div className="main">
      <Head title={title} />
      <Header className="main__header" />
      <div className="main__content content">
        <div className="content__main _responsive">{children}</div>
      </div>

      <Footer className="content__footer" />
    </div>
  );
};

export default Layout;
