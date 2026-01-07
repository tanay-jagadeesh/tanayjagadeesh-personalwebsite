'use client';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-background to-purple-900/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          About Me
        </h2>

        <div className="space-y-6 text-lg text-gray-300">
          <p className="animate-slide-up">
            I'm a first-year <span className="text-purple-400 font-semibold">Management Engineering</span> student
            with a passion for turning complex data into actionable insights and building systems that scale.
          </p>

          <p className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Currently, I'm coding orbital mechanics software at UW Orbital, and constantly exploring the frontiers of
            machine learning, data engineering, and cloud technologies.
          </p>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 my-8 border border-purple-500/20">
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">Beyond the Code</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-3xl">🏀</span>
                <div>
                  <p className="font-semibold text-white">Basketball</p>
                  <p className="text-gray-400">10 years of competitive play, including rep level. The court taught me teamwork, strategy under pressure, and how to stay composed when the game is on the line.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-3xl">♟️</span>
                <div>
                  <p className="font-semibold text-white">Chess</p>
                  <p className="text-gray-400">Tournament competitor with a 2nd place finish. Chess sharpened my strategic thinking and taught me to see several moves ahead—skills that translate directly to software architecture and problem-solving.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-3xl">💪</span>
                <div>
                  <p className="font-semibold text-white">Fitness</p>
                  <p className="text-gray-400">Dedicated to continuous improvement, both mentally and physically. Discipline in the gym mirrors discipline in code—consistency and effort compound over time.</p>
                </div>
              </div>
            </div>
          </div>

          <p className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            I bring the same strategic mindset from basketball and chess to software engineering—
            anticipating edge cases, planning architectures, and executing with precision.
            Whether it's debugging a complex system or optimizing an ML pipeline,
            I thrive on solving hard problems.
          </p>

          <p className="text-center text-xl font-semibold text-purple-400 mt-8">
            Let's build something exceptional together.
          </p>
        </div>
      </div>
    </section>
  );
}
