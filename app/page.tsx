import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Globe, Youtube, Award } from "lucide-react"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-maroon mb-4">Welcome to INTELLICA</h1>
        <p className="text-2xl text-orange-700 mb-8">Your Personalized Learning Assistant</p>
        <div className="space-y-6">
          <Button
            asChild
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full text-xl transition-all transform hover:scale-105 shadow-lg"
          >
            <Link href="/register">
              Get Started <ArrowRight className="ml-2" />
            </Link>
          </Button>
          <p className="text-maroon text-lg">Discover tailored courses and learning paths designed just for you!</p>
        </div>
      </section>

      <section className="mt-16 grid md:grid-cols-2 gap-8">
        {[
          {
            title: "Personalized Learning",
            description:
              "We analyze your educational background, interests, and goals to create a customized learning experience.",
            icon: <BookOpen className="w-12 h-12 text-orange-500 mb-4" />,
          },
          {
            title: "Multilingual Support",
            description: "Access courses and support in multiple languages and regional dialects.",
            icon: <Globe className="w-12 h-12 text-orange-500 mb-4" />,
          },
          {
            title: "Curated Content",
            description: "Discover top-rated courses from YouTube, Coursera, edX, Udemy, and more.",
            icon: <Youtube className="w-12 h-12 text-orange-500 mb-4" />,
          },
          {
            title: "Skill Assessment",
            description: "Take aptitude tests to determine your skill level and get course recommendations.",
            icon: <Award className="w-12 h-12 text-orange-500 mb-4" />,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white/90 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow backdrop-blur-sm transform hover:scale-105 transition-transform duration-200"
          >
            {item.icon}
            <h2 className="text-2xl font-semibold text-maroon mb-4">{item.title}</h2>
            <p className="text-orange-700">{item.description}</p>
          </div>
        ))}
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-maroon mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: 1,
              title: "Tell Us About Yourself",
              description: "Share your educational background, interests, and learning goals.",
            },
            {
              step: 2,
              title: "Take the Aptitude Test",
              description: "Complete a quick assessment to determine your skill level.",
            },
            {
              step: 3,
              title: "Get Personalized Recommendations",
              description: "Receive tailored course suggestions and learning paths.",
            },
          ].map((item) => (
            <div key={item.step} className="bg-cream/80 p-6 rounded-lg shadow-md">
              <div className="bg-maroon text-cream rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold text-maroon mb-2">{item.title}</h3>
              <p className="text-orange-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-maroon mb-8">Ready to Start Your Learning Journey?</h2>
        <Button
          asChild
          className="bg-maroon hover:bg-orange-600 text-white px-8 py-4 rounded-full text-xl transition-all transform hover:scale-105 shadow-lg"
        >
          <Link href="/register">
            Create Your Account Now <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </section>
    </main>
  )
}

