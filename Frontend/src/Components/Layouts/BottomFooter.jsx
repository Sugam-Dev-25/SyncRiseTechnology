import React from "react";

const BottomFooter = () => {
  return (
    <div style={{ background: "#0e0e1bff", color: "#b8a1fdff" }} className="py-3">
      <div className="container-fluid px-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <div style={{ fontSize: "14px" }}>
          © 2025 Syncrise Technology. All Rights Reserved.
        </div>

        <div style={{ fontSize: "14px" }}>
          Terms of use &nbsp;•&nbsp; Privacy Policy
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
