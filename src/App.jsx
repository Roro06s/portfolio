import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

const SitesWeb = lazy(() => import('./pages/services/SitesWeb'))
const ApplicationsWeb = lazy(() => import('./pages/services/ApplicationsWeb'))
const Branding = lazy(() => import('./pages/services/Branding'))
const SEO = lazy(() => import('./pages/services/SEO'))
const Maintenance = lazy(() => import('./pages/services/Maintenance'))
const MentionsLegales = lazy(() => import('./pages/MentionsLegales'))
const PolitiqueConfidentialite = lazy(() => import('./pages/PolitiqueConfidentialite'))
const CGV = lazy(() => import('./pages/CGV'))
const SiteVitrineClients = lazy(() => import('./pages/blog/SiteVitrineClients'))
const ErreursSEO = lazy(() => import('./pages/blog/ErreursSEO'))
const WebflowWixSurMesure = lazy(() => import('./pages/blog/WebflowWixSurMesure'))

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/sites-web" element={<SitesWeb />} />
        <Route path="/services/applications-web" element={<ApplicationsWeb />} />
        <Route path="/services/branding" element={<Branding />} />
        <Route path="/services/seo" element={<SEO />} />
        <Route path="/services/maintenance" element={<Maintenance />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
        <Route path="/cgv" element={<CGV />} />
        <Route path="/blog/site-vitrine-clients" element={<SiteVitrineClients />} />
        <Route path="/blog/erreurs-seo" element={<ErreursSEO />} />
        <Route path="/blog/webflow-wix-sur-mesure" element={<WebflowWixSurMesure />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default App
