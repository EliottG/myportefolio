import { FC } from "react"
import { useLanguage } from "../contexts/LanguageContext"
import { Github, Linkedin } from "lucide-react"

const Footer: FC = () => {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="w-full py-6 bg-gray-100 border-t">
      <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 text-center text-gray-600 sm:flex-row">
        <div>© {year} - EliottGDC. {t.footer.rights}</div>
        <div className="flex gap-4">
          <a
            href="https://github.com/EliottG"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/eliott-geoffroy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary transition-colors"
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
