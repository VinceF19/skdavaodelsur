import React, { useState } from "react";
import HomeBackground from "../assets/HomeBackground.png";

const HeroSection = ({ data, category }) => {
  const [selectedPerson, setSelectedPerson] = useState(data[0]);

  return (
    <div
      className="hero-section text-white d-flex p-4"
      style={{
        backgroundImage: `url(${HomeBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "60vh",
        position: "relative",
      }}
    >
      <div
        className="hero-overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      ></div>

      <div
        className="container d-flex align-items-center justify-content-between"
        style={{ zIndex: 1 }}
      >
        <div className="text-start" style={{ flex: 2 }}>
          <h1 className="display-3 fw-bold">{selectedPerson.name}</h1>
          <p className="lead fs-2">{selectedPerson.title}</p>
          {/* Conditionally render the "Date of Birth" field */}
          {category === "officials" && selectedPerson.dob && (
            <p className="lead fs-5 pt-3">
              <b>Date of Birth:</b> {selectedPerson.dob}
            </p>
          )}
          <p className="lead fs-5 pt-3">
            <b>Office Address:</b> {selectedPerson.address}
          </p>
          {selectedPerson.chapterPres && (
            <p className="lead fs-5 pt-3">
              <b>Chapter President:</b> {selectedPerson.chapterPres}
            </p>
          )}
          {selectedPerson.contactNum && (
            <p className="lead fs-5 pt-3">
              <b>Contact Number:</b> {selectedPerson.contactNum}
            </p>
          )}
        </div>

        <div
          className="employee-list p-3 rounded"
          style={{
            flex: 1,
            maxHeight: "400px",
            overflowY: "auto",
            color: "black",
          }}
        >
          <ul className="list-unstyled text-white">
            {data.map((person, index) => (
              <li
                key={index}
                className={`p-2 my-2 text-center ${
                  person.name === selectedPerson.name ? "fw-bold" : ""
                }`}
                style={{
                  cursor: "pointer",
                }}
                onClick={() => setSelectedPerson(person)}
              >
                {person.name === selectedPerson.name && "→ "}
                {person.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
