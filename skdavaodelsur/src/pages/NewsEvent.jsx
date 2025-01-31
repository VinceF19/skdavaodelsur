import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import "./NewsEvents.css";

const NewsEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);
  const [overflowingTitles, setOverflowingTitles] = useState([]);

  const titleRefs = useRef([]);

  // Fetch posts from Facebook API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const pageId = "105656204521453";
        const accessToken =
          "EAAHsceBRFIABO4hzqpuZCpl5Pl3IKPJUTVyOQVxZC8c1Wec60HWQOq0ST1PGfV0lyQQFZAS4413TABwEO4fDOc5ZAluPZC1pPBzvdEMmfKYrzag2wbZAfyS3ocOloFZAjR2QoNXpkEy37g0PSZCgzBXsoDs2BsH5s5jduaZCZCZA3OoUfaFePwTZB1qJoZBpIqRpuxI8ZD";
        const url = `https://graph.facebook.com/v17.0/${pageId}/posts?fields=message,attachments{media}&access_token=${accessToken}`;

        const response = await axios.get(url);

        // Process the posts
        const posts = response.data.data.map((post) => {
          const attachment = post.attachments?.data[0]?.media?.image?.src;
          return {
            title: post.message || "No Title",
            description: post.message || "No Description",
            image: attachment || "placeholder-image.jpg",
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

  useEffect(() => {
    const checkOverflow = () => {
      const newOverflowingTitles = events.map((_, index) => {
        const element = titleRefs.current[index];
        return element && element.scrollHeight > element.clientHeight;
      });
      setOverflowingTitles(newOverflowingTitles);
    };

    checkOverflow();
  }, [events]);

  const toggleCard = (index) => {
    setExpandedCardIndex(expandedCardIndex === index ? null : index);
  };

  if (loading) {
    return <div className="news-events-container">Loading...</div>;
  }

  if (error) {
    return <div className="news-events-container">{error}</div>;
  }

  return (
    <div className="main-container">
      <div className="news-events-container">
        {events.map((event, index) => (
          <div
            key={index}
            className={`card ${
              expandedCardIndex === index ? "expanded" : "minimized"
            }`}
            onClick={() => toggleCard(index)}
          >
            <div className="card-content">
              <h3
                className={`card-title ${
                  overflowingTitles[index] && expandedCardIndex !== index
                    ? "see-more"
                    : ""
                }`}
                ref={(el) => (titleRefs.current[index] = el)}
              >
                {event.title}
                {overflowingTitles[index] && expandedCardIndex !== index && (
                  <span className="see-more-text"> ... See More</span>
                )}
              </h3>
            </div>
            <img
              src={event.image}
              alt={event.title}
              className="card-image"
              onError={(e) => (e.target.src = "https://placehold.co/600x400")}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default NewsEvents;
