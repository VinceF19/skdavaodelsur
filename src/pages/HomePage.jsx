import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeBackground from "../assets/bgsk.jpg";
import HomeGIF from "../assets/HomeGIF.gif";
import "./HomePage.css";
import Footer from "../components/Footer";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const pageId = "105656204521453";
        const accessToken =
          "EAAHsceBRFIABO4hzqpuZCpl5Pl3IKPJUTVyOQVxZC8c1Wec60HWQOq0ST1PGfV0lyQQFZAS4413TABwEO4fDOc5ZAluPZC1pPBzvdEMmfKYrzag2wbZAfyS3ocOloFZAjR2QoNXpkEy37g0PSZCgzBXsoDs2BsH5s5jduaZCZCZA3OoUfaFePwTZB1qJoZBpIqRpuxI8ZD";
        const url = `https://graph.facebook.com/v17.0/${pageId}/posts?fields=message,attachments{media},permalink_url&access_token=${accessToken}`;

        const response = await axios.get(url);

        const fetchedPosts = response.data.data.map((post) => ({
          title: post.message || "No Title",
          description: post.message || "No Description",
          image:
            post.attachments?.data[0]?.media?.image?.src ||
            "https://via.placeholder.com/300x200?text=Image+Not+Available",
          url: post.permalink_url || "#",
        }));

        setPosts(fetchedPosts);
      } catch (err) {
        console.error("API request failed:", err.response || err.message);
        setError("Failed to fetch Facebook posts.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
      {/* Header Section */}
      <div
        style={{
          position: "relative",
          height: "60vh",
          color: "#fff",
          overflow: "hidden",
        }}
        className="d-flex justify-content-center align-items-center"
      >
        <div
          style={{
            backgroundImage: `url(${HomeBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
          }}
        ></div>
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
          }}
        ></div>
        <div
          style={{
            zIndex: 2,
            padding: "20vh",
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
            {loading ? (
              <p>Loading featured posts...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <div className="d-flex overflow-auto">
                {posts.slice(0, 5).map((post, index) => (
                  <div
                    className="card mx-2"
                    style={{
                      minWidth: "18rem",
                      maxWidth: "18rem",
                      flex: "none",
                    }}
                    key={index}
                  >
                    <img
                      src={post.image}
                      className="card-img-top"
                      alt={post.title}
                      onError={(e) =>
                        (e.target.src =
                          "https://via.placeholder.com/300x200?text=Image+Not+Available")
                      }
                      style={{ height: "200px" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary mt-2"
                      >
                        View Post
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Announcements Section */}
          <div className="col-md-3">
            <h2
              className="text-uppercase text-white p-3 mb-4 text-center"
              style={{ backgroundColor: "#002855" }}
            >
              Announcements
            </h2>
            {loading ? (
              <p>Loading announcements...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <div>
                {posts.slice(5, 8).map((announcement, index) => (
                  <div
                    className="card mb-3"
                    key={index}
                    style={{ border: "none", backgroundColor: "#f8f9fa" }}
                  >
                    <div className="card-body">
                      <h5 className="card-title" style={{ color: "#002855" }}>
                        {announcement.title}
                      </h5>
                      <a
                        href={announcement.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-link"
                        style={{ color: "#002855" }}
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
            zIndex: 1,
          }}
        ></div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
