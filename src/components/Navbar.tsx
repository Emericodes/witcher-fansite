import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import logo from "../assets/images/logo.png";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Logo" />
      </Link>
      <ul className="navbar-menu">
        <li><Link to="/" className="navbar-link">Accueil</Link></li>
        <li><Link to="/discover" className="navbar-link">Discover</Link></li>
        <li><Link to="/world" className="navbar-link">World</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;