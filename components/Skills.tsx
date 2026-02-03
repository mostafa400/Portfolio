"use client";

export default function Skills() {
  const skills = [
    {
      title: "LLM Integration",
      description: "OpenAI, Anthropic, HuggingFace",
      icon: "🤖"
    },
    {
      title: "Automation",
      description: "Make.com, n8n, Zapier",
      icon: "⚡"
    },
    {
      title: "Prompt Eng.",
      description: "CoT, Few-Shot, System Design",
      icon: "🧠"
    },
    {
      title: "Backend Dev",
      description: "Python, FastAPI, Node.js",
      icon: "🔧"
    },
    {
      title: "Vector DBs",
      description: "Pinecone, Weaviate, Chroma",
      icon: "🗄️"
    },
    {
      title: "Data Analysis",
      description: "Pandas, NumPy, Visualization",
      icon: "📊"
    },
  ];

  return (
    <section id="skills" className="px-6 py-16 lg:px-40 bg-white dark:bg-background-dark">
      <div className="mx-auto max-w-[960px]">
        <h2 className="text-3xl font-bold tracking-tight text-text-main dark:text-white mb-8">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group bg-gray-50 dark:bg-surface-dark border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg hover:-translate-y-2 hover:border-primary dark:hover:border-primary transition-all duration-300 cursor-pointer animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-lg font-bold text-text-main dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-primary transition-colors">
                {skill.title}
              </h3>
              <p className="text-sm text-text-sub dark:text-gray-400">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}