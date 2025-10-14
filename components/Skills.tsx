const skills = [
  {
    category: "Systems Programming",
    color: "accent-primary",
    icon: "⚙️",
    items: [
      { name: "C/C++", level: 90 },
      { name: "Memory Management", level: 85 },
      { name: "Unix/Linux", level: 88 },
      { name: "Shell Scripting", level: 80 },
      { name: "System Calls", level: 85 },
    ],
  },
  {
    category: "AI & Algorithms",
    color: "accent-secondary",
    icon: "🧠",
    items: [
      { name: "Python", level: 85 },
      { name: "Algorithm Design", level: 88 },
      { name: "Game Theory", level: 75 },
      { name: "Minimax", level: 80 },
      { name: "Data Structures", level: 90 },
    ],
  },
  {
    category: "Tools & Technologies",
    color: "accent-primary",
    icon: "🛠️",
    items: [
      { name: "Git", level: 85 },
      { name: "Bash", level: 80 },
      { name: "Debugging", level: 88 },
      { name: "Performance Optimization", level: 82 },
      { name: "Web Development", level: 75 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center text-foreground">Technical Skills</h2>
        <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise across different domains
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={index} 
              className="bg-background rounded-lg p-6 border border-accent-primary/20 hover:border-accent-primary/40 transition-all hover:shadow-xl hover:shadow-accent-primary/5 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl group-hover:scale-110 transition-transform">{skillGroup.icon}</span>
                <h3 className={`text-2xl font-semibold text-${skillGroup.color}`}>
                  {skillGroup.category}
                </h3>
              </div>
              
              <div className="space-y-4">
                {skillGroup.items.map((skill, i) => (
                  <div key={i} className="group/item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foreground/90 font-medium text-sm">
                        {skill.name}
                      </span>
                      <span className="text-foreground/60 text-xs font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-surface rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${
                          skillGroup.color === 'accent-primary' 
                            ? 'from-accent-primary/50 to-accent-primary' 
                            : 'from-accent-secondary/50 to-accent-secondary'
                        } transition-all duration-1000 ease-out rounded-full`}
                        style={{ 
                          width: `${skill.level}%`,
                          transition: 'width 1s ease-out'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning Section */}
        <div className="mt-12 bg-background rounded-lg p-8 border border-accent-secondary/20">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <span className="text-3xl">📚</span>
            <h3 className="text-2xl font-semibold text-accent-secondary">Currently Learning</h3>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Data Engineering",
              "Apache Spark",
              "SQL Optimization",
              "Cloud Computing",
              "Docker & Kubernetes",
              "Machine Learning Pipelines"
            ].map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-accent-secondary/10 text-accent-secondary border border-accent-secondary/30 rounded-full text-sm font-medium hover:bg-accent-secondary/20 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
