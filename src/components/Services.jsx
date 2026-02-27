import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      id: 1,
      title: 'Création de Sites Web',
      description: 'Nous concevons des sites web modernes, responsives et performants, adaptés à tous les supports (desktop, mobile, tablette). De la landing page au site e-commerce complet, nous vous accompagnons dans la création de votre présence digitale avec des technologies de pointe (React, Next.js, Tailwind CSS).',
      link: '/services/sites-web',
      align: 'left'
    },
    {
      id: 2,
      title: 'Applications Web Sur-Mesure',
      description: 'Développement d\'applications web complexes avec gestion de base de données, authentification utilisateur, tableaux de bord admin et APIs personnalisées. Nous transformons vos processus métier en solutions digitales performantes et intuitives (PHP, Node.js, MySQL, PostgreSQL).',
      link: '/services/applications-web',
      align: 'right'
    },
    {
      id: 3,
      title: 'Branding & Identité Visuelle',
      description: 'Création de logos professionnels et développement d\'une identité de marque cohérente. Nous définissons votre charte graphique complète : logo, palette de couleurs, typographies, et supports de communication pour donner vie à votre image de marque.',
      link: '/services/branding',
      align: 'left'
    },
    {
      id: 4,
      title: 'Optimisation SEO',
      description: 'Amélioration du référencement naturel de votre site pour augmenter sa visibilité sur Google. Audit SEO complet, optimisation technique, recherche de mots-clés, amélioration du contenu et stratégie de netlinking pour attirer plus de visiteurs qualifiés.',
      link: '/services/seo',
      align: 'right'
    },
    {
      id: 5,
      title: 'Maintenance & Support',
      description: 'Suivi continu de vos sites et applications : mises à jour de sécurité, corrections de bugs, optimisations de performance, sauvegardes régulières et support technique réactif. Votre tranquillité d\'esprit est notre priorité pour garantir la pérennité de vos projets digitaux.',
      link: '/services/maintenance',
      align: 'left'
    },
  ]

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: 'easeOut'
      }
    })
  }

  return (
    <section ref={ref} className="relative min-h-screen bg-[#1a2332] py-24 overflow-hidden" id="services">
      
      {/* Texture tableau noir */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="100" height="100" filter="url(%23noise)" opacity="0.4" /%3E%3C/svg%3E")',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16">
        
        {/* Titre principal style craie */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
            style={{
              fontFamily: '"Permanent Marker", cursive',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              filter: 'brightness(0.95)',
            }}
          >
            Nos Services
          </h2>
          <div className="w-32 h-1 bg-white/60 mx-auto rounded-full"></div>
        </motion.div>

        {/* Liste des services avec lignes connectées */}
        <div className="space-y-32 relative">
          
          {services.map((service, index) => (
            <div key={service.id} className="relative">
              
              {/* Service */}
              <motion.div
                custom={index}
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className={`${
                  service.align === 'left'
                    ? 'text-left max-w-3xl'
                    : 'text-right ml-auto max-w-3xl'
                }`}
              >
                {/* Titre du service (CLIQUABLE) */}
                <a 
                  href={service.link}
                  className="group inline-block"
                >
                  <h3 
                    className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block transition-all duration-300 group-hover:text-accent-violet group-hover:scale-105"
                    style={{
                      fontFamily: '"Permanent Marker", cursive',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                      filter: 'brightness(0.95)',
                    }}
                  >
                    {service.title}
                    {/* Trait de soulignement au hover */}
                    <svg 
                      className="absolute -bottom-2 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                      height="8" 
                      viewBox="0 0 200 8"
                      preserveAspectRatio="none"
                    >
                      <path 
                        d="M0,4 Q10,2 20,4 T40,4 T60,4 T80,4 T100,4 T120,4 T140,4 T160,4 T180,4 T200,4" 
                        stroke="#8B5CF6" 
                        strokeWidth="2" 
                        fill="none"
                      />
                    </svg>
                  </h3>
                </a>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
                  className="text-white/90 text-base md:text-lg leading-relaxed"
                  style={{
                    fontFamily: '"Indie Flower", cursive',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  }}
                >
                  {service.description}
                </motion.p>
              </motion.div>

              {/* Ligne connectrice vers le service suivant */}
              {index < services.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 0.5 } : {}}
                  transition={{ delay: index * 0.15 + 0.6, duration: 0.8 }}
                  className="hidden lg:block absolute"
                  style={{
                    top: '100%',
                    left: service.align === 'left' ? 'auto' : '0',
                    right: service.align === 'left' ? '0' : 'auto',
                    width: '100%',
                    height: '200px'
                  }}
                >
                  <svg 
                    className="w-full h-full"
                    viewBox="0 0 1100 335"
                    preserveAspectRatio="none"
                  >
                 {/* Ligne de droite vers gauche */}
{service.align === 'left' && services[index + 1].align === 'right' && (
  <motion.path
  d="M 140,0
Q 110,35 200,55
Q 350,75 500,85
Q 650,95 750,105
Q 850,115 900,125
Q 950,140 920,160
Q 880,180 900,200
Q 920,220 850"
    stroke="white"
    strokeWidth="3"
    fill="none"
    strokeDasharray="0,10"
    strokeLinecap="round"
    
    initial={{ pathLength: 0 }}
    animate={isInView ? { pathLength: 1 } : {}}
    transition={{ delay: index * 0.15 + 0.8, duration: 1.2 }}
  />
)}

{/* Ligne de gauche vers droite */}
{service.align === 'right' && services[index + 1].align === 'left' && (
  <motion.path
   d="M 860,0 
   Q 890,35 800,55 
   Q 650,75 500,85 
   Q 350,95 250,105 
   Q 150,115 100,125 
   Q 50,140 80,160 
   Q 120,180 100,200 
   Q 80,220 150"
    stroke="white"
    strokeWidth="3"
    fill="none"
    strokeDasharray="0,8"
    strokeLinecap="round"
    initial={{ pathLength: 0 }}
    animate={isInView ? { pathLength: 1 } : {}}
    transition={{ delay: index * 0.15 + 0.8, duration: 1.2 }}
  />
)}

{/* Ligne de gauche vers gauche */}
{service.align === 'left' && services[index + 1].align === 'left' && (
  <motion.path
    d="M 850,10 Q 750,40 500,60 Q 250,80 850,118"
    stroke="white"
    strokeWidth="4"
    fill="none"
    strokeDasharray="0,8"
    strokeLinecap="round"
    initial={{ pathLength: 0 }}
    animate={isInView ? { pathLength: 1 } : {}}
    transition={{ delay: index * 0.15 + 0.8, duration: 1.2 }}
  />
)}

{/* Ligne de droite vers droite */}
{service.align === 'right' && services[index + 1].align === 'right' && (
  <motion.path
    d="M 150,10 Q 250,40 500,60 Q 750,80 150,118"
    stroke="white"
    strokeWidth="4"
    fill="none"
    strokeDasharray="0,8"
    strokeLinecap="round"
    initial={{ pathLength: 0 }}
    animate={isInView ? { pathLength: 1 } : {}}
    transition={{ delay: index * 0.15 + 0.8, duration: 1.2 }}
  />
)}
               
                  </svg>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Dessin de craie décoratif en bas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-24 text-center"
        >
          <svg width="120" height="120" viewBox="0 0 100 100" className="mx-auto opacity-30">
            <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="3" fill="none" strokeDasharray="5,5"/>
            <path d="M30,50 L50,30 L70,50 L50,70 Z" stroke="white" strokeWidth="2" fill="none"/>
          </svg>
        </motion.div>

      </div>

      {/* Import des polices Google */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Indie+Flower&display=swap');
      `}</style>
    </section>
  )
}