import { FC } from "react"
import { Button } from "./ui/button"
import { useLanguage } from "../contexts/LanguageContext"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

const Hero: FC = () => {
  const { t } = useLanguage()
  const title = t.hero.title.replace("{{name}}", "Eliott")

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center text-center min-h-screen px-4"
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      />
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Contenu */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center text-white max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Badge */}
        <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1 text-sm text-white font-medium backdrop-blur-sm">
        {t.hero.badge}
        </span>

        {/* Titre principal avec prénom mis en valeur */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4 text-white">
          {title.split("Eliott")[0]}
          <span className="bg-gradient-to-r from-primary via-secondary to-tertiary text-transparent bg-clip-text">
            Eliott
          </span>
          {title.split("Eliott")[1]}
        </h1>

        {/* Sous-titre */}
        <p className="text-lg md:text-xl mb-8 text-white/90">
          {t.hero.subtitle}
        </p>

        {/* Bouton CTA */}
        <a href="#about">
          <Button className="text-md px-6 py-3 bg-primary hover:opacity-90 transition cursor-pointer">
            {t.navbar.about} <ArrowDown/>
          </Button>
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
