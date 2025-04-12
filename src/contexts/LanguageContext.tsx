import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { translations } from "../i18n/translations"

type Language = "fr" | "en"

interface LanguageContextProps {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations["en"]
}

const LanguageContext = createContext<LanguageContextProps>({
  language: "en",
  setLanguage: () => {},
  t: translations.en
})

export function useLanguage() {
  return useContext(LanguageContext)
}

interface Props {
  children: ReactNode
}

export function LanguageProvider({ children }: Props) {
  const [language, setLanguageState] = useState<Language>("en")

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("lang", lang)
  }

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Language | null

    if (savedLang === "fr" || savedLang === "en") {
      setLanguageState(savedLang)
    } else {
      const browserLang = navigator.language.startsWith("fr") ? "fr" : "en"
      setLanguage(browserLang)
    }
  }, [])

  const value = {
    language,
    setLanguage,
    t: translations[language],
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
