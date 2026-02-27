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
  { id: 'editeur', label: 'Éditeur du site' },
  { id: 'directeur', label: 'Directeur de publication' },
  { id: 'hebergement', label: 'Hébergement' },
  { id: 'propriete-intellectuelle', label: 'Propriété intellectuelle' },
  { id: 'responsabilite', label: 'Responsabilité' },
  { id: 'liens', label: 'Liens hypertextes' },
  { id: 'cookies', label: 'Cookies' },
  { id: 'droit-applicable', label: 'Droit applicable' },
]

export default function MentionsLegales() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans">
      <SEOMeta
        title="Mentions légales"
        description="Mentions légales de Devko Studio, agence web à Cannes. Informations légales, hébergeur, propriété intellectuelle et responsabilité."
        path="/mentions-legales"
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
            <SectionLabel>Informations légales</SectionLabel>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-5 leading-tight"
            {...fadeUp(0.14)}
          >
            Mentions légales
          </motion.h1>

          <motion.p
            className="text-[#64748B] text-base max-w-2xl leading-relaxed"
            {...fadeUp(0.2)}
          >
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la Confiance
            dans l'Économie Numérique (LCEN), les informations suivantes sont portées à la
            connaissance des utilisateurs du site{' '}
            <a
              href="https://devkostudio.com"
              className="text-violet-600 hover:text-violet-700 transition-colors"
            >
              devkostudio.com
            </a>
            .
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

          {/* 1. Éditeur */}
          <LegalSection id="editeur" title="1. Éditeur du site" delay={0.1}>
            <p>
              Le site <strong className="text-[#0F172A]">devkostudio.com</strong> est édité par :
            </p>
            <div className="bg-white rounded-xl border border-[#E2E8F0] p-5 mt-4 space-y-2 text-sm">
              <div className="flex gap-3">
                <span className="w-40 shrink-0 text-[#94A3B8] font-medium">Nom commercial</span>
                <span className="text-[#0F172A] font-semibold">Devko Studio</span>
              </div>
              <div className="border-t border-[#F1F5F9]" />
              <div className="flex gap-3">
                <span className="w-40 shrink-0 text-[#94A3B8] font-medium">Statut juridique</span>
                <span>Auto-entrepreneur (micro-entrepreneur)</span>
              </div>
              <div className="border-t border-[#F1F5F9]" />
              <div className="flex gap-3">
                <span className="w-40 shrink-0 text-[#94A3B8] font-medium">SIRET</span>
                <span>En cours d'immatriculation</span>
              </div>
              <div className="border-t border-[#F1F5F9]" />
              <div className="flex gap-3">
                <span className="w-40 shrink-0 text-[#94A3B8] font-medium">Adresse</span>
                <span>Cannes, 06400, Alpes-Maritimes, France</span>
              </div>
              <div className="border-t border-[#F1F5F9]" />
              <div className="flex gap-3">
                <span className="w-40 shrink-0 text-[#94A3B8] font-medium">Email</span>
                <a
                  href="mailto:devkostudio@gmail.com"
                  className="text-violet-600 hover:text-violet-700 transition-colors"
                >
                  devkostudio@gmail.com
                </a>
              </div>
              <div className="border-t border-[#F1F5F9]" />
              <div className="flex gap-3">
                <span className="w-40 shrink-0 text-[#94A3B8] font-medium">Site web</span>
                <a
                  href="https://devkostudio.com"
                  className="text-violet-600 hover:text-violet-700 transition-colors"
                >
                  devkostudio.com
                </a>
              </div>
            </div>
          </LegalSection>

          {/* 2. Directeur de publication */}
          <LegalSection id="directeur" title="2. Directeur de publication" delay={0.12}>
            <p>
              Le directeur de la publication du site{' '}
              <strong className="text-[#0F172A]">devkostudio.com</strong> est le représentant
              légal de Devko Studio, joignable à l'adresse suivante :{' '}
              <a
                href="mailto:devkostudio@gmail.com"
                className="text-violet-600 hover:text-violet-700 transition-colors"
              >
                devkostudio@gmail.com
              </a>
              .
            </p>
          </LegalSection>

          {/* 3. Hébergement */}
          <LegalSection id="hebergement" title="3. Hébergement" delay={0.14}>
            <p>Le site est hébergé par :</p>
            <div className="bg-white rounded-xl border border-[#E2E8F0] p-5 mt-4 space-y-2 text-sm">
              <div className="flex gap-3">
                <span className="w-40 shrink-0 text-[#94A3B8] font-medium">Prestataire</span>
                <span className="text-[#0F172A] font-semibold">Vercel Inc.</span>
              </div>
              <div className="border-t border-[#F1F5F9]" />
              <div className="flex gap-3">
                <span className="w-40 shrink-0 text-[#94A3B8] font-medium">Adresse</span>
                <span>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</span>
              </div>
              <div className="border-t border-[#F1F5F9]" />
              <div className="flex gap-3">
                <span className="w-40 shrink-0 text-[#94A3B8] font-medium">Site</span>
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-600 hover:text-violet-700 transition-colors"
                >
                  vercel.com
                </a>
              </div>
            </div>
          </LegalSection>

          {/* 4. Propriété intellectuelle */}
          <LegalSection id="propriete-intellectuelle" title="4. Propriété intellectuelle" delay={0.16}>
            <p>
              L'ensemble des éléments constituant le site{' '}
              <strong className="text-[#0F172A]">devkostudio.com</strong> (textes, graphismes,
              logiciels, photographies, images, sons, plans, noms, logos, marques, créations et
              œuvres protégeables diverses, bases de données…) est la propriété exclusive de
              Devko Studio ou de tiers ayant autorisé Devko Studio à les utiliser.
            </p>
            <p>
              Ces éléments sont protégés par les lois françaises et internationales relatives à
              la propriété intellectuelle. Toute reproduction, représentation, utilisation,
              adaptation ou modification, même partielle, par quelque procédé que ce soit, sans
              l'autorisation préalable et écrite de Devko Studio, est strictement interdite et
              constitue une contrefaçon sanctionnée par les articles L. 335-2 et suivants du
              Code de la propriété intellectuelle.
            </p>
            <p>
              Pour toute demande d'autorisation ou d'information, veuillez contacter :{' '}
              <a
                href="mailto:devkostudio@gmail.com"
                className="text-violet-600 hover:text-violet-700 transition-colors"
              >
                devkostudio@gmail.com
              </a>
              .
            </p>
          </LegalSection>

          {/* 5. Responsabilité */}
          <LegalSection id="responsabilite" title="5. Limitation de responsabilité" delay={0.18}>
            <p>
              Devko Studio s'efforce de fournir sur ce site des informations aussi précises que
              possible. Toutefois, Devko Studio ne pourra être tenu responsable des omissions,
              inexactitudes et carences dans la mise à jour, qu'elles soient de son fait ou du
              fait des tiers partenaires qui lui fournissent ces informations.
            </p>
            <p>
              Tous les informations indiquées sur le site{' '}
              <strong className="text-[#0F172A]">devkostudio.com</strong> sont données à titre
              indicatif et sont susceptibles d'évoluer. Par ailleurs, les renseignements figurant
              sur le site ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications
              ayant été apportées depuis leur mise en ligne.
            </p>
            <p>
              Devko Studio ne peut être tenu responsable des dommages directs et indirects causés
              au matériel de l'utilisateur, lors de l'accès au site, résultant soit de
              l'utilisation d'un matériel ne répondant pas aux spécifications techniques requises,
              soit de l'apparition d'un bug ou d'une incompatibilité.
            </p>
          </LegalSection>

          {/* 6. Liens hypertextes */}
          <LegalSection id="liens" title="6. Liens hypertextes" delay={0.2}>
            <p>
              Le site <strong className="text-[#0F172A]">devkostudio.com</strong> peut contenir
              des liens hypertextes vers d'autres sites présents sur le réseau Internet. Ces
              liens sont mis en place dans l'intérêt des utilisateurs et ne sauraient valoir
              approbation par Devko Studio des contenus de ces sites.
            </p>
            <p>
              Devko Studio n'a pas la possibilité de vérifier le contenu des sites ainsi
              visités et décline donc toute responsabilité de ce fait quant aux risques éventuels
              de contenus illicites.
            </p>
            <p>
              La création de liens hypertextes vers le site{' '}
              <strong className="text-[#0F172A]">devkostudio.com</strong> nécessite une
              autorisation préalable écrite de Devko Studio. Pour toute demande, contactez :{' '}
              <a
                href="mailto:devkostudio@gmail.com"
                className="text-violet-600 hover:text-violet-700 transition-colors"
              >
                devkostudio@gmail.com
              </a>
              .
            </p>
          </LegalSection>

          {/* 7. Cookies */}
          <LegalSection id="cookies" title="7. Cookies" delay={0.22}>
            <p>
              Un cookie est un fichier texte susceptible d'être enregistré dans un espace dédié
              sur le disque dur de votre terminal, à l'occasion de la consultation d'un service
              en ligne grâce à votre logiciel de navigation.
            </p>
            <p>
              Le site <strong className="text-[#0F172A]">devkostudio.com</strong> n'utilise
              pas de cookies de traçage ou de profilage à des fins publicitaires ou
              statistiques tiers. Seuls des cookies strictement nécessaires au bon
              fonctionnement du site (navigation, préférences techniques) peuvent être déposés.
              Ces derniers ne nécessitent pas votre consentement préalable conformément à
              l'article 82 de la loi Informatique et Libertés.
            </p>
            <p>
              Vous pouvez à tout moment désactiver les cookies en configurant votre navigateur.
              La désactivation des cookies peut toutefois altérer l'expérience de navigation sur
              le site. Pour en savoir plus, consultez notre{' '}
              <Link
                to="/politique-confidentialite"
                className="text-violet-600 hover:text-violet-700 transition-colors"
              >
                Politique de confidentialité
              </Link>
              .
            </p>
          </LegalSection>

          {/* 8. Droit applicable */}
          <LegalSection id="droit-applicable" title="8. Droit applicable et juridiction" delay={0.24}>
            <p>
              Le présent site et les présentes mentions légales sont régis par le droit français.
              En cas de litige et à défaut d'accord amiable, le litige sera porté devant les
              tribunaux compétents du ressort de Cannes (Alpes-Maritimes), France, auxquels les
              parties attributent expressément compétence, nonobstant pluralité de défendeurs ou
              appel en garantie.
            </p>
            <p>
              Pour toute question relative au présent site, vous pouvez nous contacter à
              l'adresse suivante :{' '}
              <a
                href="mailto:devkostudio@gmail.com"
                className="text-violet-600 hover:text-violet-700 transition-colors"
              >
                devkostudio@gmail.com
              </a>
              .
            </p>

            {/* Lien vers politique de confidentialité */}
            <div className="mt-8 p-5 bg-violet-50 border border-violet-100 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-[#0F172A] text-sm mb-1">
                  Protection de vos données personnelles
                </p>
                <p className="text-sm text-[#64748B]">
                  Consultez notre politique de confidentialité pour en savoir plus sur le
                  traitement de vos données.
                </p>
              </div>
              <Link
                to="/politique-confidentialite"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-600 to-violet-500 text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300"
              >
                Voir la politique
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
