'use client';

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "SQL"]
  },
  {
    title: "ML & AI",
    skills: ["TensorFlow", "PyTorch", "scikit-learn", "OpenCV", "NLP", "RAG"]
  },
  {
    title: "Data Engineering",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "PySpark", "Databricks", "ETL"]
  },
  {
    title: "Backend & Databases",
    skills: ["FastAPI", "PostgreSQL", "SQLAlchemy", "SQLite", "REST APIs"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["Azure", "Docker", "Git", "CI/CD"]
  },
  {
    title: "Currently Learning",
    skills: ["Microsoft Azure Certification", "Advanced PySpark", "RAG Systems", "Real-time Processing"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105"
            >
              <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                {category.title === "Languages" && "💻"}
                {category.title === "ML & AI" && "🤖"}
                {category.title === "Data Engineering" && "📊"}
                {category.title === "Backend & Databases" && "🗄️"}
                {category.title === "Cloud & DevOps" && "☁️"}
                {category.title === "Currently Learning" && "🚀"}
                <span>{category.title}</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg text-sm text-gray-200 hover:border-purple-400 hover:bg-purple-600/30 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">My Approach</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="font-semibold text-purple-400 mb-2">Strategic Thinking</h4>
                <p className="text-gray-400 text-sm">From chess and basketball—I plan several moves ahead and adapt to changing conditions.</p>
              </div>
              <div>
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="font-semibold text-purple-400 mb-2">Performance First</h4>
                <p className="text-gray-400 text-sm">Optimizing systems for speed and efficiency, whether it's ML pipelines or payment processing.</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🔄</div>
                <h4 className="font-semibold text-purple-400 mb-2">Continuous Growth</h4>
                <p className="text-gray-400 text-sm">Always learning, always improving. From the gym to the codebase—discipline drives excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
