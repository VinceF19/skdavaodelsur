import React from "react";
import HomeBackground from "../assets/HomeBackground.png";
import "./HomePage.css"; 

const HomePage = () => {
  return (
    <div
      className="d-flex flex-column"
      style={{
        minHeight: "100vh",
        margin: 0,
      }}
    >
      {/* Background Section */}
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{
          flex: "1 0 auto", 
          backgroundImage: `url(${HomeBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "80vh", 
          color: "white",
        }}
      >
        <h1>SK Provincial Federation</h1>
        <p>Davao del Sur</p>
      </div>

      {/* Announcements and Featured Section */}
      <div className="container-fluid">
        <div className="d-flex flex-row justify-content-between align-items-start">
          {/* Announcements Section */}
          <div className="w-75">
            <h1 className="text-center">Announcements</h1>
            <div className="row">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div className="col-md-3 col-sm-6 mb-4" key={item}>
                  <div className="card">
                    <div className="card-body custom-card-body">
                      <h5 className="card-title">Announcement {item}</h5>
                      <p className="card-text">
                        This is a short description of announcement {item}.
                      </p>
                    </div>
                    <img
                      src={`https://via.placeholder.com/150?text=Image+${item}`}
                      className="card-img-top"
                      alt={`Announcement ${item}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Section */}
          <div className="w-25">
            <h1 className="text-center">Featured</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
