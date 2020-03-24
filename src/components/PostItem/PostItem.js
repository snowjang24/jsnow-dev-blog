import React from "react";

import * as Styled from "./styled";
import { Link } from "gatsby";

export default ({ url, title, date }) => {
  return (
    <Styled.PostItem>
      <Link to={`/posts/${url}`}>
        <h2>{title}</h2>
        <p>{date}</p>
      </Link>
    </Styled.PostItem>
  );
};
