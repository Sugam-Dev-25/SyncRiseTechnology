import React from "react";
import bannerImg from "../../../assets/Images/About_Banner.jpg";

const AboutBanner = () => {
  return (
    <section
      style={{
        ...styles.wrapper,
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      {/* Overlay (NON-BLOCKING) */}
      <div style={styles.overlay}></div>

      {/* Content */}
      <div className="container position-relative h-100" style={{ zIndex: 2 }}>
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <h1 style={styles.title}>About SyncRise Technology</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;

/* ================= STYLES ================= */

const styles = {
  wrapper: {
    position: "relative",
    height: "420px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(90deg, rgba(55, 35, 80, 0.53), rgba(55,35,80,0.6))",
    zIndex: 1,
    pointerEvents: "none", // ✅ VERY IMPORTANT
  },

  title: {
    color: "#ffffff",
    fontSize: "clamp(28px, 5vw, 57px)", // ✅ responsive
    fontWeight: "700",
    marginBottom: "0",
    userSelect: "text", // ✅ force selectable
  },
};
