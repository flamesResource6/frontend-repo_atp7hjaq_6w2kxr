import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$49',
    period: '/month',
    highlight: false,
    features: [
      'Job management',
      'Basic inventory',
      'Customer portal',
      'Up to 5 users',
    ],
  },
  {
    name: 'Professional',
    price: '$149',
    period: '/month',
    highlight: true,
    features: [
      'Everything in Starter',
      'Advanced inventory with QR codes',
      'Route planning & driver tracking',
      'Up to 25 users',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    highlight: false,
    features: [
      'Everything in Professional',
      'Storage container management',
      'White-label branding',
      'Custom integrations',
      'Unlimited users',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white text-center">
          Simple, transparent pricing
        </motion.h2>
        <p className="text-center text-slate-300 mt-2">Add-ons available: SMS notifications, Additional storage, Priority support</p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, idx) => (
            <motion.div key={plan.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05, duration: 0.5 }} className={`rounded-2xl border border-white/10 p-6 backdrop-blur bg-white/5 ${plan.highlight ? 'ring-2 ring-emerald-400/60' : ''}`}>
              <div className="flex items-end gap-2">
                <h3 className="text-white text-xl font-semibold">{plan.name}</h3>
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                <span className="text-slate-300">{plan.period}</span>
              </div>

              <ul className="mt-6 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-200">
                    <Check className="h-5 w-5 text-emerald-400" /> {f}
                  </li>
                ))}
              </ul>

              <a href="#trial" className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 font-semibold text-white ${plan.highlight ? 'bg-gradient-to-r from-blue-600 to-emerald-500' : 'border border-blue-400/30 text-blue-100 hover:bg-blue-500/10'}`}>
                {plan.highlight ? 'Start Free Trial' : 'Choose Plan'}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
