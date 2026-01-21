import React from "react";
import HomeBackground from "../assets/bgsk.jpg";

const HeroSection = ({ data, selectedPerson, onSelect }) => {
  if (!selectedPerson) return null;

  const isProvincial = selectedPerson.type === "provincial";

  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${HomeBackground})` }}
    >
      <div className="hero-overlay" />

      <div className="container hero-content">
        <div className="row align-items-center">

          {/* PHOTO */}
          <div className="col-lg-4 col-md-5 text-center">
            <div className={isProvincial ? "transparent-frame" : "photo-frame"}>
              <img
                src={selectedPerson.image}
                alt={selectedPerson.name}
                className="hero-official-img"
                loading="lazy"
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/400x500?text=No+Photo")
                }
              />
            </div>
          </div>

          {/* INFO */}
          <div className="col-lg-5 col-md-7 text-white mt-4 mt-md-0">
            <h1 className="display-4 fw-bold">{selectedPerson.name}</h1>
            <h2 className="h3 text-warning fw-semibold">
              {selectedPerson.title}
            </h2>
          </div>

          {/* SIDE NAV */}
          <div className="col-lg-3 d-none d-lg-block">
            <div className="side-nav-container">
              <p className="text-white-50 small fw-bold mb-3 px-2">
                DIRECTORY
              </p>
              <ul className="list-unstyled side-nav-list">
                {data.map((person) => (
                  <li
                    key={person.name}
                    className={
                      person.name === selectedPerson.name
                        ? "active-item"
                        : "inactive-item"
                    }
                    onClick={() => onSelect(person)}
                  >
                    {person.name}
                  </li>
                ))}
              </ul>
              {/* MOBILE SELECTOR */}
<div className="col-12 d-lg-none">
  <div className="mobile-selector">
    {data.map((person) => (
      <button
        key={person.name}
        className={
          person.name === selectedPerson.name ? "active" : ""
        }
        onClick={() => onSelect(person)}
      >
        {person.name}
      </button>
    ))}
  </div>
</div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
