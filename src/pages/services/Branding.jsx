import { motion } from 'framer-motion'
import { useEffect } from 'react'
import SEOMeta from '../../components/SEOMeta'
import SectionLabel from '../../components/SectionLabel'
import { fadeUp, fadeLeft, fadeRight } from '../../utils/animations'
import Navbar from '../../components/Navbar'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

/* ═══════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════ */
export default function Branding() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const logos = [
    {
      name: 'Flash Market',
      category: 'Commerce alimentaire',
      year: '2024',
      image: '/assets/images/flashmarket.webp',
      imgSize: 'w-40 h-40 lg:w-52 lg:h-52',
      description:
        "Pour Flash Market, on a construit une identité ancrée dans l'authenticité du marché provençal. Des formes organiques, des verts doux issus du maraîchage et une typographie humaniste racontent l'histoire d'une épicerie qui respecte ses producteurs autant que ses clients. Un logo qui sent bon la salade fraîche.",
    },
    {
      name: 'Barber Street',
      category: 'Salon de coiffure premium',
      year: '2024',
      image: '/assets/images/barberstreet.webp',
      description:
        "L'élégance masculine comme philosophie de travail. Traits nets, noir profond, détails dorés discrets — Barber Street devait inspirer confiance dès la vitrine, avant même que la porte soit ouverte. Un logo intemporel pour un établissement qui durera vingt ans.",
    },
    {
      name: 'Zeneat',
      category: 'Livraison de repas équilibrés',
      year: '2023',
      image: '/assets/images/zeneat.webp',
      description:
        "Zen dans la forme, vivant dans la couleur. Zeneat livre l'équilibre à domicile — son identité devait le montrer avant le premier clic. Courbes douces inspirées du bol, palette végétale saturée avec parcimonie. Une marque qui respire et donne envie de manger.",
    },
  ]

  const anatomy = [
    {
      num: '01',
      title: 'Le Logo & ses déclinaisons',
      text: "Bien plus qu'un symbole, le logo est le pilier de toute identité. On le conçoit adaptable : version principale, monochrome, icône seule, version compacte pour favicon. Il doit fonctionner sur la façade d'un commerce comme sur l'écran d'une Apple Watch.",
    },
    {
      num: '02',
      title: 'La Palette Chromatique',
      text: "Les couleurs parlent avant les mots. Un bleu nuit inspire la confiance. Un rouge vif stimule l'envie d'achat. Un vert sauge évoque le naturel. On choisit chaque teinte avec intention, en construisant un système modulable avec couleurs primaires, secondaires et neutres.",
    },
    {
      num: '03',
      title: 'La Typographie',
      text: "Chaque marque a sa voix typographique. On sélectionne des fontes qui reflètent votre personnalité : moderne ou classique, technique ou chaleureuse. La hiérarchie est pensée jusqu'au corps 10 : titre, intertitre, corps, légende, call-to-action.",
    },
    {
      num: '04',
      title: 'Les Supports & Déclinaisons',
      text: "L'identité prend vie sur des supports concrets : carte de visite, papier en-tête, packaging, profils réseaux sociaux, signalétique, devis, factures. On pense chaque déclinaison pour qu'elle reste immédiatement reconnaissable, du grand format à la signature mail.",
    },
  ]

  const steps = [
    {
      num: '01',
      title: 'Immersion & Brief',
      duration: '1–2 jours',
      text: "Tout commence par une conversation approfondie. Qui êtes-vous, qui sont vos clients, qui sont vos concurrents directs et indirects, où voulez-vous aller dans 3 ans ? On pose beaucoup de questions — certaines vous surprendront. Ce brief est la base de tout ce qui suit, sans exception.",
    },
    {
      num: '02',
      title: 'Exploration créative',
      duration: '5–7 jours',
      text: "Deux à trois directions créatives distinctes sont développées et présentées. Pas des variantes minimes — de vraies alternatives, chacune portant un point de vue différent sur votre marque. Vous choisissez celle qui résonne, on explique les choix de chaque direction.",
    },
    {
      num: '03',
      title: 'Affinage & Livraison',
      duration: '3–5 jours',
      text: "La direction retenue est affinée jusqu'à la perfection. On développe ensuite le système complet : palette définitive, sélection typographique, déclinaisons. Livraison en fichiers sources (AI, SVG, PNG fond transparent) et charte graphique PDF imprimable.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <SEOMeta
        title="Branding & Identité visuelle à Cannes — Logo, Charte graphique"
        description="Devko Studio crée votre identité de marque à Cannes : logo professionnel, charte graphique, supports print & digital. Un branding cohérent qui marque les esprits."
        path="/services/branding"
      />
      <Navbar />

      {/* ════════════════════════════════════════════════
          1 — OUVERTURE ÉDITORIALE
          Pas de hero. On entre directement dans la matière.
      ════════════════════════════════════════════════ */}
      <section className="pt-36 pb-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          {/* Breadcrumb minimaliste */}
          <motion.div {...fadeLeft(0)} className="flex items-center gap-3 mb-16">
            <div className="w-8 h-px bg-violet-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-500">
              Devko Studio — Branding & Identité Visuelle
            </span>
          </motion.div>

          {/* Grille principale */}
          <div className="grid lg:grid-cols-[1fr_420px] gap-16 lg:gap-24 items-start">

            {/* Gauche : Titre éditorial + texte */}
            <div>
              {/* Titre — mix gras / outline */}
              <div className="mb-10 space-y-1">
                {[
                  { text: "L'Identité", outline: false },
                  { text: 'Visuelle,', outline: false },
                  { text: "c'est tout.", outline: true },
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

              {/* Corps de texte — 2 colonnes éditoriales */}
              <motion.div
                {...fadeUp(0.42)}
                className="columns-1 md:columns-2 gap-10 text-text-secondary text-[15px] leading-relaxed mb-12"
              >
                <p className="mb-5 break-inside-avoid">
                  Avant que vos clients lisent un seul mot sur votre site, votre logo a déjà parlé. Avant
                  qu'ils découvrent vos tarifs, vos couleurs ont posé une impression. Le branding,
                  c'est cette conversation silencieuse que votre marque mène en permanence — avec ou
                  sans vous.
                </p>
                <p className="break-inside-avoid">
                  Chez Devko Studio, on construit des identités visuelles pour des entreprises qui
                  veulent être mémorables. Pas seulement belles — mémorables. Reconnaissables à un coup
                  d'œil dans un fil Instagram, sur un panneau en bord de route, sur un emballage au fond
                  d'un rayon.
                </p>
              </motion.div>

              {/* Stats en ligne — sans cadre, séparés par des traits */}
              <motion.div {...fadeUp(0.55)} className="grid grid-cols-3 gap-0 border-t border-gray-200 pt-8">
                {[
                  { val: '+33 %', label: 'de revenus', sub: 'branding cohérent' },
                  { val: '80 %', label: 'reconnaissance', sub: 'marque forte' },
                  { val: '7 sec', label: '1ère impression', sub: 'visuelle seulement' },
                ].map((s, i) => (
                  <div key={i} className={`${i < 2 ? 'border-r border-gray-200 pr-6' : 'pl-6'} ${i > 0 ? 'pl-6' : ''}`}>
                    <div className="text-2xl lg:text-3xl font-black text-text-primary mb-1">{s.val}</div>
                    <div className="text-xs font-semibold text-text-primary mb-0.5">{s.label}</div>
                    <div className="text-[11px] text-text-secondary">{s.sub}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Droite : Placeholder illustration 1 */}
            <motion.div {...fadeRight(0.3)} className="lg:mt-4">
              {/*
                ╔══════════════════════════════════════════════╗
                ║  ILLUSTRATION 1 — Flat-lay identité          ║
                ║                                              ║
                ║  Recommandation :                            ║
                ║  Photo lifestyle haute qualité d'une         ║
                ║  identité de marque posée sur une table       ║
                ║  en bois clair :                             ║
                ║  - Carte de visite en angle                  ║
                ║  - Nuancier Pantone ouvert                   ║
                ║  - Carnet avec logo imprimé                  ║
                ║  - Mockup téléphone en arrière-plan          ║
                ║  Éclairage naturel, style éditorial          ║
                ║  Format : 3:4 portrait                       ║
                ╚══════════════════════════════════════════════╝
              */}
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src="/assets/images/illustration1.webp"
                  alt="Maquette identité visuelle"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          2 — NOTRE VISION (section sombre, éditoriale)
      ════════════════════════════════════════════════ */}
      <section className="py-28 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          {/* Citation grande — style magazine */}
          <motion.div {...fadeUp(0)} className="mb-24 pb-20 border-b border-white/8">
            <p className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.2] max-w-5xl">
              "Nous ne dessinons pas des logos.{' '}
              <span className="text-white/35 font-light italic">
                Nous construisons des langages visuels qui parlent pour vous, même quand vous n'êtes pas là."
              </span>
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-10 h-px bg-white/25" />
              <span className="text-white/35 text-xs tracking-widest uppercase">Devko Studio — philosophie créative</span>
            </div>
          </motion.div>

          {/* 2 colonnes : texte + illustration */}
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-24 items-center">

            {/* Texte : 2/5 */}
            <motion.div {...fadeLeft(0)} className="lg:col-span-2">
              <SectionLabel>Notre approche</SectionLabel>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-7 leading-tight">
                Basés à Cannes, au croisement de la création et de la stratégie
              </h2>
              <div className="space-y-5 text-white/55 text-sm leading-[1.85]">
                <p>
                  Devko Studio est né d'une conviction simple : les petites et moyennes entreprises
                  méritent des identités visuelles aussi fortes que les grandes marques. Pendant trop
                  longtemps, le branding professionnel a été réservé à ceux qui pouvaient se payer des
                  agences de cinquante personnes à Paris.
                </p>
                <p>
                  En restant une équipe resserrée et directement impliquée dans chaque projet, on offre
                  un niveau d'attention que les grandes structures ne peuvent plus se permettre. Vous
                  parlez à la personne qui dessine.
                </p>
                <p>
                  Chaque identité démarre par une phase d'écoute profonde : votre histoire, vos clients,
                  vos concurrents, vos ambitions à 5 ans. On ne démarre jamais une esquisse avant de
                  comprendre pour qui on travaille vraiment.
                </p>
              </div>
            </motion.div>

            {/* Illustration : 3/5 */}
            <motion.div {...fadeRight(0.2)} className="lg:col-span-3">
              {/*
                ╔══════════════════════════════════════════════╗
                ║  ILLUSTRATION 2 — Atelier créatif            ║
                ║                                              ║
                ║  Recommandation :                            ║
                ║  Photo en noir et blanc ou désaturée :       ║
                ║  - Mains d'un designer qui esquisse un logo  ║
                ║  - Feuilles de papier avec esquisses         ║
                ║  - Nuancier Pantone + réglette               ║
                ║  - Ambiance atelier, craft, sérieux          ║
                ║  Style : contraste élevé, moody, lumineux    ║
                ║  Format : 16:9 paysage                       ║
                ╚══════════════════════════════════════════════╝
              */}
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src="/assets/images/atelier.webp"
                  alt="Maquette identité visuelle"
                  className="w-full h-full object-cover scale-100"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          3 — ANATOMIE D'UNE IDENTITÉ
          Grille 2×2 avec séparateurs seulement
      ════════════════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          {/* Header section */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-0 pb-10 border-b border-gray-100">
            <motion.div {...fadeLeft(0)}>
              <SectionLabel>Ce qu'on livre</SectionLabel>
              <h2 className="text-4xl lg:text-5xl font-black text-text-primary leading-tight max-w-md">
                Anatomie d'une Identité Complète
              </h2>
            </motion.div>
            <motion.p {...fadeRight(0.1)} className="hidden lg:block text-text-secondary text-sm max-w-xs text-right leading-relaxed mt-4 lg:mt-0">
              Une identité ne se limite pas à un logo. C'est un système pensé pour fonctionner sur tous
              vos supports, aujourd'hui et dans dix ans.
            </motion.p>
          </div>

          {/* Grille 2×2 — bordures uniquement, zéro ombre */}
          <div className="grid md:grid-cols-2">
            {anatomy.map((item, i) => (
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
                    <h3 className="text-base font-bold text-text-primary mb-3">{item.title}</h3>
                    <p className="text-text-secondary text-[13.5px] leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Note de bas de section — style règle marquée */}
          <motion.div
            {...fadeUp(0.35)}
            className="mt-0 border-l-[3px] border-accent-violet pl-7 py-5 border-t border-r border-b border-gray-100 flex flex-col sm:flex-row sm:items-center gap-5"
          >
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-accent-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-[13px] text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Tout est livré en fichiers sources ouverts.</strong>{' '}
              AI, SVG, PNG fond transparent et PDF pour chaque élément. La charte graphique complète est livrée
              au format PDF prêt à l'emploi — vous pouvez l'envoyer directement à vos prestataires imprimeurs
              ou web sans intermédiaire.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════
          4 — PROCESSUS NARRATIF
          Layout sticky-scroll : illustration fixe + étapes qui défilent
      ════════════════════════════════════════════════ */}
      <section className="py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start">

            {/* Illustration sticky */}
            <motion.div {...fadeLeft(0)} className="lg:sticky lg:top-32">
              {/*
                ╔══════════════════════════════════════════════╗
                ║  ILLUSTRATION 3 — Processus / Before–After  ║
                ║                                              ║
                ║  Option A :                                  ║
                ║  Screenshot propre d'un fichier Figma /      ║
                ║  Illustrator en cours de travail sur un logo ║
                ║                                              ║
                ║  Option B :                                  ║
                ║  Diptyque avant/après : une identité         ║
                ║  générique à gauche, l'identité refaite      ║
                ║  à droite — même entreprise, deux mondes     ║
                ║                                              ║
                ║  Option C :                                  ║
                ║  Moodboard d'inspiration : typographies,     ║
                ║  couleurs, références visuelles              ║
                ║  Format : 1:1 carré                          ║
                ╚══════════════════════════════════════════════╝
              */}
              <div className="aspect-square rounded-2xl overflow-hidden bg-white flex items-center justify-center p-6">
                <img
                  src="/assets/images/maquette.webp"
                  alt="Maquette identité visuelle"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Texte sous l'illustration */}
              <div className="mt-8 pl-1">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">Délai moyen</p>
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-black text-text-primary">10</span>
                  <span className="text-xl font-semibold text-text-secondary mb-2">jours ouvrés</span>
                </div>
                <p className="text-xs text-text-secondary mt-2 leading-relaxed max-w-xs">
                  Du brief initial à la livraison des fichiers finaux. Délai indicatif selon la complexité du projet.
                </p>
              </div>
            </motion.div>

            {/* Étapes */}
            <div>
              <motion.div {...fadeRight(0)}>
                <SectionLabel>Comment on travaille</SectionLabel>
                <h2 className="text-4xl font-black text-text-primary mb-12 leading-[1.1]">
                  Un processus rigoureux,{' '}
                  <span className="font-light italic text-text-secondary">sans rigidité.</span>
                </h2>
              </motion.div>

              <div className="relative">
                {/* Ligne verticale de connexion */}
                <div className="absolute left-5 top-6 bottom-6 w-px bg-gray-200 hidden md:block" />

                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    {...fadeUp(i * 0.15)}
                    className="relative flex gap-8 py-9 border-b border-gray-100 last:border-0"
                  >
                    {/* Bulle numérotée */}
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

      {/* ════════════════════════════════════════════════
          5 — NOS CRÉATIONS
          Style tableau à craie — logos sans cadre, texte à côté
      ════════════════════════════════════════════════ */}
      <section className="relative py-28 bg-[#1a2332] overflow-hidden">

        {/* Texture tableau noir — identique à Services.jsx */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="100" height="100" filter="url(%23noise)" opacity="0.4" /%3E%3C/svg%3E")',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16">

          {/* Titre craie — identique à Services.jsx */}
          <motion.div {...fadeUp(0)} className="mb-6">
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white"
              style={{
                fontFamily: '"Permanent Marker", cursive',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                filter: 'brightness(0.95)',
              }}
            >
              Nos Créations
            </h2>
          </motion.div>
          <motion.div {...fadeUp(0.1)} className="flex items-center gap-6 mb-20">
            
            <p
              className="text-white/55 text-xl"
              style={{ fontFamily: '"Indie Flower", cursive' }}
            >
              quelques logos qu'on a construits ..
            </p>
          </motion.div>

          {/* Logos — alternés gauche/droite, sans cadre */}
          <div className="space-y-28">
            {logos.map((logo, i) => (
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
                {/* Logo — image brute, zéro cadre */}
                <div className="flex-shrink-0 w-56 h-56 lg:w-72 lg:h-72 flex items-center justify-center">
                  <motion.img
                    src={logo.image}
                    alt={`Logo ${logo.name}`}
                    className={`object-contain ${logo.imgSize ?? 'max-w-full max-h-full'}`}
                    style={{ filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.35))' }}
                    animate={{ y: [0, -14, 0] }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.6,
                    }}
                  />
                </div>

                {/* Texte */}
                <div className="flex-1 max-w-lg">
                  <div
                    className="flex items-center gap-4 mb-5"
                    style={{ fontFamily: '"Indie Flower", cursive' }}
                  >
                    <span className="text-white/35 text-sm">{logo.year}</span>
                    <div className="w-3 h-px bg-white/20" />
                    <span className="text-white/50 text-sm">{logo.category}</span>
                  </div>

                  <h3
                    className="text-4xl lg:text-5xl text-white mb-6"
                    style={{
                      fontFamily: '"Permanent Marker", cursive',
                      textShadow: '2px 2px 5px rgba(0,0,0,0.45)',
                      lineHeight: 1.1,
                    }}
                  >
                    {logo.name}
                  </h3>

                  <p
                    className="text-white/60 text-lg leading-relaxed"
                    style={{ fontFamily: '"Indie Flower", cursive' }}
                  >
                    {logo.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Séparateur bas */}
          <motion.div {...fadeUp(0.2)} className="mt-24">
            <svg width="140" height="40" viewBox="0 0 140 40" className="mx-auto opacity-15">
              <path d="M10,20 Q35,6 70,20 Q105,34 130,20" stroke="white" strokeWidth="2" fill="none" strokeDasharray="5,3" />
              <circle cx="10"  cy="20" r="3" stroke="white" strokeWidth="1.5" fill="none" />
              <circle cx="130" cy="20" r="3" stroke="white" strokeWidth="1.5" fill="none" />
            </svg>
          </motion.div>

        </div>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Indie+Flower&display=swap');
        `}</style>
      </section>

      {/* ════════════════════════════════════════════════
          6 — CTA ÉDITORIAL (sobre, pas de gros bouton)
      ════════════════════════════════════════════════ */}
      <section className="py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-start">

            {/* Gauche */}
            <motion.div {...fadeLeft(0)}>
              <SectionLabel>On commence ?</SectionLabel>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-text-primary leading-[1.05] mb-7">
                Votre marque mérite<br />
                d'être{' '}
                <span
                  className="italic"
                  style={{ WebkitTextStroke: '2.5px #8B5CF6', color: 'transparent' }}
                >
                  inoubliable.
                </span>
              </h2>
              <p className="text-text-secondary text-[15px] leading-relaxed mb-10 max-w-lg">
                Chaque projet commence par un échange gratuit et sans engagement. On prend le temps de
                comprendre avant de proposer. Et si on pense ne pas être le bon partenaire pour vous,
                on vous le dira honnêtement — c'est plus utile pour tout le monde.
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

            {/* Droite — Checklist sobre */}
            <motion.div {...fadeRight(0.15)} className="bg-[#FAF9F6] rounded-2xl p-9 border border-gray-100">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
                Inclus dans chaque projet
              </p>
              <div className="space-y-4">
                {[
                  'Appel de découverte (30 min, offert)',
                  'Brief créatif approfondi',
                  '2 à 3 directions créatives distinctes',
                  "Révisions jusqu'à satisfaction",
                  'Fichiers sources ouverts (AI, SVG, PNG)',
                  'Charte graphique PDF complète',
                  'Support 30 jours après livraison',
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
