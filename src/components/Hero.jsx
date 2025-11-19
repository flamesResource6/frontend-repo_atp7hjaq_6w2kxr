import { motion } from 'framer-motion'
import { ShieldCheck, ScanLine, Smartphone } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-50%,rgba(56,189,248,0.25),transparent)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              The Complete Moving Management Platform for Modern Companies
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-6 text-lg text-slate-300">
              From estimates to delivery, manage jobs, inventory, customers, and teams in one powerful mobile-first platform.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#trial" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-600/30 hover:brightness-110">
                Start Free Trial
              </a>
              <a href="#demo" className="inline-flex items-center justify-center rounded-xl border border-blue-400/30 px-6 py-3 text-base text-blue-100 hover:bg-blue-500/10">
                Schedule Demo
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }} className="mt-8 flex items-center gap-6 text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
                <span>Trusted by 500+ moving companies worldwide</span>
              </div>
            </motion.div>

            <div className="mt-6 flex items-center gap-6 opacity-80">
              <img src="https://cdn.simpleicons.org/stripe/fff" alt="Stripe" className="h-6" />
              <img src="https://cdn.simpleicons.org/googlemaps/fff" alt="Google Maps" className="h-6" />
              <img src="https://cdn.simpleicons.org/googlecalendar/fff" alt="Google Calendar" className="h-6" />
              <img src="https://cdn.simpleicons.org/twilio/fff" alt="Twilio" className="h-6" />
            </div>
          </div>

          <div className="relative">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative mx-auto max-w-md">
              <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-blue-500/30 to-emerald-400/30 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-slate-900 p-4 shadow-2xl">
                <div className="rounded-[1.5rem] bg-slate-800 p-4">
                  <div className="relative aspect-[9/19] overflow-hidden rounded-[1.25rem] border border-white/10">
                    <img src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1200&auto=format&fit=crop" alt="App mockup" className="h-full w-full object-cover" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/80 to-transparent p-4 text-slate-100">
                      <div className="flex items-center gap-2">
                        <Smartphone className="h-4 w-4 text-emerald-300" />
                        <p className="text-sm">Real-time updates • Job tracking • QR scanning</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  )
}
