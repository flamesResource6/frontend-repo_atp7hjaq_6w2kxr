import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'MoveMate cut our job tracking time by 60% and gave our customers real-time visibility. Our team loves the mobile app.',
    author: 'Sarah Thompson',
    role: 'Operations Manager, SwiftMove',
    avatar: 'https://i.pravatar.cc/100?img=5',
    logo: 'https://dummyimage.com/80x24/ffffff/000000&text=SwiftMove',
  },
  {
    quote: 'The QR code inventory system is a game changer. Lost items are a thing of the past and audits take minutes, not hours.',
    author: 'Miguel Alvarez',
    role: 'Warehouse Lead, Pack&Store',
    avatar: 'https://i.pravatar.cc/100?img=12',
    logo: 'https://dummyimage.com/80x24/ffffff/000000&text=Pack&Store',
  },
  {
    quote: 'Being able to brand the platform as our own helped us win enterprise clients. MoveMate replaces 4 tools for us.',
    author: 'Emily Carter',
    role: 'CEO, Atlas Logistics',
    avatar: 'https://i.pravatar.cc/100?img=32',
    logo: 'https://dummyimage.com/80x24/ffffff/000000&text=Atlas',
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white text-center">
          Loved by modern moving teams
        </motion.h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.div key={t.author} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05, duration: 0.5 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.author} className="h-12 w-12 rounded-full" />
                <div>
                  <p className="text-white font-medium">{t.author}</p>
                  <p className="text-slate-300 text-sm">{t.role}</p>
                </div>
              </div>
              <p className="mt-4 text-slate-200">“{t.quote}”</p>
              <img src={t.logo} alt={t.role} className="mt-6 opacity-80" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
