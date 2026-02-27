import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] },
})

const articles = [
  {
    category: 'Stratégie digitale',
    title: 'Pourquoi votre site vitrine vous coûte des clients sans que vous le sachiez',
    excerpt: "Temps de chargement, absence de CTA, design daté — trois raisons silencieuses qui font fuir vos prospects avant même qu'ils aient lu votre offre.",
    date: '12 jan. 2026',
    readTime: '5 min',
    href: '/blog/site-vitrine-clients',
    bg: 'bg-[#1a1a2e]',
    accent: '#8B5CF6',
  },
  {
    category: 'SEO',
    title: 'Les 5 erreurs SEO qui empêchent Google de vous trouver',
    excerpt: 'Balises title dupliquées, images non compressées, absence de maillage interne — des erreurs simples à corriger qui changent tout.',
    date: '3 jan. 2026',
    readTime: '4 min',
    href: '/blog/erreurs-seo',
    bg: 'bg-[#0f2027]',
    accent: '#06B6D4',
  },
  {
    category: 'No-code vs Code',
    title: 'Webflow, Wix ou développement sur-mesure : que choisir en 2026 ?',
    excerpt: 'On compare honnêtement les trois options pour que vous fassiez le bon choix selon votre budget, vos ambitions et votre tolérance à la dépendance.',
    date: '18 déc. 2024',
    readTime: '6 min',
    href: '/blog/webflow-wix-sur-mesure',
    bg: 'bg-[#1a1a1a]',
    accent: '#8B5CF6',
  },
]

function ArticleCard({ article, large = false, delay = 0 }) {
  return (
    <motion.a
      href={article.href}
      {...fadeUp(delay)}
      className={`group relative ${large ? 'h-full min-h-[420px]' : 'h-48'} rounded-2xl overflow-hidden flex flex-col justify-end cursor-pointer block`}
    >
      {/* Fond coloré */}
      <div className={`absolute inset-0 ${article.bg}`} />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'200\' height=\'200\' filter=\'url(%23n)\' opacity=\'0.4\'/%3E%3C/svg%3E")',
        }}
      />

      {/* Dégradé bas permanent */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Voile hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-400" />

      {/* Icône + centrale */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </motion.div>
      </div>

      {/* Contenu texte */}
      <div className="relative z-10 p-6 group-hover:translate-y-1 transition-transform duration-300">
        <div className="flex items-center gap-3 mb-3">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 rounded-full"
            style={{ background: `${article.accent}22`, color: article.accent, border: `1px solid ${article.accent}44` }}
          >
            {article.category}
          </span>
          <span className="text-white/40 text-[11px]">{article.readTime} de lecture</span>
        </div>

        <h3 className={`font-bold text-white leading-snug mb-2 ${large ? 'text-xl lg:text-2xl' : 'text-[15px]'}`}>
          {article.title}
        </h3>

        {large && (
          <p className="text-white/55 text-sm leading-relaxed line-clamp-2">
            {article.excerpt}
          </p>
        )}

        <p className="text-white/30 text-[11px] mt-3">{article.date}</p>
      </div>
    </motion.a>
  )
}

export default function Articles() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <motion.div {...fadeUp(0)}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-violet-500" />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-500">
                Le blog
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A] leading-tight" >
              Derniers  <span
                className="italic"
                style={{ WebkitTextStroke: '2px #0F172A', color: 'transparent' }}
              >articles</span>
            </h2>
          </motion.div>

          {/* Lien "Tous les articles" à activer quand la page blog sera créée */}
        </div>

        {/* Grille asymétrique */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-4 lg:gap-5">

          {/* Grande carte gauche */}
          <ArticleCard article={articles[0]} large delay={0.1} />

          {/* 2 petites cartes droite */}
          <div className="flex flex-col gap-4 lg:gap-5">
            <ArticleCard article={articles[1]} delay={0.18} />
            <ArticleCard article={articles[2]} delay={0.26} />
          </div>

        </div>

      </div>
    </section>
  )
}
