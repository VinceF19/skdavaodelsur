import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import "./NewsEvents.css";

const NewsEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  const observer = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const pageId = "105656204521453";
        const accessToken = import.meta.env.VITE_FB_ACCESS_TOKEN;
        const url = `https://graph.facebook.com/v21.0/${pageId}/posts?fields=message,attachments{media,type},permalink_url,created_time&access_token=${accessToken}`;

        const response = await axios.get(url);

        const posts = response.data.data.map((post) => {
          const attachmentData = post.attachments?.data?.[0];
          const imageUrl = attachmentData?.media?.image?.src;
          
          const fullMessage = post.message || "Update";
          const titleLine = fullMessage.split('\n')[0];

          return {
            id: post.id,
            title: titleLine.length > 60 ? titleLine.substring(0, 60) + "..." : titleLine,
            description: fullMessage,
            image: imageUrl || "https://placehold.co/600x400?text=News+Update",
            url: post.permalink_url || "#",
            date: new Date(post.created_time).toLocaleDateString(),
          };
        });

        setEvents(posts);
      } catch (err) {
        setError("Unable to load latest updates.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (loading || events.length === 0) return;

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.current.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.current.observe(card);
    });

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [events, loading]);

  const openPopup = (event) => setSelectedEvent(event);
  const closePopup = () => setSelectedEvent(null);

  if (loading) return <div className="news-events-container">Loading latest news...</div>;
  if (error) return <div className="news-events-container">{error}</div>;

  return (
    <div className="main-container">
      <div className="news-events-container">
        {events.map((event, index) => (
          <div
            key={event.id || index}
            className="card"
            ref={(el) => (cardRefs.current[index] = el)}
            onClick={() => openPopup(event)}
          >
            {/* 1. Image stays strictly at the top */}
            <div className="card-image-wrap">
              <img
                src={event.image}
                alt="News Update"
                className="card-image"
                loading="lazy"
                onError={(e) => (e.target.src = "https://placehold.co/600x400?text=No+Image")}
              />
            </div>
            {/* 2. Text is in its own container below the image */}
            <div className="card-content">
              <span className="card-date">{event.date}</span>
              <h3 className="card-title">{event.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <div className="popup-overlay active" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>&times;</button>
            <img src={selectedEvent.image} alt="Full view" className="popup-image" />
            <div className="popup-text-area">
              <h2 className="popup-title">{selectedEvent.title}</h2>
              <p className="popUpDescrip">{selectedEvent.description}</p>
              <a href={selectedEvent.url} target="_blank" rel="noopener noreferrer" className="view-button">
                View on Facebook
              </a>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default NewsEvents;