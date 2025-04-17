import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">Muna <span>Eriobuna</span></Link>

      <ul className="nav-links">
        <li><Link className={pathname === '/' ? 'active' : ''} to="/">Home</Link></li>
        <li><Link className={pathname === '/about' ? 'active' : ''} to="/about">About Me</Link></li>
        <li><Link className={pathname === '/projects' ? 'active' : ''} to="/projects">Projects</Link></li>
        <li><Link className={pathname === '/services' ? 'active' : ''} to="/services">Services</Link></li>
        <li><Link to="/contact" className="contact-btn">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;