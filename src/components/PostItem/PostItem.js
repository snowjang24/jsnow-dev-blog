import React from "react";

import * as Styled from "./styled";
import { Link } from "gatsby";

export default ({ url, title, date }) => {
  return (
    <Link to={`/posts/${url}`}>
      <Styled.PostItem>
        <h2 className="title">{title}</h2>
        <p className="date">{date}</p>
      </Styled.PostItem>
    </Link>
  );
};
