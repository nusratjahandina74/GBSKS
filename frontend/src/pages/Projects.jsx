const projects = [
  {
    title: "School Project",
    description:
      "Providing free education, books, and learning materials to poor children.",
  },
  {
    title: "Medical Project",
    description:
      "Healthcare services in partnership with local and Austrian doctors.",
  },
  {
    title: "Vocational Training Project",
    description:
      "Skill development programs to help youths become self-reliant.",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-10">Our Projects</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>
              <p className="text-base leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
