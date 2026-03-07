import React, { useEffect, useState } from "react";

const services = [
  {
    title:
      "Professional Web Designing That Creates Strong Brand Identity",
    desc:
      "We craft visually stunning, user-friendly, and fully responsive website designs that help businesses build trust, improve user experience, and increase engagement across all devices.",
    highlight: "Web Designing",
    highlightColor: "#6b5cff",
  },
  {
    title:
      "High Performance Web Development for Scalable Digital Growth",
    desc:
      "We build fast, secure, and scalable web applications using modern technologies, ensuring smooth performance, strong architecture, and long-term business growth.",
    highlight: "Web Development",
    highlightColor: "#ff3d81",
  },
  {
    title:
      "MERN Stack Development for Modern Web Applications",
    desc:
      "We develop powerful full stack applications using MongoDB, Express, React, and Node.js, delivering high performance, flexibility, and scalable digital solutions.",
    highlight: "MERN Stack",
    highlightColor: "#2c8044ff",
  },
  {
    title:
      "UI UX Design That Enhances User Experience and Conversions",
    desc:
      "We design intuitive, visually appealing, and user-focused UI/UX interfaces that improve usability, customer satisfaction, and conversion rates across platforms.",
    highlight: "UI UX Design",
    highlightColor: "#0ea5e9",
  },
  {
    title:
      "E Commerce Development That Drives Sales and Experience",
    desc:
      "We develop powerful e-commerce platforms with secure payment systems, smooth checkout experiences, and conversion-focused design to maximize online sales.",
    highlight: "E Commerce",
    highlightColor: "#ff8a00",
  },
];


const HeroBanner = () => {
  const [index, setIndex] = useState(0);
  const active = services[index];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // 🔥 Word-by-word drop + highlight + subtle gradient overlay
  const renderAnimatedTitle = (title, highlight, highlightColor) => {
    return title.split(" ").map((word, i) => {
      const isHighlight = highlight.includes(word);

      return (
        <span
          key={i}
          style={{
            display: "inline-block",
            marginRight: 8,
            opacity: 0,
            animation: "drop 0.6s ease forwards",
            animationDelay: `${i * 0.08}s`,

            /* Base text */
            color: isHighlight ? highlightColor : "#1e1b39",
            fontWeight: isHighlight ? 900 : 700,

            /* Subtle gradient overlay on normal text */
            background: !isHighlight
              ? "linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(45, 45, 45, 0.79), rgba(112, 112, 112, 1))"
              : "none",
            WebkitBackgroundClip: !isHighlight ? "text" : "offset",
            WebkitTextFillColor: !isHighlight ? "transparent" : highlightColor,

            /* Depth */
            textShadow: isHighlight
              ? `0 6px 22px ${highlightColor}55`
              : "0 2px 6px rgba(0,0,0,0.08)",
          }}
        >
          {word}
        </span>
      );
    });
  };

  return (
    <section
      className="d-flex align-items-center text-center"
      style={{
        minHeight: "70vh",
        background:
          "linear-gradient(135deg, #e8edff 0%, #f4f6ff 45%, #ffffff 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animations */}
      <style>
        {`
          @keyframes drop {
            from {
              transform: translateY(-40px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-22px); }
            100% { transform: translateY(0); }
          }

          .floating {
            position: absolute;
            animation: float 7s ease-in-out infinite;
          }
        `}
      </style>

      {/* Floating Shapes */}
      {[
        { top: "12%", left: "8%", size: 10, bg: "#6b5cff" },
        { top: "18%", right: "14%", size: 14, bg: "#ff8a00" },
        { bottom: "20%", left: "18%", size: 16, border: "2px solid #ff3d81" },
        { bottom: "18%", right: "16%", size: 8, bg: "#00c2ff" },
        { top: "40%", left: "6%", size: 12, border: "2px solid #6b5cff", radius: "50%" },
        { top: "45%", right: "8%", size: 14, bg: "#ff3d81" },
        { bottom: "35%", right: "30%", size: 10, bg: "#ff8a00" },
        { top: "30%", right: "35%", size: 12, border: "2px solid #00c2ff", rotate: true },
      ].map((o, i) => (
        <span
          key={i}
          className="floating"
          style={{
            top: o.top,
            left: o.left,
            right: o.right,
            bottom: o.bottom,
            width: o.size,
            height: o.size,
            background: o.bg,
            border: o.border,
            borderRadius: o.radius || (o.border ? 0 : "50%"),
            transform: o.rotate ? "rotate(45deg)" : "none",
            animationDelay: `${i}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="container px-3">
        <h1
          key={active.title}
          style={{
            fontSize: "clamp(2.4rem, 4.8vw, 3.6rem)",
            lineHeight: 1.25,
            maxWidth: 1000,
            margin: "0 auto",
          }}
        >
          {renderAnimatedTitle(
            active.title,
            active.highlight,
            active.highlightColor
          )}
        </h1>

        <p
          key={active.desc}
          className="mx-auto mt-4"
          style={{
            maxWidth: 820,
            fontSize: "18px",
            lineHeight: 1.8,
            color: "#4b5563",
            animation: "drop 0.8s ease",
          }}
        >
          {active.desc}
        </p>

        {/* Buttons */}
        <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
          <button
            className="btn px-4 py-2 rounded-pill fw-semibold text-white"
            style={{
              background: active.highlightColor,
              border: "none",
            }}
          >
            Learn More
          </button>

          <button
            className="btn px-4 py-2 rounded-pill fw-semibold"
            style={{
              background: "transparent",
              border: `2px solid ${active.highlightColor}`,
              color: active.highlightColor,
            }}
          >
            Contact Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
