'use client';

const experiences = [
  {
    title: "Software Engineer",
    company: "Verrin",
    type: "Permanent Part-time",
    period: "Dec 2025 - Present",
    location: "Sydney, NSW, Australia (Remote)",
    description: "Building real-time payment processing infrastructure",
    highlights: [
      "Architecting scalable payment processing systems",
      "Implementing real-time transaction monitoring",
      "Optimizing infrastructure for high-throughput operations"
    ]
  },
  {
    title: "Software Developer",
    company: "UW Orbital",
    type: "Permanent Part-time",
    period: "Sep 2025 - Present",
    location: "Waterloo, ON, Canada (On-site)",
    description: "Coding for orbit",
    highlights: [
      "Developing orbital mechanics software",
      "Working with FastAPI and Git",
      "Contributing to satellite systems development"
    ],
    skills: ["FastAPI", "Git", "+7 skills"]
  },
  {
    title: "Founding Engineer",
    company: "Hands",
    type: "Contract Part-time",
    period: "Sep 2025 - Nov 2025",
    location: "Toronto, ON, Canada (Remote)",
    description: "RAG Cooking App",
    highlights: [
      "Built Retrieval-Augmented Generation system for cooking",
      "Implemented Python-based backend architecture",
      "Designed and developed core features from scratch"
    ],
    skills: ["Git", "Python", "+6 skills"]
  },
  {
    title: "Software Developer",
    company: "Jags IT Consulting",
    type: "Contract Part-time",
    period: "Jan 2024 - Apr 2024",
    location: "Toronto, ON, Canada (Remote)",
    description: "Developed client-ready tech solutions",
    highlights: [
      "Built ETL pipelines for data processing",
      "Designed software architecture for client projects",
      "Delivered production-ready solutions"
    ],
    skills: ["Extract, Transform, Load (ETL)", "Software Design", "+2 skills"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">
          Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-600 to-blue-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-purple-600 border-4 border-background"></div>

                {/* Content card */}
                <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105">
                    <div className="mb-3">
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      <p className="text-purple-400 font-semibold text-lg">{exp.company}</p>
                      <p className="text-gray-400 text-sm">{exp.type} · {exp.period}</p>
                      <p className="text-gray-500 text-sm">{exp.location}</p>
                    </div>

                    <p className="text-gray-300 mb-4 italic">{exp.description}</p>

                    <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                          <span className="text-purple-400 mt-1">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.skills && (
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-xs text-purple-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
