import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .header-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 50;
    transition: transform 0.3s ease;
    will-change: transform;
  }
  .content-container {
    margin-top: 56px;
  }
`;
