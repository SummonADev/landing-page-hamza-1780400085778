export default function LogoCloud() {
  const logos = ['ACME', 'Globex', 'Initech', 'Umbrella', 'Soylent', 'Hooli'];
  return (
    <section className="py-16 border-y border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm text-slate-500 mb-8">Trusted by fast-moving teams at</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {logos.map((l) => (
            <div key={l} className="text-center text-slate-400 font-semibold tracking-widest text-lg hover:text-slate-700 transition">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
