import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import kebabCase from "lodash/kebabCase";

import { TagItem } from "../components";
import { Layout } from "../structures";

const TagsPage = () => {
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
          {group.map((tag) => (
            <TagItem
              url={kebabCase(tag.fieldValue)}
              name={tag.fieldValue}
              count={tag.totalCount}
            ></TagItem>
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
    color: #333;
  }
  .tags {
    list-style: none;
    margin-left: 1rem;
  }
`;

export default TagsPage;
