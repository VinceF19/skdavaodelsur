import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";
import Footer from "../components/Footer";
import PlaceHolderImage from "../assets/SKBG.jpeg";


const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const elements = document.querySelectorAll(".header-content, .featured-card, .announcement-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const pageId = "105656204521453";
        const accessToken = import.meta.env.VITE_FB_ACCESS_TOKEN;
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
        setError("Failed to fetch Facebook posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Function to truncate text
  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "... "
      : text;
  };

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
            <h2 className="section-title text-white">FEATURED</h2>
            {loading ? (
              <p>Loading featured posts...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <div className="featured-section">
                {posts.slice(1, 7).map((post, index) => (
                  <div className="featured-card" key={post.id || index}>
                    <img
                      src={post.image}
                      className="card-img-top"
                      alt={post.title}
                      onError={(e) => (e.target.src = PlaceHolderImage)}
                    />
                    <div className="card-body p-2">
                      <h5>{truncateText(post.title, 220)}</h5>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Announcements Section */}
          <div className="col-lg-3 col-md-4 col-12">
            <h2 className="section-title text-center text-white">
              ANNOUNCEMENTS
            </h2>
            {loading ? (
              <p>Loading announcements...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <div>
                {posts.length > 0 && (
                  <div className="announcement-card">
                    <h5>{truncateText(posts[0].title, 300)}</h5>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
