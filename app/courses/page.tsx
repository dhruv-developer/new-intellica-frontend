import { Button } from "../../components/ui/button";
import { Star } from "lucide-react";

export default function Courses() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-maroon mb-8">Recommended Courses</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { title: "Machine Learning A-Z", platform: "Udemy", rating: 4.8 },
          { title: "Web Development Bootcamp", platform: "Coursera", rating: 4.7, progress: "40% Completed" }, // Progress added here
          { title: "Data Science Specialization", platform: "edX", rating: 4.9 },
          { title: "iOS App Development with Swift", platform: "Udacity", rating: 4.6 },
        ].map((course, index) => (
          <div key={index} className="bg-white/90 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-orange-700 mb-2">{course.title}</h2>
            <p className="text-maroon mb-2">Platform: {course.platform}</p>
            <div className="flex items-center mb-4">
              <Star className="text-yellow-400 w-5 h-5 mr-1" />
              <span className="text-maroon font-semibold">{course.rating}</span> {/* Rating is now maroon */}
            </div>

            {/* Show progress if available */}
            {course.progress ? (
              <>
                <p className="text-maroon mb-2">{course.progress}</p>
                <Button>Continue</Button>
              </>
            ) : (
              <Button>Enroll Now</Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
