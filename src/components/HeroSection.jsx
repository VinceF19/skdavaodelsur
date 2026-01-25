import React from "react";
import HomeBackground from "../assets/bgsk.jpg";
import "./HeroSection.css";

const HeroSection = ({ data, selectedPerson, onSelect }) => {
  if (!selectedPerson) return null;

  const isProvincial = selectedPerson.type === "provincial";

  return (
    <section
      className="official-hero"
      style={{ backgroundImage: `url(${HomeBackground})` }}
    >
      <div className="official-overlay" />

      <div className="container official-grid">

        {/* PHOTO */}
        <div className="official-photo">
          <div className={isProvincial ? "glass-frame" : "photo-frame"}>
            <img
              src={selectedPerson.image}
              alt={selectedPerson.name}
              loading="lazy"
              onError={(e) =>
                (e.target.src =
                  "https://via.placeholder.com/400x520?text=No+Photo")
              }
            />
          </div>
        </div>

        {/* INFO */}
        <div className="official-info">
          <h1>{selectedPerson.name}</h1>
          <h2>{selectedPerson.title}</h2>
        </div>

        {/* DESKTOP DIRECTORY */}
        <aside className="official-directory">
          <p className="directory-label">DIRECTORY</p>
          <ul>
            {data.map((person) => (
              <li
                key={person.name}
                className={
                  person.name === selectedPerson.name
                    ? "active"
                    : ""
                }
                onClick={() => onSelect(person)}
              >
                {person.name}
              </li>
            ))}
          </ul>
        </aside>

      </div>

      {/* MOBILE SELECTOR */}
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
    </section>
  );
};

export default HeroSection;
