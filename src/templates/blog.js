import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Toc from "../components/Toc";

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
      }
      html
      tableOfContents(absolute: false, maxDepth: 4)
    }
  }
`;

const Blog = ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter;
  const html = data.markdownRemark.html;
  const tableOfContents = data.markdownRemark.tableOfContents;

  return (
    <Layout title={frontmatter.title}>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <Toc tableOfContents={tableOfContents} />
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  );
};

export default Blog;
