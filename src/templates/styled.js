import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  .post-body-container,
  .post-title-container {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
  .post-toc-container {
    position: fixed;
    box-sizing: border-box;
    max-width: 240x;
    left: calc(50% + 388px);
    top: 128px;
  }
`;

export const PostTitle = styled.div`
  margin-top: 64px;
  width: 100%;
  max-width: 680px;
  min-width: 0;
  height: 240px;
  border-bottom: 1px solid #e8edf1;
  .title {
    font-weight: bolder;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  .date {
    color: #99a9b5;
  }
`;

export const PostBody = styled.div`
  max-width: 680px;
  min-width: 0;
  font-family: "Ridi Batang", sans-serif;
  a {
    color: #2b92fd;
    will-change: text-shadow;
    transition: text-shadow 0.2s ease-in;
    &:hover {
      text-shadow: 0 1px 2px #2b92fd90;
    }
    &:visited {
      color: #2b92fd;
    }
  }
  p {
    color: #3d3d3d;
    word-break: keep-all;
  }
  h1::before,
  h2::before,
  h3::before {
    content: "";
    display: block;
    margin-top: -96px;
    height: 96px;
    visibility: hidden;
  }
  blockquote {
    font-size: 0.9rem;
    border-left: 8px solid #2b92fd;
    background: #e8edf1;
    > p {
      margin-bottom: 0.5rem;
    }
  }
`;
