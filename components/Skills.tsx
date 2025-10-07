const skills = [
  {
    category: "Systems Programming",
    color: "accent-primary",
    items: ["C/C++", "Memory Management", "Unix/Linux", "Shell Scripting", "System Calls"],
  },
  {
    category: "AI & Algorithms",
    color: "accent-secondary",
    items: ["Python", "Algorithm Design", "Game Theory", "Minimax", "Data Structures"],
  },
  {
    category: "Tools & Technologies",
    color: "accent-primary",
    items: ["Git", "Bash", "Debugging", "Performance Optimization", "Web Development"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-surface">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Technical Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-background rounded-lg p-6 border border-accent-primary/20">
              <h3 className={`text-2xl font-semibold mb-4 text-${skillGroup.color}`}>
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, i) => (
                  <li
                    key={i}
                    className="text-foreground/80 text-lg"
                  >
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
