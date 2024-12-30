import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import InfoBar from "../components/InfoBar";
import Footer from "../components/Footer";

const GovernmentPage = () => {
  const [category, setCategory] = useState("officials");
  const [selectedData, setSelectedData] = useState(null);

  const officials = [
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

  const youthOrganizations = [
    {
      name: "Matanao Youth Alliance",
      title: "Youth Development Group",
      contactNum: "09452634432",
      dob: "Founded: 2015",
      chapterPres: "Jane Doe",
      address: "Community Hall, Matanao City",
    },
    {
      name: "Green Rangers Club",
      title: "Environmental Youth Group",
      dob: "Founded: 2018",
      chapterPres: "Jane Doe",
      contactNum: "09452634432",
      address: "Nature Park, Matanao City",
    },
  ];

  const data = category === "officials" ? officials : youthOrganizations;

  useEffect(() => {
    setSelectedData(data[0]);
  }, [category, data]);

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

      {/* Footer */}
      <div
        style={{
          flex: "0 0 auto",
          margin: 0,
        }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default GovernmentPage;
