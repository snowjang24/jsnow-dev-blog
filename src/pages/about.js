import React from "react";
import { Link } from "gatsby";

import { Layout } from "../structures";

const AboutPage = () => {
  return (
    <Layout title="About">
      <h1>About me</h1>
      <p>I'm just student who loves front-end and design</p>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  );
};

export default AboutPage;
