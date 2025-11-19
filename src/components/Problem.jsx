import { motion } from 'framer-motion'
import { FileWarning, ListX, MessageSquareWarning, Boxes } from 'lucide-react'

const problems = [
  { icon: FileWarning, title: 'Scattered paperwork and lost job details' },
  { icon: ListX, title: 'Manual inventory tracking and errors' },
  { icon: MessageSquareWarning, title: 'Poor customer communication and visibility' },
  { icon: Boxes, title: 'Storage management chaos across multiple facilities' },
]

export default function Problem() {
  return (
    <section id="problems" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white text-center">
          Moving Companies Struggle With...
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map(({ icon: Icon, title }, idx) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05, duration: 0.5 }} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-colors">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/20 to-emerald-500/20 text-blue-300 group-hover:from-blue-600/30 group-hover:to-emerald-500/30">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-slate-200">{title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
