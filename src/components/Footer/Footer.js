import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export default ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  return (
    <footer className={className}>
      <p>Created by {data.site.siteMetadata.author}, © 2019</p>
    </footer>
  );
};
