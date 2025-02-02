import React from "react";
import HomeBackground from "../assets/HomeBackground.png";
import HomeGIF from "../assets/HomeGIF.gif";
import "./HomePage.css";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
      {/* Header Section */}
      <div
        style={{
          backgroundImage: `url(${HomeBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          color: "#fff",
        }}
        className="d-flex justify-content-center align-items-center"
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "40px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
            SK Provincial Federation
          </h1>
          <h2 style={{ fontSize: "2rem", marginTop: "30px" }}>Davao del Sur</h2>
        </div>
      </div>

      {/* Feature and Announcement Sections */}
      <div className="container-fluid my-3">
        <div className="row">
          {/* Featured Section */}
          <div className="col-md-9">
            <h2
              className="text-uppercase text-white p-3 mb-4"
              style={{ backgroundColor: "#002855" }}
            >
              Featured
            </h2>
            <div className="d-flex overflow-auto">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  className="card mx-2"
                  style={{ minWidth: "18rem", maxWidth: "18rem", flex: "none" }}
                  key={item}
                >
                  <img
                    src={`https://via.placeholder.com/300x200?text=Featured+${item}`}
                    className="card-img-top"
                    alt={`Featured ${item}`}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Featured Item {item}</h5>
                    <p className="card-text">
                      A brief description of the featured item. Placeholder
                      content.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Announcements Section */}
          <div className="col-md-3">
            <h2
              className="text-uppercase text-white p-3 mb-4 text-center"
              style={{ backgroundColor: "#002855" }}
            >
              Announcements
            </h2>
            <div>
              {[
                {
                  title: "Youth for Peace Event",
                  description:
                    "Participated in the International Day of Peace 2024.",
                },
                {
                  title: "Tree Growing Activity",
                  description:
                    "A successful tree planting event was held on February 24, 2024.",
                },
              ].map((announcement, index) => (
                <div
                  className="card mb-3"
                  key={index}
                  style={{ border: "none", backgroundColor: "#f8f9fa" }}
                >
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "#002855" }}>
                      {announcement.title}
                    </h5>
                    <p className="card-text">{announcement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          height: "50vh",
          overflow: "hidden",
        }}
        className="d-flex justify-content-center align-items-center"
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${HomeGIF})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            // filter: "blur(25px)",
            zIndex: 1,
          }}
        ></div>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            color: "#fff",
            fontFamily: "'Lobster', cursive",
          }}
        >
          {/* <h1 style={{ fontSize: "5rem", fontWeight: "bold" }}>Pasidungog</h1>
          <p style={{ fontSize: "4rem", marginTop: "10px" }}>2024</p> */}
          {/* <a
            href="#"
            className="btn"
            target="_blank"
            style={{
              fontFamily: "Josefin Sans",
              background: "rgba(0, 21, 64, 1)",
              color: "white",
            }}
          >
            Watch Me
          </a> */}
        </div>
      </div>  
      <Footer />   
    </div>
  );
};

export default HomePage;
