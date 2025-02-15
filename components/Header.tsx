import Link from "next/link"
import { Button } from "./ui/button"

export default function Header() {
  return (
    <header className="bg-maroon/90 text-cream py-4 backdrop-blur-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="text-3xl font-bold mb-4 md:mb-0 hover:text-orange-300 transition-colors">
          INTELLICA
        </Link>
        <nav className="mb-4 md:mb-0">
          <ul className="flex flex-wrap justify-center md:justify-start space-x-2 md:space-x-4">
            <li>
              <Link href="/" className="hover:text-orange-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/quiz" className="hover:text-orange-300 transition-colors">
                Quiz
              </Link>
            </li>
            <li>
              <Link href="/learning-path" className="hover:text-orange-300 transition-colors">
                Learning Path
              </Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-orange-300 transition-colors">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/youtube" className="hover:text-orange-300 transition-colors">
                YouTube
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-orange-300 transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-2">
          <Button variant="outline" className="text-cream border-cream hover:bg-orange-500 transition-colors">
            Login
          </Button>
          <Button variant="outline" className="text-cream border-cream hover:bg-orange-500 transition-colors">
            Sign Up
          </Button>
          <Button variant="outline" className="text-cream border-cream bg-maroon hover:bg-orange-500 transition-colors">
            View Profile
          </Button>
        </div>
      </div>
    </header>
  )
}

