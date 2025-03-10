"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

export default function DailyContent() {
  const [userId, setUserId] = useState("");  // ✅ User ID Input
  const [dailyContent, setDailyContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const fetchDailyContent = async () => {
    setMessage("");
    if (!userId) {
      setMessage("❌ Please enter a valid User ID.");
      return;
    }

    const url = `http://127.0.0.1:8000/daily-content/daily-content/?user_id=${userId}`;
    console.log("🔍 Fetching Daily Content from:", url);  // ✅ Log the final API call

    setLoading(true);
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      console.log("📩 Server Response:", data);  // ✅ Log the server response

      if (response.ok) {
        setDailyContent(data);
      } else {
        setMessage(data.detail || "❌ Failed to fetch daily content.");
      }
    } catch (error) {
      console.error("❌ Fetch Error:", error);
      setMessage("❌ Server error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-maroon mb-8">Daily Content</h1>

      <Label>Enter User ID</Label>
      <Input
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        className="mb-4"
        placeholder="Enter User ID"
      />

      <Button onClick={fetchDailyContent} disabled={loading}>
        {loading ? "Loading..." : "Get Daily Content"}
      </Button>

      {message && <p className="text-red-600 mt-4">{message}</p>}

      {dailyContent && (
        <div className="mt-6 p-4 border rounded-lg bg-white">
          <h2 className="text-xl font-semibold">🧩 Problem of the Day</h2>
          <p className="text-gray-700">{dailyContent.problem_of_the_day.problem}</p>
          <p className="text-gray-500">💡 Hint: {dailyContent.problem_of_the_day.hint}</p>

          <h2 className="text-xl font-semibold mt-6">📰 News Articles</h2>
          {dailyContent.news_articles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-100 p-4 rounded-md shadow-md mt-2"
            >
              <h3 className="font-bold">{article.title}</h3>
              <p className="text-gray-600">{article.summary}</p>
              <p className="text-orange-500">{article.source}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
