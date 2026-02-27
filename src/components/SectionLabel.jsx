export default function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-6 h-px bg-violet-500" />
      <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-500">
        {children}
      </span>
    </div>
  )
}
