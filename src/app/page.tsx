<<<<<<< HEAD
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
              <Image src="/library-mockup.jpg" alt="Library Mockup" fill className="object-cover opacity-80" />
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
              <Image src="/editor-mockup.jpg" alt="Code Editor Mockup" fill className="object-cover opacity-80" />
            </div>
=======
"use client";

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronRight, Terminal, Award, Hexagon } from 'lucide-react';
import { useRef } from 'react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-[var(--bg)]">
      {/* Hero Background Parallax */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-[120vh] pointer-events-none z-0"
        style={{ y: bgY, opacity: bgOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg)] z-10" />
        <Image 
          src="/wave-bg.jpg" 
          alt="Quantum Wave Background" 
          fill 
          priority
          className="object-cover object-top mix-blend-screen" 
        />
      </motion.div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div style={{ y: y1, opacity: opacity1 }} className="flex flex-col items-center">
          <FadeIn delay={0.1}>
            <p className="text-[var(--fg-muted)] font-mono tracking-[0.2em] uppercase text-xs mb-8">
              The Platform for Quantum Engineers
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="forge-display mb-10 max-w-4xl mx-auto">
              Master quantum circuits.<br />
              <span className="forge-heat-text">Prove your expertise.</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="text-[var(--fg-muted)] max-w-xl mx-auto text-lg mb-12 font-light leading-relaxed">
              Write real circuits, get them executed on actual simulators, and earn verified credentials that industry leaders trust.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4} className="w-full max-w-md mx-auto">
            <form className="flex w-full gap-3 flex-col sm:flex-row">
              <input 
                className="forge-hero-input flex-1 bg-[var(--surface)]/30 backdrop-blur-md" 
                type="email" 
                placeholder="Enter your email address" 
                required 
              />
              <button type="submit" className="forge-cta justify-center">
                Start Building
                <ArrowRight size={16} />
              </button>
            </form>
          </FadeIn>
          
          <FadeIn delay={0.6}>
            <div className="flex items-center gap-12 text-xs uppercase tracking-widest font-mono text-[var(--fg-faint)] mt-24">
              <span>Free to start</span>
              <div className="w-1 h-1 rounded-full bg-[var(--border-neutral)]"></div>
              <span>Live execution</span>
              <div className="w-1 h-1 rounded-full bg-[var(--border-neutral)]"></div>
              <span>Objective scoring</span>
            </div>
          </FadeIn>
        </motion.div>
      </section>

      {/* Showcase Section */}
      <section className="py-32 bg-[var(--bg)] border-y border-[var(--border-neutral)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-48">
          
          {/* Feature 1 */}
          <article className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 space-y-8">
              <FadeIn>
                <span className="text-[var(--fg-faint)] font-mono uppercase tracking-[0.2em] text-xs">01 / The Library</span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="forge-display text-4xl lg:text-5xl">Curated challenges.</h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-[var(--fg-muted)] text-lg font-light leading-relaxed">
                  A living catalogue of quantum problems, sorted from Novice to Master. Start where you stand today and climb at your own pace, one circuit at a time.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="pt-4 flex items-center gap-4 text-sm font-medium">
                  <span className="px-4 py-2 rounded-full border border-[var(--border-neutral)]">120+ Problems</span>
                  <span className="px-4 py-2 rounded-full border border-[var(--border-neutral)]">3 Tiers</span>
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={0.4} className="flex-1 w-full">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full bg-black rounded-2xl border border-[var(--border-neutral)] overflow-hidden aspect-square max-w-md ml-auto relative flex items-center justify-center shadow-2xl"
              >
                <motion.div 
                  className="absolute inset-0 w-full h-full"
                  whileInView={{ scale: [1.1, 1] }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <Image 
                    src="/library-node-graph.jpg" 
                    alt="Quantum Library Node Graph" 
                    fill 
                    className="object-cover opacity-90 mix-blend-screen"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--bg)] via-transparent to-transparent opacity-80"></div>
                </motion.div>
              </motion.div>
            </FadeIn>
          </article>

          {/* Feature 2 */}
          <article className="flex flex-col lg:flex-row-reverse gap-20 items-center">
            <div className="flex-1 space-y-8">
              <FadeIn>
                <span className="text-[var(--fg-faint)] font-mono uppercase tracking-[0.2em] text-xs">02 / The Editor</span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="forge-display text-4xl lg:text-5xl">Flawless execution.</h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-[var(--fg-muted)] text-lg font-light leading-relaxed">
                  Real code in a pristine editor, executed on a quantum simulator and scored on correctness and efficiency. No multiple choice, just the circuit you wrote.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="pt-4 flex items-center gap-4 text-sm font-medium">
                  <span className="px-4 py-2 rounded-full border border-[var(--border-neutral)] text-[var(--accent)]">Live Simulator</span>
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={0.4} className="flex-1 w-full">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full bg-[#050505] rounded-2xl border border-[var(--border-neutral)] overflow-hidden aspect-square max-w-md mr-auto relative p-6 font-mono text-sm text-[var(--fg-muted)] shadow-2xl"
              >
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-[var(--border)]"></div>
                  <div className="w-3 h-3 rounded-full bg-[var(--border)]"></div>
                  <div className="w-3 h-3 rounded-full bg-[var(--border)]"></div>
                </div>
                <div className="space-y-2">
                  <p><span className="text-blue-400">import</span> qiskit</p>
                  <p><span className="text-blue-400">from</span> qiskit <span className="text-blue-400">import</span> QuantumCircuit</p>
                  <br/>
                  <p className="text-[var(--fg-faint)]"># Initialize 2 qubits</p>
                  <p>qc = QuantumCircuit(<span className="text-orange-400">2</span>)</p>
                  <p>qc.h(<span className="text-orange-400">0</span>)</p>
                  <p>qc.cx(<span className="text-orange-400">0</span>, <span className="text-orange-400">1</span>)</p>
                  <br/>
                  <p className="text-[var(--fg-faint)]"># Measure state</p>
                  <p>qc.measure_all()</p>
                </div>
              </motion.div>
            </FadeIn>
>>>>>>> d714f2e (Initial commit)
          </article>

        </div>
      </section>

<<<<<<< HEAD
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
=======
      {/* Process Sequence */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-24">
            <h2 className="forge-display text-3xl mb-4">The Methodology</h2>
            <p className="text-[var(--fg-muted)] font-light">A systematic approach to quantum mastery.</p>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-16">
          <FadeIn delay={0.1}>
            <article className="flex flex-col">
              <div className="w-12 h-12 mb-8 text-[var(--fg)] border-b border-[var(--fg)] pb-4 flex items-end">
                <Terminal strokeWidth={1.5} size={28} />
              </div>
              <h3 className="text-xl font-medium mb-4">01. Build</h3>
              <p className="text-[var(--fg-muted)] font-light leading-relaxed">Write progressive solutions under real constraints. Your quantum circuits are executed and evaluated instantly.</p>
            </article>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <article className="flex flex-col">
              <div className="w-12 h-12 mb-8 text-[var(--fg)] border-b border-[var(--fg)] pb-4 flex items-end">
                <Hexagon strokeWidth={1.5} size={28} />
              </div>
              <h3 className="text-xl font-medium mb-4">02. Rank</h3>
              <p className="text-[var(--fg-muted)] font-light leading-relaxed">See where you stand. Our objective scoring engine ranks solutions based on gate count, depth, and accuracy.</p>
            </article>
          </FadeIn>

          <FadeIn delay={0.3}>
            <article className="flex flex-col">
              <div className="w-12 h-12 mb-8 text-[var(--fg)] border-b border-[var(--fg)] pb-4 flex items-end">
                <Award strokeWidth={1.5} size={28} />
              </div>
              <h3 className="text-xl font-medium mb-4">03. Prove</h3>
              <p className="text-[var(--fg-muted)] font-light leading-relaxed">Transform your achievements into portable credentials that demonstrate true capability to employers.</p>
            </article>
          </FadeIn>
>>>>>>> d714f2e (Initial commit)
        </div>
      </section>

      {/* Ladder Section */}
<<<<<<< HEAD
      <section className="py-24 bg-[var(--surface-2)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="forge-display text-4xl mb-12">The ladder</h2>
          <div className="bg-[var(--surface)] border border-[var(--border-neutral)] rounded-xl overflow-hidden text-left font-mono">
=======
      <section className="py-32 bg-[var(--bg-alt)] border-t border-[var(--border-neutral)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex justify-between items-end mb-12 border-b border-[var(--border)] pb-6">
              <h2 className="forge-display text-3xl">Global Rankings</h2>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--fg-muted)]">Top 5</span>
            </div>
          </FadeIn>
          
          <div className="flex flex-col space-y-2">
>>>>>>> d714f2e (Initial commit)
            {[
              { rank: '01', user: 'q_elena', xp: '9,847', top: true },
              { rank: '02', user: 'nakamura_h', xp: '9,631', top: true },
              { rank: '03', user: 'circuit_kai', xp: '9,488', top: true },
              { rank: '04', user: 'priya.qc', xp: '9,210', top: false },
              { rank: '05', user: 'wave_fn', xp: '8,955', top: false },
            ].map((row, i) => (
<<<<<<< HEAD
              <div key={row.rank} className={`flex justify-between items-center p-4 border-b border-[var(--border-neutral)] ${row.top ? 'text-[var(--accent)]' : 'text-[var(--fg-muted)]'}`}>
                <div className="flex gap-6 items-center">
                  <span className="text-sm font-bold opacity-50">{row.rank}</span>
                  <span className="font-semibold text-[var(--fg)]">{row.user}</span>
                </div>
                <span>{row.xp} XP</span>
              </div>
=======
              <FadeIn key={row.rank} delay={i * 0.1}>
                <div className={`flex justify-between items-center p-6 rounded-xl hover:bg-[var(--surface)] transition-colors group ${row.top ? 'text-[var(--fg)]' : 'text-[var(--fg-muted)]'}`}>
                  <div className="flex gap-8 items-center">
                    <span className="font-mono text-xs opacity-40 group-hover:opacity-100 transition-opacity">{row.rank}</span>
                    <span className="font-medium tracking-wide">{row.user}</span>
                  </div>
                  <span className="font-mono text-sm">{row.xp} <span className="opacity-40 text-xs">XP</span></span>
                </div>
              </FadeIn>
>>>>>>> d714f2e (Initial commit)
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer CTA */}
<<<<<<< HEAD
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
=======
      <section className="py-40 max-w-4xl mx-auto px-4 text-center">
        <FadeIn>
          <div className="inline-block mb-8">
            <div className="w-12 h-[1px] bg-[var(--fg)] mx-auto"></div>
          </div>
          <h2 className="forge-display text-5xl md:text-6xl mb-8">Initialize your journey.</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-[var(--fg-muted)] text-xl font-light mb-12 max-w-2xl mx-auto">
            Start with one circuit. Earn a ranked place you can show an employer.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <a className="forge-cta text-lg px-8 py-4" href="#">
            Create Account
            <ChevronRight size={20} />
          </a>
        </FadeIn>
      </section>
    </div>
>>>>>>> d714f2e (Initial commit)
  );
}
