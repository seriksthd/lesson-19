import React from "react";
import { createGlobalStyle } from "styled-components";

export const Header = () => {
  return (
    <>
      <StyleGlobal />
      <div className="continer">
        <a className="logo" href="#">
          logo
        </a>
        <nav className="nav">
          <a href="#">item</a>
          <a href="#">itme</a>
          <a href="#">item</a>
        </nav>
      </div>
    </>
  );
};

const StyleGlobal = createGlobalStyle`
  .continer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 32px;
    background-color: rgb(28, 28, 30);
  }
  .logo {
    font-size: 1.5rem;
    font-weight: 600;
    color: rgb(245, 245, 247);
    text-decoration: none;
    transition: 0.2s;
  }
  .nav {
    display: flex;
    gap: 24px;
    a {
      font-size: 1rem;
      color: rgb(222, 222, 225);
      text-decoration: none;
      font-weight: 500;
      &:hover {
        font-size: 1rem;
        color: rgb(10, 132, 255);
        font-weight: 500;
        transition: 0.3s;
      }
    }
  }
`;
