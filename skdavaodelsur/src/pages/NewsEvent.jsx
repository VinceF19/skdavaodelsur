import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NewsEvents.css";

const NewsEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch posts from Facebook API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const pageId = "105656204521453";
        const accessToken =
          "EAAR8ZAstrHJEBO86wx2lMpeYxtnm2Mb4sop9LcL0wim8J6tCUMjQNPWPceleEYZBZBIhZBYd0c7XG0HMtFCwHSplvNfk1iPNZAAweILVN8bmfIZABsg39wV2y8dlzttiQgNXiJEfZC2Bp5aqbw1ZCZCAoMB7fWDyjo05grMq7dR4vIO71trBZCdPHLyawBMGu4JdnhOP0ijo1ILMTCQuLEHiel6Y8viyZAc3zxOGlyeZCdIZD";
        const url = `https://graph.facebook.com/v17.0/${pageId}/posts?fields=message,created_time,attachments{media_type,media_url}&access_token=${accessToken}`;
        const response = await axios.get(url);

        const posts = response.data.data.map((post) => ({
          title: post.message?.split("\n")[0] || "No Title",
          description: post.message || "No Description",
          image:
            post.attachments?.data[0]?.media_url || "placeholder-image.jpg",
        }));

        setEvents(posts);
      } catch (err) {
        setError("Failed to fetch posts from Facebook API");
        console.error(err);
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
          <img src={event.image} alt={event.title} className="card-image" />
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
