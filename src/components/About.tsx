import { FC } from "react"
import { useLanguage } from "../contexts/LanguageContext"
import { Button } from "./ui/button"
import { Download } from "lucide-react"

const About: FC = () => {
  const { t, language } = useLanguage()

  // Détermine quel CV télécharger
  const cvLink = language === "en" ? "/cv-eliott-geoffroy-en.pdf" : "/cv-eliott-geoffroy-fr.pdf"

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center pb-12 text-primary">
          {t.about.title}
        </h2>

        <div className="max-w-3xl mx-auto text-center text-gray-700 text-lg leading-relaxed px-4">
          <p className="mb-6">{t.about.description1}</p>
          <p>{t.about.description2}</p>

          {/* Bouton de téléchargement */}
          <div className="mt-10 flex justify-center">
            <a href={cvLink} download>
              <Button className="flex items-center gap-2 bg-secondary cursor-pointer text-white">
                <Download className="w-4 h-4" />
                {language === "en" ? "Download my CV (EN)" : "Télécharger mon CV (FR)"}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
