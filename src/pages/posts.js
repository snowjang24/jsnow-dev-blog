import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import { Layout } from "../structures";

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
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li>
                <Link to={`/posts/${edge.node.fields.slug}`}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>{edge.node.frontmatter.date}</p>
                </Link>
              </li>
            );
          })}
        </ol>
      </Layout>
    </div>
  );
};

export default PostsPage;
