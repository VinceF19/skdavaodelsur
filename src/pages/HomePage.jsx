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
    <div className="homepage-container">
      {/* Header Section */}
      <div className="header-section">
        <div className="header-overlay"></div>
        <div className="header-content">
          <h1>SK Provincial Federation</h1>
          <h2>Davao del Sur</h2>
        </div>
      </div>

      {/* Feature and Announcement Sections */}
      <div className="container-fluid my-3">
        <div className="row">
          {/* Featured Section */}
          <div className="col-lg-9 col-md-8 col-12">
            <h2 className="section-title">Featured</h2>
            {loading ? (
              <p>Loading featured posts...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <div className="featured-section">
                {posts.slice(1, 6).map((post, index) => (
                  <div className="featured-card" key={index}>
                    <img
                      src={post.image}
                      className="card-img-top"
                      alt={post.title}
                      onError={(e) =>
                        (e.target.src =
                          "https://via.placeholder.com/300x200?text=Image+Not+Available")
                      }
                    />
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
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
          <div className="col-lg-3 col-md-4 col-12">
            <h2 className="section-title text-center">Announcements</h2>
            {loading ? (
              <p>Loading announcements...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <div>
                {posts.length > 0 && (
                  <div className="announcement-card">
                    <h5>{posts[0].title}</h5>
                    <a
                      href={posts[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="gif-section"></div>
      <Footer />
    </div>
  );
};

export default HomePage;
