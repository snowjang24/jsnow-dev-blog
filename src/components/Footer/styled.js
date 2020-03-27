import styled from "styled-components";

export const Footer = styled.footer`
  max-width: 680px;
  min-width: 0;
  width: 100%;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #99a9b5;
  transition: font-size 0.2s ease;
  transition: color 0.2s ease;
  .contact-list {
    list-style: none;
    margin: 0;
    display: grid;
    grid-template: 48px / repeat(4, 48px);
    align-items: center;
  }
  .icon-container {
    font-size: 1.8rem;
    margin: 0;
  }
  .icon-link {
    display: flex;
    align-items: center;
    width: 48px;
    height: 48px;

    &:hover {
      color: #2b92fd;
      font-size: 1.7rem;
    }
  }
  .copyright {
    font-size: 0.8rem;
  }
`;
