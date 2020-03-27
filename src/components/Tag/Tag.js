import React from "react";
import * as Styled from "./styled";
// import { Link } from "gatsby";
import { FiHash } from "react-icons/fi";

export default ({ name }) => {
  const handleClick = e => {
    console.log("hell");
    console.log(e);
    e.preventDefault();
  };
  return (
    <Styled.Tag onClick={handleClick}>
      <FiHash className="icon" />
      <span className="name">{name}</span>
    </Styled.Tag>
  );
};
