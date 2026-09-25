import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="forge-aurora" aria-hidden="true"></div>
        <p className="text-[var(--accent)] font-semibold tracking-wide uppercase text-sm mb-6 forge-rise">
          Platform live · scored challenges on real simulators
        </p>
        <h1 className="forge-display mb-8 forge-rise" style={{ animationDelay: '0.1s' }}>
          Become the quantum engineer<br />
          <span className="forge-heat-text">the industry needs.</span>
        </h1>
        <p className="text-[var(--fg-muted)] max-w-2xl text-lg mb-10 forge-rise" style={{ animationDelay: '0.2s' }}>
          Roles are being created faster than engineers can fill them. Write real circuits, get them executed, and earn ranked proof you can carry.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-16 forge-rise w-full max-w-md" style={{ animationDelay: '0.3s' }}>
          <form className="flex w-full gap-2 flex-col sm:flex-row">
            <input 
              className="forge-hero-input flex-1 bg-black/40 backdrop-blur-sm" 
              type="email" 
              placeholder="Enter your email" 
              required 
            />
            <button type="submit" className="forge-cta justify-center">
              Create Account
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </button>
          </form>
        </div>
        
        {/* Trust Indicators */}
        <div className="flex items-center gap-8 text-sm forge-rise" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col"><span className="text-[var(--fg)] font-bold">Free</span><span className="text-[var(--fg-faint)]">To start</span></div>
          <div className="w-px h-8 bg-[var(--border-neutral)]"></div>
          <div className="flex flex-col"><span className="text-[var(--fg)] font-bold">Live</span><span className="text-[var(--fg-faint)]">Circuit execution</span></div>
          <div className="w-px h-8 bg-[var(--border-neutral)]"></div>
          <div className="flex flex-col"><span className="text-[var(--fg)] font-bold">Ranked</span><span className="text-[var(--fg-faint)]">Objective scoring</span></div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-24 bg-[var(--bg-alt)] border-y border-[var(--border-neutral)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          
          {/* Feature 1 */}
          <article className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-6">
              <span className="text-[var(--rune)] uppercase tracking-widest text-xs font-bold text-[var(--forge-rune)]">The library</span>
              <h2 className="forge-display text-4xl">Choose where to begin.</h2>
              <p className="text-[var(--fg-muted)] text-lg">A living catalogue of quantum problems, sorted Novice to Master. Start where you stand today and climb at your own pace, one circuit at a time.</p>
              <ul className="flex gap-6 text-[var(--accent)] text-sm font-semibold uppercase tracking-wide pt-4">
                <li>• 120+ challenges</li>
                <li>• Three tiers</li>
              </ul>
            </div>
            <div className="flex-1 w-full bg-[var(--surface)] rounded-xl border border-[var(--border-neutral)] overflow-hidden aspect-video relative flex items-center justify-center text-[var(--fg-faint)]">
              {/* Placeholder for Challenge Library Image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--surface-2)] to-[var(--surface)] opacity-50"></div>
              <span>[ Library Image Mockup ]</span>
            </div>
          </article>

          {/* Feature 2 */}
          <article className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="flex-1 space-y-6">
              <span className="text-[var(--rune)] uppercase tracking-widest text-xs font-bold text-[var(--forge-rune)]">The editor</span>
              <h2 className="forge-display text-4xl">Write circuits that actually run.</h2>
              <p className="text-[var(--fg-muted)] text-lg">Real code in a real editor, executed on a quantum simulator and scored on correctness and efficiency. No multiple choice, no hand-waving, just the circuit you wrote.</p>
              <ul className="flex gap-6 text-[var(--accent)] text-sm font-semibold uppercase tracking-wide pt-4">
                <li>• Live execution</li>
                <li>• Scored on merit</li>
              </ul>
            </div>
            <div className="flex-1 w-full bg-[var(--surface)] rounded-xl border border-[var(--border-neutral)] overflow-hidden aspect-video relative flex items-center justify-center text-[var(--fg-faint)]">
              {/* Placeholder for Editor Image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--surface-2)] to-[var(--surface)] opacity-50"></div>
              <span>[ Code Editor Mockup ]</span>
            </div>
          </article>

        </div>
      </section>

      {/* Runic Sequence */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <article className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border border-[var(--border)] flex items-center justify-center mb-6 text-[var(--accent)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 3 L7 12 L17 21"></path></svg>
            </div>
            <h3 className="forge-heat-text text-xl font-bold uppercase tracking-widest mb-4">Build</h3>
            <p className="text-[var(--fg-muted)]">Progressive problems with real constraints. The quantum circuit you actually write is executed and scored.</p>
          </article>
          
          <article className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border border-[var(--border)] flex items-center justify-center mb-6 text-[var(--accent)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22 L12 4 M6 10 L12 4 L18 10"></path></svg>
            </div>
            <h3 className="forge-heat-text text-xl font-bold uppercase tracking-widest mb-4">Rank</h3>
            <p className="text-[var(--fg-muted)]">A live leaderboard shows exactly how you stack up. Every challenge is scored the same way for everyone.</p>
          </article>

          <article className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border border-[var(--border)] flex items-center justify-center mb-6 text-[var(--accent)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3 L18 9 L12 15 L6 9 Z M9 13 L6 21 M15 13 L18 21"></path></svg>
            </div>
            <h3 className="forge-heat-text text-xl font-bold uppercase tracking-widest mb-4">Prove</h3>
            <p className="text-[var(--fg-muted)]">Verified medals tied to your actual performance become a portable credential.</p>
          </article>
        </div>
      </section>

      {/* Ladder Section */}
      <section className="py-24 bg-[var(--surface-2)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="forge-display text-4xl mb-12">The ladder</h2>
          <div className="bg-[var(--surface)] border border-[var(--border-neutral)] rounded-xl overflow-hidden text-left font-mono">
            {[
              { rank: '01', user: 'q_elena', xp: '9,847', top: true },
              { rank: '02', user: 'nakamura_h', xp: '9,631', top: true },
              { rank: '03', user: 'circuit_kai', xp: '9,488', top: true },
              { rank: '04', user: 'priya.qc', xp: '9,210', top: false },
              { rank: '05', user: 'wave_fn', xp: '8,955', top: false },
            ].map((row, i) => (
              <div key={row.rank} className={`flex justify-between items-center p-4 border-b border-[var(--border-neutral)] ${row.top ? 'text-[var(--accent)]' : 'text-[var(--fg-muted)]'}`}>
                <div className="flex gap-6 items-center">
                  <span className="text-sm font-bold opacity-50">{row.rank}</span>
                  <span className="font-semibold text-[var(--fg)]">{row.user}</span>
                </div>
                <span>{row.xp} XP</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer CTA */}
      <section className="py-24 max-w-7xl mx-auto px-4 text-center">
        <span className="text-[var(--forge-rune)] uppercase tracking-widest text-xs font-bold block mb-4">Live now</span>
        <h2 className="forge-display text-5xl mb-6">The platform is live.</h2>
        <p className="text-[var(--fg-muted)] text-lg mb-10 max-w-2xl mx-auto">Start with one circuit. Earn a ranked place you can show an employer.</p>
        <a className="forge-cta" href="#">
          Create Account
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </a>
      </section>
    </>
  );
}
