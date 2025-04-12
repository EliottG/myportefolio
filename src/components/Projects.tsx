import { FC } from "react"
import { Card } from "./ui/card"
import { useLanguage } from "../contexts/LanguageContext"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Info, ExternalLink } from "lucide-react"

const Projects: FC = () => {
  const { t } = useLanguage()

  const translatedProjects = [
    {
      ...t.projects.project1,
      image: "/images/andle.png",
      link: "https://saas-retro-geoffroys-projects-474d33dd.vercel.app/",
      techInfo: "Next.js 14 / Auth.js / Stripe / PostgreSQL / Prisma",
    },
    {
      ...t.projects.project2,
      image: "/images/englearn.png",
      link: "https://goenglearn.vercel.app/",
      techInfo: "React JS / Node JS / PostgreSQL",
    },
    {
      ...t.projects.project3,
      image: "/images/imageedit.png",
      link: "https://img-editor-opal.vercel.app/",
      techInfo: "React JS",
    },
  ]

  return (
    <section id="projects" className="py-20  text-white bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center pb-12 bg-white/10 text-primary px-4 py-2 rounded-xl ">
          {t.projects.title}
        </h2>

        <div className="flex flex-wrap md:flex-row flex-col items-center justify-center gap-8 max-w-4xl mx-auto">
        {translatedProjects.map((project, index) => (
            <Card
            key={index}
            className="relative h-96 w-full md:w-[calc(50%-1rem)] rounded-2xl overflow-hidden shadow-lg border-0 transition-all duration-300"
          >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              <div className="absolute inset-0 " />

              {/* Contenu principal */}
              <div className="absolute bottom-0 w-full bg-black/40 p-6 text-white z-10 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-sm text-white/90 mb-4">{project.description}</p>

                <div className="flex flex-wrap  items-center gap-3">
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        className=" cursor-pointer flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium bg-white/20 hover:bg-white/30 transition"
                      >
                        <Info className="w-4 h-4" />
                        {t.projects.techInfo}
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="max-w-sm p-4 text-sm bg-white text-gray-800 shadow-md rounded-md">
                    <ul className="flex flex-wrap gap-2">
                      {project.techInfo.split(" / ").map((tech, i) => (
                        <li
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full shadow-sm border border-gray-300"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                    </PopoverContent>
                  </Popover>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-[var(--color-primary)] hover:opacity-90 transition"
                  >
                    {t.projects.cta || "Voir le projet"}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
