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
              date(formatString: "MM월 DD일, YYYY년")
              tags
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
    <Layout title="Posts">
      <Posts className="posts-list _responsive">
        <h2 className="list-title">🗂 Posts List</h2>
        <ul className="posts">
          {data.allMarkdownRemark.edges.map((edge) => (
            <PostItem
              url={edge.node.fields.slug}
              title={edge.node.frontmatter.title}
              date={edge.node.frontmatter.date}
              tags={edge.node.frontmatter.tags}
            />
          ))}
        </ul>
      </Posts>
    </Layout>
  );
};

const Posts = styled.div`
  max-width: 680px;
  min-width: 0;
  width: 100%;
  margin-top: 36px;
  .list-title {
    font-size: 1.5rem;
    color: #333;
  }
  .posts {
    margin-left: 0;
  }
`;

export default PostsPage;
