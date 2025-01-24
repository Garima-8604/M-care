import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({profileData}) => {

  const photo = profileData?.photo || "./profile-photo.jpg";
  const name = profileData?.name || "Guest"; 
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img 
          src="Maskgroup.png" 
          alt="M-CARE Logo" 
          className="logo" 
          width={50} 
          height={50} 
        />
        <span className="brand-name">M-CARE</span>
      </div>
      <ul className="nav-links">
        <li className="nav-item dropdown">
          <a href="#">Pregnancy</a>
          <div className="dropdown-menu">
            <a href="#planning">Planning</a>
            <a href="#stages">Stages</a>
            <a href="#nutrition">Nutrition</a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a href="#">Services</a>
          <div className="dropdown-menu">
            <a href="#consultation">Consultation</a>
            <a href="#care-packages">Care Packages</a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a href="#">Guides</a>
          <div className="dropdown-menu">
            <a href="#blogs">Blogs</a>
            <a href="#faq">FAQs</a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a href="#">Community</a>
          <div className="dropdown-menu">
            <a href="#forums">Forums</a>
            <a href="#support">Support Groups</a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a href="#">Help</a>
          <div className="dropdown-menu">
            <a href="#faq">FAQs</a>
            <a href="#contact">Contact</a>
          </div>
        </li>
      </ul>
      <div className="navbar-right">
      <Link to="/calendar" className="navbar-icon">
          <FontAwesomeIcon icon={faCalendar} style={{ color: "#DE1B51", fontSize: "1.5rem" }} />
        </Link>
        <div className="navbar-profile">
        <img src={photo} alt="User Profile" className="navbar-profile-img" />
          <span className="navbar-profile-name">{name}</span>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;
