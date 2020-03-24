import styled from "styled-components";

export const Toc = styled.div`
  color: #a5a5a5;
  font-size: 0.8rem;
  li > ul {
    margin-left: 0.8rem;
  }
  > ul {
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
  a {
    transition: font-size 0.2s ease;
    will-change: font-size;
    &:hover {
      color: #2b92fd;
    }
    &:active {
      font-size: 0.75rem;
    }
  }
`;
