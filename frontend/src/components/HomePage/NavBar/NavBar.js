import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; // Import faSearch
import styles from'./NavBar.module.css';
import { useNavigate } from 'react-router-dom';


const NavBar = () => {
  // References for the scroll containers
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignUpClick = () => {
    navigate("/signup"); // Redirect to the sign-up page
  };


  return (
    <nav className={styles.navbar}>
    <div className={styles.navbarLeft}>
      <img 
        src="Maskgroup.png" 
        alt="M-CARE Logo" 
        className={styles.logo}
        width={50} 
        height={50} 
      />
      <span className={styles.brandName}>M-CARE</span>
    </div>
    <ul className={styles.navLinks}>
      <li className={`${styles.navItem} ${styles.dropdown}`}>
        <a href="#">Pregnancy</a>
        <div className={styles.dropdownMenu}>
          <a href="#planning">Planning</a>
          <a href="#stages">Stages</a>
          <a href="#nutrition">Nutrition</a>
        </div>
      </li>
            <li className={`${styles.navItem} ${styles.dropdown}`}>
              <a href="#">Services</a>
              <div className={styles.dropdownMenu}>
                <a href="#consultation">Consultation</a>
                <a href="#care-packages">Care Packages</a>
              </div>
            </li>
            <li className={`${styles.navItem} ${styles.dropdown}`}>
              <a href="#">Guides</a>
              <div className={styles.dropdownMenu}>
                <a href="#blogs">Blogs</a>
                <a href="#faq">FAQs</a>
              </div>
            </li>
            <li className={`${styles.navItem} ${styles.dropdown}`}>
              <a href="#">Community</a>
              <div className={styles.dropdownMenu}>
                <a href="#forums">Forums</a>
                <a href="#support">Support Groups</a>
              </div>
            </li>
            <li className={`${styles.navItem} ${styles.dropdown}`}>
              <a href="#">Help</a>
              <div className={styles.dropdownMenu}>
                <a href="#faq">FAQs</a>
                <a href="#contact">Contact</a>
              </div>
            </li>
            </ul>
          <div className={styles.navbarRight}>
            <div className={styles.searchContainer}>
              <form className={styles.searchBox} action="/search" method="GET">
                <input
                  type="text"
                  placeholder="Search"
                  className={styles.searchInput}
                  name="query"
                />
                <button className={styles.navbarSearchIcon}>
      
                <FontAwesomeIcon icon={faSearch} style={{ color: "#000000" }} /> {/* Use faSearch */}
                </button>
              </form>
            </div>
            <button className={styles.navbarSignupButton}onClick={handleSignUpClick}>
          Sign Up
        </button>
          </div>
          </nav>


  );
};

export default NavBar;




// import React from 'react';

// import './NavBar.css';

// const NavBar = () => {
//   return (
     
//         <nav className="navbar">
//           <div className="navbar-left">
//             <img 
//               src="/images/logo.svg" 
//               alt="M-CARE Logo" 
//               className="logo" 
//               width={50} 
//               height={50} 
//             />
//             <span className="brand-name">M-CARE</span>
//           </div>
//           <ul className="nav-links">
//             <li className="nav-item dropdown">
//               <a href="#">Pregnancy</a>
//               <div className="dropdown-menu">
//                 <a href="#planning">Planning</a>
//                 <a href="#stages">Stages</a>
//                 <a href="#nutrition">Nutrition</a>
//               </div>
//             </li>
//             <li className="nav-item dropdown">
//               <a href="#">Services</a>
//               <div className="dropdown-menu">
//                 <a href="#consultation">Consultation</a>
//                 <a href="#care-packages">Care Packages</a>
//               </div>
//             </li>
//             <li className="nav-item dropdown">
//               <a href="#">Guides</a>
//               <div className="dropdown-menu">
//                 <a href="#blogs">Blogs</a>
//                 <a href="#faq">FAQs</a>
//               </div>
//             </li>
//             <li className="nav-item dropdown">
//               <a href="#">Community</a>
//               <div className="dropdown-menu">
//                 <a href="#forums">Forums</a>
//                 <a href="#support">Support Groups</a>
//               </div>
//             </li>
//             <li className="nav-item dropdown">
//               <a href="#">Help</a>
//               <div className="dropdown-menu">
//                 <a href="#faq">FAQs</a>
//                 <a href="#contact">Contact</a>
//               </div>
//             </li>
//           </ul>
//           <nav className="navbar-right">
//             <div className="search-container">
//               <form className="search-box" action="/search" method="GET">
//                 <input
//                   type="text"
//                   placeholder="Search"
//                   className="search-input"
//                   name="query"
//                 />
//                 <button type="submit" className="search-icon">
//                   <img 
//                     src="/images/search.svg" 
//                     alt="Search" 
//                     className="Search" 
//                     width={18} 
//                     height={18} 
//                   />
//                 </button>
//               </form>
//             </div>
//             <button className="signup-button">Sign Up</button>
//           </nav>
        
        
// );
// };

// export default NavBar;
