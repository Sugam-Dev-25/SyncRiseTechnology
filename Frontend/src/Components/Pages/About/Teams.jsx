import React, { useEffect, useState } from "react";
import { getTeams } from "../../../Api/Api";

const Teams = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTeams().then((res) => {
      setData(res); // ✅ full array
    });
  }, []);

  if (!data.length) return null;

  return (
    <div style={{ padding: "100px 0" }}>
      <div className="container">
        {data.map((item, index) => {
          const acf = item.acf;

          const image = item._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

          return (
            <div
              key={item.id}
              className={`row align-items-center mb-5 ${
                index % 2 !== 0 ? "flex-row-reverse" : ""
              }`}
            >
              {/* LEFT / RIGHT IMAGE */}
              <div className="col-md-5 text-center mb-4 mb-md-0">
                <img
                  src={image}
                  alt={item.title.rendered}
                  className="img-fluid"
                  style={{ maxWidth: "420px" }}
                />
              </div>

              {/* CONTENT */}
              <div className="col-md-7">
                <h2
                  className="fw-bold mb-3"
                  style={{
                    fontSize: "38px",
                    color: "#1c1c3a",
                  }}
                >
                  {item.title.rendered}
                </h2>

                <p
                  className="mb-3 fw-semibold"
                  style={{
                    fontSize: "16px",
                    background: "linear-gradient(90deg, #6a11cb, #2575fc)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {acf.designation}
                </p>

                <div
                  className="mb-3"
                  style={{
                    color: "#666",
                    lineHeight: "1.8",
                    fontSize: "16px",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: item.content.rendered,
                  }}
                />

                {/* SIGNATURE */}
                {acf.signature && (
                  <div
                    style={{
                      fontFamily: "'Allura', cursive",
                      fontSize: "34px",
                      color: "#000",
                    }}
                  >
                    {acf.signature}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Teams;
