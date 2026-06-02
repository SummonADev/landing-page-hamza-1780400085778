import { Sparkles, Github, Twitter, Linkedin } from 'lucide-react';

const columns = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Integrations', 'Changelog', 'Roadmap'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Blog', 'Press', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Docs', 'Guides', 'Help center', 'API reference', 'Status'],
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Security', 'Cookies', 'DPA'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 font-semibold text-lg text-white">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 text-white">
                <Sparkles className="w-4 h-4" />
              </span>
              Nimbus
            </a>
            <p className="mt-4 text-sm text-slate-400 max-w-xs">
              The all-in-one platform for product teams who care about craft.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-md border border-slate-700 hover:border-slate-500 inline-flex items-center justify-center">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" aria-label="GitHub" className="w-9 h-9 rounded-md border border-slate-700 hover:border-slate-500 inline-flex items-center justify-center">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-md border border-slate-700 hover:border-slate-500 inline-flex items-center justify-center">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold text-white">{c.title}</h4>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-slate-400 hover:text-white transition">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Nimbus Labs Inc. All rights reserved.</p>
          <p className="text-xs text-slate-500">Made with care for builders everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
