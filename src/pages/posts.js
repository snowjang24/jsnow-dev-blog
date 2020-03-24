import React from "react";
import { graphql, useStaticQuery } from "gatsby";

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
        <ol>
          {data.allMarkdownRemark.edges.map(edge => (
            <PostItem
              url={edge.node.fields.slug}
              title={edge.node.frontmatter.title}
              date={edge.node.frontmatter.date}
            />
          ))}
        </ol>
      </Layout>
    </div>
  );
};

export default PostsPage;
