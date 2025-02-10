import React, { useState, useEffect, useMemo } from "react";
import HeroSection from "../components/HeroSection";
import InfoBar from "../components/InfoBar";
import Footer from "../components/Footer";
import "./GovernmentPage.css"; // Import a CSS file for custom styles

const GovernmentPage = () => {
  const [category, setCategory] = useState("officials");
  const [selectedData, setSelectedData] = useState(null);

  const officials = [
    {
      name: "Hon. Yvonne R. Cagas",
      title: "Governor, Province of Davao del Sur",
      dob: "December 19, 2002",
    },
    {
      name: "Hon. Riafe Cagas-Fernandez",
      title: "Vice Governor, Province of Davao del Sur",
      dob: "April 15, 1985",
    },
    {
      name: "Hon. John Tracy Cagas",
      title: "Lone District Representative, Province of Davao del Sur",
      dob: "July 9, 1990",
    },
  ];

  const youthOrganizations = [
    {
      name: "Hon. Justin Adrian F. Siao",
      title: "SK Provincial Federation President, Province of Davao Del Sur",
      dob: "July 9, 1990",
    },
    {
      name: "Hon. Patrick Dhen S. Jera",
      title:
        "SK Provincial Federation Vice President, Province of Davao Del Sur",
      dob: "July 9, 1990",
    },
    {
      name: "Hon. Zenda Alaiza Mae E. Enero",
      title: "SK Provincial Federation Secretary, Province of Davao Del Sur",
      dob: "July 9, 1990",
    },
    {
      name: "Hon. Gwyneth S. Manlangit",
      title: "SK Provincial Federation Treasurer, Province of Davao Del Sur",
      dob: "July 9, 1990",
    },
    {
      name: "Hon. Julian B. Pascua",
      title: "SK Provincial Federation Auditor, Province of Davao Del Sur",
      dob: "July 9, 1990",
    },
    {
      name: "Hon. Loleimer John A. Egos",
      title: "SK Provincial Federation PRO, Province of Davao Del Sur",
      dob: "July 9, 1990",
    },
  ];

  const data = useMemo(
    () => (category === "officials" ? officials : youthOrganizations),
    [category]
  );

  useEffect(() => {
    setSelectedData(data[0]);
  }, [data]);

  return (
    <div className="government-page">
      {/* Hero Section */}
      <div className="hero-section">
        <HeroSection
          data={data}
          selectedData={selectedData}
          onSelect={setSelectedData}
        />
      </div>

      {/* Category Selector */}
      <div className="category-selector">
        <InfoBar onCategoryChange={setCategory} />
      </div>

      {/* Footer */}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default GovernmentPage;
