import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <Link to="/" className="logo">DS Asansör</Link>
      <nav className="nav">
        <Link to="/" className="nav-link">Ana Sayfa</Link>
        <Link to="/products" className="nav-link">Ürünler</Link>
        <Link to="/about" className="nav-link">Hakkımızda</Link>
        <Link to="/simulation" className="nav-link highlight">Kabin Tasarla</Link>
      </nav>
    </header>
  );
};

export default Header;