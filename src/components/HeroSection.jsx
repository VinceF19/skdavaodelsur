import React, { useState, useEffect } from "react";
import HomeBackground from "../assets/bgsk.jpg";

const HeroSection = ({ data }) => {
  const [selectedPerson, setSelectedPerson] = useState(data[0]);

  // Sync state when switching between categories (Officials/SK)
  useEffect(() => {
    setSelectedPerson(data[0]);
  }, [data]);

  return (
    <div className="hero-container" style={{ backgroundImage: `url(${HomeBackground})` }}>
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <div className="row align-items-center">
          
          {/* PHOTO COLUMN */}
          <div className="col-lg-4 col-md-5 text-center">
            <div className="photo-frame">
              <img 
                src={selectedPerson.image} 
                alt={selectedPerson.name}
                onError={(e) => { e.target.src = "https://via.placeholder.com/400x500?text=No+Photo"; }}
              />
            </div>
          </div>

          {/* INFO COLUMN - Profession Removed */}
          <div className="col-lg-5 col-md-7 text-white mt-4 mt-md-0">
            <h1 className="display-4 fw-bold mb-2">{selectedPerson.name}</h1>
            <h2 className="h3 text-warning fw-semibold">{selectedPerson.title}</h2>
          </div>

          {/* NAV COLUMN */}
          <div className="col-lg-3 d-none d-lg-block">
            <div className="side-nav-container">
              <p className="text-white-50 small fw-bold mb-3 px-2">PROVINCIAL DIRECTORY</p>
              <ul className="list-unstyled side-nav-list">
                {data.map((person, index) => (
                  <li 
                    key={index}
                    className={person.name === selectedPerson.name ? "active-item" : "inactive-item"}
                    onClick={() => setSelectedPerson(person)}
                  >
                    {person.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;