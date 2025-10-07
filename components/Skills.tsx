const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "RESTful APIs"],
  },
  {
    category: "Tools & Other",
    items: ["Git", "GitHub", "VS Code", "Figma", "Responsive Design"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="text-center">
              <h3 className="text-2xl font-semibold mb-4 text-blue-500">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, i) => (
                  <li
                    key={i}
                    className="text-gray-600 dark:text-gray-300 text-lg"
                  >
                    {skill}
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
