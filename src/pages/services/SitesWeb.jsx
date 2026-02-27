import { motion } from 'framer-motion'
import { useEffect } from 'react'
import SEOMeta from '../../components/SEOMeta'
import SectionLabel from '../../components/SectionLabel'
import { fadeUp, fadeLeft, fadeRight } from '../../utils/animations'
import Navbar from '../../components/Navbar'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

/* ── Icônes SVG ─────────────────────────────────────────────── */
const IconResponsive = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
)
const IconSpeed = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)
const IconSeo = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
)
const IconSecurity = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)

/* ── Placeholder illustration ───────────────────────────────── */
function IllustrationSlot({ label, hint, aspect = 'aspect-[4/3]', dark = false }) {
  return (
    <div
      className={`${aspect} rounded-2xl flex items-center justify-center ${
        dark
          ? 'border-2 border-dashed border-white/12'
          : 'border-2 border-dashed border-gray-200 bg-white'
      }`}
      style={dark ? { background: 'rgba(255,255,255,0.02)' } : {}}
    >
      <div className="text-center p-8">
        <svg
          className={`w-10 h-10 mx-auto mb-4 ${dark ? 'text-white/20' : 'text-gray-300'}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p className={`text-sm font-medium mb-1 ${dark ? 'text-white/25' : 'text-gray-300'}`}>
          {label}
        </p>
        <p className={`text-xs max-w-[220px] mx-auto leading-relaxed ${dark ? 'text-white/15' : 'text-gray-300'}`}>
          {hint}
        </p>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   PAGE SITES WEB
═══════════════════════════════════════════════════════════════ */
export default function SitesWeb() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const fondamentaux = [
    {
      num: '01',
      title: 'Design Responsive & Mobile-First',
      icon: <IconResponsive />,
      text: "Plus de 60 % du trafic web vient du mobile. On ne conçoit pas un site desktop qu'on adapte ensuite au mobile — on part du mobile et on enrichit pour les grands écrans. Chaque bouton, chaque formulaire, chaque image est testé sur de vrais appareils.",
    },
    {
      num: '02',
      title: 'Performance & Core Web Vitals',
      icon: <IconSpeed />,
      text: "53 % des visiteurs quittent un site qui met plus de 3 secondes à charger. On optimise chaque Ko : images compressées en WebP, code splitté, cache agressif, CDN. Objectif Lighthouse : 95+ en performance sur desktop et mobile.",
    },
    {
      num: '03',
      title: 'SEO Technique dès le code',
      icon: <IconSeo />,
      text: "Le SEO ne s'ajoute pas après coup. Structure HTML sémantique, balises meta précises, données structurées Schema.org, sitemap XML, robots.txt, temps de chargement optimisé — on pose les fondations dès la première ligne de code.",
    },
    {
      num: '04',
      title: 'Sécurité & Conformité',
      icon: <IconSecurity />,
      text: "HTTPS systématique, headers de sécurité (CSP, HSTS, X-Frame-Options), protection contre les injections XSS et CSRF, mises à jour de dépendances. Vos données et celles de vos clients sont protégées. Conformité RGPD incluse dans chaque livraison.",
    },
  ]

  const siteTypes = [
    {
      tag: 'Le plus demandé',
      name: 'Site Vitrine',
      price: 'À partir de 300 €',
      description:
        "Votre vitrine digitale, disponible 24h/24. Un site vitrine bien conçu, c'est votre commercial qui ne dort jamais — il répond aux questions, rassure les prospects, déclenche des prises de contact. On soigne chaque page pour qu'elle raconte votre histoire et convertisse.",
      includes: [
        '3 à 8 pages sur-mesure',
        'Design adapté à votre identité',
        'Formulaire de contact sécurisé',
        'Optimisation SEO de base',
        'Google Analytics configuré',
        'Hébergement conseillé & paramétré',
      ],
      image: '/assets/images/vitrine.webp',
    },
    {
      tag: 'Vendre en ligne',
      name: 'Site E-commerce',
      price: 'Sur devis',
      description:
        "Ouvrez votre boutique en ligne sans compromis sur l'expérience d'achat. Paiement sécurisé Stripe, catalogue produits illimité, gestion des commandes et des stocks, espace client, emails automatiques. Une boutique que vos clients adorent utiliser.",
      includes: [
        'Boutique illimitée en produits',
        'Paiement Stripe / PayPal sécurisé',
        'Tableau de bord commandes & stocks',
        'Espace client avec suivi livraison',
        'Emails transactionnels automatisés',
        'Formation à la gestion incluse',
      ],
      image: '/assets/images/e-commerce.webp',
    },
    {
      tag: 'Projet complexe',
      name: 'Site Sur-Mesure',
      price: 'Sur devis',
      description:
        "Quand les solutions standards ne suffisent plus. Portail client avec espace membre, extranet B2B, CRM intégré, moteur de réservation, configurateur produit, marketplace — on développe exactement ce que votre métier exige, sans fonctionnalité superflue.",
      includes: [
        'Fonctionnalités métier sur-mesure',
        'Authentification & espace membre',
        'Intégrations API tierces',
        'Tableau de bord administration',
        'Base de données optimisée',
        'Support & évolutions prioritaires',
      ],
      image: '/assets/images/surmesure.webp',
    },
  ]

  const steps = [
    {
      num: '01',
      title: 'Cadrage & Stratégie',
      duration: '1–2 jours',
      text: "On commence par définir ensemble ce que doit accomplir votre site. Objectifs mesurables, cibles précises, périmètre fonctionnel, arborescence des pages. Un brief solide évite les allers-retours coûteux en cours de projet.",
    },
    {
      num: '02',
      title: 'Architecture & Wireframes',
      duration: '2–3 jours',
      text: "Avant de penser couleurs et images, on trace les plans. Wireframes basse-fidélité pour valider la structure et les parcours utilisateurs. C'est ici qu'on décide quoi dire, dans quel ordre, et comment guider le visiteur vers l'action souhaitée.",
    },
    {
      num: '03',
      title: 'Design Haute-Fidélité',
      duration: '3–5 jours',
      text: "Les maquettes finales sous Figma, pixel-perfect, avec toutes les interactions pensées. Vous validez visuellement avant qu'une seule ligne de code soit écrite. Modifications illimitées à ce stade — c'est bien moins cher qu'après développement.",
    },
    {
      num: '04',
      title: 'Développement & Intégration',
      duration: '5–15 jours',
      text: "Code propre, commenté, versionné sur Git. On utilise React / Next.js pour les sites modernes, ou WordPress headless pour les projets nécessitant un CMS accessible. Chaque composant est testé au fil du développement.",
    },
    {
      num: '05',
      title: 'Tests, Mise en ligne & Suivi',
      duration: '2–3 jours',
      text: "Tests cross-browser (Chrome, Safari, Firefox, Edge), cross-device, validation des formulaires, vérification des redirections, test de charge. Mise en ligne soignée avec monitoring. Formation à la gestion du contenu et support 30 jours offert.",
    },
  ]

  const techStack = [
    { name: 'React / Next.js', role: 'Frontend & SSR', note: "pour les sites modernes, SEO-friendly et ultra-performants" },
    { name: 'Tailwind CSS',    role: 'Styles',         note: "utilitaire, cohérent, maintenable sans dette technique" },
    { name: 'Node.js',         role: 'Backend',        note: "API REST légères, webhooks, logique métier serveur" },
    { name: 'PHP / WordPress', role: 'CMS',            note: "quand le client doit gérer son contenu de façon autonome" },
    { name: 'MySQL / Postgres', role: 'Base de données', note: "relationnelle, typée, sauvegardée quotidiennement" },
    { name: 'Stripe / PayPal', role: 'Paiement',       note: "intégrations sécurisées PCI-DSS, webhooks de commandes" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <SEOMeta
        title="Création de sites web à Cannes — Vitrine, E-commerce & Sur-mesure"
        description="Devko Studio crée des sites web professionnels à Cannes : sites vitrine dès 300€, boutiques e-commerce, sites sur-mesure. Design responsive, SEO optimisé, livraison rapide."
        path="/services/sites-web"
      />
      <Navbar />

      {/* ════════════════════════════════════════════════════
          1 — OUVERTURE ÉDITORIALE
      ════════════════════════════════════════════════════ */}
      <section className="pt-36 pb-24 bg-[#FAF9F6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          <motion.div {...fadeLeft(0)} className="flex items-center gap-3 mb-16">
            <div className="w-8 h-px bg-violet-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-500">
              Devko Studio — Création de Sites Web
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_400px] gap-16 lg:gap-24 items-start">

            {/* Gauche */}
            <div>
              <div className="mb-10 space-y-1">
                {[
                  { text: 'Votre site web,', outline: false },
                  { text: 'votre meilleur', outline: false },
                  { text: 'commercial.', outline: true },
                ].map(({ text, outline }, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.h1
                      initial={{ y: '108%' }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.82, delay: 0.08 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
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

              <motion.div
                {...fadeUp(0.44)}
                className="columns-1 md:columns-2 gap-10 text-text-secondary text-[15px] leading-relaxed mb-12"
              >
                <p className="mb-5 break-inside-avoid">
                 Il travaille pendant que vous dormez.
Il répond à vos prospects en quelques secondes.
Il est disponible 24/7, sans pause, sans congés, sans excuses.
Mais un site ne vend pas par magie.
Il doit être pensé pour convaincre, structuré pour guider et optimisé pour convertir.
                </p>
                <p className="break-inside-avoid">
                  Chez Devko Studio, nous concevons des sites qui remplissent une mission claire :
                   générer des appels, transformer les visites en clients et renforcer votre crédibilité.
Pas des sites faits pour impressionner en présentation,
mais des sites qui performent dans les chiffres.
                </p>
              </motion.div>

              <motion.div {...fadeUp(0.56)} className="grid grid-cols-3 gap-0 border-t border-gray-200 pt-8">
                {[
                  { val: '75 %', label: 'de crédibilité', sub: 'jugée sur le seul design web' },
                  { val: '3 sec', label: 'délai max', sub: "avant qu'un visiteur parte" },
                  { val: '+34 %', label: 'de conversions', sub: 'avec une UX optimisée' },
                ].map((s, i) => (
                  <div
                    key={i}
                    className={`${i < 2 ? 'border-r border-gray-200 pr-6' : 'pl-6'} ${i > 0 ? 'pl-6' : ''}`}
                  >
                    <div className="text-2xl lg:text-3xl font-black text-text-primary mb-1">{s.val}</div>
                    <div className="text-xs font-semibold text-text-primary mb-0.5">{s.label}</div>
                    <div className="text-[11px] text-text-secondary">{s.sub}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Droite — Illustration 1 */}
            <motion.div {...fadeRight(0.3)} className="w-full min-w-0 lg:mt-4">
              {/*
                ╔═══════════════════════════════════════════════╗
                ║  ILLUSTRATION 1 — Mockup site web             ║
                ║                                               ║
                ║  Recommandation :                             ║
                ║  Mockup 3D d'un laptop + smartphone posés     ║
                ║  côte à côte, affichant un site fictif        ║
                ║  propre et moderne (pas de lorem ipsum)       ║
                ║  Fond neutre chaud, éclairage de studio       ║
                ║  Style : éditorial, épuré, qualité Apple      ║
                ║  Format : 3:4 portrait                        ║
                ╚═══════════════════════════════════════════════╝
              */}
              <div className="aspect-[4/3] lg:aspect-[2.2/4] rounded-2xl overflow-hidden w-full">
                <img
                  src="/assets/images/mockupsite.webp"
                  alt="Illustration 1"
                  className="w-full h-full object-cover object-center lg:object-[24%_center]"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          2 — NOTRE VISION (sombre, éditorial)
      ════════════════════════════════════════════════════ */}
      <section className="py-28 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          <motion.div {...fadeUp(0)} className="mb-24 pb-20 border-b border-white/8">
            <p className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.2] max-w-5xl">
              "Un site lent perd ses clients.{' '}
              <span className="text-white/35 font-light italic">
                Un site mal conçu perd sa crédibilité. Un site sans SEO reste invisible. On règle les trois."
              </span>
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-10 h-px bg-white/25" />
              <span className="text-white/35 text-xs tracking-widest uppercase">Devko Studio — standard de livraison</span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-16 lg:gap-24 items-center">

            <motion.div {...fadeLeft(0)} className="lg:col-span-2">
              <SectionLabel>Notre approche technique</SectionLabel>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-7 leading-tight">
                Du code propre, pas du code rapide
              </h2>
              <div className="space-y-5 text-white/55 text-sm leading-[1.85]">
                <p>
                  On aurait pu construire des sites avec des constructeurs visuels en quelques heures.
                  On a choisi de ne pas le faire. Parce qu'un site Webflow ou Wix finit toujours par
                  montrer ses limites : performances dégradées, personnalisation impossible, dépendance
                  à un éditeur tiers.
                </p>
                <p>
                  On code à la main, avec React, Next.js et des technologies qui durent. Ça prend
                  plus de temps, ça coûte un peu plus cher, et ça tient dans le temps. Dans 5 ans,
                  votre site fonctionnera encore parfaitement — et vous n'aurez pas besoin de tout
                  recommencer parce que votre constructeur a changé ses conditions tarifaires.
                </p>
                <p>
                  Chaque livraison vient avec le code source complet. Vous êtes propriétaire de votre
                  site, pas locataire. Si vous décidez un jour de changer de prestataire, vous repartez
                  avec tout.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeRight(0.2)} className="lg:col-span-3">
              {/*
                ╔═══════════════════════════════════════════════╗
                ║  ILLUSTRATION 2 — Code / Espace de travail   ║
                ║                                               ║
                ║  Recommandation :                             ║
                ║  Photo sombre d'un écran affichant du code    ║
                ║  propre (VSCode, terminal ouvert)             ║
                ║  Ou : bureau de développeur la nuit avec      ║
                ║  plusieurs écrans, lumière bleue/verte         ║
                ║  Style : moody, technique, sérieux            ║
                ║  Format : 16:9 paysage                        ║
                ╚═══════════════════════════════════════════════╝
              */}
              <div className="aspect-[9.8/9] rounded-2xl overflow-hidden">
                <img
                  src="/assets/images/dev.webp"
                  alt="Illustration 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          3 — LES 4 FONDAMENTAUX
          Grille 2×2, bordures uniquement
      ════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between pb-10 border-b border-gray-100">
            <motion.div {...fadeLeft(0)}>
              <SectionLabel>Ce qu'on garantit</SectionLabel>
              <h2 className="text-4xl lg:text-5xl font-black text-text-primary leading-tight max-w-md">
                Les 4 Fondamentaux de Chaque Site
              </h2>
            </motion.div>
            <motion.p
              {...fadeRight(0.1)}
              className="hidden lg:block text-text-secondary text-sm max-w-xs text-right leading-relaxed mt-4 lg:mt-0"
            >
              Pas des options à cocher en supplément — des standards non-négociables appliqués
              à chaque projet, quelle que soit la formule choisie.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2">
            {fondamentaux.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className={[
                  'p-10 group hover:bg-[#FAF9F6] transition-colors duration-300',
                  i % 2 === 0 ? 'md:border-r border-gray-100' : '',
                  i < 2 ? 'border-b border-gray-100' : '',
                ].join(' ')}
              >
                <div className="flex items-start gap-7">
                  <span className="text-[4.5rem] font-black leading-none text-gray-100 group-hover:text-gray-200 transition-colors select-none flex-shrink-0 mt-1">
                    {item.num}
                  </span>
                  <div className="pt-3">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="text-accent-violet">{item.icon}</div>
                      <h3 className="text-base font-bold text-text-primary">{item.title}</h3>
                    </div>
                    <p className="text-text-secondary text-[13.5px] leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeUp(0.35)}
            className="mt-0 border-l-[3px] border-accent-violet pl-7 py-5 border-t border-r border-b border-gray-100 flex flex-col sm:flex-row sm:items-center gap-5"
          >
            <div className="flex-shrink-0 text-accent-violet">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <p className="text-[13px] text-text-secondary leading-relaxed">
              <strong className="text-text-primary">On vise 95+ sur Google Lighthouse</strong> en performance,
              accessibilité et SEO sur chaque livraison. Ce score est mesuré avant la mise en production et
              documenté dans le rapport de livraison que vous recevez avec votre site.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          4 — CE QU'ON RÉALISE (chalk, alternant)
          Style identique à "Nos Créations" de Branding.jsx
      ════════════════════════════════════════════════════ */}
      <section className="relative py-28 bg-[#1a2332] overflow-hidden">

        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="100" height="100" filter="url(%23noise)" opacity="0.4" /%3E%3C/svg%3E")',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16">

          <motion.div {...fadeUp(0)} className="mb-6">
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white"
              style={{
                fontFamily: '"Permanent Marker", cursive',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                filter: 'brightness(0.95)',
              }}
            >
              Ce qu'on Réalise
            </h2>
          </motion.div>
          <motion.div {...fadeUp(0.1)} className="flex items-center gap-6 mb-20">
            <div className="w-32 h-1 bg-white/55 rounded-full" />
            <p
              className="text-white/55 text-xl"
              style={{ fontFamily: '"Indie Flower", cursive' }}
            >
              trois formats, une seule exigence
            </p>
          </motion.div>

          <div className="space-y-28">
            {siteTypes.map((site, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col lg:flex-row items-center gap-14 lg:gap-20 ${
                  i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Mockup — sans cadre, comme les logos */}
                <div className="flex-shrink-0 w-64 lg:w-80 flex items-center justify-center">
                  {/*
                    ╔════════════════════════════════════════╗
                    ║  ILLUSTRATION SITE {i+1}               ║
                    ║                                        ║
                    ║  {i===0} Site Vitrine :                ║
                    ║  Mockup propre d'un site vitrine        ║
                    ║  artisanat / restaurant / cabinet       ║
                    ║  Sur fond transparent (PNG) ou sombre  ║
                    ║                                        ║
                    ║  {i===1} E-commerce :                  ║
                    ║  Mockup boutique en ligne moderne,     ║
                    ║  page produit visible, panier ouvert   ║
                    ║                                        ║
                    ║  {i===2} Sur-Mesure :                  ║
                    ║  Dashboard ou espace membre complexe,  ║
                    ║  tables de données, graphiques         ║
                    ╚════════════════════════════════════════╝
                  */}
                  <motion.div
                    className="w-full aspect-square rounded-xl overflow-hidden"
                    animate={{ y: [0, -14, 0] }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.6,
                    }}
                  >
                    <img
                      src={site.image}
                      alt={`Mockup ${site.name} — Devko Studio`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>

                {/* Texte */}
                <div className="flex-1 max-w-lg">
                  <div
                    className="flex items-center gap-4 mb-5"
                    style={{ fontFamily: '"Indie Flower", cursive' }}
                  >
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs text-white/70"
                      style={{ border: '1px solid rgba(139,92,246,0.4)', background: 'rgba(139,92,246,0.08)' }}
                    >
                      {site.tag}
                    </span>
                    <span className="text-white/40 text-sm">{site.price}</span>
                  </div>

                  <h3
                    className="text-4xl lg:text-5xl text-white mb-6"
                    style={{
                      fontFamily: '"Permanent Marker", cursive',
                      textShadow: '2px 2px 5px rgba(0,0,0,0.45)',
                      lineHeight: 1.1,
                    }}
                  >
                    {site.name}
                  </h3>

                  <p
                    className="text-white/60 text-lg leading-relaxed mb-7"
                    style={{ fontFamily: '"Indie Flower", cursive' }}
                  >
                    {site.description}
                  </p>

                  {/* Inclus */}
                  <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                    {site.includes.map((item, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-2"
                        style={{ fontFamily: '"Indie Flower", cursive' }}
                      >
                        <div className="w-1 h-1 rounded-full bg-white/40 flex-shrink-0" />
                        <span className="text-white/50 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(0.2)} className="mt-24">
            <svg width="140" height="40" viewBox="0 0 140 40" className="mx-auto opacity-15">
              <path d="M10,20 Q35,6 70,20 Q105,34 130,20" stroke="white" strokeWidth="2" fill="none" strokeDasharray="5,3" />
              <circle cx="10" cy="20" r="3" stroke="white" strokeWidth="1.5" fill="none" />
              <circle cx="130" cy="20" r="3" stroke="white" strokeWidth="1.5" fill="none" />
            </svg>
          </motion.div>

        </div>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Indie+Flower&display=swap');
        `}</style>
      </section>

      {/* ════════════════════════════════════════════════════
          5 — PROCESSUS NARRATIF (sticky illustration)
      ════════════════════════════════════════════════════ */}
      <section className="py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start">

            {/* Illustration sticky */}
            <motion.div {...fadeLeft(0)} className="lg:sticky lg:top-32">
              {/*
                ╔═══════════════════════════════════════════════╗
                ║  ILLUSTRATION 3 — Processus de création       ║
                ║                                               ║
                ║  Option A :                                   ║
                ║  Timeline visuelle du brief à la livraison,  ║
                ║  style infographie premium                    ║
                ║                                               ║
                ║  Option B :                                   ║
                ║  Screenshot Figma d'un wireframe en cours     ║
                ║  avec annotations de design                   ║
                ║                                               ║
                ║  Option C :                                   ║
                ║  Photo d'une réunion client-designer devant   ║
                ║  des maquettes imprimées                      ║
                ║  Format : 1:1 carré                           ║
                ╚═══════════════════════════════════════════════╝
              */}
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/assets/images/data2.webp"
                  alt="Illustration 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-8 pl-1">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">
                  Délai moyen
                </p>
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-black text-text-primary">3</span>
                  <span className="text-xl font-semibold text-text-secondary mb-2">semaines</span>
                </div>
                <p className="text-xs text-text-secondary mt-2 leading-relaxed max-w-xs">
                  Pour un site vitrine standard. E-commerce : 5–7 semaines. Sur-mesure : selon périmètre,
                  estimé lors du cadrage.
                </p>
              </div>
            </motion.div>

            {/* Étapes */}
            <div>
              <motion.div {...fadeRight(0)}>
                <SectionLabel>Comment on travaille</SectionLabel>
                <h2 className="text-4xl font-black text-text-primary mb-12 leading-[1.1]">
                  Cinq étapes,{' '}
                  <span className="font-light italic text-text-secondary">zéro surprise.</span>
                </h2>
              </motion.div>

              <div className="relative">
                <div className="absolute left-5 top-6 bottom-6 w-px bg-gray-200 hidden md:block" />
                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    {...fadeUp(i * 0.12)}
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

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          6 — TECHNOLOGIES (sobre, liste éditoriale)
      ════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          <div className="grid lg:grid-cols-2 gap-20 items-start">

            <motion.div {...fadeLeft(0)}>
              <SectionLabel>Sous le capot</SectionLabel>
              <h2 className="text-4xl lg:text-5xl font-black text-text-primary leading-tight mb-7">
                On choisit nos outils avec soin,{' '}
                <span className="font-light italic text-text-secondary">pas par habitude.</span>
              </h2>
              <p className="text-text-secondary text-[15px] leading-relaxed mb-10 max-w-lg">
                Chaque technologie a été choisie pour une raison précise : durabilité, performance,
                maintenabilité. On n'utilise pas de frameworks tendance qui seront abandonnés dans
                dix-huit mois. On utilise des outils stables, documentés et largement supportés.
              </p>

              {/* Stack list */}
              <div className="space-y-0">
                {techStack.map((tech, i) => (
                  <motion.div
                    key={i}
                    {...fadeUp(i * 0.07)}
                    className="flex items-start gap-6 py-5 border-b border-gray-100 last:border-0 group"
                  >
                    <div className="flex-shrink-0 w-32">
                      <span className="text-sm font-bold text-text-primary">{tech.name}</span>
                    </div>
                    <div className="flex-1">
                      <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-accent-violet bg-accent-violet/8 px-2 py-0.5 rounded mb-1">
                        {tech.role}
                      </span>
                      <p className="text-text-secondary text-[13px] leading-relaxed">{tech.note}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Droite — Illustration 4 */}
            <motion.div {...fadeRight(0.15)} className="lg:sticky lg:top-32">
              {/*
                ╔═══════════════════════════════════════════════╗
                ║  ILLUSTRATION 4 — Stack technique             ║
                ║                                               ║
                ║  Recommandation :                             ║
                ║  Composition flat design ou isométrique       ║
                ║  montrant les logos des technos empilés /     ║
                ║  connectés par des lignes (React → Next.js    ║
                ║  → Tailwind → Node.js → PostgreSQL)           ║
                ║  Style : illustration vectorielle propre,     ║
                ║  palette sombre ou neutre                     ║
                ║  Format : 1:1 ou 4:5                         ║
                ╚═══════════════════════════════════════════════╝
              */}
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/assets/images/data.webp"
                  alt="Illustration 4"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '40% center' }}
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          7 — CTA ÉDITORIAL
      ════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-start">

            <motion.div {...fadeLeft(0)}>
              <SectionLabel>On commence ?</SectionLabel>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-text-primary leading-[1.05] mb-7">
                Un site qui{' '}
                <span
                  className="italic"
                  style={{ WebkitTextStroke: '2.5px #8B5CF6', color: 'transparent' }}
                >
                  convertit.
                </span>
              </h2>
              <p className="text-text-secondary text-[15px] leading-relaxed mb-10 max-w-lg">
                On démarre chaque nouveau projet par un appel de cadrage gratuit — 30 minutes pour
                comprendre vos objectifs et évaluer ensemble si on est le bon partenaire. Pas de
                promesses vagues, pas de devis envoyé sans avoir parlé. Juste une conversation
                honnête sur ce que votre projet nécessite vraiment.
              </p>
              <motion.a
                href="/#contact"
                whileHover={{ x: 7 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 text-text-primary font-bold text-lg border-b-2 border-text-primary pb-1 hover:border-accent-violet hover:text-accent-violet transition-colors duration-200"
              >
                Parler de mon projet
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>

            <motion.div {...fadeRight(0.15)} className="bg-[#FAF9F6] rounded-2xl p-9 border border-gray-100">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
                Inclus dans chaque projet
              </p>
              <div className="space-y-4">
                {[
                  "Appel de cadrage (30 min, offert)",
                  "Maquettes Figma avant développement",
                  "Code source versionné sur Git",
                  "Rapport Lighthouse à la livraison",
                  "Optimisation SEO technique incluse",
                  "Tests cross-browser & cross-device",
                  "Formation à la gestion du contenu",
                  "Support 30 jours après mise en ligne",
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
