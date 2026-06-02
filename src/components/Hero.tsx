import { ArrowRight, Play, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-grid relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-medium text-slate-700 mb-6">
          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          New: AI-powered analytics is live
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.05]">
          Ship faster with a platform <span className="gradient-text">built for makers</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
          Nimbus brings together everything your team needs to design, build, and grow modern products — from idea to launch and beyond.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#cta"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition shadow-lg shadow-slate-900/10"
          >
            Start free trial <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white border border-slate-200 text-slate-900 font-medium hover:bg-slate-50 transition"
          >
            <Play className="w-4 h-4" /> Watch demo
          </a>
        </div>

        <p className="mt-4 text-xs text-slate-500">No credit card required · 14-day free trial</p>

        <div className="mt-16 relative max-w-5xl mx-auto">
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-pink-500/20 to-amber-500/20 blur-2xl rounded-3xl" />
          <div className="relative rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-200 bg-slate-50">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="ml-3 text-xs text-slate-500">app.nimbus.io/dashboard</span>
            </div>
            <div className="grid grid-cols-12 gap-4 p-6 bg-gradient-to-br from-white to-slate-50">
              <div className="col-span-3 space-y-3">
                {['Overview', 'Projects', 'Analytics', 'Team', 'Settings'].map((item, i) => (
                  <div
                    key={item}
                    className={`px-3 py-2 rounded-md text-sm ${i === 0 ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="col-span-9 space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Active users', value: '12,483', delta: '+12.4%' },
                    { label: 'Revenue', value: '$48,290', delta: '+8.1%' },
                    { label: 'Conversion', value: '3.2%', delta: '+0.6%' },
                  ].map((c) => (
                    <div key={c.label} className="rounded-lg border border-slate-200 p-4 text-left bg-white">
                      <div className="text-xs text-slate-500">{c.label}</div>
                      <div className="text-xl font-semibold mt-1 text-slate-900">{c.value}</div>
                      <div className="text-xs text-emerald-600 mt-1">{c.delta}</div>
                    </div>
                  ))}
                </div>
                <div className="rounded-lg border border-slate-200 p-4 bg-white h-40 flex items-end gap-2">
                  {[40, 65, 50, 80, 60, 95, 70, 85, 55, 90, 75, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-indigo-500 to-pink-500"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
