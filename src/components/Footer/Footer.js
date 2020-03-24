import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as Styled from "./styled";
import { FaFacebookSquare, FaGithubSquare, FaInstagram } from "react-icons/fa";

export default ({ className }) => {
  const url = {
    fb: "https://facebook.com/snowjang24",
    github: "https://github.com/snowjang24",
    insta: "https://instagram.com/snow_jang24"
  };
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  return (
    <Styled.Footer className={className}>
      <ul className="contact-list">
        <li className="icon-container">
          <a href={url.fb} target="_blank" className="icon-link">
            <FaFacebookSquare />
          </a>
        </li>
        <li className="icon-container">
          <a href={url.github} target="_blank" className="icon-link">
            <FaGithubSquare />
          </a>
        </li>
        <li className="icon-container">
          <a href={url.insta} target="_blank" className="icon-link">
            <FaInstagram />
          </a>
        </li>
      </ul>
      <p className="copyright">
        Created by {data.site.siteMetadata.author}, © 2019
      </p>
    </Styled.Footer>
  );
};
