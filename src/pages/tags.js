import React from "react";
import styled from "styled-components";
import kebabCase from "lodash/kebabCase";

import { Layout } from "../structures";
import { Link, graphql, useStaticQuery } from "gatsby";

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);
  const group = data.allMarkdownRemark.group;
  return (
    <Layout title="Tags">
      <Tags className="tags-list _responsive">
        <h2 className="list-title">🏷 Tags List</h2>
        <ul className="tags">
          {group.map(tag => (
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              <li className="tag" key={tag.fieldValue}>
                <div className="tag-name">{tag.fieldValue}</div>
                <div className="tag-count">{tag.totalCount}</div>
              </li>
            </Link>
          ))}
        </ul>
      </Tags>
    </Layout>
  );
};

const Tags = styled.div`
  max-width: 680px;
  min-width: 0;
  width: 100%;
  margin-top: 36px;
  .list-title {
    font-size: 1.5rem;
  }
  .tags {
    list-style: none;
    margin-left: 0;
  }
  .tag {
    padding: 16px 24px;
    border: 1px solid #cfd6db;
    border-radius: 16px;
    display: flex;
    margin-bottom: 4px;
    font-weight: bold;
  }
  .tag-name {
    flex: 1;
  }
`;
