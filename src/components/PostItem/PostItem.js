import React from "react";
import * as Styled from "./styled";
import Tag from "../Tag";
import { Link } from "gatsby";

export default ({ url, title, date, tags }) => {
  const tagList = tags || [];
  const PostItem = (
    <Styled.PostItem className={url ? "active" : ""}>
      <h2 className="title">{`📝 ${title}`}</h2>
      <p className="date">{date}</p>
      <ul className="tags">
        {tagList.map((tag) => (
          <li className="tag-container">
            <Tag name={tag} />
          </li>
        ))}
      </ul>
    </Styled.PostItem>
  );
  if (url) return <Link to={`/posts/${url}`}>{PostItem}</Link>;
  return PostItem;
};
