import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section id="trial" className="relative py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-extrabold text-white">
          Ready to Transform Your Moving Business?
        </motion.h2>
        <p className="mt-3 text-slate-300">Join hundreds of companies managing thousands of moves with MoveMate</p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-600/30 hover:brightness-110">
            Start Your Free 14-Day Trial
          </a>
          <a href="#demo" className="inline-flex items-center justify-center rounded-xl border border-blue-400/30 px-6 py-3 text-base text-blue-100 hover:bg-blue-500/10">
            Talk to Sales
          </a>
        </div>
        <div className="mt-4 text-sm text-slate-400">Money-back guarantee • Cancel anytime • Free onboarding</div>
      </div>
    </section>
  )
}
