import { motion } from 'framer-motion'

const logos = [
  { name: 'Stripe', url: 'https://cdn.simpleicons.org/stripe/60a5fa' },
  { name: 'Google Maps', url: 'https://cdn.simpleicons.org/googlemaps/60a5fa' },
  { name: 'Google Calendar', url: 'https://cdn.simpleicons.org/googlecalendar/60a5fa' },
  { name: 'Twilio', url: 'https://cdn.simpleicons.org/twilio/60a5fa' },
  { name: 'Gmail', url: 'https://cdn.simpleicons.org/gmail/60a5fa' },
  { name: 'RevenueCat', url: 'https://cdn.simpleicons.org/revenuecat/60a5fa' },
]

export default function Integrations() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center text-slate-300">
          Integrates with your favorite tools
        </motion.h3>
        <div className="mt-6 grid grid-cols-3 sm:grid-cols-6 gap-6 items-center opacity-90">
          {logos.map((l) => (
            <img key={l.name} src={l.url} alt={l.name} className="h-8 mx-auto" />
          ))}
        </div>
      </div>
    </section>
  )
}
