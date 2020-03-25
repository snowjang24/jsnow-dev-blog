import React from "react";
import { graphql, Link } from "gatsby";
import { Toc } from "../components";
import { Layout } from "../structures";

import * as Styled from "./styled";

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

export default ({ data }) => {
  const markDown = data.markdownRemark;
  const frontmatter = markDown.frontmatter;
  const html = markDown.html;
  const tableOfContents = markDown.tableOfContents;

  return (
    <Layout title={frontmatter.title}>
      <Styled.Content className="content _responsive">
        <header className="post-title-container">
          <Styled.PostTitle className="post-title">
            <div className="title-container">
              <div className="title">{frontmatter.title}</div>
              <div className="date">{frontmatter.date}</div>
            </div>
          </Styled.PostTitle>
        </header>
        <section className="post-body-container">
          <Styled.PostBody
            className="post-body"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </section>
        <aside className="post-toc-container">
          <Toc tableOfContents={tableOfContents} />
        </aside>
      </Styled.Content>
    </Layout>
  );
};
