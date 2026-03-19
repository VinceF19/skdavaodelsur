import React, { useEffect, useState } from "react";
import axios from "axios";
import { ArrowRight, Calendar, Bell, Loader2 } from "lucide-react";
import Footer from "../components/Footer";
import PlaceholderImage from "../assets/SKBG.jpeg";
import "./HomePage.css";

// Same pattern as NewsEvent.jsx — call Facebook Graph API directly (no server needed)
const PAGE_ID      = "105656204521453";
const ACCESS_TOKEN = import.meta.env.VITE_FB_ACCESS_TOKEN;

const FB_POSTS_URL  = `https://graph.facebook.com/v21.0/${PAGE_ID}/posts?fields=message,attachments{media},created_time,permalink_url&limit=12&access_token=${ACCESS_TOKEN}`;
const FB_VIDEOS_URL = `https://graph.facebook.com/v21.0/${PAGE_ID}/videos?fields=description,permalink_url,created_time&limit=1&access_token=${ACCESS_TOKEN}`;

/* ─── Helpers ────────────────────────────────────────────── */

const trimText = (text, maxLen) => {
  if (!text) return "";
  return text.length > maxLen ? text.slice(0, maxLen) + "…" : text;
};

const formatPost = (post) => ({
  title: post.message || "Official Update",
  image: post.attachments?.data[0]?.media?.image?.src || PlaceholderImage,
  url:   post.permalink_url || "#",
  date:  new Date(post.created_time).toLocaleDateString("en-US", {
    month: "short",
    day:   "numeric",
  }),
});

const EMPTY_POSTS = Array(4).fill(null);

/* ─── Page ───────────────────────────────────────────────── */

const HomePage = () => {
  const [heroPost,      setHeroPost]      = useState(null);
  const [gridPosts,     setGridPosts]     = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [latestVideo,   setLatestVideo]   = useState(null);
  const [loading,       setLoading]       = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch posts + videos in parallel — same as NewsEvent.jsx pattern
        const [postsRes, videosRes] = await Promise.all([
          axios.get(FB_POSTS_URL),
          axios.get(FB_VIDEOS_URL),
        ]);

        const posts  = (postsRes.data.data  || []).map(formatPost);
        const videos =  videosRes.data.data || [];

        if (posts.length) {
          setHeroPost(posts[0]);
          setGridPosts(posts.slice(1, 5));
          setAnnouncements(posts.slice(5, 10));
        }

        if (videos.length) {
          const vid = videos[0];
          setLatestVideo({
            title:    vid.description?.split("\n")[0] || "Official Broadcast",
            embedUrl: `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
              "https://www.facebook.com" + vid.permalink_url
            )}&show_text=0`,
          });
        }
      } catch (err) {
        console.error("FB API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <div className="home">
      <HeroHeader />

      <main className="hp-container main-layout">
        <div className="bento-grid">

          {heroPost
            ? <HeroCard post={heroPost} />
            : <HeroCardSkeleton />}

          <AnnouncementPanel items={announcements} />

          {(gridPosts.length ? gridPosts : EMPTY_POSTS).map((post, i) =>
            post
              ? <PostCard         key={i} post={post} index={i} />
              : <PostCardSkeleton key={i} index={i} />
          )}

        </div>
      </main>

      {latestVideo && <VideoSection video={latestVideo} />}

      <Footer />
    </div>
  );
};

/* ─── Real components ─────────────────────────────────────── */

const LoadingScreen = () => (
  <div className="loader-screen">
    <div className="loader-ring">
      <Loader2 size={32} className="loader-icon" />
    </div>
    <span className="loader-label">Loading content…</span>
  </div>
);

const HeroHeader = () => (
  <header className="hero-header">
    <div className="hero-orb orb-gold" />
    <div className="hero-orb orb-blue" />
    <div className="hero-content">
      <div className="badge-pill">OFFICIAL PORTAL</div>
      <h1 className="hero-title">SK Provincial Federation</h1>
      <p className="hero-subtitle">Davao del Sur</p>
      <div className="hero-meta">
        <span><strong>Est. 2024</strong> · Youth Leadership</span>
        <span className="meta-dot" />
        <span><strong>Active</strong> Federation</span>
      </div>
    </div>
    <div className="hero-wave" />
  </header>
);

const HeroCard = ({ post }) => (
  <a href={post.url} target="_blank" rel="noreferrer" className="bento-card hero-card">
    <img src={post.image} alt="Featured post" className="hero-card-img" />
    <div className="hero-card-gradient" />
    <div className="hero-card-body">
      <span className="date-chip">
        <Calendar size={11} /> {post.date}
      </span>
      <h3>{trimText(post.title, 120)}</h3>
      <span className="read-btn">
        Read Story <ArrowRight size={14} />
      </span>
    </div>
  </a>
);

const AnnouncementPanel = ({ items }) => (
  <div className="bento-card announcement-card">
    <div className="panel-header">
      <Bell size={15} />
      <span>Latest Bulletins</span>
    </div>
    <div className="bulletin-list">
      {items.length > 0
        ? items.map((item, i) => (
            <a key={i} href={item.url} target="_blank" rel="noreferrer" className="bulletin-item">
              <span className="bulletin-date">{item.date}</span>
              <p>{trimText(item.title, 65)}</p>
            </a>
          ))
        : <BulletinsSkeleton />}
    </div>
  </div>
);

const PostCard = ({ post, index }) => (
  <a
    href={post.url}
    target="_blank"
    rel="noreferrer"
    className="bento-card post-card"
    style={{ animationDelay: `${index * 80}ms` }}
  >
    <div className="post-card-img">
      <img src={post.image} alt="Post" />
    </div>
    <div className="post-card-body">
      <span className="post-date">{post.date}</span>
      <h4>{trimText(post.title, 60)}</h4>
    </div>
  </a>
);

const VideoSection = ({ video }) => (
  <section className="video-section">
    <div className="hp-container">
      <div className="video-header">
        <div className="live-badge">
          <span className="live-dot" /> LATEST BROADCAST
        </div>
        <h3>{trimText(video.title, 80)}</h3>
      </div>
      <div className="video-frame">
        <iframe
          src={`${video.embedUrl}&autoplay=0&mute=0`}
          title="Latest Video"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      </div>
    </div>
  </section>
);

/* ─── Skeleton placeholders ───────────────────────────────── */

const HeroCardSkeleton = () => (
  <div className="bento-card hero-card hero-card-skeleton">
    <div className="sk-block sk-fill" />
    <div className="hero-card-body">
      <div className="sk-block sk-chip" />
      <div className="sk-block sk-title" />
      <div className="sk-block sk-title" style={{ width: "62%" }} />
      <div className="sk-block sk-btn" />
    </div>
  </div>
);

const PostCardSkeleton = ({ index }) => (
  <div className="bento-card post-card" style={{ animationDelay: `${index * 80}ms` }}>
    <div className="post-card-img sk-block sk-fill" />
    <div className="post-card-body">
      <div className="sk-block sk-line" style={{ width: "32%" }} />
      <div className="sk-block sk-line" />
      <div className="sk-block sk-line" style={{ width: "78%" }} />
    </div>
  </div>
);

const BulletinsSkeleton = () => (
  <div className="bulletins-skeleton">
    {Array(5).fill(null).map((_, i) => (
      <div key={i} className="bulletin-item">
        <div className="sk-block sk-line" style={{ width: "28%", marginBottom: 8 }} />
        <div className="sk-block sk-line" />
        <div className="sk-block sk-line" style={{ width: "85%" }} />
      </div>
    ))}
  </div>
);

export default HomePage;
