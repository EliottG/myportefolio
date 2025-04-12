import { FC, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero: FC = () => {
  const { t } = useLanguage();
  const title = t.hero.title.replace("{{name}}", "Eliott");
  const [isBgLoaded, setIsBgLoaded] = useState(false);

  // Préchargement de l'image de fond
  useEffect(() => {
    const img = new Image();
    img.src = "/images/hero-bg.png";
    img.onload = () => {
      setIsBgLoaded(true);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center text-center min-h-screen px-4"
    >
      {/* Image de fond avec fondu doux */}
      <div
        className={`absolute inset-0 bg-cover bg-center z-0 transition-opacity duration-1000 ${
          isBgLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      />

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Contenu principal */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center text-white max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1 text-sm text-white font-medium backdrop-blur-sm">
          {t.hero.badge}
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4 text-white">
          {title.split("Eliott")[0]}
          <span className="bg-gradient-to-r from-primary via-secondary to-tertiary text-transparent bg-clip-text">
            Eliott
          </span>
          {title.split("Eliott")[1]}
        </h1>

        <p className="text-lg md:text-xl mb-8 text-white/90">
          {t.hero.subtitle}
        </p>

        <a href="#about" className="w-48">
          <Button className="text-md py-4 w-full bg-primary hover:opacity-90 transition cursor-pointer">
            {t.navbar.about} <ArrowDown />
          </Button>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
