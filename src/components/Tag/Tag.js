import React from "react";
import { Link } from "gatsby";
import _ from "lodash";
import { FiHash } from "react-icons/fi";

import * as Styled from "./styled";

export default ({ name }) => {
  const handleClick = (e) => {
    e.stopPropagation();
  };
  return (
    <Link to={`/tags/${_.kebabCase(name)}`}>
      <Styled.Tag onClick={handleClick}>
        <FiHash className="icon" />
        <span className="name">{name}</span>
      </Styled.Tag>
    </Link>
  );
};
