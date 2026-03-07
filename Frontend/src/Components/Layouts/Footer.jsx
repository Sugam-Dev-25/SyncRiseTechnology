import React from "react";
import {
  RiFacebookLine,
  RiLinkedinLine,
  RiInstagramLine,
} from "react-icons/ri";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const footerBg = "linear-gradient(90deg, #0f0028 0%, #16022fff 100%)";
const iconBg = "linear-gradient(90deg, #2563eb 0%, #a855f7 100%)";

const Footer = () => {
  return (
    <footer style={{ background: footerBg, color: "#cbd5e1" }} className="pt-5">
      {/* underline animation style */}
      <style>
        {`
          .footer-title {
            position: relative;
            display: inline-block;
            padding-bottom: 8px;
          }
          .footer-title::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 40px;
            height: 3px;
            background: ${iconBg};
            border-radius: 2px;
            animation: underlineMove 2s ease-in-out infinite alternate;
          }
          @keyframes underlineMove {
            from { width: 25px; }
            to { width: 60px; }
          }
        `}
      </style>

      <div className="container-fluid px-4">
        <div className="row gy-4">
          {/* ABOUT US */}
          <div className="col-xl-3 col-lg-3 col-md-6">
            <h5 className="text-white fw-semibold mb-4 footer-title">
              About Us
            </h5>
            <p style={{ fontSize: "15px", lineHeight: "1.8" }}>
              Syncrise Technology is a digital solutions company specializing in
              SEO, web development, and digital marketing services worldwide.
            </p>

            <div className="d-flex gap-2 mt-3 flex-wrap">
              {[RiFacebookLine, RiLinkedinLine, RiInstagramLine].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: 36,
                      height: 36,
                      background: iconBg,
                      color: "#fff",
                    }}
                  >
                    <Icon size={16} />
                  </div>
                )
              )}
            </div>
          </div>

          {/* OUR SERVICES */}
          <div className="col-xl-3 col-lg-3 col-md-6">
            <h5 className="text-white fw-semibold mb-4 footer-title">
              Our Service
            </h5>
            {[
              "Web Designing",
              "Ui/Ux Design",
              "Web Development",
              "WordPress Development",
              "Shopify Development",
              "MernStack Development",
              "SEO Optimization",
            ].map((item) => (
              <p key={item} className="mb-2">
                {item}
              </p>
            ))}
          </div>

          {/* QUICK LINKS */}
          <div className="col-xl-3 col-lg-3 col-md-6">
            <h5 className="text-white fw-semibold mb-4 footer-title">
              Quick Links
            </h5>
            {[
              "Home",
              "About",
              "Services",
              "Portfolio",
              "Blog",
              "Contact",
              
            ].map((item) => (
              <p key={item} className="mb-2">
                {item}
              </p>
            ))}
          </div>

          {/* LOCATION US */}
          <div className="col-xl-3 col-lg-3 col-md-6">
            <h5 className="text-white fw-semibold mb-4 footer-title">
              Location Us
            </h5>

            {/* Phone */}
            <div className="d-flex align-items-start mb-3">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center me-3"
                style={{
                  width: 36,
                  height: 36,
                  background: iconBg,
                  color: "#fff",
                  flexShrink: 0,
                }}
              >
                <FiPhone size={16} />
              </div>
              <div>
                <div style={{ fontSize: "14px", opacity: 0.8 }}>
                  Contact No.
                </div>
                <div className="fw-semibold text-white">
                  +91-7044-197-767
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="d-flex align-items-start mb-3">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center me-3"
                style={{
                  width: 36,
                  height: 36,
                  background: iconBg,
                  color: "#fff",
                  flexShrink: 0,
                }}
              >
                <FiMail size={16} />
              </div>
              <div>
                <div style={{ fontSize: "14px", opacity: 0.8 }}>
                  Mail ID
                </div>
                <div className="fw-semibold text-white">
                  sugam@syncrisetechnology.in
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="d-flex align-items-start">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center me-3"
                style={{
                  width: 36,
                  height: 36,
                  background: iconBg,
                  color: "#fff",
                  flexShrink: 0,
                }}
              >
                <FiMapPin size={16} />
              </div>
              <div>
                <div style={{ fontSize: "14px", opacity: 0.8 }}>
                  Address
                </div>
                <div className="fw-semibold text-white">
                  Kolkata, West Bengal, India
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
