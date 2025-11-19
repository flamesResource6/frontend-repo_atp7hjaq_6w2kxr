import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Highlights from './components/Highlights'
import Integrations from './components/Integrations'
import Pricing from './components/Pricing'
import Security from './components/Security'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main>
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        <Highlights />
        <Integrations />
        <Pricing />
        <Security />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  )
}

export default App
