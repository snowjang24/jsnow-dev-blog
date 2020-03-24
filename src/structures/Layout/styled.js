import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .header-container {
    display: flex;
    justify-content: center;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 50;
    transition: transform 0.3s ease;
    will-change: transform;
  }
  .content-container {
    flex: 1;
    display: flex;
    justify-content: center;
    margin-top: 56px;
  }
  .footer-container {
    display: flex;
    justify-content: center;
    margin-top: 36px;
  }
  @media (max-width: 1256px) {
    .toc {
      display: none;
    }
  }
`;
