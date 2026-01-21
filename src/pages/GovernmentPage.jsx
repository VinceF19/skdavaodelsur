import React, { useState, useEffect, useMemo } from "react";
import HeroSection from "../components/HeroSection";
import InfoBar from "../components/InfoBar";
import Footer from "../components/Footer";
import "./GovernmentPage.css";

import SIAO from "../assets/SIAO.jpg";
import JERA from "../assets/JERA.jpg";
import ENERO from "../assets/ENERO.jpg";
import MANLANGIT from "../assets/MANLANGIT.jpg";
import PASCUA from "../assets/PASCUA.jpg";
import EGOS from "../assets/EGOS.jpg";
import MANZANARES from "../assets/MANZANARES.jpg";
import CAHILES from "../assets/CAHILES.jpg";
import ORBUDA from "../assets/ORBUDA.jpg";
import ARNADO from "../assets/ARNADO.jpg";
import YVONNE from "../assets/YVONNE.png";
import MARC from "../assets/MARC.png";

const GovernmentPage = () => {
  const [category, setCategory] = useState("officials");
  const [selectedPerson, setSelectedPerson] = useState(null);

  const officials = useMemo(() => [
    {
      name: "Hon. Yvonne R. Cagas",
      title: "Governor, Province of Davao del Sur",
      image: YVONNE,
      type: "provincial",
    },
    {
      name: "Hon. Marc Douglas Chan Cagas IV",
      title: "Vice Governor, Province of Davao del Sur",
      image: MARC,
      type: "provincial",
    },
  ], []);

  const youthOrganizations = useMemo(() => [
    { name: "Hon. Justin Adrian F. Siao", title: "SK President", image: SIAO, type: "sk" },
    { name: "Hon. Patrick Dhen S. Jera", title: "SK Vice President", image: JERA, type: "sk" },
    { name: "Hon. Zenda Alaiza Mae E. Enero", title: "SK Secretary", image: ENERO, type: "sk" },
    { name: "Hon. Gwyneth S. Manlangit", title: "SK Treasurer", image: MANLANGIT, type: "sk" },
    { name: "Hon. Julian B. Pascua", title: "SK Auditor", image: PASCUA, type: "sk" },
    { name: "Hon. Loleimer John A. Egos", title: "SK PRO", image: EGOS, type: "sk" },
    { name: "Hon. Khian A. Manzanares", title: "SK Sergeant-at-Arms", image: MANZANARES, type: "sk" },
    { name: "Hon. Kristeen Pearl D. Cahiles", title: "SK Member", image: CAHILES, type: "sk" },
    { name: "Hon. Gwyneth S. Orbuda", title: "SK Member", image: ORBUDA, type: "sk" },
    { name: "Hon. Arnel Arnado", title: "SK Member", image: ARNADO, type: "sk" },
  ], []);

  const data = category === "officials" ? officials : youthOrganizations;

  useEffect(() => {
    if (data.length) setSelectedPerson(data[0]);
  }, [data]);

  return (
    <div className="government-page">
      <HeroSection
        data={data}
        selectedPerson={selectedPerson}
        onSelect={setSelectedPerson}
      />
      <InfoBar onCategoryChange={setCategory} />
      <Footer />
    </div>
  );
};

export default GovernmentPage;
