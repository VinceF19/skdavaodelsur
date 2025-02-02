import React, { useState, useEffect, useMemo } from "react";
import HeroSection from "../components/HeroSection";
import InfoBar from "../components/InfoBar";
import Footer from "../components/Footer";

const GovernmentPage = () => {
  const [category, setCategory] = useState("officials");
  const [selectedData, setSelectedData] = useState(null);

  const officials = [
    {
      name: "Hon. Yvonne R. Cagas",
      title: "Governor, Province of Davao del Sur",
      dob: "December 19, 2002",
      address:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque esse veritatis quod quia, explicabo expedita. Illum, error nemo porro sapiente nostrum nihil aspernatur. Vero suscipit cum ipsum? Ipsum, modi labore?",
    },
    {
      name: "Hon. Riafe Cagas-Fernandez",
      title: "Vice Governor, Province of Davao del Sur",
      dob: "April 15, 1985",
      address:
        "123 Main St, Matanao City. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quos.",
    },
    {
      name: "Hon. John Tracy Cagas",
      title: "Lone District Representative, Province of Davao del Sur",
      dob: "July 9, 1990",
      address:
        "45 Oak Street, Matanao City. Expedita error nemo possimus asperiores itaque facilis magnam!",
    },
  ];

  const youthOrganizations = [
 
    {
      name: "Hon. Justin Adrian F. Siao",
      title: "SK Provincial Federation President, Province of Davao Del Sur",
      dob: "July 9, 1990",
      address:
        "45 Oak Street, Matanao City. Expedita error nemo possimus asperiores itaque facilis magnam!",
    },
    {
      name: "Hon. Patrick Dhen S. Jera",
      title: "SK Provincial Federation Vice President, Province of Davao Del Sur",
      dob: "July 9, 1990",
      address:
        "45 Oak Street, Matanao City. Expedita error nemo possimus asperiores itaque facilis magnam!",
    },
    {
      name: "Hon. Zenda Alaiza Mae E. Enero",
      title: "SK Provincial Federation Secretary, Province of Davao Del Sur",
      dob: "July 9, 1990",
      address:
        "45 Oak Street, Matanao City. Expedita error nemo possimus asperiores itaque facilis magnam!",
    },
    {
      name: "Hon. Gwyneth S. Manlangit",
      title: "SK Provincial Federation Treasurer, Province of Davao Del Sur",
      dob: "July 9, 1990",
      address:
        "45 Oak Street, Matanao City. Expedita error nemo possimus asperiores itaque facilis magnam!",
    },
    {
      name: "Hon. Julian B. Pascua",
      title: "SK Provincial Federation Auditor, Province OF Davao Del Sur",
      dob: "July 9, 1990",
      address:
        "45 Oak Street, Matanao City. Expedita error nemo possimus asperiores itaque facilis magnam!",
    },
    {
      name: "Hon. Loleimer John A. Egos",
      title: "SK Provincial Federation PRO, Province OF Davao Del Sur",
      dob: "July 9, 1990",
      address:
        "45 Oak Street, Matanao City. Expedita error nemo possimus asperiores itaque facilis magnam!",
    },
    {
      name: "Hon. Khian A. Manzanares",
      title: "SK Provincial Federation Sergeant-at-Arms, Province OF Davao Del Sur",
      dob: "July 9, 1990",
      address:
        "45 Oak Street, Matanao City. Expedita error nemo possimus asperiores itaque facilis magnam!",
    },
    {
      name: "Hon. Kirt Niñeza",
      title: "SK Provincial Federation Member, Province OF Davao Del Sur",
      dob: "July 9, 1990",
      address:
        "45 Oak Street, Matanao City. Expedita error nemo possimus asperiores itaque facilis magnam!",
    },
    {
      name: "Hon. Kristeen Pearl D. Cahiles",
      title: "SK Provincial Federation Member, Province OF Davao Del Sur",
      dob: "July 9, 1990",
      address:
        "45 Oak Street, Matanao City. Expedita error nemo possimus asperiores itaque facilis magnam!",
    },
    {
      name: "Hon. Gwynteth S. Orbuda",
      title: "SK Provincial Federation Member, Province OF Davao Del Sur",
      dob: "July 9, 1990",
      address:
        "45 Oak Street, Matanao City. Expedita error nemo possimus asperiores itaque facilis magnam!",
    },
  ];

  const data = useMemo(() => {
    return category === "officials" ? officials : youthOrganizations;
  }, [category]);

  useEffect(() => {
    setSelectedData(data[0]);
  }, [data]);

  return (
    <div
      className="d-flex flex-column"
      style={{
        minHeight: "100vh",
        margin: 0,
      }}
    >
      {/* Main Content */}
      <div
        style={{
          flex: "1 0 auto",
          margin: 0,
          padding: 0,
        }}
      >
        <HeroSection
          data={data}
          selectedData={selectedData}
          onSelect={setSelectedData}
        />
      </div>

      {/* Officials and Youth Organizations */}
      <div
        style={{
          flex: "0 0 auto",
          marginBottom: 0,
        }}
      >
        <InfoBar onCategoryChange={setCategory} />
      </div>
    </div>
  );
};

export default GovernmentPage;
