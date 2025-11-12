import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default function ArreNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="navbar-logo">
          Arr<span className="accent">é</span>
        </div>
      </Link>

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <Link onClick={handleLinkClick} to="/articles">
          Articles
        </Link>
        <Link onClick={handleLinkClick} to="/">
          Studio
        </Link>
        <Link onClick={handleLinkClick} to="/">
          Voice
        </Link>
        <Link onClick={handleLinkClick} to="/">
          More
        </Link>
        <span className="search-icon">
          <FaSearch />
        </span>
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✕" : "☰"}
      </div>
    </nav>
  );
}
