// /api/fbPosts.js
import axios from "axios";

export default async function handler(req, res) {
  const pageId = "YOUR_PAGE_ID"; // Replace with numeric Page ID
  const accessToken = process.env.FB_PAGE_TOKEN; // Long-lived Page token

  try {
    const response = await axios.get(`https://graph.facebook.com/v24.0/${pageId}/posts`, {
      params: {
        fields: "message,attachments{media,type},permalink_url,created_time",
        limit: 20,
        access_token: accessToken,
      },
    });

    // Map posts into clean format
    const posts = response.data.data.map((post) => {
      const attachmentData = post.attachments?.data?.[0];
      const imageUrl = attachmentData?.media?.image?.src;

      const fullMessage = post.message || "Official Update";
      const titleLine = fullMessage.split("\n")[0];

      return {
        id: post.id,
        title: titleLine,
        description: fullMessage,
        image: imageUrl || "https://placehold.co/600x400?text=News+Update",
        url: post.permalink_url || "#",
        date: new Date(post.created_time).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
      };
    });

    res.status(200).json(posts);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
}