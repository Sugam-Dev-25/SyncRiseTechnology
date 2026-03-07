import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// import logos
import logo1 from "../../../assets/Images/ReactJS.png";
import logo2 from "../../../assets/Images/NodeJS.png";
import logo3 from "../../../assets/Images/ExpressJS.png";
import logo4 from "../../../assets/Images/MongoDB.png";
import logo5 from "../../../assets/Images/HTML.png";
import logo6 from "../../../assets/Images/CSS.png";
import logo7 from "../../../assets/Images/JavaScript.png";
import logo8 from "../../../assets/Images/WordPress.png";
import logo9 from "../../../assets/Images/Shopify.png";
import logo10 from "../../../assets/Images/Framer.png";
import logo11 from "../../../assets/Images/Figma.png";
import logo12 from "../../../assets/Images/Tailwind.png";
import logo13 from "../../../assets/Images/MetarialUI.png";

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
];

// duplicate array for seamless loop
const sliderLogos = [...logos, ...logos];

const LogoCarousel = () => {
  return (
    <div
      className="container-fluid overflow-hidden"
      style={{
        background: "transparent",          // 🔥 transparent background
        marginTop: "-50px",                  // 🔥 overlay on banner
        marginBottom: "20px",
        position: "relative",
        zIndex: 5,                           // 🔥 stays above banner
      }}
    >
      <div
        className="d-flex align-items-center"
        style={{
          width: "max-content",
          animation: "logoScroll 18s linear infinite",
        }}
      >
        {sliderLogos.map((logo, index) => (
          <div
            key={index}
            className="d-flex justify-content-center align-items-center"
            style={{
              width: "180px",               // controls visible logo count
              padding: "0 24px",
              
            }}
          >
            <img
              src={logo}
              alt="technology logo"
              className="img-fluid"
              style={{
                maxHeight: "100px",
                objectFit: "contain",
                opacity: 0.85,
                transition: "0.3s ease",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                borderRadius: "50px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.85)}
            />
          </div>
        ))}
      </div>

      {/* Inline keyframes */}
      <style>
        {`
          @keyframes logoScroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default LogoCarousel;
