import { Button } from "../../components/ui/button"
import { CheckCircle } from "lucide-react"

export default function LearningPath() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-maroon mb-8">Your Learning Path</h1>
      <div className="space-y-6">
        {[
          { title: "Introduction to Programming", completed: true },
          { title: "Web Development Basics", completed: true },
          { title: "JavaScript Fundamentals", completed: false },
          { title: "React.js Essentials", completed: false },
          { title: "Backend Development with Node.js", completed: false },
        ].map((course, index) => (
          <div key={index} className="bg-white/90 p-6 rounded-lg shadow-lg flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-orange-700">{course.title}</h2>
              <p className="text-maroon">{course.completed ? "Completed" : "In Progress"}</p>
            </div>
            {course.completed ? <CheckCircle className="text-green-500 w-6 h-6" /> : <Button>Start Course</Button>}
          </div>
        ))}
      </div>
    </div>
  )
}

