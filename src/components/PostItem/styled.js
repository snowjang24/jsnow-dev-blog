import styled from "styled-components";

export const PostItem = styled.li`
  padding: 16px 32px;
  border: 1px solid #cfd6db;
  border-radius: 16px;
  transition: all ease 0.3s;
  .title {
    font-size: 1.15rem;
    margin-bottom: 8px;
  }
  .date {
    color: #99a9b5;
    font-size: 0.85rem;
  }
  &:hover {
    transform: scale(1.02);
    background-color: #e8edf1;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  &:active {
    transform: scale(1);
    box-shadow: none;
  }
`;
