import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import InfoBar from "../components/InfoBar";
import Footer from "../components/Footer";
import "./GovernmentPage.css"; // Import a CSS file for custom styles

const GovernmentPage = () => {
  const [category, setCategory] = useState("officials");
  const [selectedData, setSelectedData] = useState(null);

  const officials = [
    { name: "Hon. Yvonne R. Cagas", title: "Governor, Province of Davao del Sur" },
    { name: "Hon. Marc Douglas Chan Cagas IV", title: "Vice Governor, Province of Davao del Sur" },
    { name: "Hon. John Tracy Cagas", title: "Lone District Representative, Province of Davao del Sur" },
  ];

  const youthOrganizations = [
    { name: "Hon. Justin Adrian F. Siao", title: "SK Provincial Federation President, Province of Davao del Sur", image: "/assets/SIAO.jpg" },
    { name: "Hon. Patrick Dhen S. Jera", title: "SK Provincial Federation Vice President, Province of Davao del Sur", image: "/assets/JERA.jpg" },
    { name: "Hon. Zenda Alaiza Mae E. Enero", title: "SK Provincial Federation Secretary, Province of Davao del Sur", image: "/assets/ENERO.jpg" },
    { name: "Hon. Gwyneth S. Manlangit", title: "SK Provincial Federation Treasurer, Province of Davao del Sur", image: "/assets/MANLANGIT.jpg" },
    { name: "Hon. Julian B. Pascua", title: "SK Provincial Federation Auditor, Province of Davao del Sur", image: "/assets/PASCUA.jpg" },
    { name: "Hon. Loleimer John A. Egos", title: "SK Provincial Federation PRO, Province of Davao del Sur", image: "/assets/EGOS.jpg" },
    { name: "Hon. Khian A. Manzanares", title: "SK Provincial Federation Sergeant-at-Arms, Province of Davao del Sur", image: "/assets/MANZANARES.jpg" },
    { name: "Hon. Kristeen Pearl D. Cahiles", title: "SK Provincial Federation Member, Province of Davao del Sur", image: "/assets/CAHILES.jpg" },
    { name: "Hon. Gwyneth S. Orbuda", title: "SK Provincial Federation Member, Province of Davao del Sur", image: "/assets/ORBUDA.jpg" },
    { name: "Hon. Arnel Arnado", title: "SK Provincial Federation Member, Province of Davao del Sur", image: "/assets/ARNADO.jpg" },
  ];

  // Determine which data to show
  const data = category === "officials" ? officials : youthOrganizations;

  useEffect(() => {
    setSelectedData(data[0] || null);
  }, [category]);

  return (
    <div className="government-page">
      {/* Hero Section */}
      <HeroSection data={data} selectedData={selectedData} onSelect={setSelectedData} />

      {/* Category Selector */}
      <InfoBar onCategoryChange={setCategory} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GovernmentPage;