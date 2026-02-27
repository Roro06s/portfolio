import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const skills = [
    { name: 'React',      level: 4, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'HTML',       level: 5, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS',        level: 5, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', level: 4, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Tailwind',   level: 5, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'PHP',        level: 3, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'Node.js',    level: 3, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'MySQL',      level: 4, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Git',        level: 4, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Figma',      level: 4, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  ]

  const duplicatedSkills = [...skills, ...skills]

  return (
    <section ref={ref} className="relative bg-white" id="skills">

      {/* Règle éditoriale en haut */}
      <div className="h-px bg-gray-200" />

      {/* ── Header éditorial ───────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-24 pb-16">

        {/* Badge centré — même animation spring qu'About */}
        <div className="flex justify-center mb-14">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
            className="inline-block relative"
          >
            <span className="relative px-8 py-4 bg-accent-violet text-white font-black rounded-lg shadow-[inset_0_2px_10px_rgba(0,0,0,0.3)] uppercase tracking-wider text-base transform -rotate-2 inline-block border-4 border-white">
              Technologies maîtrisées
              <span className="absolute inset-0 shadow-[inset_0_-2px_8px_rgba(0,0,0,0.4)] rounded-lg pointer-events-none" />
            </span>
          </motion.div>
        </div>

        {/* Grille éditoriale 2 colonnes */}
        <div className="grid lg:grid-cols-2 gap-16 items-end pb-16 border-b border-gray-100">

          {/* Gauche — h2 avec outline */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.72, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-text-primary leading-[1.05]">
              La stack qu'on maîtrise,{' '}
              <br />
              <span
                className="italic"
                style={{ WebkitTextStroke: '2px #0F172A', color: 'transparent' }}
              >
                pas celle qu'on survole.
              </span>
            </h2>
          </motion.div>

          {/* Droite — texte + stats */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.72, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-text-secondary text-[15px] leading-relaxed mb-10 max-w-md">
              On n'affiche pas une technologie si on ne la pratique pas en production. Chaque
              outil listé ici a été utilisé sur de vrais projets, avec de vrais clients, avec
              de vraies contraintes. Les niveaux reflètent une honnêteté qu'on préfère à
              l'autopromotion.
            </p>

            {/* Stats strip éditorial */}
            <div className="grid grid-cols-3 gap-0 border-t border-gray-200 pt-8">
              {[
                { val: '10',    label: 'technologies', sub: 'utilisées en production' },
                { val: '5 / 5', label: 'HTML · CSS · Tailwind', sub: 'maîtrise complète' },
                { val: '2 ans', label: 'de pratique',  sub: 'sur projets réels' },
              ].map((s, i) => (
                <div
                  key={i}
                  className={`${i < 2 ? 'border-r border-gray-200 pr-5' : 'pl-5'} ${i > 0 ? 'pl-5' : ''}`}
                >
                  <div className="text-lg font-black text-text-primary mb-0.5">{s.val}</div>
                  <div className="text-[11px] font-semibold text-text-primary mb-0.5 leading-tight">{s.label}</div>
                  <div className="text-[10px] text-text-secondary">{s.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Carousel ─────────────────────────────────────────── */}
      <div className="py-14 relative overflow-hidden mb-14">

        {/* Carousel infini — animation d'origine intacte */}
        <motion.div
          className="flex gap-16 items-center"
          animate={{ x: [0, -1920] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 min-w-[120px] group"
            >
              {/* Logo */}
              <img
                src={skill.logo}
                alt={skill.name}
                className="h-16 w-16 object-contain transition-transform group-hover:scale-110"
              />

              {/* Nom */}
              <h3 className="text-sm font-semibold text-text-secondary group-hover:text-text-primary transition-colors">
                {skill.name}
              </h3>

              {/* Niveau (points) */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 w-1.5 rounded-full transition-colors ${
                      i < skill.level ? 'bg-accent-violet' : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Fondu bords */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent" />
      </div>

      {/* Règle éditoriale en bas */}
      <div className="h-px bg-gray-200" />

    </section>
  )
}
