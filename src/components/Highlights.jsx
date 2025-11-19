import { motion } from 'framer-motion'

const highlights = [
  {
    title: 'Mobile-First Design',
    subtitle: 'Work from anywhere - iOS, Android, and Web',
    img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop',
    align: 'left',
  },
  {
    title: 'QR Code Tracking',
    subtitle: 'Scan, track, and locate any item instantly',
    img: 'https://images.unsplash.com/photo-1600267175041-557aeef8f919?q=80&w=1200&auto=format&fit=crop',
    align: 'right',
  },
  {
    title: 'Real-Time Updates',
    subtitle: 'Keep customers informed with live tracking',
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
    align: 'left',
  },
  {
    title: 'Flexible Storage',
    subtitle: 'Manage containers, facilities, and inventory locations',
    img: 'https://images.unsplash.com/photo-1586521995568-39ccb4090354?q=80&w=1200&auto=format&fit=crop',
    align: 'right',
  },
]

export default function Highlights() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {highlights.map((h, idx) => (
          <div key={h.title} className={`grid gap-8 items-center lg:grid-cols-2 ${h.align === 'right' ? 'lg:[&>*:first-child]:order-2' : ''}`}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <img src={h.img} alt={h.title} className="w-full h-80 object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }}>
              <h3 className="text-2xl font-semibold text-white">{h.title}</h3>
              <p className="mt-3 text-slate-300">{h.subtitle}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
