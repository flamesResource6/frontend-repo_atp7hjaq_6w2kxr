import { useState } from 'react'
import { Menu, X, Layers, ShieldCheck, LineChart } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Security', href: '#security' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-400 grid place-items-center shadow-lg shadow-blue-500/20">
                <Layers className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold leading-tight">MoveMate</p>
                <p className="text-[10px] text-blue-200/70 -mt-1">Streamline Your Moving Business</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#demo" className="inline-flex items-center gap-2 rounded-xl border border-blue-400/30 px-4 py-2 text-sm text-blue-100 hover:bg-blue-500/10 transition-colors">
                <ShieldCheck className="h-4 w-4" />
                Schedule Demo
              </a>
              <a href="#trial" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/30">
                <LineChart className="h-4 w-4" />
                Start Free Trial
              </a>
            </div>

            <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-slate-200 hover:bg-white/5">
                    {item.label}
                  </a>
                ))}
                <a href="#trial" className="rounded-lg bg-gradient-to-r from-blue-600 to-emerald-500 px-3 py-2 text-center font-semibold text-white">Start Free Trial</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
