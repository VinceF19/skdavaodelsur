import React from "react";

const InfoBar = () => {
  return (
    <section className="text-center p-2 bg-light w-100">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex gap-2">
          {" "}
          {/* Reduce gap spacing */}
          <h2
            className="mb-0 text-uppercase p-1" // Reduce padding
            style={{
              letterSpacing: 3, // Reduce letter spacing
              backgroundColor: "rgba(0, 21, 64, 1)",
              color: "white",
            }}
          >
            OFFICIALS
          </h2>
          <h2
            className="mb-0 text-uppercase"
            style={{
              letterSpacing: 3, // Match the reduced letter spacing
            }}
          >
            YOUTH ORGANIZATIONS
          </h2>
        </div>
        <h2 className="mb-0">VIEW</h2>
      </div>
    </section>
  );
};

export default InfoBar;
