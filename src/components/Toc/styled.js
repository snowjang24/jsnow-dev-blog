import styled from "styled-components";

export const Toc = styled.div`
  color: #a5a5a5;
  font-size: 0.8rem;
  li > ul {
    margin-left: 0.8rem;
  }
  > ul {
    border-left: 1px solid #dadde1;
    margin-left: 0;
    padding-left: 1rem;
  }
  ul,
  li,
  p {
    margin-bottom: 0;
    margin-top: 0;
    list-style: none;
  }
  a:hover {
    color: #fca81e;
  }
`;
