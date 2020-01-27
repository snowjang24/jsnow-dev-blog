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
        <section className="content__main _responsive">{children}</section>
      </div>

      <Footer className="content__footer" />
    </div>
  );
};

export default Layout;
