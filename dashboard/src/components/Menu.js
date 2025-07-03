import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaClipboardList,
  FaBriefcase,
  FaChartBar,
  FaWallet,
  FaThLarge,
} from "react-icons/fa";
import WatchList from "./WatchList";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showWatchlist, setShowWatchlist] = useState(false);
  const dropdownRef = useRef(null);

  const getQueryParam = (key) => {
    return new URLSearchParams(window.location.search).get(key);
  };

  const userName = getQueryParam("name") || "User";
  const userEmail = getQueryParam("email") || "user@example.com";
  const userInitial = userName.charAt(0).toUpperCase();

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setShowWatchlist(false);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <>
      {/* Desktop Menu */}
      {!isMobile && (
        <div className="menu-container">
          <img src="logo11.jpg" style={{ width: "50px" }} />
          <div className="menus">
            <ul>
              <li>
                <Link to="/" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(0)}>
                  <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
                </Link>
              </li>
              <li>
                <Link to="/orders" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(1)}>
                  <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
                </Link>
              </li>
              <li>
                <Link to="/holdings" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(2)}>
                  <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
                </Link>
              </li>
              <li>
                <Link to="/positions" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(3)}>
                  <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
                </Link>
              </li>
              <li>
                <Link to="/funds" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(4)}>
                  <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
                </Link>
              </li>
              <li>
                <Link to="/apps" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(6)}>
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
                  <a href="https://aconova.onrender.com" style={{ textDecoration: "none", color: "red" }}>
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {isMobile && (
        <div className="profile" onClick={handleProfileClick} style={{ position: "relative", cursor: "pointer", }}>
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
                    // display: "flex",
                    // flexDirection: "column",
                    // alignItems: "flex-end",

                  }}
                >
                  <p><strong>{userName}</strong></p>
                  <p style={{ fontSize: "12px", color: "#888" }}>{userEmail}</p>
                  <p>My profile / Settings</p>
                  <p>Support</p>
                  <p>Invite friends</p>
                  <p>Help</p>
                  <a href="https://aconova.onrender.com" style={{ textDecoration: "none", color: "red" }}>
                    Logout
                  </a>
                </div>
              )}
        </div>
      )}


      {/* Mobile Bottom Menu */}
      {isMobile && !showWatchlist && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100vw",
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            height: "60px",
            borderTop: "1px solid #ccc",
            zIndex: 9999,
            boxShadow: "0 -1px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Link to="/" onClick={() => handleMenuClick(0)} style={{ textDecoration: "none", color: selectedMenu === 0 ? "black" : "gray", textAlign: "center" }}>
            <FaHome />
            <div style={{ fontSize: "12px" }}>Dashboard</div>
          </Link>
          <Link to="/orders" onClick={() => handleMenuClick(1)} style={{ textDecoration: "none", color: selectedMenu === 1 ? "black" : "gray", textAlign: "center" }}>
            <FaClipboardList />
            <div style={{ fontSize: "12px" }}>Orders</div>
          </Link>
          <Link to="/holdings" onClick={() => handleMenuClick(2)} style={{ textDecoration: "none", color: selectedMenu === 2 ? "black" : "gray", textAlign: "center" }}>
            <FaBriefcase />
            <div style={{ fontSize: "12px" }}>Holdings</div>
          </Link>
          <Link to="/positions" onClick={() => handleMenuClick(3)} style={{ textDecoration: "none", color: selectedMenu === 3 ? "black" : "gray", textAlign: "center" }}>
            <FaChartBar />
            <div style={{ fontSize: "12px" }}>Positions</div>
          </Link>
          <Link to="/funds" onClick={() => handleMenuClick(4)} style={{ textDecoration: "none", color: selectedMenu === 4 ? "black" : "gray", textAlign: "center" }}>
            <FaWallet />
            <div style={{ fontSize: "12px" }}>Funds</div>
          </Link>
          <div
            onClick={() => {
              setSelectedMenu(6);
              setShowWatchlist(true);
            }}
            style={{ textAlign: "center", cursor: "pointer", color: selectedMenu === 6 ? "black" : "gray" }}
          >
            <FaThLarge />
            <div style={{ fontSize: "12px" }}>Watchlist</div>
          </div>
        </div>
      )}

      {/* Mobile Watchlist Fullscreen */}
      {isMobile && showWatchlist && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "#fff",
            zIndex: 10000,
            overflowY: "scroll",
          }}
        >
          <button
            onClick={() => setShowWatchlist(false)}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              fontSize: "18px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              zIndex: 10001,
            }}
          >
            ❌
          </button>
          <WatchList />
        </div>
      )}
    </>
  );
};

export default Menu;
