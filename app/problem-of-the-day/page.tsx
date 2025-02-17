export default function ProblemOfTheDay() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-cream via-orange-50 to-cream px-6 text-center">
        <h1 className="text-2xl font-bold text-maroon">🧩 Problem of the Day</h1>
  
        <div className="bg-white shadow-lg rounded-lg p-6 mt-4 w-full max-w-2xl">
          <h2 className="text-lg font-semibold text-maroon mb-2">
            📌 Problem: Shortest Path in a Weighted Graph
          </h2>
          <p className="text-gray-700">
            Given a weighted, directed graph with <code>N</code> nodes and <code>M</code> edges, find the shortest path from node 1 to node N.  
            If there are multiple shortest paths, return any one of them.  
            If no path exists, return -1.
          </p>
  
          <h3 className="text-md font-semibold text-orange-500 mt-4">🔹 Input:</h3>
          <ul className="text-gray-700 text-sm">
            <li> - <code>N</code> (1 ≤ N ≤ 10⁵): Number of nodes</li>
            <li> - <code>M</code> (1 ≤ M ≤ 2×10⁵): Number of edges</li>
            <li> - <code>M</code> lines: <code>u v w</code> (1 ≤ u,v ≤ N, 1 ≤ w ≤ 10⁶)</li>
          </ul>
  
          <h3 className="text-md font-semibold text-orange-500 mt-4">🔹 Output:</h3>
          <p className="text-gray-700 text-sm">
            Print the shortest path from node 1 to node N, or -1 if no path exists.
          </p>
  
          <h3 className="text-md font-semibold text-orange-500 mt-4">💡 Hint:</h3>
          <p className="text-gray-700 text-sm">
            Use Dijkstra’s Algorithm (or Bellman-Ford if there are negative weights).
          </p>
        </div>
      </div>
    );
  }
  