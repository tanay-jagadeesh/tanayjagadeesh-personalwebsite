'use client';

const projects = [
  {
    title: "Stock Market News & Sentiment Analyzer",
    description: "A comprehensive API built with yfinance and FastAPI that aggregates stock market news and performs sentiment analysis to help investors make data-driven decisions.",
    tech: ["Python", "FastAPI", "yfinance", "NLP", "Sentiment Analysis"],
    github: "https://github.com/tanay-jagadeesh/yfinance_newsapi-stock-sentiment-analyzer",
    highlights: [
      "Real-time stock news aggregation",
      "ML-powered sentiment analysis",
      "RESTful API with FastAPI"
    ]
  },
  {
    title: "Turtle Crossing Game",
    description: "An interactive game built with Python's Turtle graphics, demonstrating object-oriented programming and game development fundamentals.",
    tech: ["Python", "Turtle Graphics", "OOP"],
    github: "https://github.com/tanay-jagadeesh/turtle-crossing-game",
    highlights: [
      "Object-oriented design",
      "Collision detection",
      "Progressive difficulty"
    ]
  },
  {
    title: "Merge Mail Automation",
    description: "An automation tool for personalized bulk email campaigns with dynamic content merging and template management.",
    tech: ["Python", "Email Automation", "Data Processing"],
    github: "https://github.com/tanay-jagadeesh/merge-mail",
    highlights: [
      "Automated email workflows",
      "Template customization",
      "Bulk processing capabilities"
    ]
  },
  {
    title: "US States Quiz",
    description: "An educational quiz application to test knowledge of US geography, built with interactive features and scoring systems.",
    tech: ["Python", "Turtle Graphics", "Data Visualization"],
    github: "https://github.com/tanay-jagadeesh/us-states-quiz",
    highlights: [
      "Interactive learning tool",
      "Score tracking",
      "Visual feedback system"
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-background to-blue-900/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="text-purple-400">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-xs text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <span>View on GitHub</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/tanay-jagadeesh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold hover:scale-105 transition-transform"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
