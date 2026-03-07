import React from "react";
import { RiFacebookLine, RiLinkedinLine } from "react-icons/ri";
import { PiInstagramLogoThin } from "react-icons/pi";

const TopHeader = () => {
  return (
    <div
      className="d-none d-md-block"
      style={{
        background:
          "linear-gradient(90deg, #2563eb 0%, #a855f7 100%)",
        color: "#fff",
        fontSize: "14px",
      }}
    >
      <div className="container-fluid px-4">
        <div className="row align-items-center py-2">
          {/* Left Info */}
          <div className="col-md-8 d-flex flex-wrap gap-4">
            <span>
              <i className="bi bi-telephone me-2"></i>
              Phone: +91-7044-197-767
            </span>

            <span>
              <i className="bi bi-envelope me-2"></i>
              Mail: sugam@syncrisetechnology.in
            </span>

            <span>
              <i className="bi bi-geo-alt me-2"></i>
              Address: Kolkata, West Bengal, India
            </span>
          </div>

          {/* Social Icons */}
          <div className="col-md-4 text-end">
            {/* Facebook */}
            <a
              href="#"
              className="bg-white text-dark rounded-circle d-inline-flex align-items-center justify-content-center ms-2"
              style={{ width: 32, height: 32 }}
            >
              <RiFacebookLine size={16} />
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              className="bg-white text-dark rounded-circle d-inline-flex align-items-center justify-content-center ms-2"
              style={{ width: 32, height: 32 }}
            >
              <RiLinkedinLine size={16} />
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="bg-white text-dark rounded-circle d-inline-flex align-items-center justify-content-center ms-2"
              style={{ width: 32, height: 32 }}
            >
              <PiInstagramLogoThin size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
