import { Button } from "../../components/ui/button"

export default function Quiz() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-maroon mb-8">Aptitude Test</h1>
      <div className="bg-white/90 p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-orange-700 mb-4">Question 1 of 10</h2>
        <p className="text-lg mb-4">What is the capital of France?</p>
        <div className="space-y-4">
          <Button className="w-full text-left justify-start" variant="outline">
            Paris
          </Button>
          <Button className="w-full text-left justify-start" variant="outline">
            London
          </Button>
          <Button className="w-full text-left justify-start" variant="outline">
            Berlin
          </Button>
          <Button className="w-full text-left justify-start" variant="outline">
            Madrid
          </Button>
        </div>
        <div className="mt-8 flex justify-between">
          <Button variant="outline">Previous</Button>
          <Button>Next</Button>
        </div>
      </div>
    </div>
  )
}

