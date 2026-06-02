import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CTA() {
  const [email, setEmail] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section id="cta" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 px-8 py-16 md:px-16 md:py-20 text-center">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-pink-500/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-indigo-500/20 blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Ready to ship faster?
            </h2>
            <p className="mt-4 text-lg text-slate-300 max-w-xl mx-auto">
              Join 50,000+ teams already building the future with Nimbus. Start your free trial today.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-slate-900 font-medium hover:bg-slate-100 transition"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Subscribed!
                  </>
                ) : (
                  <>
                    Get started <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
            <p className="mt-4 text-xs text-slate-400">14-day free trial · No credit card required</p>
          </div>
        </div>
      </div>
    </section>
  );
}
