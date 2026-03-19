import React, { useState } from "react";
import "./InfoBar.css";

const CATEGORIES = [
  { key: "officials", label: "Officials" },
  { key: "youth",     label: "Youth Officials" },
];

const InfoBar = ({ onCategoryChange }) => {
  const [active, setActive] = useState("officials");

  const handleChange = (key) => {
    setActive(key);
    onCategoryChange(key);
  };

  return (
    <nav className="info-bar">
      {CATEGORIES.map(({ key, label }) => (
        <button
          key={key}
          className={`info-bar-btn${active === key ? " active" : ""}`}
          onClick={() => handleChange(key)}
        >
          {label}
        </button>
      ))}
    </nav>
  );
};

export default InfoBar;
