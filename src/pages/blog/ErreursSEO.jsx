import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEOMeta from '../../components/SEOMeta'
import { fadeUp } from '../../utils/animations'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const errors = [
  {
    num: '01',
    title: "Balises title dupliquées ou absentes",
    intro: "La balise <title> est l'un des signaux SEO les plus directs envoyés à Google. Pourtant, des dizaines de sites la négligent complètement.",
    why: "Quand plusieurs pages partagent le même title — ou qu'aucune n'est définie — Google ne sait pas laquelle afficher. Il peut en générer une lui-même, souvent moins pertinente. Résultat : un taux de clic en chute libre.",
    fix: "Chaque page doit avoir un title unique, entre 50 et 60 caractères, incluant le mot-clé principal. Exemple : \"Agence web Cannes — Sites sur-mesure | Devko Studio\" plutôt que \"Accueil\". Utilisez Google Search Console ou Screaming Frog pour auditer toutes vos balises.",
  },
  {
    num: '02',
    title: "Images sans attribut alt",
    intro: "Google ne voit pas vos images. Il lit uniquement le texte que vous associez à chacune via l'attribut alt.",
    why: "Une image sans alt est une opportunité SEO gâchée. Google ignore ces visuels lors de l'indexation — vos photos de produits et portfolios n'existent pas aux yeux du moteur. C'est aussi un problème d'accessibilité pour les lecteurs d'écran.",
    fix: "Ajoutez un alt descriptif à chaque image intégrant un mot-clé naturellement. Mauvais : alt=\"image1.jpg\". Bon : alt=\"Développeur web créant un site e-commerce à Cannes\". Évitez le bourrage de mots-clés. Screaming Frog liste toutes les images sans alt en quelques secondes.",
  },
  {
    num: '03',
    title: "Absence de maillage interne",
    intro: "Le maillage interne, c'est le réseau de liens reliant vos pages entre elles. Beaucoup de sites ont des pages qui flottent dans le vide, sans aucun lien entrant.",
    why: "Google explore votre site en suivant les liens. Une page sans lien entrant sera très peu visitée par les robots — et donc peu bien classée. Ces pages \"orphelines\" ne bénéficient d'aucun transfert d'autorité depuis le reste du site.",
    fix: "Identifiez vos pages les plus importantes et assurez-vous qu'elles reçoivent des liens contextuels depuis d'autres pages pertinentes. Ajoutez des liens dans vos articles, fiches services, page \"À propos\". Google Search Console visualise le graphe de liens de votre site.",
  },
  {
    num: '04',
    title: "Site non optimisé pour mobile",
    intro: "Depuis 2021, Google utilise le Mobile-First Indexing : c'est la version mobile de votre site qu'il indexe en priorité.",
    why: "Si votre site est difficile à lire sur smartphone — textes trop petits, boutons trop rapprochés, contenu qui déborde — Google pénalise directement votre positionnement. Plus de 60 % du trafic web mondial vient des mobiles.",
    fix: "Testez avec l'outil \"Test d'optimisation mobile\" de Google. Vérifiez que les polices sont lisibles sans zoom, que les zones de clic font minimum 48px, et que la mise en page est fluide entre 375px et 428px. Google Search Console signale les problèmes dans la section \"Expérience\".",
  },
  {
    num: '05',
    title: "Vitesse de chargement négligée",
    intro: "Depuis mai 2021, les Core Web Vitals sont un facteur de classement officiel. La vitesse n'est plus une bonne pratique — c'est un critère de ranking.",
    why: "Les Core Web Vitals mesurent le LCP (temps d'affichage du contenu principal), le CLS (stabilité visuelle) et l'INP (réactivité aux interactions). Un site lent fait fuir les visiteurs et est pénalisé dans les résultats, surtout sur mobile.",
    fix: "Utilisez PageSpeed Insights pour obtenir un score détaillé. Actions les plus impactantes : compresser et convertir en WebP, activer le cache navigateur, différer les scripts JS non critiques, utiliser un CDN. Objectif : LCP < 2,5 s et CLS < 0,1.",
  },
]

const otherArticles = [
  {
    to: '/blog/site-vitrine-clients',
    category: 'Stratégie digitale',
    accent: '#8B5CF6',
    title: "Pourquoi votre site vitrine vous coûte des clients sans que vous le sachiez",
  },
  {
    to: '/blog/webflow-wix-sur-mesure',
    category: 'No-code vs Code',
    accent: '#8B5CF6',
    title: "Webflow, Wix ou développement sur-mesure : que choisir en 2026 ?",
  },
]

export default function ErreursSEO() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-white">
      <SEOMeta
        title="Les 5 erreurs SEO qui empêchent Google de vous trouver"
        description="Balises title dupliquées, images sans alt, absence de maillage interne, mobile non optimisé, vitesse négligée — les 5 erreurs SEO les plus fréquentes et comment les corriger."
        path="/blog/erreurs-seo"
        type="article"
        article={{ publishedTime: '2026-01-03T00:00:00Z', section: 'SEO' }}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-[#FAF9F6]">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeUp(0)}>
            <a
              href="/#articles"
              className="inline-flex items-center gap-2 text-[#64748B] text-sm hover:text-[#06B6D4] transition-colors mb-10 group"
            >
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour aux articles
            </a>

            <span
              className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full ml-12"
              style={{ background: '#06B6D422', color: '#06B6D4', border: '1px solid #06B6D444' }}
            >
              SEO
            </span>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-[#0F172A] leading-[1.08] mb-6">
              Les 5 erreurs SEO qui empêchent Google de vous trouver
            </h1>

            <p className="text-[#64748B] text-lg leading-relaxed mb-8 max-w-2xl">
              La majorité des PME perdent des clients chaque jour à cause d'erreurs SEO basiques — et souvent invisibles. Voici les cinq problèmes les plus fréquents et comment les corriger.
            </p>

            <div className="flex items-center gap-4 text-sm text-[#94A3B8]">
              <span>3 janvier 2026</span>
              <span className="w-1 h-1 rounded-full bg-[#CBD5E1]" />
              <span>4 min de lecture</span>
              <span className="w-1 h-1 rounded-full bg-[#CBD5E1]" />
              <span>Devko Studio</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Corps */}
      <article className="max-w-2xl mx-auto px-6 py-16">

        <motion.p {...fadeUp(0)} className="text-[#475569] text-[16px] leading-[1.85] mb-14 pl-5 border-l-4 border-[#06B6D4]">
          Le SEO est souvent perçu comme un domaine obscur et complexe. En réalité, les erreurs qui pénalisent le plus les petits sites sont simples à identifier — et à corriger. Voici les cinq que nous retrouvons systématiquement lors de nos audits.
        </motion.p>

        <div className="space-y-14">
          {errors.map((error, i) => (
            <motion.div key={error.num} {...fadeUp(i * 0.06)}>
              {/* Numéro + titre */}
              <div className="flex items-start gap-5 mb-5">
                <span className="text-5xl font-black leading-none select-none flex-shrink-0 mt-1" style={{ color: '#06B6D4', opacity: 0.2 }}>
                  {error.num}
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] leading-snug mb-2">
                    {error.title}
                  </h2>
                  <p className="text-[#64748B] leading-relaxed">{error.intro}</p>
                </div>
              </div>

              {/* Détails */}
              <div className="rounded-2xl border border-[#E2E8F0] overflow-hidden ml-0 sm:ml-16">
                <div className="px-6 py-5 border-b border-[#E2E8F0]">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#06B6D4] mb-2">Pourquoi c'est problématique</p>
                  <p className="text-[#475569] text-[15px] leading-relaxed">{error.why}</p>
                </div>
                <div className="px-6 py-5 bg-[#FAF9F6]">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#06B6D4] mb-2">Comment corriger</p>
                  <p className="text-[#475569] text-[15px] leading-relaxed">{error.fix}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Récap outils */}
        <motion.div {...fadeUp(0.3)} className="mt-16 bg-[#FAF9F6] rounded-2xl p-7 border border-[#E2E8F0]">
          <p className="text-sm font-bold text-[#0F172A] mb-4">Les outils indispensables</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { name: 'Google Search Console', role: 'Gratuit — audit de base, couverture, Core Web Vitals' },
              { name: 'Screaming Frog', role: 'Gratuit jusqu\'à 500 URLs — audit technique complet' },
              { name: 'PageSpeed Insights', role: 'Gratuit — analyse des performances et du LCP/CLS' },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-xl p-4 border border-[#E2E8F0]">
                <p className="text-sm font-bold text-[#0F172A] mb-1">{t.name}</p>
                <p className="text-xs text-[#64748B] leading-relaxed">{t.role}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeUp(0.32)} className="mt-10 bg-[#0D0D0D] rounded-2xl p-10 text-center">
          <h3 className="text-2xl font-black text-white mb-3">
            Votre site est peut-être concerné
          </h3>
          <p className="text-white/60 text-[15px] leading-relaxed mb-7 max-w-md mx-auto">
            On réalise un audit SEO gratuit de votre site en 48h. Pas de jargon, juste des recommandations concrètes et actionnables.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 font-semibold rounded-full px-8 py-3 transition-colors duration-200"
            style={{ background: '#06B6D4', color: 'white' }}
          >
            Demander un audit gratuit
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        {/* Autres articles */}
        <motion.div {...fadeUp(0.34)} className="mt-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#94A3B8] mb-6">Autres articles</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {otherArticles.map((a) => (
              <Link
                key={a.to}
                to={a.to}
                className="group bg-[#FAF9F6] rounded-xl p-6 border border-[#E2E8F0] hover:border-[#06B6D4] transition-colors duration-200 flex flex-col gap-3"
              >
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.18em] px-2 py-0.5 rounded-full self-start"
                  style={{ background: `${a.accent}15`, color: a.accent, border: `1px solid ${a.accent}30` }}
                >
                  {a.category}
                </span>
                <p className="text-[#0F172A] font-bold text-[15px] leading-snug group-hover:text-[#06B6D4] transition-colors">{a.title}</p>
                <span className="text-[#94A3B8] text-xs flex items-center gap-1 group-hover:text-[#06B6D4] transition-colors">
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
