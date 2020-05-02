import React from "react";
import * as Styled from "./styled";
import { Link } from "gatsby";

export default ({ url, name, count }) => {
  return (
    <Link to={`/tags/${url}/`}>
      <Styled.TagItem class="tag" key={name}>
        <div className="count">{count}</div>
        <div className="name">{name}</div>
      </Styled.TagItem>
    </Link>
  );
};
