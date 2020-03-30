import styled from "styled-components";

export const Content = styled.div`
  min-width: 0;
  max-width: 680px;
  width: 100%;
  display: flex;
  flex-direction: column;
  .post-body-container,
  .post-title-container {
    margin-bottom: 2rem;
    position: relative;
  }
  .post-title-container {
    margin-top: 3rem;
    z-index: 10;
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
  margin-top: 48px;
  width: 100%;
  height: 120px;
  .title-container {
    padding: 16px 32px;
    border: 1px solid #cfd6db;
    border-radius: 16px;
  }
  .title {
    font-weight: bold;
    font-size: 1.15rem;
    margin-bottom: 8px;
  }
  .date {
    color: #99a9b5;
    font-size: 0.85rem;
  }
`;

export const PostBody = styled.div`
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
