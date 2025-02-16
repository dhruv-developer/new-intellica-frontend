"use client";

import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { CheckCircle } from "lucide-react";

export default function LearningPath() {
  const [learningPrompt, setLearningPrompt] = useState(true);
  const [userResponse, setUserResponse] = useState<string | null>(null);

  // Remove the message block after 3-4 seconds when a response is selected
  useEffect(() => {
    if (userResponse !== null) {
      const timer = setTimeout(() => {
        setLearningPrompt(false);
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [userResponse]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-maroon mb-8">Your Learning Path</h1>

      {/* Continuous Learning Prompt */}
      {learningPrompt && (
        <div className="bg-orange-100 text-maroon p-4 rounded-lg shadow-md mb-6 text-center">
          {userResponse === null ? (
            <>
              <p className="text-lg font-semibold mb-2">
                Are you interested in continuous learning?
              </p>
              <div className="flex justify-center space-x-4">
                <Button variant="outline" onClick={() => setUserResponse("yes")}>Yes</Button>
                <Button variant="outline" onClick={() => setUserResponse("no")}>No</Button>
              </div>
            </>
          ) : (
            <p className="text-lg font-semibold">
              {userResponse === "yes"
                ? "Great choice! Keep learning and growing 🚀"
                : "That's okay! Learning at your own pace is important too 😊"}
            </p>
          )}
        </div>
      )}

      {/* Learning Path Courses */}
      <div className="space-y-6">
        {[
          { title: "Introduction to Programming", completed: true },
          { title: "Web Development Basics", completed: true },
          { title: "JavaScript Fundamentals", completed: false, progress: "30% Completed" },
          { title: "React.js Essentials", completed: false, progress: "45% Completed" },
          { title: "Backend Development with Node.js", completed: false, progress: "20% Completed" },
          { title: "DevOps & CI/CD Pipelines", completed: false },
        ].map((course, index) => (
          <div key={index} className="bg-white/90 p-6 rounded-lg shadow-lg flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-orange-700">{course.title}</h2>
              <p className="text-maroon">
                {course.completed ? "Completed" : course.progress || ""}
              </p>
            </div>
            {course.completed ? (
              <CheckCircle className="text-green-500 w-6 h-6" />
            ) : (
              <Button>{course.progress ? "Continue" : "Start Course"}</Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
