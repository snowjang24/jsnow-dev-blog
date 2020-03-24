import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

import { Layout } from "../structures";
import { PostItem } from "../components";

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
        <Posts className="posts-list _responsive">
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
        </Posts>
      </Layout>
    </div>
  );
};

const Posts = styled.div`
  max-width: 680px;
  min-width: 0;
  width: 100%;

  margin-top: 36px;
`;

export default PostsPage;
