import styled from "styled-components";

export const TagItem = styled.li`
  font-weight: lighter;
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  justify-content: space-between;
  padding: 4px 0;
  margin-bottom: calc(1.45rem / 3);
  .name {
    background-color: #f6f6f6;
    border-radius: 8px;
    padding: 0 8px;
    &:before {
      content: "#";
      margin-right: 2px;
      color: #5ca8fe;
    }
  }
  .count {
    color: #5ca8ff;
    font-weight: normal;
    text-align: right;
    position: relative;
    &:before {
      content: "...";
      color: #99a9b5;
      position: absolute;
      left: -24px;
    }
  }
`;
