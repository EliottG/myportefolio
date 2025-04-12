import { FC } from "react"
import { useLanguage } from "../contexts/LanguageContext"
import { Github, Linkedin } from "lucide-react"

const Footer: FC = () => {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="w-full py-6 bg-secondary-400 ">
      <div className="container mx-auto px-4 flex items-center gap-4 justify-end text-center text-white sm:flex-row">
        <div className="flex-1">© {year} - EliottGDC. {t.footer.rights}</div>
        <div className="absolute flex gap-4">
          <a
            href="https://github.com/EliottG"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/eliott-geoffroy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
