import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Create estimate and schedule job',
    img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Track inventory with QR codes and manage storage',
    img: 'https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Complete job, invoice customer, get paid',
    img: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white text-center">
          How it works
        </motion.h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((s, idx) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05, duration: 0.5 }} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
              <img src={s.img} alt="step" className="h-56 w-full object-cover" />
              <div className="p-6">
                <p className="text-slate-200">{s.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
