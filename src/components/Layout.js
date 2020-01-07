import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";
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
