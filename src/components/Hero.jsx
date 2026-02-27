import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useRef } from 'react'

const mobileStats = [
  { val: '15+',   label: 'Projets livrés',  sub: 'sites, apps, branding' },
  { val: '5★',    label: 'Note clients',     sub: 'satisfaction garantie' },
  { val: '3 ans', label: "d'expérience",    sub: 'en développement web'  },
]

export default function Hero() {
  const { scrollY } = useScroll()

  const secondScreenY  = useTransform(scrollY, [0, 500], [0, -300])
  const baseScreenY    = useTransform(scrollY, [0, 500], [0, -150])
  const phoneOpacity   = useTransform(scrollY, [0, 500], [1, 0])
  const contentOpacity = useTransform(scrollY, [0, 250], [1, 0])
  const bgScale        = useTransform(scrollY, [0, 250], [1, 4.2])

  const phoneRef = useRef(null)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const rotateY = useSpring(rawX, { stiffness: 150, damping: 20 })
  const rotateX = useSpring(rawY, { stiffness: 150, damping: 20 })

  function handleMouseMove(e) {
    if (!phoneRef.current) return
    const rect = phoneRef.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    rawX.set(((e.clientX - cx) / (rect.width / 2)) * 10)
    rawY.set(-((e.clientY - cy) / (rect.height / 2)) * 10)
  }

  function handleMouseLeave() {
    rawX.set(0)
    rawY.set(0)
  }

  return (
    <section className="relative w-full lg:h-screen lg:overflow-hidden">

      {/* ══════════════════════════════════════════
          MOBILE
      ══════════════════════════════════════════ */}
      <div className="lg:hidden relative bg-[#FAF9F6] min-h-screen overflow-hidden">

        {/* bggg en fond — zoom au scroll comme desktop */}
        <motion.div
          style={{ backgroundImage: 'url(/assets/images/bggg.webp)', scale: bgScale, transformOrigin: 'center center' }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.45] will-change-transform"
        />

        <div className="relative z-10 pt-24 pb-12 px-6 flex flex-col justify-start">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-px bg-accent-violet" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent-violet">
              Devko Studio — Cannes, France
            </span>
          </motion.div>

          {/* Titre mask-reveal — une seule ligne */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: '108%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.82, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-[2.6rem] font-black leading-[1.05]"
            >
              <span style={{ color: '#0F172A', fontFamily: '"Permanent Marker", cursive' }}>Devko </span>
              <span style={{ color: '#0F172A', fontFamily: '"Permanent Marker", cursive' }}>Studio</span>
            </motion.h1>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.6 }}
            className="text-base font-semibold text-text-secondary mb-3"
          >
            Développement créatif d'applications et sites web
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.46, duration: 0.6 }}
            className="text-[14px] leading-relaxed text-text-secondary mb-8 max-w-sm"
          >
            Je transforme vos idées en expériences digitales performantes et mémorables,
            alliant créativité technique et design moderne.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52, duration: 0.6 }}
            className="grid grid-cols-3 border-t border-gray-200 pt-6 mb-8"
          >
            {mobileStats.map((s, i) => (
              <div
                key={i}
                className={i < 2 ? 'border-r border-gray-200 pr-4' : 'pl-4'}
              >
                <div className="text-2xl font-black text-text-primary">{s.val}</div>
                <div className="text-[11px] font-semibold text-text-primary mb-0.5">{s.label}</div>
                <div className="text-[10px] text-text-secondary leading-tight">{s.sub}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA unique */}
          <motion.a
            href="/#contact"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-accent-violet to-accent-blue px-8 py-4 font-semibold text-white text-center shadow-lg shadow-accent-violet/30 transition-all duration-300 hover:shadow-accent-violet/50"
          >
            <span className="relative z-10">Devis gratuit</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-violet opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.a>

        </div>
      </div>

      {/* ══════════════════════════════════════════
          DESKTOP
      ══════════════════════════════════════════ */}
      <div className="hidden lg:block">

        {/* Background */}
        <motion.div
          style={{ scale: bgScale, backgroundImage: 'url(/assets/images/bggg.webp)', transformOrigin: 'center center' }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        />

        {/* Fondu bas au scroll */}
        <motion.div style={{ opacity: contentOpacity }} className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background via-background/60 to-transparent backdrop-blur-sm" />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

        <div className="h-screen w-full flex items-center overflow-hidden relative z-10">

          {/* Phone Exploded View */}
          {/* div de positionnement — jamais touché par Framer Motion */}
          <div
            className="absolute left-28 top-1/2 -translate-y-[55%] w-[400px] h-[800px] z-30"
            style={{ perspective: '1000px' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* motion.div pour l'opacité + tilt uniquement */}
            <motion.div
              ref={phoneRef}
              style={{ opacity: phoneOpacity, rotateX, rotateY }}
              className="relative w-full h-full"
            >
              <img
                src="/assets/images/basephone2.png"
                alt="Phone frame"
                fetchPriority="high"
                className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
              />
              <motion.img
                src="/assets/images/BaseScreen1.webp"
                alt="Base screen"
                style={{ y: baseScreenY }}
                className="absolute inset-0 w-[92.6%] h-[95%] left-[5.4%] top-[1.6%] object-contain drop-shadow-2xl z-40"
              />
              <motion.img
                src="/assets/images/contenuu.webp"
                alt="Second screen"
                style={{ y: secondScreenY }}
                className="absolute inset-0 w-[90%] h-[98%] left-[8%] top-[2%] object-contain drop-shadow-2xl z-50"
              />
            </motion.div>
          </div>

          {/* Texte desktop */}
          <div className="container mx-auto px-1 relative z-20 h-full flex items-center justify-end">
            <div className="flex flex-col items-start text-left max-w-xl mr-16 -mt-24 gap-4">

              {/* Titre — même style que mobile */}
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: '108%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.82, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                  style={{ opacity: contentOpacity }}
                  className="text-6xl font-black leading-[1.05]"
                >
                  <span style={{ color: '#0F172A', fontFamily: '"Permanent Marker", cursive' }}>Devko </span>
                  <span style={{ color: '#0F172A', fontFamily: '"Permanent Marker", cursive' }}>Studio</span>
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                style={{ opacity: contentOpacity }}
                className="text-xl font-semibold text-text-secondary"
              >
                Développement créatif d'applications et sites web
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38, duration: 0.6 }}
                style={{ opacity: contentOpacity }}
                className="text-base leading-relaxed text-text-secondary"
              >
                Je transforme vos idées en expériences digitales performantes et mémorables,
                alliant créativité technique et design moderne.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.46, duration: 0.6 }}
                style={{ opacity: contentOpacity }}
                className="flex gap-3 mt-2"
              >
                <a
                  href="/#projects"
                  className="group relative overflow-hidden rounded-lg bg-accent-violet px-8 py-4 font-semibold text-white transition-all hover:shadow-lg hover:shadow-accent-violet/50"
                >
                  <span className="relative z-10">Voir mes projets</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-violet opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
                <a
                  href="/#contact"
                  className="rounded-lg border-2 border-accent-violet px-8 py-4 font-semibold text-accent-violet transition-all hover:bg-accent-violet hover:text-white"
                >
                  Me contacter
                </a>
              </motion.div>

            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            style={{ opacity: contentOpacity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-text-secondary">Scroll</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="h-12 w-6 rounded-full border-2 border-accent-violet p-1"
              >
                <div className="h-2 w-2 rounded-full bg-accent-violet" />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  )
}
