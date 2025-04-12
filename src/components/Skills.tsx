import { useLanguage } from "@/contexts/LanguageContext"
import { FC } from "react"

const Skills: FC = () => {
      const { t } = useLanguage()

  const skillCategories = [
    {
      title: "💻 Front-End",
      skills: ["React (JS/Native)", "Next.js", "TypeScript", "Figma", "Tailwind CSS", "Storybook"],
    },
    {
      title: "🖲️ Back-End",
      skills: ["Node.js", "Express", "Java (Spring)", "MongoDB, MySQL, PostgreSQL", "PHP (Symfony)", "Python"],
    },
    {
      title: "☁️ Salesforce",
      skills: ["Apex", "LWC", "Flow Builder", "Visualforce", "SOQL", "Salesforce CLI"],
    },
    {
      title: "🛠️ Outils / DevOps",
      skills: ["Git", "GitLab / GitHub", "Vercel", "Docker", "Postman", "Jira"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Titre principal */}
        <div className="text-center pb-12">
          <h2 className="text-4xl font-extrabold text-primary">
            {t.skills.title} 💪
          </h2>
        </div>

        {/* Grille des compétences */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-tertiary-300 p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-200"
            >
              <h3 className="text-xl font-semibold text-secondary mb-4 tracking-tight">
                {category.title}
              </h3>
              <ul className="space-y-2 text-gray-700 text-[15px]">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
