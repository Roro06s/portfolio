import { motion } from 'framer-motion'
import { useEffect } from 'react'
import SEOMeta from '../../components/SEOMeta'
import SectionLabel from '../../components/SectionLabel'
import { fadeUp, fadeLeft, fadeRight } from '../../utils/animations'
import Navbar from '../../components/Navbar'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'


/*
  ╔═══════════════════════════════════════════════════════╗
  ║  ILLUSTRATION A — Slot ouverture (colonne droite)    ║
  ║                                                       ║
  ║  Recommandation :                                     ║
  ║  Dashboard de monitoring minimaliste — graphe de      ║
  ║  disponibilité (uptime) en vert avec une seule        ║
  ║  anomalie corrigée visible. Style sombre, épuré,      ║
  ║  ambiance "control room" rassurante.                  ║
  ║  Format : 4:3 ou 1:1, fond #0D0D0D ou très sombre    ║
  ╚═══════════════════════════════════════════════════════╝
*/
function IllustrationA() {
  return (
    <div className="aspect-[2/3] rounded-2xl overflow-hidden">
      <img
        src="/assets/images/dashb.webp"
        alt="Dashboard monitoring"
        className="w-full h-full object-cover"
         style={{ objectPosition: '27% center' }}
      />
    </div>
  )
}

/*
  ╔═══════════════════════════════════════════════════════╗
  ║  ILLUSTRATION B — Slot processus (colonne gauche)    ║
  ║                                                       ║
  ║  Recommandation :                                     ║
  ║  Mockup conversation support : interface de chat      ║
  ║  épurée avec une question client + réponse rapide.   ║
  ║  Ou : notification téléphone "Site en ligne ✓"        ║
  ║  sur fond neutre. Style rassurant, humain.            ║
  ║  Format : portrait 3:4, tons clairs ou crème         ║
  ╚═══════════════════════════════════════════════════════╝
*/
function IllustrationB() {
  return (
    <div className="aspect-[3/4] rounded-2xl overflow-hidden">
      <img
        src="/assets/images/SAV.webp"
        alt="Support & maintenance"
        className="w-full h-full object-cover"
      />
    </div>
  )
}

const pillars = [
  {
    num: '01',
    title: 'Mises à jour & Sécurité',
    text: "CMS, plugins, dépendances — tout vieillit, et une version obsolète est une porte d'entrée. On maintient votre stack à jour, on surveille les vulnérabilités connues, et on applique les correctifs de sécurité dès leur publication.",
  },
  {
    num: '02',
    title: 'Sauvegardes automatiques',
    text: "Une sauvegarde hebdomadaire complète — base de données et fichiers — stockée en dehors de votre serveur. En cas d'incident, on restaure. Aucune perte de données, aucune nuit blanche pour vous.",
  },
  {
    num: '03',
    title: 'Support & Interventions',
    text: "Un bug apparu après une mise à jour, une page qui ne s'affiche plus, une adresse e-mail qui refuse d'envoyer : on intervient. Temps de réponse sous 24h en semaine, corrections documentées à chaque fois.",
  },
]

const steps = [
  {
    num: '01',
    title: 'Prise en main',
    duration: '1–2 jours',
    text: "On fait le tour de votre infrastructure : hébergement, accès FTP et base de données, gestionnaire de domaine, compte e-mail. On documente tout dans une fiche de site partagée et on effectue une première sauvegarde complète.",
  },
  {
    num: '02',
    title: 'Maintenance mensuelle',
    duration: 'Chaque mois',
    text: "Mises à jour appliquées, sauvegarde vérifiée, rapport de disponibilité envoyé. Si quelque chose a changé sur votre site — à la suite d'une mise à jour ou non — on vous le signale avant que ça devienne un problème.",
  },
  {
    num: '03',
    title: 'Interventions ponctuelles',
    duration: 'À la demande',
    text: "Besoin d'une modification de contenu, d'un ajout de page, d'une correction rapide ? On intervient sans contrat supplémentaire. Pour les abonnés maintenance, les petites demandes sont traitées en priorité.",
  },
]

export default function Maintenance() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-white">
      <SEOMeta
        title="Maintenance & Support de sites web à Cannes — Mises à jour, Sécurité"
        description="Devko Studio assure la maintenance de votre site web à Cannes : mises à jour, sauvegardes quotidiennes, monitoring 24/7, corrections de bugs. Votre site toujours en ligne."
        path="/services/maintenance"
      />
      <Navbar />

      {/* ════════════════════════════════════
          1 — OUVERTURE
      ════════════════════════════════════ */}
      <section className="pt-36 pb-32 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          <motion.div {...fadeLeft(0)} className="flex items-center gap-3 mb-20">
            <div className="w-8 h-px bg-violet-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-500">
              Devko Studio — Maintenance & Support
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_440px] gap-16 lg:gap-24 items-center">

            {/* Gauche — titre + texte */}
            <div>
              <div className="mb-12 space-y-1">
                {[
                  { text: 'Livré.', outline: false },
                  { text: 'Maintenu.', outline: false },
                  { text: 'Protégé.', outline: true },
                ].map(({ text, outline }, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.h1
                      initial={{ y: '108%' }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.82, delay: 0.08 + i * 0.14, ease: [0.22, 1, 0.36, 1] }}
                      className="text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.0]"
                      style={
                        outline
                          ? { WebkitTextStroke: '2.5px #0F172A', color: 'transparent' }
                          : { color: '#0F172A' }
                      }
                    >
                      {text}
                    </motion.h1>
                  </div>
                ))}
              </div>

              <motion.p {...fadeUp(0.5)} className="text-text-secondary text-[15px] leading-relaxed mb-12 max-w-md">
                Un site web, ça ne s'entretient pas tout seul. Mises à jour de sécurité, sauvegardes,
                corrections de bugs, petites évolutions — tout ça prend du temps et demande de l'attention.
                On s'en charge. Vous faites autre chose.
              </motion.p>

              <motion.div {...fadeUp(0.62)} className="grid grid-cols-3 gap-0 border-t border-gray-200 pt-8">
                {[
                  { val: '43 %', label: 'des sites web', sub: 'piratés chaque année' },
                  { val: '< 24h', label: 'temps de réponse', sub: 'garanti en semaine' },
                  { val: '100 %', label: 'des sauvegardes', sub: 'hors-serveur' },
                ].map((s, i) => (
                  <div key={i} className={`${i < 2 ? 'border-r border-gray-200 pr-5' : 'pl-5'} ${i > 0 ? 'pl-5' : ''}`}>
                    <div className="text-xl lg:text-2xl font-black text-text-primary mb-1">{s.val}</div>
                    <div className="text-[11px] font-semibold text-text-primary mb-0.5">{s.label}</div>
                    <div className="text-[10px] text-text-secondary">{s.sub}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Droite — illustration */}
            <motion.div {...fadeRight(0.3)}>
              <IllustrationA />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          2 — VISION (fond sombre)
      ════════════════════════════════════ */}
      <section className="py-24 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <motion.div {...fadeUp(0)}>
            <p className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.2] max-w-4xl mb-8">
              "Un site cassé un vendredi soir, c'est un week-end gâché.{' '}
              <span className="text-white/30 font-light italic">
                Sauf si quelqu'un surveille à votre place."
              </span>
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-px bg-violet-500" />
              <span className="text-violet-500 text-xs tracking-widest uppercase">Devko Studio — philosophie maintenance</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════
          3 — CE QU'ON FAIT (3 piliers)
      ════════════════════════════════════ */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between pb-12 border-b border-gray-100">
            <motion.div {...fadeLeft(0)}>
              <SectionLabel>Ce qu'on couvre</SectionLabel>
              <h2 className="text-4xl lg:text-5xl font-black text-text-primary leading-tight max-w-md">
                Trois piliers,{' '}
                <span
                  className="italic"
                  style={{ WebkitTextStroke: '2px #0F172A', color: 'transparent' }}
                >
                  zéro surprise.
                </span>
              </h2>
            </motion.div>
            <motion.p {...fadeRight(0.1)} className="hidden lg:block text-text-secondary text-sm max-w-xs text-right leading-relaxed mt-4 lg:mt-0">
              Pas de forfait opaque avec des heures qui expirent. Un périmètre clair, des actions
              documentées, et un interlocuteur unique pour tout.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3">
            {pillars.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className={[
                  'py-12 px-10 group hover:bg-[#FAF9F6] transition-colors duration-300',
                  i < 2 ? 'md:border-r border-gray-100' : '',
                ].join(' ')}
              >
                <span className="text-[4rem] font-black leading-none text-gray-100 group-hover:text-gray-200 transition-colors select-none block mb-5">
                  {item.num}
                </span>
                <h3 className="text-base font-bold text-text-primary mb-4">{item.title}</h3>
                <p className="text-text-secondary text-[13.5px] leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════
          4 — PROCESSUS + ILLUSTRATION
      ════════════════════════════════════ */}
      <section className="py-32 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start">

            {/* Illustration sticky gauche */}
            <motion.div {...fadeLeft(0)} className="lg:sticky lg:top-32 space-y-10">
              <IllustrationB />

              <div className="pl-1">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">Engagement mensuel</p>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-5xl font-black text-text-primary">Sans</span>
                </div>
                <p className="text-xl font-semibold text-text-secondary">contrat annuel obligatoire.</p>
                <p className="text-xs text-text-secondary mt-3 leading-relaxed max-w-xs">
                  On travaille mois par mois. Vous restez parce que le service vous convient,
                  pas parce qu'un contrat vous y oblige.
                </p>
              </div>
            </motion.div>

            {/* Étapes droite */}
            <div>
              <motion.div {...fadeRight(0)}>
                <SectionLabel>Comment ça se passe</SectionLabel>
                <h2 className="text-4xl font-black text-text-primary mb-14 leading-[1.1]">
                  Simple,{' '}
                  <span className="font-light italic text-text-secondary">transparent,</span>
                  <br />régulier.
                </h2>
              </motion.div>

              <div className="relative">
                <div className="absolute left-5 top-6 bottom-6 w-px bg-gray-200 hidden md:block" />
                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    {...fadeUp(i * 0.15)}
                    className="relative flex gap-8 py-10 border-b border-gray-100 last:border-0"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-text-primary bg-[#FAF9F6] flex items-center justify-center z-10">
                      <span className="text-xs font-black text-text-primary">{step.num}</span>
                    </div>
                    <div className="flex-1 pt-0.5">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <h3 className="text-base font-bold text-text-primary">{step.title}</h3>
                        <span className="text-[11px] text-text-secondary border border-gray-200 rounded-full px-3 py-1 bg-white">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-text-secondary text-[13.5px] leading-relaxed">{step.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          5 — CTA
      ════════════════════════════════════ */}
      <section className="py-32 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-start">

            <motion.div {...fadeLeft(0)}>
              <SectionLabel>On commence ?</SectionLabel>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-text-primary leading-[1.05] mb-8">
                Votre site entre<br />
                de{' '}
                <span
                  className="italic"
                  style={{ WebkitTextStroke: '2.5px #8B5CF6', color: 'transparent' }}
                >
                  bonnes mains.
                </span>
              </h2>
              <p className="text-text-secondary text-[15px] leading-relaxed mb-10 max-w-lg">
                Que vous ayez un site créé par nous ou par quelqu'un d'autre, on peut en prendre la
                maintenance. Un premier audit de votre infrastructure est offert — pour qu'on sache
                exactement dans quoi on s'engage, et vous aussi.
              </p>
              <motion.a
                href="/#contact"
                whileHover={{ x: 7 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 text-text-primary font-bold text-base border-b-2 border-text-primary pb-1 hover:border-accent-violet hover:text-accent-violet transition-colors duration-200"
              >
                Confier mon site
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>

            <motion.div {...fadeRight(0.15)} className="bg-[#FAF9F6] rounded-2xl p-9 border border-gray-100">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
                Inclus chaque mois
              </p>
              <div className="space-y-4">
                {[
                  'Mises à jour CMS, plugins, dépendances',
                  'Sauvegarde complète hors-serveur',
                  'Rapport mensuel de disponibilité',
                  'Corrections de bugs sous 24h',
                  'Surveillance sécurité continue',
                  'Petites modifications de contenu',
                  'Interlocuteur unique et identifié',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-4 h-4 rounded-full border-2 border-accent-violet flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-violet" />
                    </div>
                    <span className="text-text-secondary text-[13px]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  )
}
