import React from "react";
import * as Styled from "./styled";
import Tag from "../Tag";
import { Link } from "gatsby";

export default ({ url, title, date, tags }) => {
  return (
    <Link to={`/posts/${url}`}>
      <Styled.PostItem>
        <h2 className="title">{`📝 ${title}`}</h2>
        <p className="date">{date}</p>
        <ul className="tags">
          {tags.map(tag => (
            <li className="tag-container">
              <Tag name={tag} />
            </li>
          ))}
        </ul>
      </Styled.PostItem>
    </Link>
  );
};
