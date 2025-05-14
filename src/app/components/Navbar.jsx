'use client';
import React, { useState } from "react";
import "../../../public/css/navbar.css";
import logo from "../../../public/images/logo.jpeg"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <img className="brand" src="https://www.shutterstock.com/image-vector/ab-fitness-logo-design-concept-600w-2349066189.jpg" alt="none" />
        
        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>

        <ul className={`menu ${isOpen ? "open" : ""}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;