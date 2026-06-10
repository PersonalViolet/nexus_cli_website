import Hero from "./components/Hero"
import Features from "./components/Features"
import QuickStart from "./components/QuickStart"
import Footer from "./components/Footer"
import ThemeToggle from "./components/ThemeToggle"

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary transition-colors duration-300">
      <ThemeToggle />
      <Hero />
      <Features />
      <QuickStart />
      <Footer />
    </div>
  )
}
