import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  // Gestion du curseur personnalisé
  const handleMouseMove = (e) => {
    setCursorPosition({
      x: e.clientX,
      y: e.clientY,
    })
  }

  const projects = [
    {
      id: 1,
      title: 'Barber Street',
      image: '/assets/images/pro-22.webp', // Tu mettras ton image ici
      link: 'https://barberstreet-mode83.alwaysdata.net/',
      category: 'Application Web',
      year: '2024',
      description: 'Application de gestion complète pour salon de coiffure avec système de réservation, gestion clients et analytics.',
      stats: [
        { label: 'Clients gérés', value: '∞+' },
        { label: 'Temps gagné', value: '-60%' },
      ],
      tags: ['PHP', 'MySQL', 'JavaScript'],
    },
    {
      id: 2,
      title: 'Agence Imperial',
      image: '/assets/images/pro-11.webp', // Tu mettras ton image ici
      link: 'https://agenceimperial.fr/',
      category: 'Site Vitrine',
      year: '2025',
      description: 'Site vitrine moderne pour agence digitale avec animations fluides et design premium.',
      stats: [
        { label: 'Pages créées', value: '8' },
        { label: 'Performance', value: '100%' },
      ],
      tags: ['React', 'Tailwind', 'Framer Motion'],
    },
  ]

  // Animation de la carte
  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <section id="projects" ref={ref} className="relative min-h-screen bg-white py-24 overflow-hidden">
      
      {/* Effet de fond subtil */}
      <div className="absolute inset-0 bg-gradient-radial from-accent-violet/5 via-transparent to-transparent"></div>

      {/* Curseur personnalisé (affiché uniquement au survol d'une carte) */}
      {isHovering && (
        <div
          className="fixed w-24 h-24 rounded-full bg-accent-violet backdrop-blur-sm border-2 border-white/30 flex items-center justify-center text-white font-bold text-sm pointer-events-none z-50"
          style={{
            left: cursorPosition.x,
            top: cursorPosition.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          VOIR
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block rounded-full bg-accent-violet/10 px-4 py-2 text-sm font-medium text-accent-violet mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6"
          style={{ fontFamily: '"Permanent Marker", cursive'}}>
            Nos{' '}
            <span className="bg-gradient-to-r from-accent-violet to-accent-blue bg-clip-text text-transparent"
            style={{ fontFamily: '"Permanent Marker", cursive'}}>
              Réalisations
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Découvrez nos deux dernières réalisations et les résultats concrets obtenus
          </p>
        </motion.div>

        {/* Grille de réalisations avec layout décalé */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className={`${index % 2 === 1 ? 'lg:mt-32' : ''}`}
            >
              {/* Lien qui entoure la carte */}
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                {/* Carte image principale avec effet glassmorphism */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -10 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  onMouseMove={handleMouseMove}
                  className="relative group cursor-none"
                >
                  {/* Carte glassmorphism */}
                  <div className="relative h-[600px] rounded-3xl overflow-hidden bg-white/80 backdrop-blur-lg border-2 border-accent-violet/20 group-hover:border-accent-violet/50 transition-all duration-500 shadow-xl">
                    
                    {/* Overlay gradient au survol */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-accent-violet/20 via-transparent to-accent-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      initial={false}
                    />

                    {/* Badge catégorie */}
                    <div className="absolute top-6 left-6 z-10">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-accent-violet text-xs font-semibold border border-accent-violet/30">
                        {project.category}
                      </span>
                    </div>

                    {/* Badge année */}
                    <div className="absolute top-6 right-6 z-10">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-text-secondary text-xs font-semibold border border-gray-300">
                        {project.year}
                      </span>
                    </div>

                    {/* Image ou placeholder */}
                    {project.image ? (
                      <div className="absolute inset-0">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Overlay pour lisibilité */}
                        <div className="absolute inset-0 bg-gradient-to-t from-text-primary/60 via-transparent to-transparent group-hover:from-text-primary/40 transition-colors duration-500"></div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent-violet/10 to-accent-blue/10">
                        <div className="text-center space-y-4 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                          <div className="w-20 h-20 mx-auto border-4 border-accent-violet/30 rounded-2xl rotate-45"></div>
                          <p className="text-sm text-text-secondary">
                            Image du projet
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Effet de brillance au survol */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{
                        background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />

                    {/* Titre au survol (bottom overlay) */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-white/95 via-white/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
                      initial={false}
                    >
                      <h3 className="text-3xl font-bold text-text-primary mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-text-secondary mb-3 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-accent-violet/20 text-accent-violet text-xs font-semibold rounded-full border border-accent-violet/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </a>

              {/* Carte de stats en dessous */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                className="mt-6"
              >
                <div className="bg-white/80 backdrop-blur-lg border-2 border-accent-violet/20 rounded-2xl p-6 hover:border-accent-violet/40 transition-all duration-300 shadow-lg">
                  <div className="grid grid-cols-2 gap-6">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <motion.div
                          className="text-5xl font-bold bg-gradient-to-r from-accent-violet to-accent-blue bg-clip-text text-transparent mb-1"
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                          transition={{ delay: index * 0.2 + 0.5 + i * 0.1, duration: 0.5 }}
                        >
                          {stat.value}
                        </motion.div>
                        <div className="text-xs text-text-secondary">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Barre de progression décorative */}
                  <motion.div
                    className="mt-4 h-1 bg-accent-violet/20 rounded-full overflow-hidden"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '100%' } : { width: 0 }}
                    transition={{ delay: index * 0.2 + 0.7, duration: 1 }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-accent-violet to-accent-blue"
                      initial={{ x: '-100%' }}
                      animate={isInView ? { x: 0 } : { x: '-100%' }}
                      transition={{ delay: index * 0.2 + 0.8, duration: 1.5, ease: 'easeOut' }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div> 
          ))}

        </div>

        {/* CTA en bas */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-20"
        >
          <p className="text-text-secondary mb-6 text-lg">
            Envie de voir votre projet prendre vie ?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-accent-violet to-accent-blue text-white font-bold px-10 py-4 rounded-full text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            Démarrer Votre Projet
          </motion.a>
        </motion.div>

      </div>

      {/* Style pour masquer le curseur par défaut sur les cartes */}
      <style>{`
        .cursor-none {
          cursor: none !important;
        }
        .cursor-none * {
          cursor: none !important;
        }
      `}</style>
    </section>
  )
}

export default Projects