import React, { useState, useEffect } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import MobileMenu from "./MobileMenu";
import logo from "../../assets/Images/SyncRise_Technology_Logo.png"; 

const Header = () => {
  const [showDesktopSidebar, setShowDesktopSidebar] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 992);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleHamburgerClick = () => {
    if (isDesktop) {
      setShowDesktopSidebar(true);
    } else {
      setShowMobileMenu(true);
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-dark"
        style={{
          background:
            "linear-gradient(90deg, #0f0028 0%, #1b003b 100%)",
        }}
      >
        <div className="container-fluid px-3 px-lg-4 py-0 d-flex align-items-center">

          {/* Logo + Company Name */}
          <Link
            to="/"
            className="navbar-brand d-flex align-items-center gap-2 mb-0"
          >
            <img
              src={logo}
              alt="SyncRise Logo"
              style={{
                width: 80,
                height: 80,
                objectFit: "contain",
              }}
            />

            <span className="fw-bold fs-6 fs-lg-5 text-white">
              SyncRise{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #2563eb, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Technology
              </span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="navbar-nav ms-auto d-none d-lg-flex flex-row gap-4 align-items-center">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Portfolio", path: "/portfolio" },
              { name: "Blog", path: "/blog" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li className="nav-item" key={item.name}>
                <Link className="nav-link text-white fw-medium" to={item.path}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            onClick={handleHamburgerClick}
            className="border-0 rounded-circle d-flex align-items-center justify-content-center ms-3"
            style={{
              width: 42,
              height: 42,
              background:
                "linear-gradient(90deg, #2563eb 0%, #a855f7 100%)",
              color: "#fff",
            }}
          >
            <BiMenuAltRight size={24} />
          </button>
        </div>
      </nav>

      {/* Desktop Sidebar */}
      <Sidebar
        show={showDesktopSidebar}
        onClose={() => setShowDesktopSidebar(false)}
      />

      {/* Mobile Menu */}
      <MobileMenu
        show={showMobileMenu}
        onClose={() => setShowMobileMenu(false)}
      />
    </>
  );
};

export default Header;
