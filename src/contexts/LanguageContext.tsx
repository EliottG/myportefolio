// src/contexts/LanguageContext.tsx
import { createContext, useContext, useState, ReactNode } from "react"
import { translations } from "../i18n/translations"

type Language = "fr" | "en"

interface LanguageContextProps {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations["en"] // Type des traductions (ex : "fr" ou "en")
}

const LanguageContext = createContext<LanguageContextProps>({
  language: "en",
  setLanguage: () => {},
  t: translations.fr
})

// Hook personnalisé pour accéder facilement au contexte
export function useLanguage() {
  return useContext(LanguageContext)
}

interface Props {
  children: ReactNode
}

export function LanguageProvider({ children }: Props) {
  const [language, setLanguage] = useState<Language>("en")

  // On va chercher les bonnes traductions
  const value = {
    language,
    setLanguage,
    t: translations[language]
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}