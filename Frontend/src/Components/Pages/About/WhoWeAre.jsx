import React from "react";
import heroImg from "../../../assets/Images/Who_We_Are.jpg";

const WhoWeAre = () => {
  return (
    <section style={styles.section}>
      {/* FULL WIDTH LAYER */}
      <div className="container-fluid px-0">
        {/* SAME WIDTH AS HEADER */}
        <div className="container">
          <div className="row align-items-center">
            {/* LEFT IMAGE */}
            <div className="col-lg-6 mb-4 mb-lg-0 text-center">
              <div style={styles.imageWrap}>
                <img src={heroImg} alt="Who We Are" style={styles.mainImage} />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-lg-6">

              <h2 style={styles.heading}>
                An Emerging <span style={styles.gradientText}>All-In-One</span> IT & Technology Company
              </h2>

              <p style={styles.para}>
                SyncRise Technology is a growing IT solutions and technology
                startup founded by Sugam Karmakar, focused on helping businesses
                succeed through smart, scalable, and reliable digital solutions.
              </p>

              <p style={styles.para}>
                As a passionate and forward-thinking company, we deliver modern
                IT services including web development, application development,
                UI/UX design, e-commerce solutions, and digital transformation
                tailored to business needs. We believe technology should not
                only solve problems but also create real opportunities for
                growth, efficiency, and long-term success.
              </p>

              <p style={styles.para}>
                At SyncRise Technology, we work closely with our clients to
                understand their goals and transform ideas into impactful
                digital products for today’s competitive market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

/* ================= STYLES ================= */

const styles = {
  section: {
    padding: "90px 0",
    backgroundColor: "#ffffff",
  },

  imageWrap: {
    margin: "0 auto",
  },

  mainImage: {
    width: "100%",
    borderRadius: "26px",
    objectFit: "cover",
  },

  subTitle: {
    color: "#ffa200",
    fontWeight: 600,
    letterSpacing: "1px",
    marginBottom: "10px",
    textTransform: "uppercase",
  },

  heading: {
    fontSize: "clamp(30px, 3.5vw, 46px)",
    fontWeight: 800,
    color: "#1a083d",
    lineHeight: 1.25,
    marginBottom: "20px",
  },

  gradientText: {
    background: "linear-gradient(90deg, #9956F5, #4061EE)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  para: {
    color: "#666",
    fontSize: "16px",
    lineHeight: 1.75,
    marginBottom: "14px",
  },
};
