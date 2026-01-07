import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import "./NewsEvents.css";

const NewsEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  // Use a Ref to store the observer so we can disconnect it properly
  const observer = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const fetchPosts = async () => {
  try {
    const pageId = "105656204521453";
    
    const accessToken = import.meta.env.VITE_FB_ACCESS_TOKEN;
    
    const url = `https://graph.facebook.com/v21.0/${pageId}/posts?fields=message,attachments{media,type},permalink_url,created_time&access_token=${accessToken}`;

    const response = await axios.get(url);
    // ... rest of your code

        const posts = response.data.data.map((post) => {
          // Robust check: Does the post have media?
          const attachmentData = post.attachments?.data?.[0];
          const imageUrl = attachmentData?.media?.image?.src;
          
          // Logic: Use the first line as the "Title" and the rest as "Description"
          const fullMessage = post.message || "Update from American Backyard";
          const titleLine = fullMessage.split('\n')[0]; // Grabs first line only

          return {
            id: post.id, // Good for React keys
            title: titleLine.length > 50 ? titleLine.substring(0, 50) + "..." : titleLine,
            description: fullMessage,
            image: imageUrl || "https://placehold.co/600x400?text=News+Update", // reliable fallback
            url: post.permalink_url || "#",
            date: new Date(post.created_time).toLocaleDateString(),
          };
        });

        setEvents(posts);
      } catch (err) {
        console.error("API request failed:", err.response?.data?.error?.message || err.message);
        setError("Unable to load latest updates.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Animation Observer Logic
  useEffect(() => {
    if (loading || events.length === 0) return;

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.current.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      { threshold: 0.1 } // Trigger slightly earlier for smoother feel
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
  if (error) return <div className="news-events-container text-red-500">{error}</div>;

  return (
    <div className="main-container">
      <div className="news-events-container">
        {events.map((event, index) => (
          <div
            key={event.id || index}
            className="card hidden-initial" // Make sure CSS class is 'hidden-initial' not just 'hidden' if using Tailwind
            ref={(el) => (cardRefs.current[index] = el)}
            onClick={() => openPopup(event)}
          >
            <div className="card-content">
              <span className="text-xs text-gray-400">{event.date}</span>
              <h3 className="card-title">{event.title}</h3>
            </div>
            <img
              src={event.image}
              alt="News Update"
              className="card-image"
              loading="lazy" // Performance boost
              onError={(e) => (e.target.src = "https://placehold.co/600x400?text=No+Image")}
            />
          </div>
        ))}
      </div>

      {selectedEvent && (
        <div className="popup-overlay active" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>&times;</button>
            
            <img 
              src={selectedEvent.image} 
              alt="Full view" 
              className="popup-image" 
            />
            
            <div className="popup-text-area">
              <h2 className="popup-title">{selectedEvent.title}</h2>
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
        </div>
      )}
      <Footer />
    </div>
  );
};

export default NewsEvents;