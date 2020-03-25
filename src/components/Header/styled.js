import styled from "styled-components";

export const Header = styled.header`
  height: 58px;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(2px);
  width: 100%;
  max-width: 1192px;
  min-width: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo-container {
    width: 40px;
    height: 40px;
  }
`;

export const Navbar = styled.ul`
  display: flex;
  margin: 0;
  .btn-container {
    margin: 0;
    list-style: none;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
    text-transform: uppercase;
    > a {
      display: flex;
      align-items: center;
      height: 58px;
      padding: 0 8px;
      color: #292929;
      transition: all 0.2s;
      &:hover {
        color: #2b92fd;
      }
    }
  }
`;