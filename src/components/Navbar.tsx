import { FC, useState, useEffect } from "react"
import { useLanguage } from "../contexts/LanguageContext"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const Navbar: FC = () => {
  const { language, setLanguage, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const gradientColors = "from-primary via-secondary to-tertiary"

  const links = [
    { href: "#hero", label: t.navbar.home },
    { href: "#about", label: t.navbar.about },
    { href: "#skills", label: t.navbar.skills },
    { href: "#projects", label: t.navbar.projects },
    { href: "#contact", label: t.navbar.contact },
  ]
  const [activeSection, setActiveSection] = useState<string>("hero")

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id")
            if (id) setActiveSection(id)
          }
        })
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    )
  
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])
  // Effet pour détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
  className={`sticky top-0 z-50 transition-all duration-300 bg-gradient-to-r ${gradientColors} ${
    scrolled
      ? "py-3 shadow-md backdrop-blur-md"
      : "bg-opacity-80 backdrop-blur-md py-6"
  }`}
>
      <div className="container mx-auto flex items-center justify-between px-6 text-white">
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-extrabold tracking-tight hover:opacity-90 transition-opacity"
        >
          EliottGDC
        </a>

        {/* Desktop Nav */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex items-center gap-5">
            {links.map(({ href, label }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink
                  href={href}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-white/20 hover:scale-105 ${
                    activeSection === href.slice(1) ? "bg-white/30" : ""
                  }`}                >
                  {label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Langue + Mobile */}
        <div className="flex items-center gap-4">
          <Select
            value={language}
            onValueChange={(value) => setLanguage(value as "fr" | "en")}
          >
            <SelectTrigger className="bg-white/10 text-white hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
              <SelectValue />
            </SelectTrigger>
            <SelectContent
              side="bottom"
              align="end"
              className="max-w-[120px] overflow-hidden bg-white "
            >
              <SelectItem className="cursor-pointer" value="fr">🇫🇷 Français</SelectItem>
              <SelectItem className="cursor-pointer" value="en">🇬🇧 English</SelectItem>
            </SelectContent>
          </Select>

          {/* Mobile Sheet */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="md:hidden">
              <Menu className="w-6 h-6 text-white" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 bg-gradient-to-b from-white via-gray-50 to-gray-100"
            >
              <SheetHeader>
                <SheetTitle className="text-2xl font-bold text-primary tracking-tight">
                  Menu
                </SheetTitle>
              </SheetHeader>

              <nav className="mt-2 flex flex-col gap-4 ml-4">
                {links.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={(e) => {
                      e.preventDefault()
                      setOpen(false)
                      setTimeout(() => {
                        const target = document.querySelector(href)
                        if (target) {
                          target.scrollIntoView({ behavior: "smooth" })
                        }
                      }, 150)
                    }}
                    className="text-base font-medium text-gray-800 hover:text-secondary transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
