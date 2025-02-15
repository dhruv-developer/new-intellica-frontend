import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-maroon mb-8">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white/90 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-orange-700 mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" />
            <Button type="submit">Send Message</Button>
          </form>
        </div>
        <div className="bg-white/90 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-orange-700 mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="w-6 h-6 mr-2 text-maroon" />
              <p>contact@intellica.com</p>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 mr-2 text-maroon" />
              <p>+1 (123) 456-7890</p>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 mr-2 text-maroon" />
              <p>123 Learning Street, Education City, 12345</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

