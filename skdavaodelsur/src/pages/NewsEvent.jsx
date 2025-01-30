import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NewsEvents.css"; // Create this CSS file for styling

const NewsEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch posts from Facebook API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const pageId = "105656204521453"; // Your Facebook page ID
        const accessToken = "EAAHsceBRFIABO5gppb5ydJrhTgUDZCk66gFf9htgBW13sFiR7tAfZAIC1AACRI1O5950ZBQ1w9FHfrGf7wdvf65fhKYaSHhynQ6sZCZAKNw9Ck3LsW5UXZAyoCbeBZB0CCOgkWCa2VHBZCWyEat1tAZB0AjZB0bzNxqlOV6rRIYLwkPac26BS4S0lASQyOdsDnKUZC1EB78jhZAJXk51oR0Fz0hYlhoZD"; // Your Facebook access token
        const url = `https://graph.facebook.com/v17.0/${pageId}/posts?fields=message,attachments{media}&access_token=${accessToken}`;
        
        const response = await axios.get(url);

        console.log(response);  // Check if posts are fetched successfully
    
        // Process the posts
        const posts = response.data.data.map((post) => {
          const attachment = post.attachments?.data[0]?.media?.image?.src;
          return {
            title: post.message || "No Title",
            description: post.message || "No Description",
            image: attachment || "placeholder-image.jpg", // Use post image if available, otherwise placeholder
          };
        });
    
        setEvents(posts);
      } catch (err) {
        console.error("API request failed:", err.response || err.message);  // Log error response
        setError("Failed to fetch posts from Facebook API");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="news-events-container">Loading...</div>;
  }

  if (error) {
    return <div className="news-events-container">{error}</div>;
  }

  return (
    <div className="news-events-container">
      {events.map((event, index) => (
        <div key={index} className="card">
          <img
            src={event.image}
            alt={event.title}
            className="card-image"
            onError={(e) => (e.target.src = "placeholder-image.jpg")} // Fallback to placeholder if image fails to load
          />
          <div className="card-content">
            <h3 className="card-title">{event.title}</h3>
            <p className="card-description">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsEvents;
