import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; //Link: Used for internal navigation between routes without page reload.
//useLocation: Gives access to the current route (pathname), useful for highlighting active menu items.
import { IoIosCloseCircleOutline } from "react-icons/io";
//Imports a close icon for closing the sidebar on mobile.
import {
  FaBars,
  FaHome,
  FaChartBar,
  FaMapMarkerAlt,
  FaShoppingCart,
  FaMap,
  FaStar,
  FaLink,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import "../Sidebar.css";

const Sidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);//Controls whether the mobile sidebar is open or not.
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);//Tracks if the current screen size is mobile (true if width ≤ 768px).

  const location = useLocation(); // track current route
//Gets the current browser route (e.g., /analytics) to highlight the active link.
  useEffect(() => {
    //Adds an event listener to detect screen resizing.

//Updates isMobile if window width crosses 768px.

//Cleans up the listener when the component unmounts.
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
//Closes the mobile sidebar.
  const handleClose = () => setIsMobileOpen(false);
  const handleLinkClick = () => {
    if (isMobile) setIsMobileOpen(false);//Closes the sidebar only on mobile when any link is clicked.
  };

  // Reusable function to apply active class
  const isActive = (path) => (location.pathname === path ? "sidebar-item active" : "sidebar-item");//Checks if the current route matches the given path.
//Returns the class active to highlight the selected menu item.
  return (
    <>
      {isMobile && (
        <div className="mobile-topbar mt-0">
          <button className="mobile-toggle-btn" onClick={() => setIsMobileOpen(true)}>
            <FaBars />
          </button>
        </div>
      )}

      {isMobile && isMobileOpen && <div className="backdrop" onClick={handleClose}></div>}

      <div className={`sidebar ${isMobile && isMobileOpen ? "mobile-open" : ""}`}>
        {isMobile && (
          <button className="close-sidebar-btn" onClick={handleClose}>
            <IoIosCloseCircleOutline />
          </button>
        )}

        <nav className="mt-5">
        <Link to="/" className={isActive("/")} onClick={handleLinkClick}>
  <FaHome />
  <span>Overview</span>
</Link>
          
          <Link to="/analytics" className={isActive("/analytics")} onClick={handleLinkClick}>
            <FaChartBar />
            <span>Analytics</span>
          </Link>
          <Link to="/footprints" className={isActive("/footprints")} onClick={handleLinkClick}>
            <FaMapMarkerAlt />
            <span>Footprints</span>
          </Link>
          <Link to="/materials" className={isActive("/materials")} onClick={handleLinkClick}>
            <FaShoppingCart />
            <span>Campaign Materials</span>
          </Link>
          <Link to="/event-maps" className={isActive("/event-maps")} onClick={handleLinkClick}>
            <FaMap />
            <span>Event Maps</span>
          </Link>
          <Link to="/achievements" className={isActive("/achievements")} onClick={handleLinkClick}>
            <FaStar />
            <span>Achievements</span>
          </Link>
         
          <Link to="/links" className={isActive("/links")} onClick={handleLinkClick}>
            <FaLink />
            <span>Essential Links</span>
          </Link>
          <div className="mt-5"></div>
          <Link to="/profile" className={isActive("/profile")} onClick={handleLinkClick}>
            <FaUser />
            <span>My Profile</span>
          </Link>
          <Link to="/settings" className={isActive("/settings")} onClick={handleLinkClick}>
            <FaCog />
            <span>Settings</span>
          </Link>
          <Link to="/login" className={isActive("/logout")} onClick={handleLinkClick}>
  <FaSignOutAlt />
  <span>Logout</span>
</Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
