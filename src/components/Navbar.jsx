import React from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className="bg-white">
      {/* Top announcement bars */}
      <nav className="navbar stand fixed-top  py-2">
        <div className="container-fluid ">
          <span className=" fs-6 student ">
            Free Shipping On Orders Above <span className="stander" to="#">₨2000</span>
          </span>
        </div>
      </nav>
      <nav className="navbar">
        <div className="container-fluid text-center">
          <span className="set fs-6 fw-bold pt-3">♡ 300,000+ Happy Customers</span>
        </div>
      </nav>
      
<hr />
      {/* Main navigation */}
      <nav className="navbar navbar-expand-lg">
        
        <div className="container-fluid">
          {/* Logo */}
          <Link to="/" className="navbar-brand">
            <img src="./images/missrose.webp" alt="" style={{ width:"100%",paddingLeft:"60px" }} />
          </Link>

          {/* Toggler for responsive menu */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto ">
              <li className="nav-itemn a">
                <Link className="nav-link px-4" to="/Home">HOME</Link>
              </li>
             
              <li className="nav-item a">
                <Link className="nav-link px-4" to="/Shop">SHOP</Link>
              </li>
              <li className="nav-item a">
                <Link className="nav-link px-4" to="/Newarrivals">NEW ARRIVALS</Link>
              </li>
              <li className="nav-item dropdown a">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CATEGORIES
                </Link>
                <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                
                  <li><Link className="dropdown-item " to="/Face">Face</Link></li>
                  <li><Link className="dropdown-item" to="/Lip">Lips</Link></li>
                  <li><Link className="dropdown-item" to="/Cheek">Cheeks</Link></li>
                  <li><Link className="dropdown-item" to="/eye">Eyes</Link></li>
                  <li><Link className="dropdown-item" to="/nail">Nails</Link></li>
                  <li><Link className="dropdown-item" to="/body-shimmer">Body Shimmer Mist</Link></li>

                </ul>
                
              </li>
              <li className="nav-item  a">
                <Link className="nav-link px-4" to="/About-us">ABOUT US</Link>
              </li>
              <li className="nav-item a">
                <Link className="nav-link px-4" to="/Contact-us">CONTACT US</Link>
              </li>
              <li className="nav-item a">
                <Link className="nav-link px-4" to="/FAQs">FAQs</Link>
              </li>
            </ul>
            <hr />

            {/* Icons */}
            <div className="navbar-nav d-flex align-items-center">
              <Link className="nav-link px-3 fs-4" to="#"><CiSearch /></Link>
              <Link className="nav-link px-3 fs-4" to="/Log"><IoPersonOutline /></Link>
              <Link className="nav-link px-3 fs-4" to="#"><HiOutlineShoppingBag /></Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
