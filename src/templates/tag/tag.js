import React from "react";
import { Link, graphql } from "gatsby";
import { Layout } from "../../structures";
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
    <Layout>
      <Styled.TagPostList className="tag-post-list _responsive">
        <h2 className="list-title">{`🔖 ${tag}`}</h2>
        <ul className="tag-post">
          {edges.map(({ node }) => {
            const { slug } = node.fields;
            const { title } = node.frontmatter;
            return (
              <li key={slug}>
                <Link to={`/posts/${slug}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </Styled.TagPostList>
    </Layout>
  );
};
