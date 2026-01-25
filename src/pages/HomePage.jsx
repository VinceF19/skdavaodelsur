import React, { useEffect, useState } from "react";
import axios from "axios";
import { Play, ArrowRight, Calendar, Bell, ChevronRight, Loader2 } from "lucide-react";
import Footer from "../components/Footer";
import PlaceHolderImage from "../assets/SKBG.jpeg";
import "./HomePage.css";

const HomePage = () => {
  const [heroPost, setHeroPost] = useState(null);
  const [gridPosts, setGridPosts] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [latestVideo, setLatestVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pageId = "105656204521453";
        const accessToken = import.meta.env.VITE_FB_ACCESS_TOKEN;

        // Fetch Data
        const videoUrl = `https://graph.facebook.com/v17.0/${pageId}/videos?fields=description,permalink_url,created_time&limit=1&access_token=${accessToken}`;
        const postsUrl = `https://graph.facebook.com/v17.0/${pageId}/posts?fields=message,attachments{media},created_time,permalink_url&limit=12&access_token=${accessToken}`;

        const [videoRes, postsRes] = await Promise.all([
          axios.get(videoUrl),
          axios.get(postsUrl)
        ]);

        // 1. Setup Video
        if (videoRes.data.data.length > 0) {
          const vid = videoRes.data.data[0];
          setLatestVideo({
            title: vid.description ? vid.description.split('\n')[0] : "Official Broadcast",
            embedUrl: `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent("https://www.facebook.com" + vid.permalink_url)}&show_text=0`
          });
        }

        // 2. Setup Posts (Filter out posts without images if you want cleaner look)
        const allPosts = postsRes.data.data.map((post) => ({
          title: post.message || "Official Update",
          image: post.attachments?.data[0]?.media?.image?.src || PlaceHolderImage,
          url: post.permalink_url || "#",
          date: new Date(post.created_time).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
        }));

        if (allPosts.length > 0) {
          setHeroPost(allPosts[0]);          // #1 Post (Big Hero)
          setGridPosts(allPosts.slice(1, 5)); // #2-5 Posts (Grid)
          setAnnouncements(allPosts.slice(5, 10)); // #6-10 (Text list)
        }

      } catch (err) {
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Helper to trim text safely
  const trimText = (text, len) => {
    if (!text) return "";
    return text.length > len ? text.substring(0, len) + "..." : text;
  };

  if (loading) return (
    <div className="loader-container">
      <Loader2 className="spinner" size={60} />
    </div>
  );

  return (
    <div className="modern-home">
      {/* 1. HERO HEADER */}
      <header className="hero-header">
        <div className="hero-bg-overlay"></div>
        <div className="hero-content container">
          <div className="badge-pill">OFFICIAL PORTAL</div>
          <h1>SK Provincial Federation</h1>
          <h2>Davao del Sur</h2>
          <div className="hero-stats">
            <span><strong>Est. 2024</strong> Youth Leadership</span>
            <span className="dot"></span>
            <span><strong>Active</strong> Federation</span>
          </div>
        </div>
      </header>

      {/* 2. MAIN BENTO GRID */}
      <div className="container main-layout">
        <div className="bento-grid">
          
          {/* A. MAIN STORY (Takes up 2 columns) */}
          {heroPost && (
            <a href={heroPost.url} target="_blank" rel="noreferrer" className="bento-item hero-item">
              <div className="img-zoom-container">
                <img src={heroPost.image} alt="Hero" />
                <div className="gradient-overlay"></div>
              </div>
              <div className="content-overlay">
                <span className="date-tag"><Calendar size={12} /> {heroPost.date}</span>
                <h3>{trimText(heroPost.title, 120)}</h3>
                <button className="action-btn">Read Story <ArrowRight size={14} /></button>
              </div>
            </a>
          )}

         {/* B. SIDEBAR LIST (Announcements) */}
<div className="bento-item announcement-panel">

  <div className="panel-head">
    <Bell size={18} fill="#eab308" stroke="none" />
    <span>Latest Bulletins</span>
  </div>

  <div className="scrollable-list">
    {announcements.map((item, idx) => (
      <a
        href={item.url}
        key={idx}
        target="_blank"
        rel="noreferrer"
        className="bulletin-row"
      >
        <div className="bulletin-meta">
          <span className="bulletin-date">{item.date}</span>
        </div>
        <p className="bulletin-title">{trimText(item.title, 60)}</p>
      </a>
    ))}
  </div>
</div>


          {/* C. SECONDARY GRID (4 smaller cards) */}
          {gridPosts.map((post, idx) => (
            <a href={post.url} key={idx} target="_blank" rel="noreferrer" className="bento-item standard-card">
              <div className="card-img">
                <img src={post.image} alt="Post" />
              </div>
              <div className="card-text">
                <span className="tiny-date">{post.date}</span>
                <h4>{trimText(post.title, 55)}</h4>
              </div>
            </a>
          ))}
        </div>
      </div>



      {/* 3. CINEMATIC VIDEO SECTION */}
      {latestVideo && (
        <section className="cinema-section">
          <div className="container">
            <div className="cinema-header">
              <div className="live-badge">
                <span className="pulse"></span> LIVE BROADCAST
              </div>
              <h3>{trimText(latestVideo.title, 80)}</h3>
            </div>
            
            <div className="cinema-screen">
              <iframe
                src={`${latestVideo.embedUrl}&autoplay=0&mute=0`}
                title="Latest Video"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default HomePage;