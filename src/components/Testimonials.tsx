import { Quote } from 'lucide-react';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  color: string;
};

const testimonials: Testimonial[] = [
  {
    quote: 'Nimbus transformed how our team ships. We went from monthly releases to multiple deploys per day in under a quarter.',
    name: 'Sarah Chen',
    role: 'CTO, Lumen Labs',
    initials: 'SC',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    quote: "It's the rare product that's both delightful for designers and powerful enough for our platform team.",
    name: 'Marcus Rivera',
    role: 'Head of Product, Stride',
    initials: 'MR',
    color: 'from-pink-500 to-rose-500',
  },
  {
    quote: 'The analytics alone paid for the whole stack. We discovered a 23% drop-off we had no idea existed.',
    name: 'Priya Anand',
    role: 'Growth Lead, Vector',
    initials: 'PA',
    color: 'from-amber-500 to-orange-500',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Loved by teams</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Don't take our word for it
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
              <Quote className="w-6 h-6 text-indigo-500 mb-4" />
              <blockquote className="text-slate-700 leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} text-white flex items-center justify-center text-sm font-semibold`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
