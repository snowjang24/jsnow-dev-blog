import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as Styled from "./styled";
import { FaFacebookSquare, FaGithubSquare, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default ({ className }) => {
  const contactList = [
    { url: "mailto:asdka4618@gmail.com", icon: MdEmail },
    { url: "https://github.com/snowjang24", icon: FaGithubSquare },
    { url: "https://facebook.com/snowjang24", icon: FaFacebookSquare },
    { url: "https://instagram.com/snow_jang24", icon: FaInstagram }
  ];
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
        {contactList.map(contact => (
          <li className="icon-container">
            <a
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <contact.icon />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">
        Created by {data.site.siteMetadata.author}, © 2020
      </p>
    </Styled.Footer>
  );
};
