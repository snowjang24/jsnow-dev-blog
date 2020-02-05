import React, { useState, useRef, useEffect } from "react";
import { graphql, Link } from "gatsby";
import classNames from "classnames";

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
  const [goingUp, setGoingUp] = useState(false);
  const prevScrollY = useRef(0);

  const frontmatter = data.markdownRemark.frontmatter;
  const html = data.markdownRemark.html;
  const tableOfContents = data.markdownRemark.tableOfContents;
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  return (
    <Layout title={frontmatter.title} scrollDirection={goingUp}>
      <div className="content">
        <header
          className={classNames("content__post-title", "post-title", {
            _active: !goingUp
          })}
        >
          <div className="post-title__inner _responsive">
            <Link to="/posts/">
              <div className="post-title__back-btn back-btn">
                <img src={back_btn} />
              </div>
            </Link>
            <div className="post-title__title-box title-box">
              <div className="title-box__title">{frontmatter.title}</div>
              <div className="title-box__date">{frontmatter.date}</div>
            </div>
            <Toc
              className="post-title__post-toc"
              tableOfContents={tableOfContents}
            />
          </div>
        </header>

        <section
          className="content__post-body post-body _responsive"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
};

export default Post;
