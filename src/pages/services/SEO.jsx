import { motion } from 'framer-motion'
import { useEffect } from 'react'
import SEOMeta from '../../components/SEOMeta'
import SectionLabel from '../../components/SectionLabel'
import { fadeUp, fadeLeft, fadeRight } from '../../utils/animations'
import Navbar from '../../components/Navbar'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'


const pillars = [
  {
    num: '01',
    title: 'Audit Technique',
    text: "On commence toujours par disséquer ce qui existe : vitesse de chargement, structure des URLs, maillage interne, balises, données structurées, erreurs d'exploration. Un diagnostic complet avant tout geste d'optimisation.",
  },
  {
    num: '02',
    title: 'Contenu & Sémantique',
    text: "Google comprend le sens, pas juste les mots. On travaille le champ lexical de vos pages, les intentions de recherche derrière chaque requête cible, et la hiérarchie éditoriale qui permet à vos textes de gagner en autorité.",
  },
  {
    num: '03',
    title: 'SEO Local',
    text: "Pour les entreprises ancrées dans une ville ou une région — commerce, restaurant, artisan, prestataire — le SEO local est souvent le levier le plus rentable. Fiche Google Business, cohérence NAP, citations locales : on s'en occupe.",
  },
]

const steps = [
  {
    num: '01',
    title: 'Audit & Diagnostic',
    duration: '2–3 jours',
    text: "On analyse votre site de fond en comble : performances techniques, mots-clés actuels, positionnements, backlinks, contenu existant. Ce rapport d'audit est la carte de votre terrain — il oriente chaque décision qui suit.",
  },
  {
    num: '02',
    title: 'Plan & Optimisations',
    duration: '1–3 semaines',
    text: "Les corrections techniques d'abord — elles créent les conditions pour que Google puisse bien lire votre site. Puis les optimisations on-page : titres, métas, structure des contenus, maillage interne. Enfin, si nécessaire, des recommandations de production de contenu.",
  },
  {
    num: '03',
    title: 'Suivi & Ajustements',
    duration: 'Mensuel',
    text: "Le SEO n'est pas un interrupteur. On suit l'évolution des positions, des clics, du trafic organique. Chaque mois, un point clair sur ce qui progresse, ce qui stagne, et les prochaines actions prioritaires.",
  },
]

export default function SEO() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-white">
      <SEOMeta
        title="Référencement naturel SEO à Cannes — Audit, Stratégie, Optimisation"
        description="Boostez votre visibilité sur Google avec Devko Studio à Cannes. Audit SEO technique, optimisation on-page, stratégie de contenu et netlinking. Résultats mesurables."
        path="/services/seo"
      />
      <Navbar />

      {/* ════════════════════════════════════
          1 — OUVERTURE
      ════════════════════════════════════ */}
      <section className="pt-36 pb-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          <motion.div {...fadeLeft(0)} className="flex items-center gap-3 mb-16">
            <div className="w-8 h-px bg-violet-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-500">
              Devko Studio — Référencement naturel
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-end">

            {/* Titre */}
            <div>
              <div className="mb-10 space-y-1">
                {[
                  { text: 'Votre site web', outline: false },
                  { text: 'existe déjà.', outline: false },
                  { text: 'Faites-le trouver.', outline: true },
                ].map(({ text, outline }, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.h1
                      initial={{ y: '108%' }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.82, delay: 0.08 + i * 0.14, ease: [0.22, 1, 0.36, 1] }}
                      className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05]"
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
            </div>

            {/* Texte + stats */}
            <motion.div {...fadeRight(0.35)}>
              <p className="text-text-secondary text-[15px] leading-relaxed mb-10 max-w-md">
                Un site sans trafic organique, c'est une boutique sans enseigne. Le SEO n'est pas
                une promesse magique — c'est un travail rigoureux, méthodique, documenté. On
                s'occupe de l'audit, des optimisations techniques, du contenu et du suivi mensuel.
                Vous, vous vous concentrez sur votre métier.
              </p>

              <div className="grid grid-cols-3 gap-0 border-t border-gray-200 pt-8">
                {[
                  { val: '93 %', label: 'du trafic web', sub: 'vient de Google' },
                  { val: 'Top 3', label: '75 % des clics', sub: 'captés par les 3 premiers' },
                  { val: '0 €', label: 'par visite', sub: 'vs publicité payante' },
                ].map((s, i) => (
                  <div key={i} className={`${i < 2 ? 'border-r border-gray-200 pr-5' : 'pl-5'} ${i > 0 ? 'pl-5' : ''}`}>
                    <div className="text-xl lg:text-2xl font-black text-text-primary mb-1">{s.val}</div>
                    <div className="text-[11px] font-semibold text-text-primary mb-0.5">{s.label}</div>
                    <div className="text-[10px] text-text-secondary">{s.sub}</div>
                  </div>
                ))}
              </div>
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
              "Le SEO, ce n'est pas tricher l'algorithme.{' '}
              <span className="text-white/30 font-light italic">
                C'est mériter sa place — et la prouver, page après page."
              </span>
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-px bg-violet-500" />
              <span className="text-violet-500 text-xs tracking-widest uppercase">Devko Studio — approche SEO</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════
          3 — CE QU'ON FAIT (3 piliers)
      ════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-0 pb-10 border-b border-gray-100">
            <motion.div {...fadeLeft(0)}>
              <SectionLabel>Ce qu'on optimise</SectionLabel>
              <h2 className="text-4xl lg:text-5xl font-black text-text-primary leading-tight max-w-md">
                Trois leviers,{' '}
                <span
                  className="italic"
                  style={{ WebkitTextStroke: '2px #0F172A', color: 'transparent' }}
                >
                  un seul objectif.
                </span>
              </h2>
            </motion.div>
            <motion.p {...fadeRight(0.1)} className="hidden lg:block text-text-secondary text-sm max-w-xs text-right leading-relaxed mt-4 lg:mt-0">
              Le référencement naturel repose sur des fondamentaux stables. Pas de raccourcis,
              pas de techniques grises — juste un travail solide et durable.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3">
            {pillars.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className={[
                  'p-10 group hover:bg-[#FAF9F6] transition-colors duration-300',
                  i < 2 ? 'md:border-r border-gray-100' : '',
                ].join(' ')}
              >
                <span className="text-[4rem] font-black leading-none text-gray-100 group-hover:text-gray-200 transition-colors select-none block mb-4">
                  {item.num}
                </span>
                <h3 className="text-base font-bold text-text-primary mb-3">{item.title}</h3>
                <p className="text-text-secondary text-[13.5px] leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Note bas de section */}
          <motion.div
            {...fadeUp(0.3)}
            className="mt-0 border-l-[3px] border-accent-violet pl-7 py-5 border-t border-r border-b border-gray-100 flex flex-col sm:flex-row sm:items-center gap-5"
          >
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-accent-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-[13px] text-text-secondary leading-relaxed">
              <strong className="text-text-primary">On travaille exclusivement en "white hat".</strong>{' '}
              Aucune technique qui risque de vous faire pénaliser dans 6 mois. Le SEO qu'on produit
              résiste aux mises à jour d'algorithme parce qu'il repose sur du contenu utile et une
              infrastructure technique propre.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════
          4 — PROCESSUS + CTA
      ════════════════════════════════════ */}
      <section className="py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start">

            {/* Étapes */}
            <div>
              <motion.div {...fadeLeft(0)}>
                <SectionLabel>Comment on travaille</SectionLabel>
                <h2 className="text-4xl font-black text-text-primary mb-12 leading-[1.1]">
                  Méthodique,{' '}
                  <span className="font-light italic text-text-secondary">pas magique.</span>
                </h2>
              </motion.div>

              <div className="relative">
                <div className="absolute left-5 top-6 bottom-6 w-px bg-gray-200 hidden md:block" />

                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    {...fadeUp(i * 0.15)}
                    className="relative flex gap-8 py-9 border-b border-gray-100 last:border-0"
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

            {/* CTA */}
            <motion.div {...fadeRight(0.2)} className="lg:sticky lg:top-32">
              <SectionLabel>On commence ?</SectionLabel>
              <h2 className="text-4xl lg:text-5xl font-black text-text-primary leading-[1.05] mb-7">
                Votre site mérite<br />
                d'être{' '}
                <span
                  className="italic"
                  style={{ WebkitTextStroke: '2.5px #8B5CF6', color: 'transparent' }}
                >
                  visible.
                </span>
              </h2>
              <p className="text-text-secondary text-[15px] leading-relaxed mb-10 max-w-sm">
                Un premier audit gratuit pour savoir où vous en êtes. Pas d'engagement, pas de
                jargon inutile — juste une analyse honnête de votre situation SEO actuelle.
              </p>

              <motion.a
                href="/#contact"
                whileHover={{ x: 7 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 text-text-primary font-bold text-base border-b-2 border-text-primary pb-1 hover:border-accent-violet hover:text-accent-violet transition-colors duration-200 mb-12"
              >
                Demander un audit gratuit
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>

              {/* Checklist sobre */}
              <div className="border-t border-gray-200 pt-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-5">
                  Inclus dans chaque mission
                </p>
                <div className="space-y-3.5">
                  {[
                    'Audit technique complet',
                    'Analyse des mots-clés cibles',
                    'Rapport de positionnement initial',
                    'Optimisations on-page documentées',
                    'Suivi mensuel des positions',
                    'Compte-rendu clair chaque mois',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-4 h-4 rounded-full border-2 border-accent-violet flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-violet" />
                      </div>
                      <span className="text-text-secondary text-[13px]">{item}</span>
                    </div>
                  ))}
                </div>
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
