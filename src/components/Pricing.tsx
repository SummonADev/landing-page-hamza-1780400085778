import { Check } from 'lucide-react';
import clsx from 'clsx';

type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: 'Starter',
    price: '$0',
    period: '/mo',
    description: 'For individuals exploring what Nimbus can do.',
    features: ['Up to 3 projects', 'Community support', 'Basic analytics', '1 team member'],
    cta: 'Get started',
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/mo',
    description: 'For growing teams that need more power.',
    features: ['Unlimited projects', 'Priority support', 'Advanced analytics', 'Up to 10 team members', 'Custom integrations'],
    cta: 'Start free trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For organizations with advanced needs.',
    features: ['Everything in Pro', 'SSO & SAML', 'Dedicated success manager', 'SLA & audit logs', 'Custom contracts'],
    cta: 'Contact sales',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Pricing</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-slate-600">Start free. Upgrade when you're ready.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={clsx(
                'rounded-2xl p-8 border flex flex-col',
                p.highlighted
                  ? 'border-slate-900 bg-slate-900 text-white shadow-2xl scale-[1.02]'
                  : 'border-slate-200 bg-white text-slate-900'
              )}
            >
              {p.highlighted && (
                <span className="inline-block self-start px-2.5 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white mb-3">
                  Most popular
                </span>
              )}
              <h3 className={clsx('text-xl font-semibold', p.highlighted ? 'text-white' : 'text-slate-900')}>
                {p.name}
              </h3>
              <p className={clsx('mt-1 text-sm', p.highlighted ? 'text-slate-300' : 'text-slate-600')}>
                {p.description}
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{p.price}</span>
                <span className={clsx('text-sm', p.highlighted ? 'text-slate-300' : 'text-slate-500')}>
                  {p.period}
                </span>
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={clsx('w-4 h-4 mt-0.5 shrink-0', p.highlighted ? 'text-emerald-400' : 'text-emerald-600')} />
                    <span className={p.highlighted ? 'text-slate-200' : 'text-slate-700'}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={clsx(
                  'mt-8 inline-flex justify-center px-4 py-2.5 rounded-lg font-medium text-sm transition',
                  p.highlighted
                    ? 'bg-white text-slate-900 hover:bg-slate-100'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                )}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
