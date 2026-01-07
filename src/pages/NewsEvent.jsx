import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import "./NewsEvents.css";

const NewsEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const pageId = "105656204521453";
        const accessToken = "EAAHsceBRFIABQSeEheT5gphDfpakHWY9w9c7vufJR2EVj4miP9WF6GAHb1jBMSkQZAPx7Q6iPeZCZBZBBCOJ1obgHpfCO6ZCjcrzZCvrtC0eIiGZB6Map40stLWzLCqYzmzqZCJZCwZB1wRbX6qONkoB0rFcvjW5lEJ9MyFY6gNtnXSWdxOVuMXglH3RybozZAno4nKRFPVXUDmZBop5zBq0SQFRyaNS1Dt4iQW3JmfO0j7zCnZAQgSrRzuElp4X7lo0aGkdMuIKkvmxvObtQYxZBXlZAB4aJFLx8d4PMZAYZBbZAp3AZDZD";
        const url = `https://graph.facebook.com/v17.0/${pageId}/posts?fields=message,attachments{media},permalink_url&access_token=${accessToken}`;

        const response = await axios.get(url);

        const posts = response.data.data.map((post) => {
          const attachment = post.attachments?.data[0]?.media?.image?.src;
          return {
            title: post.message || "No Title",
            description: post.message || "No Description",
            image: attachment || "placeholder-image.jpg",
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, [events]);

  const truncateText = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };

  const openPopup = (event) => {
    setSelectedEvent(event);
  };

  const closePopup = () => {
    setSelectedEvent(null);
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
            className="card hidden"
            ref={(el) => (cardRefs.current[index] = el)}
            onClick={() => openPopup(event)}
          >
            <div className="card-content">
              <h3 className="card-title">
                {truncateText(event.title, 250)}
              </h3>
            </div>
            <img
              src={event.image}
              alt={event.title}
              className="card-image"
              onError={(e) =>
                (e.target.src = "https://placehold.co/600x400")
              }
            />
          </div>
        ))}
      </div>
      {selectedEvent && (
        <div className="popup-overlay active" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>
              Close
            </button>
            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="popup-image"
            />
            <p className="popUpDescrip">{selectedEvent.description}</p>
            <a
              href={selectedEvent.url}
              target="_blank"
              rel="noopener noreferrer"
              className="view-button"
            >
              View on Facebook
            </a>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default NewsEvents;
