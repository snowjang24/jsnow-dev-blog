import styled from "styled-components";

export const PostItem = styled.li`
  list-style: none;
  padding: 16px 24px;
  border: 1px solid #cfd6db;
  border-radius: 16px;
  transition: all ease 0.3s;
  .title {
    font-size: 1.15rem;
    margin-bottom: 16px;
  }
  .tags {
    list-style: none;
    margin: 0;
    display: flex;
  }
  .date {
    color: #99a9b5;
    margin-bottom: 4px;
    font-size: 0.8rem;
  }
  .tag-container {
    margin: 0 4px 0 0;
  }
  &.active {
    &:hover {
      transform: scale(1.02);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    &:active {
      transform: scale(1);
      box-shadow: none;
    }
  }
`;
