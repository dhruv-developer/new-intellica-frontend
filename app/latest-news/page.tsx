export default function LatestNews() {
    const newsArticles = [
      {
        title: "Nvidia Readies Jetson Thor Computers for Humanoid Robots in 2025",
        description:
          "Nvidia plans to launch its Jetson Thor computers in the first half of 2025, aiming to advance humanoid robotics.",
        source: "The Wall Street Journal",
        url: "https://www.wsj.com/tech/nvidia-readies-jetson-thor-computers-for-humanoid-robots-in-2025-76cce094",
      },
      {
        title: "Elon Musk's $97.4 Billion Bid to Acquire OpenAI Rejected",
        description:
          "OpenAI's board has unanimously rejected Elon Musk's $97.4 billion offer to purchase the company.",
        source: "The Verge",
        url: "https://www.theverge.com/news/613571/openai-rejects-elon-musk-purchase-offer",
      },
      {
        title: "Apple Vision Pro Launches February 2nd",
        description:
          "Apple's highly anticipated Vision Pro headset is set to launch on February 2nd.",
        source: "The Verge",
        url: "https://www.theverge.com/2024/1/8/24001858/apple-vision-pro-release-date-availability-price",
      },
      {
        title: "Google Enhances Search with Advanced AI Features",
        description:
          "Google is integrating advanced AI to allow users to voice questions about images and videos.",
        source: "Associated Press",
        url: "https://apnews.com/article/2920c3f95ba6e77f405bb665754a45bb",
      },
    ];
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-cream via-orange-50 to-cream p-6">
        <h1 className="text-2xl font-bold text-maroon mb-6">📰 Latest Tech News</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
          {newsArticles.map((news, index) => (
            <a
              key={index}
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-md rounded-xl p-4 w-80 hover:shadow-lg transition-transform hover:scale-105 border border-gray-200"
            >
              <h2 className="text-lg font-semibold text-maroon">{news.title}</h2>
              <p className="text-gray-700 mt-2">{news.description}</p>
              <p className="text-sm text-orange-500 mt-2">{news.source}</p>
            </a>
          ))}
        </div>
      </div>
    );
  }
  