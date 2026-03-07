import React from "react";
import { RiFacebookLine, RiLinkedinLine } from "react-icons/ri";
import { PiInstagramLogoThin } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const gradientBg = "linear-gradient(90deg, #2563eb 0%, #a855f7 100%)";

const Sidebar = ({ show, onClose }) => {
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

      {/* Sidebar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100vh",
          width: "360px",
          maxWidth: "100%",
          background: "#fff",
          transform: show ? "translateX(0)" : "translateX(100%)",
          transition: "0.4s ease",
          zIndex: 1050,
          overflowY: "auto",
        }}
      >
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center p-4">
          <h4 className="fw-bold mb-0">
            SyncRise <span style={{ background:
                    "linear-gradient(90deg, #2563eb, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent", }}>Technology</span>
          </h4>

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

        {/* Content */}
        <div className="p-4">
          {/* ABOUT US */}
          <h5 className="fw-semibold mb-3">About Us</h5>
          <p style={{ fontSize: "15px", lineHeight: "1.7" }}>
            We are a leading technology solutions company delivering
            high-quality digital products and IT services worldwide.
          </p>

          <button
            className="btn text-white fw-medium px-4 py-2 rounded-pill mb-4"
            style={{ background: gradientBg }}
          >
            Let’s Talk
          </button>

          {/* OUR SERVICE */}
          <h5 className="fw-semibold mb-3">Our Service</h5>
          <ul
            className="list-unstyled mb-4"
            style={{ fontSize: "15px", lineHeight: "1.9" }}
          >
            {[
              "Web Designing",
              "Ui/Ux Design",
              "Web Development",
              "WordPress Development",
              "Shopify Development",
              "MernStack Development",
              "SEO Optimization",
            ].map((service) => (
              <li key={service} className="mb-1">
                {service}
              </li>
            ))}
          </ul>

          {/* CONTACT INFO */}
          <h5 className="fw-semibold mb-3">Contact Information</h5>

          <div className="d-flex align-items-center mb-3">
            <FiPhone className="me-2" />
            <span>+91-7044-197-767</span>
          </div>

          <div className="d-flex align-items-center mb-3">
            <FiMail className="me-2" />
            <span>sugam@syncrisetechnology.in</span>
          </div>

          <div className="d-flex align-items-center mb-4">
            <FiMapPin className="me-2" />
            <span>Kolkata, West Bengal, India</span>
          </div>

          {/* SOCIAL ICONS */}
          <div className="d-flex gap-2">
            {[RiFacebookLine, RiLinkedinLine, PiInstagramLogoThin].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: 40,
                    height: 40,
                    background: gradientBg,
                    color: "#fff",
                  }}
                >
                  <Icon size={18} />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
