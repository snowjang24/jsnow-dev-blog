import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { Layout } from "../structures";
import { PostItem } from "../components";
import * as Styled from "./postsStyled";

const PostsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM Do, YYYY")
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  return (
    <div>
      <Layout title="Posts">
        <Styled.Posts className="posts-list _responsive">
          <h2>Posts List</h2>
          <ul>
            {data.allMarkdownRemark.edges.map(edge => (
              <PostItem
                url={edge.node.fields.slug}
                title={edge.node.frontmatter.title}
                date={edge.node.frontmatter.date}
              />
            ))}
          </ul>
        </Styled.Posts>
      </Layout>
    </div>
  );
};

export default PostsPage;
