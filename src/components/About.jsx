import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ShinyText from './ShinyText'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  /* ── Floating cards — données inchangées ─────────────────── */
  const floatingCards = [
    {
      position: 'top-left',
      fromDirection: { x: -200, y: 0 },
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Formation',
      text: 'Titre Pro DWWM',
      delay: 0.3,
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      position: 'top-right',
      fromDirection: { x: 200, y: 0 },
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Performance',
      text: 'Sites ultra-rapides',
      delay: 0.5,
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      position: 'bottom-left',
      fromDirection: { x: -200, y: 0 },
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: 'Design',
      text: 'UX/UI moderne',
      delay: 0.7,
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      position: 'bottom-right',
      fromDirection: { x: 200, y: 0 },
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Technologies',
      text: 'React, Node, PHP',
      delay: 0.9,
      gradient: 'from-blue-500 to-cyan-500',
    },
  ]

  const positionMap = {
    'top-left':     'absolute top-10 left-0',
    'top-right':    'absolute top-10 right-0',
    'bottom-left':  'absolute bottom-10 left-0',
    'bottom-right': 'absolute bottom-10 right-0',
  }

  return (
    <section
      ref={ref}
      className="relative bg-[#FAF9F6] py-28 overflow-hidden"
      id="about"
    >
      {/* Règle éditoriale en haut — séparation claire avec la section précédente */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-200" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Badge "À PROPOS" — centré sur toute la largeur, animation spring d'origine intacte */}
        <div className="flex justify-center mb-14">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
            className="inline-block relative"
          >
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <img
                src="/assets/images/broke.webp"
                alt=""
                className="w-36 h-36 object-contain opacity-75 scale-125"
              />
            </div>
            <span className="relative px-8 py-4 bg-accent-violet text-white font-black rounded-lg shadow-[inset_0_2px_10px_rgba(0,0,0,0.3)] uppercase tracking-wider text-base transform -rotate-2 inline-block border-4 border-[#FAF9F6]">
              À PROPOS
              <span className="absolute inset-0 shadow-[inset_0_-2px_8px_rgba(0,0,0,0.4)] rounded-lg pointer-events-none" />
            </span>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-[1fr_480px] gap-16 lg:gap-20 items-center">

          {/* ══════════════════════════════════════
              COLONNE GAUCHE — texte éditorial
          ══════════════════════════════════════ */}
          <div>

            {/* ── h2 animé — ANIMATION D'ORIGINE INTACTE ── */}
            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black text-text-primary mb-3 flex flex-wrap leading-[1.05]">
              {"Créateur d' ".split('').map((char, i) => (
                <motion.span
                  key={`createur-${i}`}
                  initial={{ y: 0 }}
                  animate={isInView ? { y: [0, -20, 0] } : { y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.5, ease: 'easeInOut' }}
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}

              <motion.span
                initial={{ y: 0 }}
                animate={isInView ? { y: [0, -20, 0] } : { y: 0 }}
                transition={{ delay: 13 * 0.05, duration: 0.5, ease: 'easeInOut' }}
                className="inline-flex"
              >
                <ShinyText
                  text="Expériences"
                  speed={3}
                  color="#8B5CF6"
                  shineColor="#06B6D4"
                  spread={120}
                  direction="left"
                />
              </motion.span>

              {' Digitales'.split('   ').map((char, i) => (
                <motion.span
                  key={`digitales-${i}`}
                  initial={{ y: 0 }}
                  animate={isInView ? { y: [0, -20, 0] } : { y: 0 }}
                  transition={{ delay: (14 + i) * 0.05, duration: 0.5, ease: 'easeInOut' }}
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </h2>

            {/* Règle fine sous le titre */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="w-16 h-[2px] bg-accent-violet origin-left mb-8"
            />

            {/* Corps éditorial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="space-y-4 text-text-secondary text-[15px] leading-relaxed mb-10 max-w-lg"
            >
              <p>
                Basé à Cannes, Devko Studio est une agence fondée sur une conviction simple :
                chaque entreprise mérite une présence digitale à la hauteur de son ambition,
                sans avoir à payer le tarif d'une agence parisienne de cinquante personnes.
              </p>
              <p>
                On travaille en équipe resserrée, directement impliqués dans chaque projet —
                du premier brief aux pixels finaux. Sites web, applications sur-mesure, identité
                visuelle : on construit des choses qui durent et qui fonctionnent.
              </p>
            </motion.div>

            {/* Stats — strip éditorial (3 colonnes, séparateurs fins) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="grid grid-cols-3 gap-0 border-t border-gray-200 pt-8 mb-10 max-w-lg"
            >
              {[
                { val: '2 ans',  label: "d'expérience",   sub: 'en développement web' },
                { val: '10+',   label: 'technologies',    sub: 'maîtrisées' },
                { val: '100 %', label: 'code livré',      sub: 'fichiers sources inclus' },
              ].map((s, i) => (
                <div
                  key={i}
                  className={`${i < 2 ? 'border-r border-gray-200 pr-5' : 'pl-5'} ${i > 0 ? 'pl-5' : ''}`}
                >
                  <div className="text-xl lg:text-2xl font-black text-text-primary mb-0.5">{s.val}</div>
                  <div className="text-[11px] font-semibold text-text-primary mb-0.5">{s.label}</div>
                  <div className="text-[10px] text-text-secondary">{s.sub}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA — style lien éditorial (underline) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <motion.a
                href="/#contact"
                whileHover={{ x: 7 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 text-text-primary font-bold text-base border-b-2 border-text-primary pb-1 hover:border-accent-violet hover:text-accent-violet transition-colors duration-200"
              >
                Discutons de votre projet
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>

          </div>

          {/* ══════════════════════════════════════
              COLONNE DROITE — visuel + floating cards
          ══════════════════════════════════════ */}
          <div className="relative min-h-[560px] hidden lg:block">

            {/* Digital map en fond */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <img
                src="/assets/images/digital-map-bgg.webp"
                alt=""
                className="w-full h-full object-contain opacity-60"
              />
            </motion.div>

            {/* Mockup device — centré */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
              className="absolute inset-0 flex items-center justify-center z-30 py-16 px-8"
            >
              <motion.img
                src="/assets/images/mockup-device.webp"
                alt="Mockup"
                className="w-3/4 h-auto drop-shadow-2xl"
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              />
            </motion.div>

            {/* Floating cards — animation d'origine intacte, style affiné */}
            {floatingCards.map((card) => (
              <motion.div
                key={card.position}
                initial={{ opacity: 0, x: card.fromDirection.x, y: card.fromDirection.y }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 0.8, delay: card.delay, type: 'spring', stiffness: 100 }}
                whileHover={{ scale: 1.05, y: -6, transition: { duration: 0.2 } }}
                className={`${positionMap[card.position]} z-20`}
              >
                <div className="relative group cursor-pointer">
                  {/* Glow — inchangé */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${card.gradient} rounded-xl blur opacity-25 group-hover:opacity-55 transition-opacity duration-300`} />
                  {/* Card — légèrement plus compact, même ADN */}
                  <div className="relative bg-white rounded-xl px-5 py-4 shadow-lg border border-gray-100/80 group-hover:border-transparent transition-all duration-300 min-w-[180px]">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${card.gradient} text-white mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      {card.icon}
                    </div>
                    <h4 className="font-bold text-text-primary text-sm mb-0.5 group-hover:text-accent-violet transition-colors duration-300">
                      {card.title}
                    </h4>
                    <p className="text-xs text-text-secondary">{card.text}</p>
                    <div className={`mt-3 h-[2px] w-8 rounded-full bg-gradient-to-r ${card.gradient} group-hover:w-full transition-all duration-500`} />
                  </div>
                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </div>

      {/* Règle éditoriale en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200" />
    </section>
  )
}
