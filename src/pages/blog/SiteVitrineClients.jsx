import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SEOMeta from '../../components/SEOMeta'
import { fadeUp } from '../../utils/animations'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const otherArticles = [
  {
    href: '/blog/erreurs-seo',
    category: 'SEO',
    accent: '#06B6D4',
    title: "Les 5 erreurs SEO qui empêchent Google de vous trouver",
    bg: 'bg-[#0f2027]',
  },
  {
    href: '/blog/webflow-wix-sur-mesure',
    category: 'No-code vs Code',
    accent: '#8B5CF6',
    title: "Webflow, Wix ou développement sur-mesure : que choisir en 2026 ?",
    bg: 'bg-[#1a1a1a]',
  },
]

export default function SiteVitrineClients() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-white">
      <SEOMeta
        title="Pourquoi votre site vitrine vous coûte des clients"
        description="Temps de chargement, absence de CTA, design daté, mobile non optimisé, pas de preuve sociale — les 5 raisons silencieuses qui font fuir vos prospects. Checklist gratuite incluse."
        path="/blog/site-vitrine-clients"
        type="article"
        article={{ publishedTime: '2026-01-12T00:00:00Z', section: 'Stratégie digitale' }}
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
              className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full ml-52"
              style={{ background: '#8B5CF622', color: '#8B5CF6', border: '1px solid #8B5CF644' }}
            >
              Stratégie digitale
            </span>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-[#0F172A] leading-[1.08] mb-6">
              Pourquoi votre site vitrine vous coûte des clients sans que vous le sachiez
            </h1>

            <p className="text-[#64748B] text-lg leading-relaxed mb-8 max-w-2xl">
              Un site web mal conçu ne fait pas que décevoir — il chasse activement vos prospects. Voici les cinq raisons silencieuses qui sabotent votre réputation en ligne, et comment les corriger.
            </p>

            <div className="flex items-center gap-4 text-sm text-[#94A3B8]">
              <span>12 janvier 2026</span>
              <span className="w-1 h-1 rounded-full bg-[#CBD5E1]" />
              <span>5 min de lecture</span>
              <span className="w-1 h-1 rounded-full bg-[#CBD5E1]" />
              <span>Devko Studio</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Corps de l'article */}
      <article className="max-w-2xl mx-auto px-6 py-16">

        <motion.div {...fadeUp(0.05)}>
          <p className="text-[#475569] text-[16px] leading-[1.85] mb-5">
            Imaginez un commercial qui travaille 24h/24, 7j/7, sans jamais prendre de congés. Il reçoit des visiteurs, répond à leurs questions, et les convainc — ou les fait fuir. Ce commercial, c'est votre site web.
          </p>
          <p className="text-[#475569] text-[16px] leading-[1.85] mb-5">
            Le problème ? La plupart des sites vitrine fuient des clients en silence. Pas de message d'erreur, pas d'alerte. Juste des visiteurs qui repartent sans laisser de trace, et un taux de conversion qui stagne. Voici les cinq raisons les plus courantes — et ce que vous pouvez faire dès aujourd'hui.
          </p>
        </motion.div>

        {/* Section 1 */}
        <motion.div {...fadeUp(0.08)}>
          <h2 className="text-2xl font-bold text-[#0F172A] mb-4 mt-14">
            1. Un temps de chargement qui tue la patience
          </h2>
          <p className="text-[#475569] text-[16px] leading-[1.85] mb-5">
            Google l'a mesuré : <strong className="text-[#0F172A]">53 % des visiteurs mobiles abandonnent un site qui met plus de 3 secondes à charger.</strong> Pas 10 secondes. Trois. Et pour chaque seconde supplémentaire, le taux de conversion chute de 4,5 % en moyenne.
          </p>
          <p className="text-[#475569] text-[16px] leading-[1.85] mb-5">
            Les coupables habituels : des images non compressées (un JPEG de 4 Mo sur une page d'accueil, ça arrive plus souvent qu'on ne le croit), un hébergement mutualisé bas de gamme, des plugins WordPress inutiles qui chargent des scripts en arrière-plan, et l'absence de cache.
          </p>
          <div className="bg-[#FAF9F6] rounded-xl p-6 border-l-4 border-[#8B5CF6] mb-6">
            <p className="font-semibold text-[#0F172A] mb-2">Comment vérifier en 2 minutes :</p>
            <p className="text-[#475569] text-sm leading-relaxed">
              Tapez l'URL de votre site dans <strong>PageSpeed Insights</strong> (pagespeed.web.dev). Un score en dessous de 70 en mobile est un signal d'alarme. En dessous de 50, c'est urgent.
            </p>
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div {...fadeUp(0.1)}>
          <h2 className="text-2xl font-bold text-[#0F172A] mb-4 mt-14">
            2. Pas de CTA clair — vos visiteurs ne savent pas quoi faire
          </h2>
          <p className="text-[#475569] text-[16px] leading-[1.85] mb-5">
            Un visiteur qui arrive sur votre site a une fenêtre d'attention de quelques secondes. Si dans ces quelques secondes, il ne comprend pas ce que vous faites et ce qu'il doit faire ensuite — il repart.
          </p>
          <p className="text-[#475569] text-[16px] leading-[1.85] mb-5">
            Le Call-To-Action (CTA) est l'élément le plus sous-estimé d'un site vitrine. Beaucoup de sites ont des boutons "En savoir plus" qui mènent nulle part, ou pire, aucun bouton du tout en dehors du menu de navigation.
          </p>
          <div className="bg-[#FAF9F6] rounded-xl p-6 border-l-4 border-[#8B5CF6] mb-6">
            <p className="font-semibold text-[#0F172A] mb-3">Un bon CTA, c'est :</p>
            <ul className="space-y-2 text-[#475569] text-sm">
              {[
                "Visible sans scroller (above the fold)",
                "Formulé avec un verbe d'action : 'Demander un devis', 'Réserver un appel', 'Voir nos réalisations'",
                "Répété à intervalles logiques tout au long de la page",
                "Contrasté visuellement par rapport au fond",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#8B5CF6] mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Section 3 */}
        <motion.div {...fadeUp(0.12)}>
          <h2 className="text-2xl font-bold text-[#0F172A] mb-4 mt-14">
            3. Un design qui date — et qui détruit votre crédibilité
          </h2>
          <p className="text-[#475569] text-[16px] leading-[1.85] mb-5">
            Une étude de l'Université de Stanford est sans appel : <strong className="text-[#0F172A]">75 % des utilisateurs jugent la crédibilité d'une entreprise sur la seule base de son design web.</strong> Pas de son contenu, pas de ses tarifs. Son design.
          </p>
          <p className="text-[#475569] text-[16px] leading-[1.85] mb-5">
            Un site créé il y a 5 ans avec un thème WordPress générique, des polices Times New Roman, des boutons avec des dégradés de 2015 et des photos de stock trop souriantes — ça se voit. Et ça fait fuir.
          </p>
          <p className="text-[#475569] text-[16px] leading-[1.85] mb-5">
            Le design, ce n'est pas un luxe réservé aux grandes marques. C'est le premier filtre de confiance que vos prospects appliquent, inconsciemment, en moins de 50 millisecondes après leur arrivée sur votre site.
          </p>
        </motion.div>

        {/* Section 4 */}
        <motion.div {...fadeUp(0.14)}>
          <h2 className="text-2xl font-bold text-[#0F172A] mb-4 mt-14">
            4. Non optimisé mobile — vous perdez 60 % de votre trafic
          </h2>
          <p className="text-[#475569] text-[16px] leading-[1.85] mb-5">
            En 2026, plus de <strong className="text-[#0F172A]">60 % du trafic web mondial provient des smartphones.</strong> Pourtant, des dizaines de milliers de sites professionnels français sont encore affichés en "version bureau réduite" sur mobile — texte minuscule, boutons impossibles à cliquer, images qui débordent.
          </p>
          <p className="text-[#475569] text-[16px] leading-[1.85] mb-5">
            Depuis 2021, Google indexe les sites en priorité dans leur version mobile (Mobile-First Indexing). Un site non responsive ne pénalise pas seulement l'expérience utilisateur — il pénalise directement votre positionnement dans les résultats de recherche.
          </p>
          <div className="bg-[#FAF9F6] rounded-xl p-6 border-l-4 border-[#8B5CF6] mb-6">
            <p className="text-[#475569] text-sm leading-relaxed">
              <strong className="text-[#0F172A]">Test rapide :</strong> Ouvrez votre site sur votre téléphone. Pouvez-vous lire le texte sans zoomer ? Les boutons sont-ils cliquables avec un doigt ? Si vous hésitez, vos visiteurs, eux, ne reviennent pas.
            </p>
          </div>
        </motion.div>

        {/* Section 5 */}
        <motion.div {...fadeUp(0.16)}>
          <h2 className="text-2xl font-bold text-[#0F172A] mb-4 mt-14">
            5. Absence de preuve sociale — vos prospects n'ont pas confiance
          </h2>
          <p className="text-[#475569] text-[16px] leading-[1.85] mb-5">
            Vous pouvez écrire "Expert depuis 15 ans" ou "Qualité garantie" autant de fois que vous voulez — personne ne vous croira sur parole. Ce que vos prospects cherchent, c'est la preuve que d'autres personnes ont fait confiance à votre entreprise avant eux.
          </p>
          <p className="text-[#475569] text-[16px] leading-[1.85] mb-5">
            Les avis clients, les témoignages avec photo et prénom, les logos de vos clients actuels, des études de cas, des chiffres concrets ("200 clients accompagnés", "98 % de satisfaction") — voilà ce qui rassure et convertit.
          </p>
          <p className="text-[#475569] text-[16px] leading-[1.85] mb-5">
            Si votre site n'en contient aucun, vous laissez vos visiteurs dans le doute. Et dans le doute, ils vont voir chez le concurrent.
          </p>
        </motion.div>

        {/* Checklist finale */}
        <motion.div {...fadeUp(0.18)}>
          <h2 className="text-2xl font-bold text-[#0F172A] mb-6 mt-14">
            La checklist rapide des 5 points
          </h2>
          <div className="space-y-3">
            {[
              { num: '01', text: "Mon site charge en moins de 3 secondes sur mobile (PageSpeed Insights)" },
              { num: '02', text: "J'ai un CTA clair et visible dès l'arrivée sur chaque page" },
              { num: '03', text: "Mon design est moderne, professionnel et cohérent avec mon positionnement" },
              { num: '04', text: "Mon site s'affiche parfaitement sur smartphone et tablette" },
              { num: '05', text: "J'affiche des avis, témoignages ou références clients visibles" },
            ].map(({ num, text }) => (
              <div key={num} className="flex items-start gap-4 p-4 rounded-xl border border-[#E2E8F0] bg-[#FAF9F6]">
                <span className="text-2xl font-black text-[#E2E8F0] flex-shrink-0 leading-none mt-0.5">{num}</span>
                <p className="text-[#475569] text-[15px] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeUp(0.2)} className="mt-16 bg-[#FAF9F6] rounded-2xl p-10 text-center border border-[#E2E8F0]">
          <h3 className="text-2xl font-black text-[#0F172A] mb-3">
            Votre site a peut-être ces problèmes
          </h3>
          <p className="text-[#64748B] text-[15px] leading-relaxed mb-7 max-w-md mx-auto">
            On peut faire un audit rapide et vous dire exactement où vous en êtes — gratuitement, sans engagement.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#8B5CF6] text-white font-semibold rounded-full px-8 py-3 hover:bg-[#7C3AED] transition-colors duration-200"
          >
            Demander un audit gratuit
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        {/* Autres articles */}
        <motion.div {...fadeUp(0.22)} className="mt-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#94A3B8] mb-6">Autres articles</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {otherArticles.map((a) => (
              <a
                key={a.href}
                href={a.href}
                className={`group relative ${a.bg} rounded-xl p-6 overflow-hidden flex flex-col justify-between min-h-[160px]`}
              >
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.18em] px-2 py-0.5 rounded-full self-start mb-3"
                  style={{ background: `${a.accent}22`, color: a.accent, border: `1px solid ${a.accent}44` }}
                >
                  {a.category}
                </span>
                <div>
                  <p className="text-white font-bold text-[15px] leading-snug mb-3">{a.title}</p>
                  <span className="text-white/40 text-xs group-hover:text-white/70 transition-colors flex items-center gap-1">
                    Lire l'article
                    <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

      </article>

      <Footer />
    </div>
  )
}
