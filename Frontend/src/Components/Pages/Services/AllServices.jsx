import React, { useEffect, useState } from "react";
import { getServices } from "../../../Api/Api";
import { Link } from "react-router-dom";

const AllServices = () => {
  const [data, setData] = useState([]);

useEffect(() => {
  getServices().then((res) => {
    setData(res.reverse()); // 🔥 order fix
  });
}, []);

  const truncateContent = (html, wordLimit = 40) => {
    const text = html.replace(/<[^>]+>/g, ""); // remove HTML tags
    const words = text.split(" ");

    if (words.length <= wordLimit) return text;

    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <div className="container py-5">
      <div className="row g-4">
        {data.map((item) => (
          <div key={item.id} className="col-md-6 col-lg-4">
            <div
              className="card h-100 border-0"
              style={{
                background: "#f5f5f5",
                borderRadius: "20px",
                overflow: "hidden",
                transition: "0.3s",
              }}
            >
              {/* Image */}
              <div style={{ overflow: "hidden" }}>
                <img
                  src={item.image_url}
                  alt={item.title.rendered}
                  className="w-100"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                    transition: "0.4s",
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-4 " style={{color:"#170034"}}>
                <h4
                  className="fw-bold mb-2"
                  dangerouslySetInnerHTML={{
                    __html: item.title.rendered,
                  }}
                />

                {/* ✅ ONLY CHANGE HERE */}
                <div
                  className=" mb-3"
                  style={{ fontSize: "16px", opacity: "0.8", color:"#666" }}
                >
                  {truncateContent(item.content.rendered, 25)}
                </div>

                <Link
                  to={`/services/${item.slug}`}
                  style={{
                    background: "linear-gradient(90deg, #2563eb, #a855f7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  View More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllServices;