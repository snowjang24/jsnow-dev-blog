import React from "react";
import { graphql } from "gatsby";
import { Toc, Utterences, PostItem } from "../../components";
import { Layout } from "../../structures";

import * as Styled from "./styled";

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MM월 DD일, YYYY년")
        tags
      }
      html
      tableOfContents(absolute: false, maxDepth: 4)
    }
  }
`;

export default ({ data }) => {
  const markDown = data.markdownRemark;
  const { title, date, tags } = markDown.frontmatter;
  const html = markDown.html;
  const tableOfContents = markDown.tableOfContents;
  return (
    <Layout title={title}>
      <Styled.Content className="content _responsive">
        <header className="post-title-container">
          <PostItem title={title} date={date} tags={tags} />
        </header>
        <section className="post-body-container">
          <Styled.PostBody
            className="post-body"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </section>
        <Utterences repo="snowjang24/jsnow-dev-blog" />
        <aside className="post-toc-container">
          <Toc tableOfContents={tableOfContents} />
        </aside>
      </Styled.Content>
    </Layout>
  );
};
