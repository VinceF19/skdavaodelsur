import React, { useState } from "react";
import HomeBackground from "../assets/HomeBackground.png";

const HeroSection = () => {
  const [selectedPerson, setSelectedPerson] = useState({
    name: "Hon. Vince Fernandez",
    title: "Mayor, City of Matanao",
    dob: "December 19, 2002",
    address:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque esse veritatis quod quia, explicabo expedita. Illum, error nemo porro sapiente nostrum nihil aspernatur. Vero suscipit cum ipsum? Ipsum, modi labore?",
  });

  const people = [
    {
      name: "Hon. Vince Fernandez",
      title: "Mayor, City of Matanao",
      dob: "December 19, 2002",
      address:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque esse veritatis quod quia, explicabo expedita. Illum, error nemo porro sapiente nostrum nihil aspernatur. Vero suscipit cum ipsum? Ipsum, modi labore?",
    },
    {
      name: "Hon. Jane Doe",
      title: "Vice Mayor, City of Matanao",
      dob: "April 15, 1985",
      address:
        "123 Main St, Matanao City. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quos.",
    },
    {
      name: "Hon. John Smith",
      title: "City Councilor, City of Matanao",
      dob: "July 9, 1990",
      address:
        "45 Oak Street, Matanao City. Expedita error nemo possimus asperiores itaque facilis magnam!",
    },
  ];

  return (
    <div
      className="hero-section text-white d-flex p-4"
      style={{
        backgroundImage: `url(${HomeBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
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
          <p className="lead fs-5 pt-3">
            <b>Date of Birth:</b> {selectedPerson.dob}
          </p>
          <p className="lead fs-5 pt-3">
            <b>Office Address:</b> {selectedPerson.address}
          </p>
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
          <h1 className="py-2 my-2 text-center fs-6 text-white">
            Officials / All
          </h1>
          <ul className="list-unstyled text-white">
            {people.map((person, index) => (
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
