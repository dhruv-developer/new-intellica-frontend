import { Button } from "../../components/ui/button"
import { Youtube } from "lucide-react"

export default function YouTubeSummaries() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-maroon mb-8">YouTube Video Summaries</h1>
      <div className="space-y-6">
        {[
          {
            title: "Introduction to Machine Learning",
            duration: "15:30",
            summary:
              "This video covers the basics of machine learning, including supervised and unsupervised learning, and common algorithms.",
          },
          {
            title: "React Hooks Explained",
            duration: "12:45",
            summary: "A comprehensive guide to React Hooks, including useState, useEffect, and custom hooks.",
          },
          {
            title: "Python for Data Science",
            duration: "20:15",
            summary: "Learn how to use Python for data analysis, visualization, and basic machine learning tasks.",
          },
        ].map((video, index) => (
          <div key={index} className="bg-white/90 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Youtube className="text-red-500 w-6 h-6 mr-2" />
              <h2 className="text-xl font-semibold text-orange-700">{video.title}</h2>
            </div>
            <p className="text-maroon mb-2">Duration: {video.duration}</p>
            <p className="text-gray-700 mb-4">{video.summary}</p>
            <Button>Watch Full Video</Button>
          </div>
        ))}
      </div>
    </div>
  )
}

