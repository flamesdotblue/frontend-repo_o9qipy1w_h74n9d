import { useState } from 'react';
import { Menu, X, Rocket, Cloud, Code, Phone } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#vps', label: 'VPS Hosting', icon: Rocket },
    { href: '#cloud', label: 'Cloud', icon: Cloud },
    { href: '#software', label: 'Software', icon: Code },
    { href: '#contact', label: 'Contact', icon: Phone },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-white">
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-purple-500 to-blue-500" />
            <span className="font-semibold tracking-wide">Justvy Global Innovations</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="#vps"
              className="rounded-md bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-white shadow hover:opacity-90 transition"
            >
              Deploy Now
            </a>
          </nav>

          <button
            className="md:hidden text-gray-300"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/90">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-2">
            {navItems.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 text-gray-200 hover:text-white py-2"
              >
                <Icon className="h-5 w-5 text-purple-400" />
                {label}
              </a>
            ))}
            <a
              href="#vps"
              onClick={() => setOpen(false)}
              className="inline-flex rounded-md bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-white shadow hover:opacity-90 transition"
            >
              Deploy Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
