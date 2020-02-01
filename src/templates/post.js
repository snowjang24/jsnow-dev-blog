import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Toc from "../components/Toc";

import "./post.scss";
import back_btn from "../../static/back_btn.svg";

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
      }
      html
      tableOfContents(absolute: false, maxDepth: 4)
    }
  }
`;

const Post = ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter;
  const html = data.markdownRemark.html;
  const tableOfContents = data.markdownRemark.tableOfContents;
  const goToBack = e => {
    console.log(e);
  };

  return (
    <Layout title={frontmatter.title}>
      <div className="content">
        <header className="content__post-title post-title">
          <div className="post-title__inner _responsive">
            <div className="post-title__back-btn back-btn" onClick={goToBack}>
              <img src={back_btn} />
            </div>
            <div className="post-title__title-box title-box">
              <div className="title-box__title">{frontmatter.title}</div>
              <div className="title-box__date">{frontmatter.date}</div>
            </div>
          </div>
        </header>
        <Toc className="content__post-toc" tableOfContents={tableOfContents} />
        <section
          className="content__post-body post-body _responsive"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
};

export default Post;
