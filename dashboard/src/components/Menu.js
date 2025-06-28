import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // ✅ Read user info from URL query parameters
  const getQueryParam = (key) => {
    return new URLSearchParams(window.location.search).get(key);
  };

  const userName = getQueryParam("name") || "User";
  const userEmail = getQueryParam("email") || "user@example.com";
  const userInitial = userName.charAt(0).toUpperCase();

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo11.jpg" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds" onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/apps" onClick={() => handleMenuClick(6)}>
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick} style={{ position: "relative", cursor: "pointer" }}>
          <div className="avatar">{userInitial}</div>
          <p className="username">{userName}</p>

          {isProfileDropdownOpen && (
            <div
              ref={dropdownRef}
              className="profile-dropdown"
              style={{
                position: "absolute",
                top: "60px",
                right: "0px",
                backgroundColor: "white",
                border: "1px solid #ddd",
                borderRadius: "5px",
                padding: "10px 15px",
                boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
                width: "220px",
                zIndex: 1000,
              }}
            >
              <p><strong>{userName}</strong></p>
              <p style={{ fontSize: "12px", color: "#888" }}>{userEmail}</p>

              <p>My profile / Settings</p>
              <p>Console</p>
              <p>Coin</p>
              <p>Support</p>
              <p>Invite friends</p>
              <hr />
              <p>Tour Kite</p>
              <p>Keyboard shortcuts</p>
              <p>Help</p>
              <a
                href="https://aconova.onrender.com"
                style={{ textDecoration: "none", color: "red" }}
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
