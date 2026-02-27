import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEOMeta from '../components/SEOMeta'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] flex flex-col items-center justify-center px-6 text-center">
      <SEOMeta title="Page introuvable" description="Cette page n'existe pas." path="/404" noindex />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-[120px] font-black leading-none text-white/5 select-none">404</p>

        <h1
          className="text-4xl lg:text-5xl font-black text-white mb-4 -mt-6"
          style={{ fontFamily: '"Permanent Marker", cursive' }}
        >
          Page introuvable
        </h1>

        <p className="text-white/50 text-base leading-relaxed mb-10 max-w-sm mx-auto">
          Cette page n'existe pas ou a été déplacée. Revenez à l'accueil.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#8B5CF6] text-white font-semibold rounded-full px-8 py-3 hover:bg-[#7C3AED] transition-colors duration-200"
        >
          Retour à l'accueil
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </motion.div>
    </div>
  )
}
