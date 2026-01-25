import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Search, Calendar, X, ExternalLink, ChevronRight, Loader2 } from "lucide-react";
import Footer from "../components/Footer";
import "./NewsEvents.css";

const NewsEvents = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  // Observer for scroll animations
  const observer = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const pageId = "105656204521453";
        const accessToken = import.meta.env.VITE_FB_ACCESS_TOKEN;
        const url = `https://graph.facebook.com/v21.0/${pageId}/posts?fields=message,attachments{media,type},permalink_url,created_time&limit=20&access_token=${accessToken}`;

        const response = await axios.get(url);

        const posts = response.data.data.map((post) => {
          const attachmentData = post.attachments?.data?.[0];
          const imageUrl = attachmentData?.media?.image?.src;
          
          const fullMessage = post.message || "Official Update";
          const titleLine = fullMessage.split('\n')[0];

          return {
            id: post.id,
            title: titleLine,
            description: fullMessage,
            image: imageUrl || "https://placehold.co/600x400?text=News+Update",
            url: post.permalink_url || "#",
            // Format date as "OCT 24, 2025" for a business look
            date: new Date(post.created_time).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            rawDate: new Date(post.created_time)
          };
        });

        setEvents(posts);
        setFilteredEvents(posts);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Filter Logic (Search Bar)
  useEffect(() => {
    const results = events.filter(event =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEvents(results);
  }, [searchTerm, events]);

  // Animation Observer
  useEffect(() => {
    if (loading || filteredEvents.length === 0) return;

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
  }, [filteredEvents, loading]);

  if (loading) return (
    <div className="loader-screen">
      <Loader2 size={48} className="spinner" />
      <p>Syncing Feed...</p>
    </div>
  );

  return (
    <div className="page-wrapper">
      
      {/* 1. Header & Search Section */}
      <div className="news-header">
        <div className="header-content container">
          <div className="title-block">
            <h1>Press & Events</h1>
            <p>Official Ledger of Activities</p>
          </div>
          <div className="search-block">
            <Search className="search-icon" size={20} />
            <input 
              type="text" 
              placeholder="Search updates..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* 2. Grid Section */}
      <div className="news-grid container">
        {filteredEvents.map((event, index) => (
          <div
            key={event.id}
            className="news-card"
            ref={(el) => (cardRefs.current[index] = el)}
            onClick={() => setSelectedEvent(event)}
          >
            <div className="card-image-box">
              <img src={event.image} alt="Update" loading="lazy" />
              <div className="hover-overlay">
                <span>Read More</span>
              </div>
            </div>
            <div className="card-body">
              <div className="meta-row">
                <span className="date-badge"><Calendar size={12} /> {event.date}</span>
              </div>
              <h3>{event.title}</h3>
              <div className="read-more-link">
                View Details <ChevronRight size={14} />
              </div>
            </div>
          </div>
        ))}
        {filteredEvents.length === 0 && (
          <div className="no-results">No updates found matching your search.</div>
        )}
      </div>

      {/* 3. High-End Modal */}
      {selectedEvent && (
        <div className="modal-backdrop" onClick={() => setSelectedEvent(null)}>
          <div className="modal-window" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedEvent(null)}>
              <X size={24} />
            </button>
            
            <div className="modal-split">
              <div className="modal-image">
                <img src={selectedEvent.image} alt="Full View" />
              </div>
              <div className="modal-content">
                <span className="modal-date">{selectedEvent.date}</span>
                <h2>{selectedEvent.title}</h2>
                <div className="scroll-text">
                  <p>{selectedEvent.description}</p>
                </div>
                <a href={selectedEvent.url} target="_blank" rel="noopener noreferrer" className="fb-button">
                  Open in Facebook <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default NewsEvents;