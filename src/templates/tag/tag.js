import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../../structures";
import { PostItem } from "../../components";

import * as Styled from "./styled";

export const data = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MM월 DD일, YYYY년")
            tags
          }
        }
      }
    }
  }
`;

export default ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;

  return (
    <Layout title={tag}>
      <Styled.TagPostList className="tag-post-list _responsive">
        <h2 className="list-title">{`🔖 ${tag}`}</h2>
        <ul className="tag-post">
          {edges.map(({ node }) => {
            const { slug } = node.fields;
            const { title, date, tags } = node.frontmatter;
            console.log(node);
            return (
              <PostItem
                key={slug}
                url={slug}
                title={title}
                date={date}
                tags={tags}
              />
            );
          })}
        </ul>
      </Styled.TagPostList>
    </Layout>
  );
};
