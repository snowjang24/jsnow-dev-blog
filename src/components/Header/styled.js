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
    font-size: 1.15rem;
    font-weight: 100;
    text-transform: uppercase;
    border 1px solid #99a9b5;
    border-radius: 32px;
    color: #99a9b5;
    transition: transform 0.2s ease;
    &:hover{
      color: #fff;
      background-color: #99a9b5;
      transform: scale(1.1);
    }
    > a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
    }
  }
`;
