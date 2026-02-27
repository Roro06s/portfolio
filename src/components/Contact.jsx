import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef()
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    subject: '',
    message: ''
  })
  
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: false })

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      
      setStatus({ loading: false, success: true, error: false })
      setFormData({ from_name: '', reply_to: '', subject: '', message: '' })
      
      setTimeout(() => {
        setStatus({ loading: false, success: false, error: false })
      }, 5000)
      
    } catch (error) {
      console.error('Erreur EmailJS:', error)
      setStatus({ loading: false, success: false, error: true })
    }
  }

  return (
    <section ref={ref} className="relative min-h-screen bg-background py-24" id="contact">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-accent-violet/10 px-4 py-2 text-sm font-medium text-accent-violet">
            Contact
          </span>
          <h2 className="text-4xl font-bold text-text-primary lg:text-5xl" style={{fontFamily: '"Permanent Marker", cursive'}}>
            Travaillons{' '}
            <span className="bg-gradient-to-r from-accent-violet to-accent-blue bg-clip-text text-transparent">
              Ensemble
            </span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Une idée de projet ? Discutons-en !
          </p>
        </motion.div>

        {/* Contenu principal - Formulaire + Infos côte à côte */}
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          
          {/* Formulaire - 2/3 de l'espace */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="h-full rounded-3xl border-2 border-accent-violet/20 bg-white p-8 shadow-xl flex flex-col">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Nom */}
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-text-primary">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border-2 border-accent-violet/20 bg-white px-4 py-3 text-text-primary transition-all focus:border-accent-violet focus:outline-none focus:ring-2 focus:ring-accent-violet/20"
                    placeholder="Votre nom"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-text-primary">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="reply_to"
                    value={formData.reply_to}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border-2 border-accent-violet/20 bg-white px-4 py-3 text-text-primary transition-all focus:border-accent-violet focus:outline-none focus:ring-2 focus:ring-accent-violet/20"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              {/* Sujet */}
              <div className="mb-6">
                <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-text-primary">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border-2 border-accent-violet/20 bg-white px-4 py-3 text-text-primary transition-all focus:border-accent-violet focus:outline-none focus:ring-2 focus:ring-accent-violet/20"
                  placeholder="De quoi souhaitez-vous parler ?"
                />
              </div>

              {/* Message */}
              <div className="mb-6 flex-1">
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-text-primary">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full h-full min-h-[200px] rounded-lg border-2 border-accent-violet/20 bg-white px-4 py-3 text-text-primary transition-all focus:border-accent-violet focus:outline-none focus:ring-2 focus:ring-accent-violet/20 resize-none"
                  placeholder="Décrivez votre projet..."
                />
              </div>

              {/* Bouton submit */}
              <button
                type="submit"
                disabled={status.loading}
                className="w-full rounded-lg bg-gradient-to-r from-accent-violet to-accent-blue px-8 py-4 font-semibold text-white transition-all hover:shadow-lg hover:shadow-accent-violet/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.loading ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>

              {/* Messages de statut */}
              {status.success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 rounded-lg bg-green-100 p-4 text-center text-green-800"
                >
                  ✅ Message envoyé avec succès !
                </motion.div>
              )}

              {status.error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 rounded-lg bg-red-100 p-4 text-center text-red-800"
                >
                  ❌ Erreur lors de l'envoi. Réessayez plus tard.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Carte Infos - 1/3 de l'espace, MÊME HAUTEUR */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="h-full rounded-3xl border-2 border-accent-violet/20 bg-gradient-to-br from-accent-violet/5 to-accent-blue/5 p-8 flex flex-col justify-between">
              
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-text-primary mb-6">
                  Informations de contact
                </h3>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-accent-violet/10">
                    <svg className="h-6 w-6 text-accent-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Email</h4>
                    <a href="mailto:devkostudio@gmail.com" className="text-sm text-accent-violet hover:underline">
                      devkostudio@gmail.com
                    </a>
                  </div>
                </div>

                {/* Localisation */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-accent-violet/10">
                    <svg className="h-6 w-6 text-accent-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Localisation</h4>
                    <p className="text-sm text-text-secondary">Cannes, France</p>
                    <p className="text-xs text-text-secondary">Disponible en remote</p>
                  </div>
                </div>

                {/* Disponibilité */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-accent-violet/10">
                    <svg className="h-6 w-6 text-accent-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Disponibilité</h4>
                    <p className="text-sm text-text-secondary">Freelance / Remote</p>
                    <p className="text-xs text-text-secondary">Réponse sous 24h</p>
                  </div>
                </div>
              </div>

              {/* Réseaux sociaux en bas de la carte */}
              <div className="pt-8 border-t border-accent-violet/20">
                <h4 className="font-semibold text-text-primary mb-4">Suivez-moi</h4>
                <div className="flex gap-3">
                  
                   <a href="https://www.linkedin.com/in/rom1-s-353869368/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-accent-violet transition-all hover:bg-accent-violet hover:text-white hover:scale-110"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  
                 <a   href="https://www.github.com/Roro06s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-accent-violet transition-all hover:bg-accent-violet hover:text-white hover:scale-110"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}