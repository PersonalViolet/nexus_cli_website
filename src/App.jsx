import Hero from "./components/Hero"
import Features from "./components/Features"
import QuickStart from "./components/QuickStart"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Hero />
      <Features />
      <QuickStart />
      <Footer />
    </div>
  )
}
