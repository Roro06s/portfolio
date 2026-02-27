import { motion } from 'framer-motion'
import { useEffect } from 'react'
import SEOMeta from '../../components/SEOMeta'
import { fadeUp, fadeLeft, fadeRight } from '../../utils/animations'
import Navbar from '../../components/Navbar'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

/* ── Composants partagés ─────────────────────────────────────── */
function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-6 h-px bg-indigo-700" />
      <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-600">
        {children}
      </span>
    </div>
  )
}

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

/* ── Screenshot app avec barre navigateur ───────────────────── */
function AppScreenshot({ src, alt, link }) {
  const Wrapper = link && link !== '#' ? motion.a : motion.div
  const wrapperProps = link && link !== '#'
    ? { href: link, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Wrapper
      {...wrapperProps}
      whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
      className="block w-full rounded-xl overflow-hidden cursor-pointer"
      style={{ boxShadow: '0 16px 48px rgba(0,0,0,0.45)' }}
    >
      {/* Fausse barre de navigateur */}
      <div
        className="flex items-center gap-2 px-3 py-2"
        style={{ background: 'rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
        </div>
        {link && link !== '#' && (
          <div
            className="flex-1 mx-3 px-3 py-0.5 rounded text-[10px] text-white/30 truncate"
            style={{ background: 'rgba(255,255,255,0.05)', fontFamily: '"Indie Flower", cursive' }}
          >
            {link.replace('https://', '')}
          </div>
        )}
      </div>
      <img
        src={src}
        alt={alt}
        className="w-full object-cover object-top"
        style={{ maxHeight: '260px' }}
      />
    </Wrapper>
  )
}

/* ═══════════════════════════════════════════════════════════════
   PAGE APPLICATIONS WEB
═══════════════════════════════════════════════════════════════ */
export default function ApplicationsWeb() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const fondamentaux = [
    {
      num: '01',
      title: 'Architecture & Base de données',
      text: "La solidité d'une application tient à ses fondations. On modélise votre base de données avant d'écrire une ligne de code : relations entre entités, index, contraintes d'intégrité. Une architecture pensée dès le départ évite 90 % des problèmes de performance à l'échelle.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
    },
    {
      num: '02',
      title: "Authentification & Gestion des rôles",
      text: "Vos données sont sensibles. On implémente des systèmes d'authentification robustes (JWT, sessions sécurisées, OAuth) avec une gestion fine des rôles et permissions. Chaque utilisateur accède exactement à ce qu'il doit voir — ni plus, ni moins.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      num: '03',
      title: 'Tableaux de bord & Analytics',
      text: "Les données que vous collectez doivent vous parler. On conçoit des interfaces d'administration claires avec graphiques temps réel, exports CSV, filtres avancés et KPIs pertinents. Décider sur données réelles plutôt que sur intuition — c'est ça le vrai avantage concurrentiel.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      num: '04',
      title: 'APIs & Intégrations tierces',
      text: "Votre application ne vit pas en isolation. On développe des APIs RESTful documentées pour connecter vos outils existants : CRM, ERP, passerelles de paiement, services de notification, outils marketing. Les données circulent là où elles doivent circuler, automatiquement.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  const projects = [
    {
      name: 'Barber Street',
      category: 'Application de gestion',
      year: '2024',
      tags: ['PHP', 'MySQL', 'JavaScript'],
      link: 'https://barberstreet-mode83.alwaysdata.net/',
      image: '/assets/images/bbst.webp',
      description:
        "Barber Street avait un problème simple et coûteux : gérer les réservations, les clients et les statistiques de fréquentation depuis trois outils différents. On a développé une application unifiée qui centralise tout — planning en temps réel, fiches clients, caisse, et tableaux de bord. Résultat : une heure gagnée par jour et zéro double-réservation.",
    },
    {
      name: 'Dashboard Agence Imperial',
      category: 'Interface d\'administration',
      year: '2025',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      link: '#',
      image: '/assets/images/imperial.webp',
      description:
        "Un tableau de bord interne conçu pour l'agence Imperial : suivi des projets clients, gestion des ressources, analytics de performance et reporting automatisé. Douze modules interconnectés, une interface pensée pour être utilisée plusieurs heures par jour sans fatigue cognitive. Les réunions de suivi ont été divisées par deux.",
    },
  ]

  const useCases = [
    {
      num: '01',
      title: 'CRM & Gestion Client',
      text: "Centralisez l'historique de vos clients, suivez vos interactions, automatisez vos relances. Fini les informations perdues dans des fils de mails ou des tableurs partagés.",
    },
    {
      num: '02',
      title: 'Plateforme SaaS',
      text: "Applications multi-tenants avec gestion d'abonnements, facturation Stripe automatique, onboarding utilisateurs et tableau de bord par compte. Votre produit numérique, de l'idée au lancement.",
    },
    {
      num: '03',
      title: 'Outil Métier Interne',
      text: "Automatiser la saisie, centraliser les devis, gérer les plannings, suivre les stocks — tout ce qui prend du temps sans créer de valeur peut être automatisé. On construit exactement l'outil qu'il vous faut.",
    },
    {
      num: '04',
      title: 'Portail Client',
      text: "Offrez à vos clients un espace sécurisé pour accéder à leurs documents, suivre l'avancement de leurs commandes, télécharger leurs factures et vous contacter. La qualité perçue monte instantanément.",
    },
    {
      num: '05',
      title: 'Marketplace & Mise en relation',
      text: "Plateforme de mise en relation entre prestataires et clients, avec profils, avis, messagerie intégrée et paiement sécurisé. Un écosystème complet géré depuis un seul tableau de bord.",
    },
    {
      num: '06',
      title: 'Système de Réservation',
      text: "Planning en temps réel, gestion des disponibilités, confirmation automatique par email ou SMS, paiement d'arrhes en ligne. Pour les salons, cabinets, restaurants, prestataires de services.",
    },
  ]

  const steps = [
    {
      num: '01',
      title: 'Audit & Cahier des charges',
      duration: '2–3 jours',
      text: "On cartographie vos processus actuels : ce qui fonctionne, ce qui bloque, ce qui coûte du temps. Le cahier des charges fonctionnel qui en résulte liste chaque fonctionnalité avec sa priorité, ses règles métier et ses cas limites — avant qu'un développeur soit sollicité.",
    },
    {
      num: '02',
      title: 'Architecture technique',
      duration: '2–3 jours',
      text: "Choix de la stack, modélisation de la base de données, définition des APIs, découpage en modules. On documente les décisions d'architecture et leurs justifications. Vous savez exactement ce qu'on va construire et pourquoi.",
    },
    {
      num: '03',
      title: 'Développement backend',
      duration: '7–21 jours',
      text: "Construction de la logique métier : APIs, gestion des données, authentification, règles de validation, jobs planifiés, envois de notifications. Le backend est développé en TDD : chaque endpoint est testé avant d'être intégré.",
    },
    {
      num: '04',
      title: 'Interface utilisateur',
      duration: '5–14 jours',
      text: "Design et développement des écrans depuis les maquettes Figma validées. Composants réutilisables, état global de l'application, gestion des erreurs et états de chargement. Une interface que vos équipes utilisent sans formation.",
    },
    {
      num: '05',
      title: 'Tests, déploiement & formation',
      duration: '3–5 jours',
      text: "Tests de bout en bout, tests de charge, validation des règles métier avec les futurs utilisateurs. Déploiement en environnement de staging puis production. Formation des administrateurs et des utilisateurs finaux. Documentation technique livrée.",
    },
  ]

  const techStack = [
    { name: 'React / Next.js',    role: 'Frontend',        note: "interfaces réactives, SSR pour le SEO, composants réutilisables à l'échelle" },
    { name: 'Node.js / Express',  role: 'Backend JS',      note: "APIs REST performantes, WebSockets pour le temps réel, microservices" },
    { name: 'PHP / Laravel',      role: 'Backend PHP',     note: "pour les projets nécessitant un CMS ou une intégration WordPress existante" },
    { name: 'PostgreSQL / MySQL', role: 'Base de données', note: "relationnelle, typée, sauvegardée quotidiennement, répliquée en production" },
    { name: 'Redis',              role: 'Cache & Sessions', note: "mise en cache des requêtes coûteuses, sessions distribuées, jobs en file d'attente" },
    { name: 'Stripe / PayPal',    role: 'Paiement',        note: "intégrations PCI-DSS, abonnements, factures automatiques, webhooks" },
    { name: 'AWS / Vercel / OVH', role: 'Infrastructure',  note: "hébergement scalable, CDN global, certificats SSL, monitoring 24/7" },
    { name: 'Docker / Git',       role: 'DevOps',          note: "environnements reproductibles, déploiements continus, versionning propre" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <SEOMeta
        title="Développement d'applications web à Cannes — React, Node.js, API"
        description="Devko Studio développe vos applications web sur-mesure à Cannes : SaaS, tableaux de bord, plateformes métier, API REST. Stack moderne React & Node.js, livraison itérative."
        path="/services/applications-web"
      />
      <Navbar />

      {/* ════════════════════════════════════════════════════
          1 — OUVERTURE ÉDITORIALE
      ════════════════════════════════════════════════════ */}
      <section className="pt-36 pb-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          <motion.div {...fadeLeft(0)} className="flex items-center gap-3 mb-16">
            <div className="w-8 h-px bg-violet-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-500">
              Devko Studio — Applications Web Sur-Mesure
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_400px] gap-16 lg:gap-24 items-start">

            {/* Gauche */}
            <div>
              <div className="mb-10 space-y-1">
                {[
                  { text: 'Votre métier,', outline: false },
                  { text: 'votre outil,', outline: false },
                  { text: 'sur-mesure.', outline: true },
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
                  Excel a ses limites. Les outils génériques ont les leurs. À un moment, votre activité
                  devient trop spécifique pour entrer dans une case prédéfinie — et vous passez votre
                  temps à contourner ce que votre logiciel ne sait pas faire plutôt qu'à travailler.
                </p>
                <p className="break-inside-avoid">
                  Une application sur-mesure, c'est l'inverse : un outil conçu exactement pour ce que
                  vous faites, rien de plus, rien de moins. Pas de fonctionnalités inutiles. Pas de
                  workflows qui ne correspondent pas à votre réalité. Juste le bon outil pour le bon travail.
                </p>
              </motion.div>

              <motion.div {...fadeUp(0.56)} className="grid grid-cols-3 gap-0 border-t border-gray-200 pt-8">
                {[
                  { val: '−60 %', label: 'de tâches répétitives', sub: 'automatisées dès le premier mois' },
                  { val: '3×',    label: 'plus efficace',          sub: "qu'un outil générique mal adapté" },
                  { val: '100 %', label: 'votre propriété',        sub: 'code source livré, sans dépendance' },
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
            <motion.div {...fadeRight(0.3)} className="lg:mt-4">
              {/*
                ╔═══════════════════════════════════════════════╗
                ║  ILLUSTRATION 1 — Interface d'application     ║
                ║                                               ║
                ║  Recommandation :                             ║
                ║  Mockup d'un tableau de bord / dashboard      ║
                ║  sur écran laptop ou tablette                 ║
                ║  Graphiques, tableaux, KPIs visibles          ║
                ║  Style : sombre ou neutre, éditorial          ║
                ║  Ou : photo d'une équipe qui utilise          ║
                ║  une application métier sur grand écran       ║
                ║  Format : 3:4 portrait                        ║
                ╚═══════════════════════════════════════════════╝
              */}
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src="/assets/images/dashb.webp"
                  alt="Illustration 1"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '40% center' }}
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          2 — VISION (sombre, éditorial)
      ════════════════════════════════════════════════════ */}
      <section className="py-28 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          <motion.div {...fadeUp(0)} className="mb-24 pb-20 border-b border-white/8">
            <p className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.2] max-w-5xl">
              "On ne développe pas des applications.{' '}
              <span className="text-white/35 font-light italic">
                On automatise ce qui vous coûte du temps, on structure ce qui est dispersé,
                on rend visible ce qui était caché."
              </span>
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-10 h-px bg-white/25" />
              <span className="text-white/35 text-xs tracking-widest uppercase">Devko Studio — philosophie produit</span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-16 lg:gap-24 items-center">

            <motion.div {...fadeLeft(0)} className="lg:col-span-2">
              <SectionLabel>Notre approche produit</SectionLabel>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-7 leading-tight">
                On commence par une question, pas par du code
              </h2>
              <div className="space-y-5 text-white/55 text-sm leading-[1.85]">
                <p>
                  La première chose qu'on demande à chaque nouveau client : "qu'est-ce que vous faites
                  manuellement aujourd'hui que vous n'aimeriez plus jamais faire ?" Cette question
                  simple révèle souvent l'application exacte dont l'entreprise a besoin — sans
                  fonctionnalités superflues, sans complexité inutile.
                </p>
                <p>
                  La plupart des applications sur-mesure qu'on construit résolvent un problème très
                  précis que les outils du marché n'ont pas voulu résoudre, parce qu'il est trop
                  spécifique à un secteur ou une façon de travailler particulière. C'est exactement
                  là qu'on intervient.
                </p>
                <p>
                  On livre du code source commenté, versionné, documenté. Dans cinq ans, si vous
                  décidez de faire évoluer votre application avec un autre prestataire, vous repartez
                  avec tout. Pas de dépendance, pas de rançon technologique.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeRight(0.2)} className="lg:col-span-3">
              {/*
                ╔═══════════════════════════════════════════════╗
                ║  ILLUSTRATION 2 — Architecture / Whiteboard   ║
                ║                                               ║
                ║  Recommandation :                             ║
                ║  Photo d'un whiteboard avec un diagramme      ║
                ║  d'architecture ou de flux de données         ║
                ║  Ou : schéma d'architecture technique propre  ║
                ║  (fond sombre, lignes blanches/cyan)          ║
                ║  Ou : mains sur un clavier, écran de code     ║
                ║  la nuit, ambiance sérieuse                   ║
                ║  Format : 16:9 paysage                        ║
                ╚═══════════════════════════════════════════════╝
              */}
              <img
                  src="/assets/images/questions.jpg"
                  alt="Illustration 1"
                  className="w-full h-full object-cover"
                 
                />
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
              <SectionLabel>Ce qu'on maîtrise</SectionLabel>
              <h2 className="text-4xl lg:text-5xl font-black text-text-primary leading-tight max-w-md">
                Les 4 Piliers de Chaque Application
              </h2>
            </motion.div>
            <motion.p
              {...fadeRight(0.1)}
              className="hidden lg:block text-text-secondary text-sm max-w-xs text-right leading-relaxed mt-4 lg:mt-0"
            >
              Une application sans fondations solides ressemble à une maison sans plans. On ne
              commence pas à développer avant que l'architecture soit validée.
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
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <p className="text-[13px] text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Chaque application est livrée avec sa documentation technique complète</strong> —
              diagramme de base de données, documentation des APIs (format Swagger/OpenAPI),
              guide de déploiement et procédures de maintenance. Vous n'êtes jamais dépendant
              d'une seule personne pour comprendre ce qui a été construit.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          4 — NOS RÉALISATIONS (chalk, projets réels)
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
              Nos Réalisations
            </h2>
          </motion.div>
          <motion.div {...fadeUp(0.1)} className="flex items-center gap-6 mb-20">
            <div className="w-32 h-1 bg-white/55 rounded-full" />
            <p
              className="text-white/55 text-xl"
              style={{ fontFamily: '"Indie Flower", cursive' }}
            >
              applications qui tournent, problèmes qui sont résolus
            </p>
          </motion.div>

          <div className="space-y-28">
            {projects.map((project, i) => (
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
                {/* Screenshot app */}
                <div className="flex-shrink-0 w-full lg:w-[480px]">
                  <AppScreenshot
                    src={project.image}
                    alt={project.name}
                    link={project.link}
                  />
                </div>

                {/* Texte */}
                <div className="flex-1 max-w-lg">
                  <div
                    className="flex items-center gap-4 mb-5"
                    style={{ fontFamily: '"Indie Flower", cursive' }}
                  >
                    <span className="text-white/35 text-sm">{project.year}</span>
                    <div className="w-3 h-px bg-white/20" />
                    <span className="text-white/50 text-sm">{project.category}</span>
                  </div>

                  <h3
                    className="text-4xl lg:text-5xl text-white mb-6"
                    style={{
                      fontFamily: '"Permanent Marker", cursive',
                      textShadow: '2px 2px 5px rgba(0,0,0,0.45)',
                      lineHeight: 1.1,
                    }}
                  >
                    {project.name}
                  </h3>

                  <p
                    className="text-white/60 text-lg leading-relaxed mb-7"
                    style={{ fontFamily: '"Indie Flower", cursive' }}
                  >
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-[11px] font-bold px-3 py-1 rounded-full text-white/60"
                        style={{
                          border: '1px solid rgba(139,92,246,0.35)',
                          background: 'rgba(139,92,246,0.07)',
                          fontFamily: '"Indie Flower", cursive',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Lien si dispo */}
                  {project.link && project.link !== '#' && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 mt-6 text-white/50 text-sm hover:text-white/80 transition-colors"
                      style={{ fontFamily: '"Indie Flower", cursive' }}
                    >
                      Voir l'application
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                  )}
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
          5 — CE QU'ON PEUT CONSTRUIRE (use cases)
          Layout sticky : illustration + liste
      ════════════════════════════════════════════════════ */}
      <section className="py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start">

            {/* Illustration sticky */}
            <motion.div {...fadeLeft(0)} className="lg:sticky lg:top-32">
              {/*
                ╔═══════════════════════════════════════════════╗
                ║  ILLUSTRATION 3 — Types d'applications        ║
                ║                                               ║
                ║  Recommandation :                             ║
                ║  Composition de plusieurs interfaces :        ║
                ║  - Une fiche CRM client                       ║
                ║  - Un planning de réservation                 ║
                ║  - Un tableau de bord SaaS                    ║
                ║  Présentés en cartes superposées              ║
                ║  Style : flat design, fond neutre             ║
                ║  Format : 1:1 carré                           ║
                ╚═══════════════════════════════════════════════╝
              */}
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/assets/images/data.webp"
                  alt="Illustration 3"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-8 pl-1">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">
                  Délai moyen
                </p>
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-black text-text-primary">6</span>
                  <span className="text-xl font-semibold text-text-secondary mb-2">semaines</span>
                </div>
                <p className="text-xs text-text-secondary mt-2 leading-relaxed max-w-xs">
                  Pour une application métier standard. Délai estimé lors du cadrage selon le
                  périmètre fonctionnel et le volume de données à gérer.
                </p>
              </div>
            </motion.div>

            {/* Use cases */}
            <div>
              <motion.div {...fadeRight(0)}>
                <SectionLabel>Ce qu'on sait construire</SectionLabel>
                <h2 className="text-4xl font-black text-text-primary mb-3 leading-[1.1]">
                  Six types d'applications,
                </h2>
                <h2 className="text-4xl font-black text-text-secondary font-light italic mb-12 leading-[1.1]">
                  une seule exigence.
                </h2>
              </motion.div>

              <div className="space-y-0">
                {useCases.map((item, i) => (
                  <motion.div
                    key={i}
                    {...fadeUp(i * 0.08)}
                    className="flex gap-7 py-7 border-b border-gray-100 last:border-0 group"
                  >
                    <span className="text-[2.8rem] font-black leading-none text-gray-100 group-hover:text-gray-200 transition-colors select-none flex-shrink-0 pt-1">
                      {item.num}
                    </span>
                    <div className="pt-2">
                      <h3 className="text-base font-bold text-text-primary mb-2">{item.title}</h3>
                      <p className="text-text-secondary text-[13.5px] leading-relaxed">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          6 — PROCESSUS NARRATIF (sticky illustration)
      ════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start">

            {/* Étapes */}
            <div>
              <motion.div {...fadeLeft(0)}>
                <SectionLabel>Comment on travaille</SectionLabel>
                <h2 className="text-4xl font-black text-text-primary mb-12 leading-[1.1]">
                  Cinq étapes,{' '}
                  <span className="font-light italic text-text-secondary">rien de laissé au hasard.</span>
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
                    <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-text-primary bg-white flex items-center justify-center z-10">
                      <span className="text-xs font-black text-text-primary">{step.num}</span>
                    </div>
                    <div className="flex-1 pt-0.5">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <h3 className="text-base font-bold text-text-primary">{step.title}</h3>
                        <span className="text-[11px] text-text-secondary border border-gray-200 rounded-full px-3 py-1">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-text-secondary text-[13.5px] leading-relaxed">{step.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Illustration sticky */}
            <motion.div {...fadeRight(0)} className="lg:sticky lg:top-32">
              {/*
                ╔═══════════════════════════════════════════════╗
                ║  ILLUSTRATION 4 — Processus de développement  ║
                ║                                               ║
                ║  Option A :                                   ║
                ║  Screenshot Figma avec un wireframe d'app     ║
                ║  mobile ou web en cours d'annotation          ║
                ║                                               ║
                ║  Option B :                                   ║
                ║  Photo d'une réunion de sprint / stand-up     ║
                ║  équipe devant un tableau Kanban              ║
                ║                                               ║
                ║  Option C :                                   ║
                ║  Schéma UML / ERD de base de données          ║
                ║  sur fond sombre — style technique propre     ║
                ║  Format : 1:1 carré                           ║
                ╚═══════════════════════════════════════════════╝
              */}
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/assets/images/shema.webp"
                  alt="Illustration 3"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Encadré tech highlight */}
              <motion.div
                {...fadeUp(0.2)}
                className="mt-8 p-7 border-l-[3px] border-accent-blue bg-[#FAF9F6] border border-gray-100 rounded-r-xl"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent-blue mb-3">
                  Méthodologie
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  On travaille en <strong className="text-text-primary">sprints de deux semaines</strong> avec
                  un point de synchronisation à chaque fin de sprint. Vous voyez l'application prendre
                  forme en continu — pas de surprise à la livraison finale.
                </p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          7 — TECHNOLOGIES (liste éditoriale)
      ════════════════════════════════════════════════════ */}
      <section className="py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            <motion.div {...fadeLeft(0)}>
              <SectionLabel>Sous le capot</SectionLabel>
              <h2 className="text-4xl lg:text-5xl font-black text-text-primary leading-tight mb-7">
                Une stack choisie pour{' '}
                <span className="font-light italic text-text-secondary">tenir dans le temps.</span>
              </h2>
              <p className="text-text-secondary text-[15px] leading-relaxed mb-10 max-w-lg">
                On n'utilise pas les derniers frameworks à la mode. On utilise des technologies
                stables, massivement adoptées, avec de larges communautés et des cycles de vie longs.
                Dans cinq ans, votre application sera toujours maintenable.
              </p>

              <div className="space-y-0">
                {techStack.map((tech, i) => (
                  <motion.div
                    key={i}
                    {...fadeUp(i * 0.06)}
                    className="flex items-start gap-6 py-5 border-b border-gray-200 last:border-0 group"
                  >
                    <div className="flex-shrink-0 w-36">
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

            {/* Illustration sticky */}
            <motion.div {...fadeRight(0.15)} className="lg:sticky lg:top-32">
              {/*
                ╔═══════════════════════════════════════════════╗
                ║  ILLUSTRATION 5 — Stack / Infrastructure      ║
                ║                                               ║
                ║  Recommandation :                             ║
                ║  Schéma d'architecture cloud isométrique :    ║
                ║  Frontend → API → Base de données → CDN       ║
                ║  Icônes des services AWS/Vercel               ║
                ║  Style : fond sombre, lignes colorées         ║
                ║  Ou : composition des logos des technos       ║
                ║  sur fond neutre (React, Node, Postgres...)   ║
                ║  Format : 4:5 portrait ou 1:1 carré           ║
                ╚═══════════════════════════════════════════════╝
              */}
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="/assets/images/data2.webp"
                  alt="Illustration 5"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          8 — CTA ÉDITORIAL
      ════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-start">

            <motion.div {...fadeLeft(0)}>
              <SectionLabel>On commence ?</SectionLabel>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-text-primary leading-[1.05] mb-7">
                Votre idée mérite{' '}
                <span
                  className="italic"
                  style={{ WebkitTextStroke: '2.5px #8B5CF6', color: 'transparent' }}
                >
                  d'exister.
                </span>
              </h2>
              <p className="text-text-secondary text-[15px] leading-relaxed mb-10 max-w-lg">
                Beaucoup de projets restent dans des tableurs ou des carnets parce que personne
                n'a pris le temps de les transformer en quelque chose de concret. On peut être ce
                partenaire. On commence par un appel de cadrage — gratuit, sans engagement —
                pour évaluer la faisabilité et estimer un périmètre réaliste.
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
                  "Cahier des charges fonctionnel détaillé",
                  "Architecture technique documentée",
                  "Maquettes Figma validées avant dev",
                  "Code source versionné sur Git",
                  "Documentation API (Swagger/OpenAPI)",
                  "Tests automatisés sur les fonctions critiques",
                  "Formation administrateurs & utilisateurs",
                  "Support 30 jours après mise en production",
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
