import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeBackground from "../assets/HomeBackground.png";
import HomeGIF from "../assets/HomeGIF.gif";
import Footer from "../components/Footer";
import "./HomePage.css";

const HomePage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const pageId = "105656204521453";
        const accessToken =
          "EAAHsceBRFIABO4hzqpuZCpl5Pl3IKPJUTVyOQVxZC8c1Wec60HWQOq0ST1PGfV0lyQQFZAS4413TABwEO4fDOc5ZAluPZC1pPBzvdEMmfKYrzag2wbZAfyS3ocOloFZAjR2QoNXpkEy37g0PSZCgzBXsoDs2BsH5s5jduaZCZCZA3OoUfaFePwTZB1qJoZBpIqRpuxI8ZD";
        const url = `https://graph.facebook.com/v17.0/${pageId}/posts?fields=message,attachments{media},permalink_url&access_token=${accessToken}`;

        const response = await axios.get(url);
        const posts = response.data.data.map((post) => {
          const attachment = post.attachments?.data[0]?.media?.image?.src;
          return {
            title: post.message || "No Title",
            description: post.message || "No Description",
            image: attachment || "https://via.placeholder.com/300x200",
            url: post.permalink_url || "#",
          };
        });

        setEvents(posts);
      } catch (err) {
        console.error("API request failed:", err.response || err.message);
        setError("Failed to fetch posts from Facebook API");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
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

      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-9">
            <h2
              className="text-uppercase text-white p-3 mb-4"
              style={{ backgroundColor: "#002855" }}
            >
              Featured
            </h2>
            <div className="d-flex overflow-auto">
              {loading ? (
                <p>Loading featured events...</p>
              ) : error ? (
                <p>{error}</p>
              ) : (
                events.slice(0, 5).map((event, index) => (
                  <div
                    className="card mx-2 d-flex flex-column"
                    style={{
                      minWidth: "18rem",
                      maxWidth: "18rem",
                      flex: "none",
                      height: "100%", // Ensure all cards have equal height
                    }}
                    key={index}
                  >
                    <img
                      src={event.image}
                      className="card-img-top"
                      alt={event.title}
                      style={{
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5
                        className="card-title"
                        style={{ flex: "1", overflow: "hidden" }}
                      >
                        {event.title}
                      </h5>
                      <div className="mt-auto">
                        <a
                          href={event.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary w-50 mt-2"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="col-md-3">
            <h2
              className="text-uppercase text-white p-3 mb-4 text-center"
              style={{ backgroundColor: "#002855" }}
            >
              Announcements
            </h2>
            <div>
              {loading ? (
                <p>Loading announcements...</p>
              ) : error ? (
                <p>{error}</p>
              ) : (
                events.slice(5, 8).map((event, index) => (
                  <div
                    className="card mb-3"
                    key={index}
                    style={{ border: "none", backgroundColor: "#f8f9fa" }}
                  >
                    <div className="card-body ">
                      <h5 className="card-title" style={{ color: "#002855" }}>
                        {event.title}
                      </h5>

                      <a
                        href={event.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-link "
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <div style={{ flex: "0 0 auto", margin: 0 }}>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
