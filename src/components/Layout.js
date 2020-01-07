import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "../components/Head";

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head title={title} />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
