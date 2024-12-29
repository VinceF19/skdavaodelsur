const HomePage = () => {
  return (
    <div
      className="d-flex flex-column"
      style={{
        minHeight: "100vh",
        margin: 0,
        overflow: "hidden",
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
          height: "30vh",
          color: "white",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Black box with 50% transparency
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          <h1 style={{ fontSize: "2rem", margin: 0 }}>
            SK Provincial Federation
          </h1>
          <p style={{ fontSize: "1.2rem", margin: 0 }}>Davao del Sur</p>
        </div>
      </div>

      {/* Announcements and Featured Section */}
      <div
        className="container-fluid"
        style={{ flex: "1 0 auto", overflow: "hidden" }}
      >
        <div className="d-flex flex-row justify-content-between align-items-start">
          {/* Announcements Section */}
          <div className="w-75" style={{ overflow: "auto", maxHeight: "70vh" }}>
            <h1 className="text-center" style={{ fontSize: "1.5rem" }}>
              Announcements
            </h1>
            <div className="row">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div className="col-md-3 col-sm-6 mb-4" key={item}>
                  <div className="card">
                    <img
                      src={`https://via.placeholder.com/150?text=Image+${item}`}
                      className="card-img-top"
                      alt={`Announcement ${item}`}
                      style={{ height: "100px", objectFit: "cover" }}
                    />
                    <div className="card-body custom-card-body">
                      <h5 className="card-title" style={{ fontSize: "1rem" }}>
                        Announcement {item}
                      </h5>
                      <p className="card-text" style={{ fontSize: "0.8rem" }}>
                        This is a short description of announcement {item}.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Section */}
          <div className="w-25">
            <h1 className="text-center" style={{ fontSize: "1.5rem" }}>
              Featured
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
