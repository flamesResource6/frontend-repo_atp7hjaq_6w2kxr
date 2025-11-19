import { useState } from 'react'

const faqs = [
  { q: 'What devices does it work on?', a: 'MoveMate works across iOS, Android, and any modern web browser. Field teams get a fast mobile experience while office teams use the web dashboard.' },
  { q: 'Can I customize it with my branding?', a: 'Yes. Our white-label options let you use your logo, colors, custom domains, and email templates.' },
  { q: 'How does the QR code tracking work?', a: 'Each item gets a unique QR code. Scan with the mobile app to update location, condition, photos, and notes in real-time.' },
  { q: 'Is my data secure?', a: 'We use industry-standard encryption in transit and at rest, MFA, access controls, and audit logging. We are GDPR compliant.' },
  { q: 'Can I migrate from my current system?', a: 'Absolutely. Our onboarding team helps import your customers, inventory, storage locations, and historical jobs.' },
  { q: 'What support is included?', a: 'Email support for all plans. Priority support and SLA options are available as add-ons.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="relative py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Frequently asked questions</h2>
        <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
          {faqs.map((f, idx) => (
            <div key={f.q}>
              <button className="w-full text-left px-6 py-4 text-white/90 hover:bg-white/5" onClick={() => setOpen(open === idx ? -1 : idx)}>
                {f.q}
              </button>
              {open === idx && (
                <div className="px-6 pb-4 text-slate-300">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
