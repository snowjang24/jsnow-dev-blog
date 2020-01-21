import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

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
  console.log(tableOfContents);
  return (
    <Layout title={frontmatter.title}>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: tableOfContents }}></div>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  );
};

export default Blog;
