import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Skills from "./components/Skills"
import { Toaster } from "sonner"

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Projects />
      <Contact />
      <Footer />
      <Toaster position="top-center" />
    </div>
  )
}

export default App