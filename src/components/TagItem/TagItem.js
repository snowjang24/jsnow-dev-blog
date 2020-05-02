import React from "react";
import { Link } from "gatsby";

import * as Styled from "./styled";

export default ({ url, name, count }) => {
  return (
    <Link to={`/tags/${url}/`}>
      <Styled.TagItem className="tag" key={name}>
        <div className="name">{name}</div>
        <div className="count">{count}</div>
      </Styled.TagItem>
    </Link>
  );
};
