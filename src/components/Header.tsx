import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import clsx from 'clsx';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-lg">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 text-white">
            <Sparkles className="w-4 h-4" />
          </span>
          <span>Nimbus</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-slate-600 hover:text-slate-900 transition">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm font-medium text-slate-700 hover:text-slate-900">Sign in</a>
          <a
            href="#cta"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition shadow-sm"
          >
            Get started
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <div
        className={clsx(
          'md:hidden overflow-hidden transition-all duration-300 border-t border-slate-200/60 bg-white',
          open ? 'max-h-80' : 'max-h-0'
        )}
      >
        <div className="px-6 py-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-slate-700 py-1" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#cta" className="mt-2 inline-flex justify-center px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium">
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}
