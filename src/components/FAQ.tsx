import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

const faqs = [
  {
    q: 'Do I need a credit card to start?',
    a: 'No. You can start your 14-day free trial without entering any payment details. We will only ask once you decide to upgrade.',
  },
  {
    q: 'Can I change plans later?',
    a: 'Absolutely. You can upgrade or downgrade at any time from your billing settings. Changes are prorated automatically.',
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. All data is encrypted in transit and at rest. We are SOC 2 Type II certified and GDPR compliant.',
  },
  {
    q: 'Do you offer student or non-profit discounts?',
    a: 'Yes — we offer 50% off Pro plans for verified students, educators, and registered non-profits. Reach out to our team.',
  },
  {
    q: 'What integrations are supported?',
    a: 'Nimbus integrates with 200+ tools including Slack, Linear, GitHub, Notion, Figma, and Zapier — plus a full REST + Webhooks API.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">FAQ</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="rounded-xl border border-slate-200 bg-white overflow-hidden">
                <button
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-medium text-slate-900">{f.q}</span>
                  <ChevronDown className={clsx('w-5 h-5 text-slate-500 transition-transform', isOpen && 'rotate-180')} />
                </button>
                <div className={clsx('px-5 overflow-hidden transition-all duration-300', isOpen ? 'max-h-40 pb-4' : 'max-h-0')}>
                  <p className="text-slate-600 text-sm leading-relaxed">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
