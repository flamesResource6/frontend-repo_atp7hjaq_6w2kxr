import { motion } from 'framer-motion'
import { ClipboardList, Users, Calendar, QrCode, Camera, FileText, CreditCard, PackageSearch, Map, Car, Calculator, MessageSquare, Bell, ShieldCheck, Palette, Globe } from 'lucide-react'

const features = [
  {
    title: 'Job Management',
    points: [
      'Create, track, and manage jobs from quote to completion',
      'Assign teams and track progress in real-time',
      'Calendar integration and scheduling',
    ],
    icon: ClipboardList,
  },
  {
    title: 'Smart Inventory System',
    points: [
      'QR code generation and scanning for items',
      'Room-by-room inventory tracking',
      'Photo documentation and condition notes',
    ],
    icon: QrCode,
  },
  {
    title: 'Customer Portal',
    points: [
      'Real-time job tracking for customers',
      'Digital estimates and approvals',
      'Invoice management and online payments',
    ],
    icon: FileText,
  },
  {
    title: 'Storage Management (Premium)',
    points: [
      'Track wooden crates, containers, and storage units',
      'Multiple facility and location support',
      'Custom naming and volume tracking',
    ],
    icon: PackageSearch,
  },
  {
    title: 'Route Planning',
    points: [
      'Google Maps integration',
      'Real-time driver tracking',
      'Optimized route calculations',
    ],
    icon: Map,
  },
  {
    title: 'Financial Management',
    points: [
      'Digital estimates and invoices',
      'Stripe Connect payments',
      'VAT/tax management, credit notes & refunds',
    ],
    icon: CreditCard,
  },
  {
    title: 'Team Collaboration',
    points: [
      'In-app chat and notifications',
      'SMS/Email alerts',
      'Role-based permissions',
    ],
    icon: MessageSquare,
  },
  {
    title: 'White-Label Ready',
    points: [
      'Custom branding and domains',
      'Email template customization',
      'Multi-tenant architecture',
    ],
    icon: Palette,
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white text-center">
          Everything you need to run your moving business
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, points, icon: Icon }, idx) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05, duration: 0.5 }} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:-translate-y-1 hover:bg-white/10 transition-all">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/20 to-emerald-500/20 text-blue-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <ul className="list-disc pl-5 text-slate-300/90 text-sm space-y-1">
                {points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
