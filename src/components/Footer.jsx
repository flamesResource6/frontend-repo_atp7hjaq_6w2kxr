export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-slate-300">
          <div>
            <h4 className="text-white font-semibold">Company</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Product</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#security" className="hover:text-white">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Resources</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Legal</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} MoveMate. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
