// server.js
import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Facebook page ID & token from env
const PAGE_ID = "105656204521453";
const ACCESS_TOKEN = process.env.VITE_FB_ACCESS_TOKEN;

// Endpoint to fetch posts & videos
app.get("/api/fbContent", async (req, res) => {
  try {
    // Posts
    const postsUrl = `https://graph.facebook.com/v17.0/${PAGE_ID}/posts?fields=message,attachments{media},created_time,permalink_url&limit=12&access_token=${ACCESS_TOKEN}`;
    // Videos
    const videosUrl = `https://graph.facebook.com/v17.0/${PAGE_ID}/videos?fields=description,permalink_url,created_time&limit=1&access_token=${ACCESS_TOKEN}`;

    const [postsRes, videosRes] = await Promise.all([
      axios.get(postsUrl),
      axios.get(videosUrl)
    ]);

    res.json({
      posts: postsRes.data.data,
      videos: videosRes.data.data
    });
  } catch (err) {
    console.error("FB API Error:", err.response?.data || err.message);
    res.status(500).json({ error: "Failed to fetch Facebook content" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});