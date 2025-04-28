import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">DS Asansör</Link>
      <nav className="nav">
        <Link to="/">Ana Sayfa</Link>
        <Link to="/products">Ürünler</Link>
        <Link to="/about">Hakkımızda</Link>
      </nav>
    </header>
  );
};

export default Header;