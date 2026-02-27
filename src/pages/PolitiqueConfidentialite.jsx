import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEOMeta from '../components/SEOMeta'
import SectionLabel from '../components/SectionLabel'
import { fadeUp } from '../utils/animations'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function LegalSection({ id, title, children, delay = 0 }) {
  return (
    <motion.section id={id} className="mb-14 scroll-mt-28" {...fadeUp(delay)}>
      <h2 className="text-xl font-bold text-[#0F172A] mb-4 pb-3 border-b border-[#E2E8F0]">
        {title}
      </h2>
      <div className="space-y-3 text-[#475569] leading-relaxed text-[15px]">
        {children}
      </div>
    </motion.section>
  )
}

function RightItem({ title, children }) {
  return (
    <div className="flex gap-3 p-4 bg-white border border-[#E2E8F0] rounded-xl">
      <div className="mt-0.5 w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center shrink-0">
        <div className="w-2 h-2 rounded-full bg-violet-500" />
      </div>
      <div>
        <p className="font-semibold text-[#0F172A] text-sm mb-1">{title}</p>
        <p className="text-sm text-[#64748B]">{children}</p>
      </div>
    </div>
  )
}

const sections = [
  { id: 'responsable', label: 'Responsable du traitement' },
  { id: 'donnees-collectees', label: 'Données collectées' },
  { id: 'finalite', label: 'Finalité du traitement' },
  { id: 'base-legale', label: 'Base légale' },
  { id: 'conservation', label: 'Durée de conservation' },
  { id: 'destinataires', label: 'Destinataires des données' },
  { id: 'droits', label: 'Vos droits' },
  { id: 'exercer-droits', label: 'Exercer vos droits' },
  { id: 'cookies', label: 'Cookies' },
  { id: 'modifications', label: 'Modifications' },
]

export default function PolitiqueConfidentialite() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans">
      <SEOMeta
        title="Politique de confidentialité"
        description="Politique de confidentialité de Devko Studio. Collecte, utilisation et protection de vos données personnelles. Conformité RGPD."
        path="/politique-confidentialite"
        noindex
      />
      <Navbar />

      {/* ── En-tête ──────────────────────────────────────────── */}
      <section className="pt-36 pb-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">

          {/* Retour */}
          <motion.div {...fadeUp(0)} className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-[#64748B] hover:text-violet-600 transition-colors duration-200 group"
            >
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour à l'accueil
            </Link>
          </motion.div>

          <motion.div {...fadeUp(0.08)}>
            <SectionLabel>RGPD &amp; Confidentialité</SectionLabel>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-5 leading-tight"
            {...fadeUp(0.14)}
          >
            Politique de confidentialité
          </motion.h1>

          <motion.p
            className="text-[#64748B] text-base max-w-2xl leading-relaxed"
            {...fadeUp(0.2)}
          >
            Devko Studio s'engage à protéger et respecter votre vie privée. La présente politique
            décrit comment nous collectons, utilisons et protégeons vos données personnelles
            conformément au Règlement (UE) 2016/679 dit RGPD et à la loi Informatique et
            Libertés du 6 janvier 1978 modifiée.
          </motion.p>

          <motion.p className="text-[#94A3B8] text-sm mt-4" {...fadeUp(0.24)}>
            Dernière mise à jour : février 2026
          </motion.p>
        </div>
      </section>

      {/* ── Corps ────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 items-start">

        {/* Sommaire */}
        <motion.aside
          className="lg:sticky lg:top-28 hidden lg:block"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-500 mb-4">
            Sommaire
          </p>
          <nav className="space-y-1">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="block text-sm text-[#64748B] hover:text-violet-600 hover:translate-x-1 transition-all duration-200 py-1"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </motion.aside>

        {/* Contenu */}
        <main>

          {/* 1. Responsable du traitement */}
          <LegalSection id="responsable" title="1. Responsable du traitement" delay={0.1}>
            <p>
              Le responsable du traitement de vos données personnelles est :
            </p>
            <div className="bg-white rounded-xl border border-[#E2E8F0] p-5 mt-4 space-y-2 text-sm">
              <div className="flex gap-3">
                <span className="w-44 shrink-0 text-[#94A3B8] font-medium">Entité</span>
                <span className="text-[#0F172A] font-semibold">Devko Studio</span>
              </div>
              <div className="border-t border-[#F1F5F9]" />
              <div className="flex gap-3">
                <span className="w-44 shrink-0 text-[#94A3B8] font-medium">Statut</span>
                <span>Auto-entrepreneur (micro-entrepreneur)</span>
              </div>
              <div className="border-t border-[#F1F5F9]" />
              <div className="flex gap-3">
                <span className="w-44 shrink-0 text-[#94A3B8] font-medium">Adresse</span>
                <span>Cannes, 06400, Alpes-Maritimes, France</span>
              </div>
              <div className="border-t border-[#F1F5F9]" />
              <div className="flex gap-3">
                <span className="w-44 shrink-0 text-[#94A3B8] font-medium">Contact</span>
                <a
                  href="mailto:devkostudio@gmail.com"
                  className="text-violet-600 hover:text-violet-700 transition-colors"
                >
                  devkostudio@gmail.com
                </a>
              </div>
            </div>
          </LegalSection>

          {/* 2. Données collectées */}
          <LegalSection id="donnees-collectees" title="2. Données collectées" delay={0.12}>
            <p>
              Nous collectons uniquement les données personnelles strictement nécessaires au
              fonctionnement du site et à la réponse à vos demandes. Les données collectées
              sont les suivantes :
            </p>

            <div className="mt-4 space-y-3">
              <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden">
                <div className="px-5 py-3 bg-[#F8FAFC] border-b border-[#E2E8F0]">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#94A3B8]">
                    Formulaire de contact
                  </p>
                </div>
                <div className="p-5 space-y-3 text-sm">
                  <div className="flex gap-3">
                    <span className="w-32 shrink-0 text-[#94A3B8] font-medium">Nom</span>
                    <span>Identité de la personne nous contactant</span>
                  </div>
                  <div className="border-t border-[#F1F5F9]" />
                  <div className="flex gap-3">
                    <span className="w-32 shrink-0 text-[#94A3B8] font-medium">Adresse email</span>
                    <span>Permettre la réponse à votre demande</span>
                  </div>
                  <div className="border-t border-[#F1F5F9]" />
                  <div className="flex gap-3">
                    <span className="w-32 shrink-0 text-[#94A3B8] font-medium">Message</span>
                    <span>Contenu de votre demande ou question</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden">
                <div className="px-5 py-3 bg-[#F8FAFC] border-b border-[#E2E8F0]">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#94A3B8]">
                    Données de navigation (techniques)
                  </p>
                </div>
                <div className="p-5 space-y-3 text-sm">
                  <div className="flex gap-3">
                    <span className="w-32 shrink-0 text-[#94A3B8] font-medium">Logs serveur</span>
                    <span>
                      Adresse IP, type de navigateur, pages visitées — collectés automatiquement
                      par l'hébergeur Vercel à des fins de sécurité et de performance
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm bg-violet-50 border border-violet-100 rounded-xl p-4 text-[#5B21B6]">
              Nous ne collectons aucune donnée sensible (état de santé, origine ethnique,
              opinions politiques ou religieuses, etc.).
            </p>
          </LegalSection>

          {/* 3. Finalité */}
          <LegalSection id="finalite" title="3. Finalité du traitement" delay={0.14}>
            <p>Les données que vous nous communiquez sont utilisées aux fins suivantes :</p>
            <ul className="list-none mt-3 space-y-2">
              {[
                'Répondre à vos demandes de contact, de devis ou d\'information via le formulaire de contact.',
                'Assurer la gestion de la relation commerciale et le suivi des projets.',
                'Améliorer le fonctionnement et la sécurité du site.',
                'Satisfaire aux obligations légales et réglementaires applicables.',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Nous ne procédons à aucune prise de décision automatisée ni à aucun profilage
              à partir de vos données personnelles.
            </p>
          </LegalSection>

          {/* 4. Base légale */}
          <LegalSection id="base-legale" title="4. Base légale du traitement" delay={0.16}>
            <p>
              Conformément au RGPD, chaque traitement de données repose sur une base légale
              définie :
            </p>
            <div className="mt-4 space-y-3">
              <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 text-sm">
                <p className="font-semibold text-[#0F172A] mb-1">
                  Formulaire de contact — Intérêt légitime (art. 6.1.f RGPD)
                </p>
                <p className="text-[#64748B]">
                  Le traitement est nécessaire aux fins des intérêts légitimes poursuivis par
                  Devko Studio, à savoir la gestion des demandes de prospection commerciale et
                  la réponse aux questions posées par les utilisateurs.
                </p>
              </div>
              <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 text-sm">
                <p className="font-semibold text-[#0F172A] mb-1">
                  Relation contractuelle — Exécution d'un contrat (art. 6.1.b RGPD)
                </p>
                <p className="text-[#64748B]">
                  Lorsque vous devenez client, le traitement est nécessaire à l'exécution du
                  contrat auquel vous êtes partie (devis, commande, facturation).
                </p>
              </div>
              <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 text-sm">
                <p className="font-semibold text-[#0F172A] mb-1">
                  Obligations légales — Obligation légale (art. 6.1.c RGPD)
                </p>
                <p className="text-[#64748B]">
                  Certaines données sont conservées pour respecter nos obligations comptables
                  et fiscales (ex. : pièces justificatives de facturation).
                </p>
              </div>
            </div>
          </LegalSection>

          {/* 5. Durée de conservation */}
          <LegalSection id="conservation" title="5. Durée de conservation" delay={0.18}>
            <p>
              Vos données personnelles sont conservées pendant la durée strictement nécessaire
              aux finalités pour lesquelles elles ont été collectées :
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#F8FAFC]">
                    <th className="text-left p-3 font-semibold text-[#0F172A] border border-[#E2E8F0] rounded-tl-lg">
                      Catégorie de données
                    </th>
                    <th className="text-left p-3 font-semibold text-[#0F172A] border border-[#E2E8F0] rounded-tr-lg">
                      Durée de conservation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-[#E2E8F0] text-[#475569]">
                      Messages de contact (prospects)
                    </td>
                    <td className="p-3 border border-[#E2E8F0] text-[#475569]">
                      3 ans à compter du dernier contact
                    </td>
                  </tr>
                  <tr className="bg-[#FAFAFA]">
                    <td className="p-3 border border-[#E2E8F0] text-[#475569]">
                      Données clients (contrats, factures)
                    </td>
                    <td className="p-3 border border-[#E2E8F0] text-[#475569]">
                      10 ans (obligation légale comptable)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-[#E2E8F0] text-[#475569]">
                      Logs de navigation (hébergeur)
                    </td>
                    <td className="p-3 border border-[#E2E8F0] text-[#475569]">
                      Selon la politique de Vercel (généralement 30 jours)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              À l'issue de ces délais, vos données sont supprimées ou anonymisées de façon
              irréversible.
            </p>
          </LegalSection>

          {/* 6. Destinataires */}
          <LegalSection id="destinataires" title="6. Destinataires des données" delay={0.2}>
            <p>
              Vos données personnelles sont destinées exclusivement à Devko Studio et ne sont
              jamais vendues ni cédées à des tiers à des fins commerciales.
            </p>
            <p>
              Dans le cadre du traitement de vos demandes, certains prestataires techniques
              peuvent accéder à vos données en qualité de sous-traitants :
            </p>
            <div className="mt-4 space-y-3">
              <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 text-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-[#0F172A] mb-1">EmailJS</p>
                    <p className="text-[#64748B]">
                      Service d'envoi d'emails côté client utilisé pour acheminer les messages
                      du formulaire de contact vers notre adresse email. EmailJS agit en qualité
                      de sous-traitant. Les données transitent par leurs serveurs aux États-Unis
                      dans le cadre d'un transfert encadré par des garanties appropriées.
                    </p>
                  </div>
                  <a
                    href="https://www.emailjs.com/legal/privacy-policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-xs text-violet-600 hover:text-violet-700 border border-violet-200 rounded-full px-3 py-1 hover:bg-violet-50 transition-colors"
                  >
                    Politique
                  </a>
                </div>
              </div>
              <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 text-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-[#0F172A] mb-1">Vercel Inc.</p>
                    <p className="text-[#64748B]">
                      Hébergeur du site. Vercel collecte des logs techniques (adresse IP,
                      requêtes HTTP) à des fins de sécurité et de performance conformément à sa
                      propre politique de confidentialité.
                    </p>
                  </div>
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-xs text-violet-600 hover:text-violet-700 border border-violet-200 rounded-full px-3 py-1 hover:bg-violet-50 transition-colors"
                  >
                    Politique
                  </a>
                </div>
              </div>
            </div>
            <p>
              Nous ne procédons à aucun transfert de vos données en dehors de l'Union
              Européenne, à l'exception des transferts opérés par nos sous-traitants susmentionnés
              (Vercel et EmailJS, établis aux États-Unis), encadrés par des clauses contractuelles
              types approuvées par la Commission européenne.
            </p>
          </LegalSection>

          {/* 7. Droits */}
          <LegalSection id="droits" title="7. Vos droits" delay={0.22}>
            <p>
              Conformément au RGPD (articles 15 à 22) et à la loi Informatique et Libertés,
              vous disposez des droits suivants sur vos données personnelles :
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <RightItem title="Droit d'accès">
                Obtenir la confirmation que des données vous concernant sont traitées et en
                obtenir une copie.
              </RightItem>
              <RightItem title="Droit de rectification">
                Demander la correction de données inexactes ou incomplètes vous concernant.
              </RightItem>
              <RightItem title="Droit à l'effacement">
                Demander la suppression de vos données lorsque celles-ci ne sont plus
                nécessaires ou en cas de retrait de consentement.
              </RightItem>
              <RightItem title="Droit à la limitation">
                Demander la suspension temporaire du traitement de vos données dans certaines
                situations.
              </RightItem>
              <RightItem title="Droit d'opposition">
                Vous opposer au traitement de vos données fondé sur l'intérêt légitime pour des
                raisons tenant à votre situation particulière.
              </RightItem>
              <RightItem title="Droit à la portabilité">
                Recevoir vos données dans un format structuré, couramment utilisé et lisible
                par machine, et les transmettre à un autre responsable.
              </RightItem>
            </div>
            <p>
              Vous disposez également du droit de définir des directives relatives au sort de
              vos données après votre décès (loi Informatique et Libertés, art. 85).
            </p>
          </LegalSection>

          {/* 8. Exercer ses droits */}
          <LegalSection id="exercer-droits" title="8. Comment exercer vos droits" delay={0.24}>
            <p>
              Pour exercer l'un de vos droits, vous pouvez nous contacter par email à
              l'adresse suivante :
            </p>
            <div className="mt-4 p-5 bg-white border border-[#E2E8F0] rounded-xl flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <p className="font-semibold text-[#0F172A] text-sm mb-1">
                  Envoyer une demande
                </p>
                <p className="text-sm text-[#64748B]">
                  Indiquez clairement l'objet de votre demande (ex. : "Demande d'accès à mes
                  données") ainsi que vos coordonnées afin que nous puissions vous identifier.
                </p>
              </div>
              <a
                href="mailto:devkostudio@gmail.com?subject=Demande%20RGPD"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-600 to-violet-500 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                devkostudio@gmail.com
              </a>
            </div>
            <p>
              Nous nous engageons à répondre à votre demande dans un délai d'un (1) mois à
              compter de sa réception. Ce délai peut être prolongé de deux mois supplémentaires
              en cas de demandes complexes ou nombreuses.
            </p>
            <p>
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une
              réclamation auprès de la{' '}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-600 hover:text-violet-700 transition-colors font-medium"
              >
                Commission Nationale de l'Informatique et des Libertés (CNIL)
              </a>{' '}
              — 3 Place de Fontenoy – TSA 80715 – 75334 Paris Cedex 07 — via son site web{' '}
              <a
                href="https://www.cnil.fr/fr/plaintes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-600 hover:text-violet-700 transition-colors"
              >
                cnil.fr/fr/plaintes
              </a>
              .
            </p>
          </LegalSection>

          {/* 9. Cookies */}
          <LegalSection id="cookies" title="9. Cookies" delay={0.26}>
            <p>
              Un cookie est un petit fichier texte stocké sur votre terminal (ordinateur, tablette,
              smartphone) lors de la visite d'un site web.
            </p>

            <div className="mt-4 space-y-3">
              <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 text-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
                  <p className="font-semibold text-[#0F172A]">Cookies strictement nécessaires</p>
                </div>
                <p className="text-[#64748B]">
                  Le site peut utiliser des cookies techniques indispensables au bon
                  fonctionnement de la navigation (ex. : maintien de session, préférences
                  d'affichage). Ces cookies ne nécessitent pas de consentement préalable
                  conformément aux recommandations de la CNIL.
                </p>
              </div>

              <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 text-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-red-400" />
                  <p className="font-semibold text-[#0F172A]">Cookies de mesure d'audience</p>
                </div>
                <p className="text-[#64748B]">
                  Le site <strong className="text-[#0F172A]">devkostudio.com</strong> n'utilise
                  actuellement aucun outil d'analytics tiers (Google Analytics, Matomo, etc.).
                  Aucun cookie de traçage n'est déposé sur votre terminal.
                </p>
              </div>

              <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 text-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-red-400" />
                  <p className="font-semibold text-[#0F172A]">Cookies publicitaires</p>
                </div>
                <p className="text-[#64748B]">
                  Aucun cookie publicitaire ou de ciblage n'est utilisé sur ce site.
                </p>
              </div>
            </div>

            <p className="mt-2">
              Vous pouvez à tout moment configurer votre navigateur pour refuser ou supprimer
              les cookies. Les principaux navigateurs offrent ces options dans leurs paramètres
              (Confidentialité &amp; Sécurité). La désactivation des cookies strictement
              nécessaires peut toutefois perturber la navigation sur certaines pages.
            </p>
          </LegalSection>

          {/* 10. Modifications */}
          <LegalSection id="modifications" title="10. Modifications de la politique" delay={0.28}>
            <p>
              Devko Studio se réserve le droit de modifier la présente politique de
              confidentialité à tout moment, notamment pour se conformer à de nouvelles
              réglementations ou pour refléter des évolutions dans ses pratiques de traitement
              des données.
            </p>
            <p>
              Toute modification sera publiée sur cette page avec la mise à jour de la date
              en haut de document. Nous vous encourageons à consulter régulièrement cette page
              pour prendre connaissance des éventuelles mises à jour.
            </p>
            <p>
              En cas de modification substantielle, nous ferons nos meilleurs efforts pour vous
              en informer de manière appropriée (par exemple, via un bandeau sur le site).
            </p>

            {/* Lien vers mentions légales */}
            <div className="mt-8 p-5 bg-violet-50 border border-violet-100 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-[#0F172A] text-sm mb-1">
                  Informations légales complémentaires
                </p>
                <p className="text-sm text-[#64748B]">
                  Consultez nos mentions légales pour les informations relatives à l'éditeur
                  du site, à l'hébergement et à la propriété intellectuelle.
                </p>
              </div>
              <Link
                to="/mentions-legales"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-600 to-violet-500 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300"
              >
                Mentions légales
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </LegalSection>

        </main>
      </div>

      <Footer />
    </div>
  )
}
