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

const sections = [
  { id: 'objet',           label: 'Objet' },
  { id: 'prestataire',     label: 'Prestataire' },
  { id: 'services',        label: 'Services proposés' },
  { id: 'devis',           label: 'Devis & commande' },
  { id: 'prix',            label: 'Prix & modalités de paiement' },
  { id: 'delais',          label: 'Délais de réalisation' },
  { id: 'obligations',     label: 'Obligations des parties' },
  { id: 'propriete',       label: 'Propriété intellectuelle' },
  { id: 'confidentialite', label: 'Confidentialité' },
  { id: 'responsabilite',  label: 'Responsabilité' },
  { id: 'resiliation',     label: 'Résiliation' },
  { id: 'litiges',         label: 'Litiges & droit applicable' },
]

export default function CGV() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans">
      <SEOMeta
        title="Conditions Générales de Vente"
        description="Conditions générales de vente de Devko Studio, agence web à Cannes. Tarifs, modalités de paiement, délais et garanties."
        path="/cgv"
        noindex
      />
      <Navbar />

      {/* ── En-tête ──────────────────────────────────────────── */}
      <section className="pt-36 pb-16 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">

          <motion.div {...fadeUp(0)}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#64748B] text-sm hover:text-[#8B5CF6] transition-colors mb-10 group"
            >
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour à l'accueil
            </Link>

            <SectionLabel>Devko Studio — Mentions légales</SectionLabel>

            <h1 className="text-5xl lg:text-6xl font-black text-[#0F172A] leading-[1.05] mb-6">
              Conditions Générales<br />
              <span style={{ WebkitTextStroke: '2px #0F172A', color: 'transparent' }}>de Vente</span>
            </h1>
            <p className="text-[#64748B] text-[15px] max-w-xl leading-relaxed">
              Les présentes conditions régissent l'ensemble des prestations de services
              réalisées par Devko Studio. Toute commande implique l'acceptation sans réserve
              des présentes CGV.
            </p>
            <p className="text-[#94A3B8] text-xs mt-4">Dernière mise à jour : janvier 2025</p>
          </motion.div>

        </div>
      </section>

      {/* ── Corps ────────────────────────────────────────────── */}
      <section className="pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-20 pt-14">

            {/* Sommaire sticky */}
            <motion.aside {...fadeUp(0.1)} className="hidden lg:block">
              <div className="sticky top-28 space-y-1">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#94A3B8] mb-4">Sommaire</p>
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block text-[13px] text-[#64748B] hover:text-[#8B5CF6] py-1 transition-colors leading-snug"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </motion.aside>

            {/* Contenu */}
            <div className="pt-0 lg:pt-0">

              <LegalSection id="objet" title="Article 1 — Objet" delay={0.05}>
                <p>
                  Les présentes Conditions Générales de Vente (CGV) ont pour objet de définir
                  les droits et obligations des parties dans le cadre de la relation commerciale
                  établie entre Devko Studio (ci-après « le Prestataire ») et tout client
                  professionnel ou particulier (ci-après « le Client ») souhaitant bénéficier
                  de ses services de création digitale.
                </p>
                <p>
                  Toute commande passée auprès de Devko Studio implique l'adhésion pleine
                  et entière aux présentes CGV, à l'exclusion de tout autre document.
                  Le Client déclare en avoir pris connaissance et les accepter sans réserve.
                </p>
              </LegalSection>

              <LegalSection id="prestataire" title="Article 2 — Prestataire" delay={0.1}>
                <div className="bg-[#FAF9F6] rounded-xl p-6 border border-[#E2E8F0] space-y-2">
                  {[
                    { label: 'Nom commercial',  value: 'Devko Studio' },
                    { label: 'Statut juridique', value: 'Auto-entrepreneur' },
                    { label: 'Adresse',         value: 'Cannes, 06400, France' },
                    { label: 'Email',           value: 'devkostudio@gmail.com' },
                    { label: 'Site web',        value: 'devkostudio.com' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex gap-3 text-sm">
                      <span className="font-semibold text-[#0F172A] w-36 flex-shrink-0">{label}</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </LegalSection>

              <LegalSection id="services" title="Article 3 — Services proposés" delay={0.12}>
                <p>Devko Studio propose les prestations suivantes :</p>
                <ul className="space-y-2 mt-3">
                  {[
                    'Création de sites web vitrine, e-commerce et sur-mesure',
                    'Développement d\'applications web métier',
                    'Identité visuelle et branding (logo, charte graphique)',
                    'Référencement naturel (SEO) et optimisation technique',
                    'Maintenance, mises à jour et support technique',
                    'Conseil et audit digital',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#8B5CF6] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  Chaque prestation fait l'objet d'un devis détaillé précisant le périmètre,
                  le prix et les délais. Toute prestation non mentionnée dans le devis donnera
                  lieu à un devis complémentaire.
                </p>
              </LegalSection>

              <LegalSection id="devis" title="Article 4 — Devis & commande" delay={0.14}>
                <p>
                  Toute prestation débute par l'établissement d'un devis gratuit, valable
                  <strong className="text-[#0F172A]"> 30 jours</strong> à compter de sa date d'émission.
                  Le devis détaille la nature des travaux, les livrables attendus, le prix HT/TTC
                  et les délais estimés.
                </p>
                <p>
                  La commande est réputée ferme et définitive à réception du devis signé,
                  accompagné du règlement de l'acompte prévu. Aucune modification du périmètre
                  ne pourra être effectuée sans accord écrit des deux parties et, le cas échéant,
                  sans établissement d'un avenant tarifaire.
                </p>
                <p>
                  Le Client s'engage à fournir, dans les délais convenus, l'ensemble des éléments
                  nécessaires au démarrage du projet (contenus, accès, visuels, informations).
                  Tout retard imputable au Client pourra entraîner un report des délais de livraison.
                </p>
              </LegalSection>

              <LegalSection id="prix" title="Article 5 — Prix & modalités de paiement" delay={0.16}>
                <p>
                  Les prix sont exprimés en euros (€), hors taxes (HT). En tant qu'auto-entrepreneur
                  bénéficiant de la franchise en base de TVA (article 293 B du CGI), aucune TVA
                  n'est applicable — la mention « TVA non applicable » figure sur les factures.
                </p>

                <div className="bg-[#FAF9F6] rounded-xl p-5 border border-[#E2E8F0] mt-4">
                  <p className="font-semibold text-[#0F172A] text-sm mb-3">Échéancier standard :</p>
                  <div className="space-y-2">
                    {[
                      { phase: 'Acompte au démarrage', pct: '40 %' },
                      { phase: 'Livraison pour validation', pct: '40 %' },
                      { phase: 'Mise en ligne / livraison finale', pct: '20 %' },
                    ].map(({ phase, pct }) => (
                      <div key={phase} className="flex justify-between items-center text-sm py-2 border-b border-[#E2E8F0] last:border-0">
                        <span>{phase}</span>
                        <span className="font-bold text-[#8B5CF6]">{pct}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="mt-4">
                  Le paiement s'effectue par virement bancaire ou tout autre moyen convenu
                  entre les parties. Les factures sont payables à réception, sans escompte.
                  Tout retard de paiement entraîne, de plein droit, l'application de pénalités
                  de retard au taux légal en vigueur, ainsi qu'une indemnité forfaitaire pour
                  frais de recouvrement de 40 € (art. D. 441-5 du Code de commerce).
                </p>
                <p>
                  En cas de non-paiement persistant, Devko Studio se réserve le droit de
                  suspendre ou d'interrompre les travaux en cours, sans que cela puisse être
                  considéré comme une faute du Prestataire.
                </p>
              </LegalSection>

              <LegalSection id="delais" title="Article 6 — Délais de réalisation" delay={0.18}>
                <p>
                  Les délais communiqués dans le devis sont indicatifs et dépendent de la
                  complexité du projet ainsi que de la réactivité du Client dans la fourniture
                  des éléments nécessaires.
                </p>
                <p>
                  Devko Studio s'engage à respecter les délais convenus dans la mesure du
                  possible et informera le Client sans délai de toute circonstance susceptible
                  d'affecter les délais de livraison. Les délais commencent à courir à réception
                  de l'acompte et de l'ensemble des éléments nécessaires au démarrage.
                </p>
                <p>
                  Les retards causés par le Client (fourniture tardive de contenus, délais de
                  validation prolongés, demandes de modifications hors périmètre) ne sauraient
                  engager la responsabilité de Devko Studio.
                </p>
              </LegalSection>

              <LegalSection id="obligations" title="Article 7 — Obligations des parties" delay={0.2}>
                <p className="font-semibold text-[#0F172A]">Obligations de Devko Studio :</p>
                <ul className="space-y-2 mt-2 mb-5">
                  {[
                    'Réaliser les prestations décrites dans le devis avec soin et professionnalisme',
                    'Informer le Client de l\'avancement du projet et de toute difficulté rencontrée',
                    'Respecter la confidentialité des informations transmises par le Client',
                    'Livrer des travaux conformes aux spécifications validées',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#8B5CF6] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="font-semibold text-[#0F172A]">Obligations du Client :</p>
                <ul className="space-y-2 mt-2">
                  {[
                    'Fournir dans les délais convenus tous les éléments nécessaires à la réalisation (textes, images, accès, informations)',
                    'Répondre aux demandes de validation dans un délai raisonnable (7 jours ouvrés)',
                    'Régler les factures aux échéances convenues',
                    'S\'assurer de disposer des droits nécessaires sur les contenus fournis (textes, photos, logos…)',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#06B6D4] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </LegalSection>

              <LegalSection id="propriete" title="Article 8 — Propriété intellectuelle" delay={0.22}>
                <p>
                  Jusqu'au paiement intégral de la prestation, Devko Studio conserve la
                  pleine propriété intellectuelle de l'ensemble des créations réalisées
                  (code source, maquettes, visuels, contenus produits).
                </p>
                <p>
                  Après paiement complet, le Client bénéficie d'une cession de droits
                  d'utilisation sur les livrables produits spécifiquement pour son projet,
                  pour une utilisation commerciale et personnelle, sans limitation de durée
                  ni de territoire. Le code source complet lui est remis.
                </p>
                <p>
                  Devko Studio se réserve le droit de mentionner la réalisation dans son
                  portfolio et ses supports de communication, sauf accord contraire
                  explicitement formulé par le Client.
                </p>
                <p>
                  Les ressources tierces utilisées (bibliothèques open source, polices,
                  frameworks) restent soumises à leurs licences respectives.
                </p>
              </LegalSection>

              <LegalSection id="confidentialite" title="Article 9 — Confidentialité" delay={0.24}>
                <p>
                  Devko Studio s'engage à traiter de manière confidentielle toutes les
                  informations qui lui sont communiquées par le Client dans le cadre de
                  l'exécution des prestations (données commerciales, techniques, financières,
                  accès aux systèmes, etc.).
                </p>
                <p>
                  Cette obligation de confidentialité s'étend sur toute la durée du projet
                  et persiste pendant une période de <strong className="text-[#0F172A]">3 ans</strong> après
                  la fin de la relation contractuelle. Elle ne s'applique pas aux informations
                  qui sont ou deviennent publiques sans faute du Prestataire.
                </p>
              </LegalSection>

              <LegalSection id="responsabilite" title="Article 10 — Responsabilité" delay={0.26}>
                <p>
                  Devko Studio est soumis à une obligation de moyens et non de résultat.
                  Sa responsabilité ne pourra être engagée qu'en cas de faute prouvée dans
                  l'exécution de la prestation.
                </p>
                <p>
                  En aucun cas, Devko Studio ne pourra être tenu responsable des dommages
                  indirects subis par le Client (perte de chiffre d'affaires, perte de données,
                  atteinte à l'image), ni des dommages résultant d'une mauvaise utilisation
                  des livrables ou d'informations erronées fournies par le Client.
                </p>
                <p>
                  La responsabilité totale de Devko Studio est limitée, toutes causes
                  confondues, au montant total HT de la prestation concernée.
                </p>
                <p>
                  Le Client est seul responsable des contenus qu'il publie sur son site
                  (textes, images, données personnelles) et de leur conformité à la
                  réglementation en vigueur.
                </p>
              </LegalSection>

              <LegalSection id="resiliation" title="Article 11 — Résiliation" delay={0.28}>
                <p>
                  En cas de manquement grave de l'une ou l'autre des parties à ses obligations,
                  le contrat pourra être résilié de plein droit après mise en demeure
                  restée sans effet pendant <strong className="text-[#0F172A]">15 jours</strong>.
                </p>
                <p>
                  En cas de résiliation à l'initiative du Client après démarrage des travaux,
                  les sommes déjà versées resteront acquises à Devko Studio à titre d'indemnité
                  pour le travail accompli. Un solde correspondant aux travaux réalisés jusqu'à
                  la date de résiliation pourra être facturé.
                </p>
                <p>
                  En cas de résiliation à l'initiative de Devko Studio pour non-paiement,
                  toutes les sommes dues deviennent immédiatement exigibles.
                </p>
              </LegalSection>

              <LegalSection id="litiges" title="Article 12 — Litiges & droit applicable" delay={0.3}>
                <p>
                  Les présentes CGV sont soumises au droit français. En cas de litige relatif
                  à leur interprétation ou à leur exécution, les parties s'engagent à rechercher
                  une solution amiable avant tout recours judiciaire.
                </p>
                <p>
                  À défaut d'accord amiable dans un délai de 30 jours, tout litige sera soumis
                  à la compétence exclusive des tribunaux du ressort de la Cour d'appel de
                  <strong className="text-[#0F172A]"> Aix-en-Provence</strong>, nonobstant pluralité de
                  défendeurs ou appel en garantie.
                </p>
                <p>
                  Pour les litiges avec un consommateur, ce dernier peut recourir gratuitement
                  à un médiateur de la consommation compétent en vue de la résolution amiable
                  du litige, conformément à l'article L. 616-1 du Code de la consommation.
                </p>
              </LegalSection>

              {/* CTA bas de page */}
              <motion.div {...fadeUp(0.32)} className="mt-6 p-7 bg-[#FAF9F6] rounded-2xl border border-[#E2E8F0]">
                <p className="text-sm text-[#64748B] mb-4">
                  Pour toute question relative aux présentes CGV, contactez-nous à{' '}
                  <a href="mailto:devkostudio@gmail.com" className="text-[#8B5CF6] hover:underline font-medium">
                    devkostudio@gmail.com
                  </a>.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <Link to="/mentions-legales" className="text-[#64748B] hover:text-[#8B5CF6] transition-colors underline underline-offset-2">
                    Mentions légales
                  </Link>
                  <Link to="/politique-confidentialite" className="text-[#64748B] hover:text-[#8B5CF6] transition-colors underline underline-offset-2">
                    Politique de confidentialité
                  </Link>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
