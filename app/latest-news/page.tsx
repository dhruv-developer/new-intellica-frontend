"use client";

import { useState } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";

export default function LatestNews() {
  const [userId, setUserId] = useState("");
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const fetchNews = async () => {
    setMessage("");
    if (!userId) {
      setMessage("❌ Please enter a valid User ID.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8000/daily-content/?user_id=${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      if (response.ok) {
        setNewsArticles(data.news_articles);
      } else {
        setMessage(data.detail || "❌ Failed to fetch news.");
      }
    } catch (error) {
      setMessage("❌ Server error. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-cream via-orange-50 to-cream p-6">
      <h1 className="text-2xl font-bold text-maroon mb-6">📰 Latest Tech News</h1>

      <Label>Enter Your User ID</Label>
      <Input value={userId} onChange={(e) => setUserId(e.target.value)} className="mb-4" />

      <Button onClick={fetchNews} disabled={loading}>
        {loading ? "Fetching..." : "Get Latest News"}
      </Button>

      {message && <p className="text-red-500 mt-2">{message}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
        {newsArticles.map((news, index) => (
          <a
            key={index}
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-md rounded-xl p-4 w-80 hover:shadow-lg transition-transform hover:scale-105 border border-gray-200"
          >
            <h2 className="text-lg font-semibold text-maroon">{news.title}</h2>
            <p className="text-gray-700 mt-2">{news.summary}</p>
            <p className="text-sm text-orange-500 mt-2">{news.source}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
