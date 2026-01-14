import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";
import Footer from "../components/Footer";
import PlaceHolderImage from "../assets/SKBG.jpeg";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [latestVideo, setLatestVideo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pageId = "105656204521453";
        const accessToken = import.meta.env.VITE_FB_ACCESS_TOKEN;

        // 1. Fetch Latest Video ONLY
        const videoUrl = `https://graph.facebook.com/v17.0/${pageId}/videos?fields=description,permalink_url&limit=1&access_token=${accessToken}`;
        
        // 2. Fetch Regular Posts
        const postsUrl = `https://graph.facebook.com/v17.0/${pageId}/posts?fields=message,attachments{media},permalink_url&access_token=${accessToken}`;

        const [videoRes, postsRes] = await Promise.all([
          axios.get(videoUrl),
          axios.get(postsUrl)
        ]);

        // Process Video
        if (videoRes.data.data.length > 0) {
          const vid = videoRes.data.data[0];
          setLatestVideo({
            title: vid.description ? vid.description.split('\n')[0] : "Latest Update",
            embedUrl: `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent("https://www.facebook.com" + vid.permalink_url)}&show_text=0`
          });
        }

        // Process Posts
        const fetchedPosts = postsRes.data.data.map((post) => ({
          title: post.message || "No Title",
          image: post.attachments?.data[0]?.media?.image?.src || PlaceHolderImage,
          url: post.permalink_url || "#",
        }));

        setPosts(fetchedPosts);
      } catch (err) {
        console.error("API Error:", err);
        setError("Unable to load latest content.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  return (
    <div className="homepage-container">
      {/* Header Section */}
      <div className="header-section">
        <div className="header-overlay"></div>
        <div className="header-content visible">
          <h1>SK Provincial Federation</h1>
          <h2>Davao del Sur</h2>
        </div>
      </div>

      {/* Main Grid Section */}
      <div className="container-fluid my-4">
        <div className="row">
          <div className="col-lg-9 col-md-8 col-12">
            <h2 className="section-title text-white">FEATURED</h2>
            <div className="featured-section">
              {posts.slice(0, 6).map((post, index) => (
                <div className="featured-card visible" key={index}>
                  <img src={post.image} alt="post" />
                  <div className="card-body p-2">
                    <h5>{truncateText(post.title, 150)}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-12">
            <h2 className="section-title text-center text-white">ANNOUNCEMENTS</h2>
            <div className="announcement-card">
              {posts.length > 0 && <h5>{truncateText(posts[0].title, 300)}</h5>}
            </div>
          </div>
        </div>
      </div>

      {/* NEW FULL WIDTH VIDEO SECTION (Below Featured) */}
      {latestVideo && (
        <div className="full-width-video-section">
          <div className="video-full-wrapper">
            <iframe
              src={latestVideo.embedUrl}
              width="100%"
              height="100%"
              style={{ border: "none" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default HomePage;