import { Zap, Shield, BarChart3, Workflow, Globe2, Layers } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
};

const features: Feature[] = [
  {
    icon: Zap,
    title: 'Lightning fast',
    description: 'Optimized for performance with edge delivery and instant cold-starts everywhere.',
    color: 'from-amber-400 to-orange-500',
  },
  {
    icon: Shield,
    title: 'Enterprise security',
    description: 'SOC 2 Type II, GDPR-compliant, with end-to-end encryption and SSO support.',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    icon: BarChart3,
    title: 'Powerful analytics',
    description: 'Real-time dashboards, custom funnels, and AI-driven insights at your fingertips.',
    color: 'from-indigo-400 to-violet-500',
  },
  {
    icon: Workflow,
    title: 'Automation',
    description: 'Build no-code workflows that connect to 200+ tools your team already uses.',
    color: 'from-pink-400 to-rose-500',
  },
  {
    icon: Globe2,
    title: 'Global by default',
    description: 'Deploy to 30+ regions with automatic failover and localized experiences.',
    color: 'from-sky-400 to-blue-500',
  },
  {
    icon: Layers,
    title: 'Composable',
    description: 'Pick the modules you need today, add more later. No lock-in, no rewrites.',
    color: 'from-fuchsia-400 to-purple-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Features</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Everything you need, nothing you don't
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A thoughtfully crafted toolkit that scales from solo founders to billion-dollar enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-xl hover:-translate-y-1 transition"
              >
                <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${f.color} text-white mb-4 shadow-md`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
