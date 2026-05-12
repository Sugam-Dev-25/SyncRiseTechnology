import React from "react";
import Development from "../../../assets/Images/Development.png";
import Design from "../../../assets/Images/Designing.png";
import Seo from "../../../assets/Images/Seo.png";
import Graphic from "../../../assets/Images/Graphics.png";

const WhyChooseUs = () => {

  // ✅ Gradient reusable style
  const gradientText = {
    background: "linear-gradient(90deg, #9956F5, #4061EE)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  // ✅ Fixed image mapping (IMPORTANT)
  const services = [
    {
      title: "Web Development",
      desc: "We build fast, secure, and scalable websites using modern technologies like React, Node.js, and MongoDB to ensure high performance and seamless user experience.",
      img: Development,
    },
    {
      title: "Web Design",
      desc: "Our creative web design services focus on UI/UX, responsive layouts, and modern aesthetics to deliver visually appealing and user-friendly websites.",
      img: Design,
    },
    {
      title: "SEO Optimization",
      desc: "Improve your website ranking on Google with our advanced SEO strategies including keyword optimization, technical SEO, and content marketing.",
      img: Seo,
    },
    {
      title: "Graphic Design",
      desc: "We create stunning visuals including logos, banners, and brand assets that help your business stand out and build a strong brand identity.",
      img: Graphic,
    },
  ];

  return (
    <section
      className="py-5"
      style={{ backgroundColor: "#f5f5f7" }}
    >
      <div className="container text-center">

        {/* Top Title */}
        <p
          className="fw-bold text-uppercase mb-2"
          style={{ color: "#4061EE", letterSpacing: "1px" }}
        >
          Why Choose Us
        </p>

        {/* Heading */}
        <h1
          className="fw-bold mb-3"
          style={{
            color: "#1e1b4b",
            fontSize: "clamp(30px, 3.5vw, 46px)",
          }}
        >
          Boost Your Sales with{" "}
          <span style={gradientText}>Smart & Scalable</span>{" "}
          <br /> Digital Solutions
        </h1>

        {/* Description */}
        <p className="text-muted mb-5">
          We are leading technology solutions providing company all over the world doing
          over 40 years lorem ipsum dolor sit amet.
        </p>

        {/* Cards */}
        <div className="row g-4">
          {services.map((item, index) => (
            <div className="col-md-3 col-sm-6" key={index}>
              <div className="text-center px-3">

                {/* Icon Box */}
                <div
                  className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "20px",
                    background: "linear-gradient(135deg,#e0e7ff,#fce7f3)",
                    transform: "rotate(8deg)",
                    transition: "0.3s",
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      width: "50px",
                      transform: "rotate(-8deg)",
                    }}
                  />
                </div>

                {/* Title */}
                <h5
                  className="fw-bold"
                  style={{ color: "#1e1b4b" }}
                >
                  {item.title}
                </h5>

                {/* Description */}
                <p className="text-muted"
                  style={{ fontSize: "16px", color: "#666" }}
                
                >
                  {item.desc}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;