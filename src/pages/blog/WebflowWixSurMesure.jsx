import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEOMeta from '../../components/SEOMeta'
import { fadeUp } from '../../utils/animations'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const tools = [
  {
    name: 'Wix',
    tagline: "Le plus accessible",
    forWho: "Indépendants, artisans, petites structures avec un budget limité qui ont besoin d'une présence en ligne rapidement.",
    pros: [
      "Mise en ligne très rapide (quelques heures)",
      "Coût mensuel abordable (€/mois)",
      "Aucune compétence technique requise",
      "Éditeur drag & drop intuitif",
    ],
    cons: [
      "Limites techniques importantes",
      "SEO médiocre (structure générée automatiquement)",
      "Dépendance totale à la plateforme",
      "Performances souvent décevantes",
      "Code source inaccessible",
    ],
  },
  {
    name: 'Webflow',
    tagline: "Le plus ambitieux sans code",
    forWho: "Designers, startups et PME qui veulent un site visuellement ambitieux sans écrire de code, avec un budget intermédiaire.",
    pros: [
      "Design beaucoup plus poussé et personnalisé",
      "CMS intégré pour gérer le contenu facilement",
      "Code généré plus propre, meilleur pour le SEO",
      "Animations et interactions avancées",
    ],
    cons: [
      "Courbe d'apprentissage significative",
      "Tarifs mensuels élevés sur le long terme",
      "Dépendance à une plateforme tierce",
      "Fonctionnalités complexes nécessitent du code",
    ],
  },
  {
    name: 'Sur-mesure',
    tagline: "Le plus pérenne",
    forWho: "Entreprises avec des ambitions sérieuses qui veulent un actif numérique qui leur appartient totalement, sans contraintes.",
    pros: [
      "100 % propriété du code et des données",
      "Performances optimales (Core Web Vitals)",
      "Évolutivité sans limite technique",
      "Aucune dépendance à une plateforme tierce",
      "Personnalisation absolue",
    ],
    cons: [
      "Investissement initial plus élevé",
      "Délai de livraison plus long",
      "Nécessite de faire confiance à un prestataire",
    ],
  },
]

const comparison = [
  { critere: 'Prix',              wix: '€ / mois',          webflow: '€€ / mois',    surMesure: 'Investissement unique' },
  { critere: 'SEO',               wix: 'Médiocre',           webflow: 'Bon',           surMesure: 'Excellent' },
  { critere: 'Performance',       wix: 'Faible',             webflow: 'Bonne',         surMesure: 'Optimale' },
  { critere: 'Propriété du code', wix: 'Non',                webflow: 'Partielle',     surMesure: '100 %' },
  { critere: 'Évolutivité',       wix: 'Limitée',            webflow: 'Moyenne',       surMesure: 'Illimitée' },
  { critere: 'Personnalisation',  wix: 'Basique',            webflow: 'Avancée',       surMesure: 'Totale' },
]

const otherArticles = [
  {
    to: '/blog/site-vitrine-clients',
    category: 'Stratégie digitale',
    accent: '#8B5CF6',
    title: "Pourquoi votre site vitrine vous coûte des clients sans que vous le sachiez",
  },
  {
    to: '/blog/erreurs-seo',
    category: 'SEO',
    accent: '#06B6D4',
    title: "Les 5 erreurs SEO qui empêchent Google de vous trouver",
  },
]

export default function WebflowWixSurMesure() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-white">
      <SEOMeta
        title="Webflow, Wix ou développement sur-mesure : que choisir en 2026 ?"
        description="Comparatif honnête Wix vs Webflow vs développement sur-mesure. Budget, flexibilité, SEO, maintenance — on vous aide à choisir la bonne solution pour votre projet web."
        path="/blog/webflow-wix-sur-mesure"
        type="article"
        article={{ publishedTime: '2025-12-18T00:00:00Z', section: 'No-code vs Code' }}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-[#FAF9F6]">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp(0)}>
            <a
              href="/#articles"
              className="inline-flex items-center gap-2 text-[#64748B] text-sm hover:text-[#8B5CF6] transition-colors mb-10 group"
            >
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour aux articles
            </a>

            <span
              className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full ml-44"
              style={{ background: '#8B5CF622', color: '#8B5CF6', border: '1px solid #8B5CF644' }}
            >
              No-code vs Code
            </span>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-[#0F172A] leading-[1.08] mb-6">
              Webflow, Wix ou développement sur-mesure : que choisir en 2026 ?
            </h1>

            <p className="text-[#64748B] text-lg leading-relaxed mb-8 max-w-2xl">
              Il n'existe pas de réponse universelle. Le bon outil dépend de votre budget, de vos ambitions et de votre tolérance à la dépendance envers une plateforme tierce. On compare honnêtement les trois options.
            </p>

            <div className="flex items-center gap-4 text-sm text-[#94A3B8]">
              <span>18 décembre 2024</span>
              <span className="w-1 h-1 rounded-full bg-[#CBD5E1]" />
              <span>6 min de lecture</span>
              <span className="w-1 h-1 rounded-full bg-[#CBD5E1]" />
              <span>Devko Studio</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Corps */}
      <article className="max-w-2xl mx-auto px-6 py-16">

        <motion.p {...fadeUp(0)} className="text-[#475569] text-[16px] leading-[1.85] mb-14">
          Chaque semaine, on reçoit des messages de porteurs de projet qui hésitent entre ces trois options. Wix pour aller vite, Webflow pour faire beau, ou une agence pour faire bien. Voici notre analyse honnête — sans chercher à vous vendre quoi que ce soit avant que vous ayez toutes les cartes en main.
        </motion.p>

        {/* Les 3 outils */}
        {tools.map((tool, i) => (
          <motion.div key={tool.name} {...fadeUp(i * 0.08)} className="mb-14">
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-2xl font-black text-[#0F172A]">{tool.name}</h2>
              <span
                className="text-[10px] font-bold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full flex-shrink-0 ml-4 mt-1"
                style={{ background: '#8B5CF615', color: '#8B5CF6', border: '1px solid #8B5CF630' }}
              >
                {tool.tagline}
              </span>
            </div>

            <div className="mb-4 p-4 bg-[#FAF9F6] rounded-xl border border-[#E2E8F0]">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#8B5CF6] mb-1">Pour qui ?</p>
              <p className="text-[#475569] text-[15px] leading-relaxed">{tool.forWho}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-green-100 bg-green-50 p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-green-600 mb-3">Avantages</p>
                <ul className="space-y-2">
                  {tool.pros.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-[#0F172A]">
                      <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-red-100 bg-red-50 p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-red-500 mb-3">Inconvénients</p>
                <ul className="space-y-2">
                  {tool.cons.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-[#0F172A]">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Tableau comparatif */}
        <motion.div {...fadeUp(0.2)} className="mb-14">
          <h2 className="text-2xl font-black text-[#0F172A] mb-6">Comparatif rapide</h2>
          <div className="overflow-x-auto rounded-2xl border border-[#E2E8F0]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#FAF9F6]">
                  <th className="text-left px-5 py-4 font-semibold text-[#0F172A] border-b border-[#E2E8F0]">Critère</th>
                  <th className="px-5 py-4 font-semibold text-[#64748B] border-b border-[#E2E8F0] text-center">Wix</th>
                  <th className="px-5 py-4 font-semibold text-[#64748B] border-b border-[#E2E8F0] text-center">Webflow</th>
                  <th className="px-5 py-4 font-semibold text-[#8B5CF6] border-b border-[#E2E8F0] text-center">Sur-mesure</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.critere} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAF9F6]'}>
                    <td className="px-5 py-3.5 font-medium text-[#0F172A]">{row.critere}</td>
                    <td className="px-5 py-3.5 text-center text-[#64748B]">{row.wix}</td>
                    <td className="px-5 py-3.5 text-center text-[#64748B]">{row.webflow}</td>
                    <td className="px-5 py-3.5 text-center font-semibold text-[#8B5CF6]">{row.surMesure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Notre recommandation */}
        <motion.div {...fadeUp(0.22)} className="mb-14 rounded-2xl p-8 border-l-4 border-[#8B5CF6]" style={{ background: '#8B5CF608', border: '1px solid #8B5CF620', borderLeft: '4px solid #8B5CF6' }}>
          <h2 className="text-2xl font-black text-[#0F172A] mb-5">Notre recommandation honnête</h2>
          <div className="space-y-5">
            {[
              {
                n: '1',
                title: "Budget serré, besoin urgent",
                text: "Wix peut dépanner pour démarrer. Ne l'utilisez pas comme solution long terme si vous avez des ambitions de croissance — le coût de migration sera plus élevé que d'avoir bien fait les choses dès le départ.",
              },
              {
                n: '2',
                title: "Projet design-driven, CMS nécessaire",
                text: "Webflow est un excellent compromis, à condition d'accepter ses limites et ses abonnements récurrents. Idéal pour les portfolios, agences créatives et sites éditoriaux.",
              },
              {
                n: '3',
                title: "Ambitions sérieuses, actif durable",
                text: "Le sur-mesure est l'investissement le plus rentable sur le long terme. Vous possédez votre site, maîtrisez vos données, et n'êtes jamais bloqué par une décision unilatérale d'une plateforme.",
              },
            ].map(({ n, title, text }) => (
              <div key={n} className="flex items-start gap-4">
                <span className="w-7 h-7 rounded-full bg-[#8B5CF6] text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">{n}</span>
                <div>
                  <p className="font-bold text-[#0F172A] mb-1">{title}</p>
                  <p className="text-[#475569] text-[15px] leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Conclusion */}
        <motion.div {...fadeUp(0.24)} className="mb-16">
          <h2 className="text-2xl font-black text-[#0F172A] mb-4">Conclusion</h2>
          <p className="text-[#475569] text-[16px] leading-[1.85] mb-4">
            Chaque outil a sa place — mais pas pour les mêmes projets. Wix et Webflow sont des solutions de location : pratiques, mais vous ne serez jamais vraiment propriétaire de votre site. Le développement sur-mesure transforme votre site en actif stratégique qui vous appartient.
          </p>
          <p className="text-[#475569] text-[16px] leading-[1.85]">
            Avant de choisir, posez-vous cette question : dans 3 ans, est-ce que ce site doit encore fonctionner parfaitement, vous apporter des clients et s'adapter à votre croissance ? Si oui, le sur-mesure mérite sérieusement d'être envisagé.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeUp(0.26)} className="bg-[#0F172A] rounded-2xl p-10 text-center mb-16">
          <h3 className="text-2xl font-black text-white mb-3">Vous hésitez encore ?</h3>
          <p className="text-white/60 text-[15px] leading-relaxed mb-7 max-w-md mx-auto">
            On vous donne un avis honnête, gratuit et sans engagement. 20 minutes peuvent vous éviter des mois de frustration.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#8B5CF6] text-white font-semibold rounded-full px-8 py-3 hover:bg-[#7C3AED] transition-colors duration-200"
          >
            Discutons de votre projet
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        {/* Autres articles */}
        <motion.div {...fadeUp(0.28)}>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#94A3B8] mb-6">Autres articles</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {otherArticles.map((a) => (
              <Link
                key={a.to}
                to={a.to}
                className="group bg-[#FAF9F6] rounded-xl p-6 border border-[#E2E8F0] hover:border-[#8B5CF6] transition-colors duration-200 flex flex-col gap-3"
              >
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.18em] px-2 py-0.5 rounded-full self-start"
                  style={{ background: `${a.accent}15`, color: a.accent, border: `1px solid ${a.accent}30` }}
                >
                  {a.category}
                </span>
                <p className="text-[#0F172A] font-bold text-[15px] leading-snug group-hover:text-[#8B5CF6] transition-colors">{a.title}</p>
                <span className="text-[#94A3B8] text-xs flex items-center gap-1 group-hover:text-[#8B5CF6] transition-colors">
                  Lire l'article
                  <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </motion.div>

      </article>

      <Footer />
    </div>
  )
}
