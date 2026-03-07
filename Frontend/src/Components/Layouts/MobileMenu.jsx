import React from "react";
import {
  RiFacebookLine,
  RiLinkedinLine,
  RiInstagramLine,
} from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const gradientBg = "linear-gradient(90deg, #2563eb 0%, #a855f7 100%)";

const MobileMenu = ({ show, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {show && (
        <div
          onClick={onClose}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            zIndex: 1040,
          }}
        />
      )}

      {/* Mobile Menu */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "100%",
          maxWidth: "320px",
          height: "100vh",
          background: "#fff", // ✅ WHITE like sidebar
          transform: show ? "translateX(0)" : "translateX(100%)",
          transition: "0.3s ease",
          zIndex: 1050,
          overflowY: "auto",
        }}
      >
        {/* Header (Logo + Close) */}
        <div className="d-flex justify-content-between align-items-center p-4">
          <h5 className="fw-bold mb-0">
            SyncRise <span style={{ color: "#a855f7" }}>Technology</span>
          </h5>

          <button
            onClick={onClose}
            className="border-0 rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: 36,
              height: 36,
              background: gradientBg,
              color: "#fff",
            }}
          >
            <AiOutlineClose />
          </button>
        </div>

        {/* Menu Content */}
        <div className="p-4">
          <ul className="list-unstyled d-flex flex-column gap-3 mb-4">
            {[
              "Home",
              "About",
              "Services",
              "Portfolio",
              "Blog",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  onClick={onClose}
                  className="fw-medium text-dark text-decoration-none"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="d-flex gap-2">
            {[RiFacebookLine, RiLinkedinLine, RiInstagramLine].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: 36,
                    height: 36,
                    background: gradientBg,
                    color: "#fff",
                  }}
                >
                  <Icon size={16} />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
