import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1>
      <a href="/" className="logo-link">
          debamitra.dev
        </a>
      </h1>
      <nav className="header-nav">
        <a href="#projects">Projects</a>
        <a href="/journal">Journal</a>
        <a href="#shop">Shop</a>
      </nav>
    </header>
  );
};

export default Header;