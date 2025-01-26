import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NewsEvents.css";
import Footer from "../components/Footer";

const NewsEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const pageId = "105656204521453";
        const accessToken =
          "EAAHsceBRFIABO7gXeZAjLQpxEjYkKoIMTF76Jf1T48cBZBwP7Qqmbct85lQPbnvlAmv7OqZBtWMpX1u0L4OwisD7XA3mx09k07kYM9BNNYTIpsmmI4SbSJ9MwLcV72pZAVEqdZCPOuxPYxp8JdGhsmhN402YEo3dVFR4pXrfUOT1lJG31kBxmBXlp01p3vKIZD";
        const url = `https://graph.facebook.com/v17.0/${pageId}/posts?fields=message,created_time,attachments{media_type,media_url,subattachments{media_url}}&access_token=${accessToken}`;

        const response = await axios.get(url);

        const posts = response.data.data.map((post) => {
          let images = [];

          if (post.attachments?.data) {
            post.attachments.data.forEach((attachment) => {
              if (attachment.media_url) {
                images.push(attachment.media_url);
              }
              if (attachment.subattachments?.data) {
                images.push(
                  ...attachment.subattachments.data
                    .map((img) => img.media_url)
                    .filter((url) => url)
                );
              }
            });
          }

          return {
            title: post.message?.split("\n")[0] || "No Title",
            description: post.message || "No Description",
            images:
              images.length > 0
                ? images
                : ["https://placehold.co/600x400?text=Hello+World"],
          };
        });

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
    <>
      <div className="news-events-container">
        {events.map((event, index) => (
          <div key={index} className="card">
            <div className="image-gallery">
              {event.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image}
                  alt={event.title}
                  className="card-image"
                />
              ))}
            </div>
            <div className="card-content">
              <h3 className="card-title">{event.title}</h3>
              <p className="card-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default NewsEvents;
