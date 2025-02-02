import React, { useState } from "react";

const InfoBar = ({ onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState("officials");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  return (
    <section className="text-center p-2 bg-light w-100">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex gap-2">
          <h2
            className={`mb-0 text-uppercase p-2 ${
              activeCategory === "officials" ? "text-white" : ""
            }`}
            style={{
              letterSpacing: 3,
              cursor: "pointer",
              backgroundColor:
                activeCategory === "officials" ? "#001540" : "transparent",
            }}
            onClick={() => handleCategoryChange("officials")}
          >
            OFFICIALS
          </h2>
          <h2
            className={`mb-0 text-uppercase p-2 ${
              activeCategory === "youth" ? "text-white" : ""
            }`}
            style={{
              letterSpacing: 3,
              cursor: "pointer",
              backgroundColor:
                activeCategory === "youth" ? "#001540" : "transparent",
            }}
            onClick={() => handleCategoryChange("youth")}
          >
            YOUTH OFFICIALS
          </h2>
        </div>
      </div>
    </section>
  );
};

export default InfoBar;
