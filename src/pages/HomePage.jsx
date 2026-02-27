import SEOMeta from '../components/SEOMeta'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Services from '../components/Services'
import Articles from '../components/Articles'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="homepage">
      <SEOMeta
        title="Agence web à Cannes — Sites web & Applications sur-mesure"
        description="Devko Studio, agence web à Cannes. Création de sites vitrine, e-commerce, applications web et branding sur-mesure. Design moderne, SEO optimisé, livraison rapide."
        path="/"
        type="website"
      />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Articles />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}