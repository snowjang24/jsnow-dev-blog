import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as Styled from "./styled";

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
    <Styled.Footer className={className}>
      <p>Created by {data.site.siteMetadata.author}, © 2019</p>
    </Styled.Footer>
  );
};
