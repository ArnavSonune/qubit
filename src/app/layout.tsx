import type { Metadata } from "next";
import { Space_Grotesk, Orbitron } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
import ThreeBackground from "@/components/ThreeBackground";
=======
>>>>>>> d714f2e (Initial commit)

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata: Metadata = {
  title: "Qubit | Infrastructure for Quantum Talent",
  description: "Forge quantum skill into proof. Write real circuits, get them executed, and earn a ranked, verifiable place among the engineers the industry needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${orbitron.variable} font-sans antialiased selection:bg-[var(--accent)] selection:text-[var(--on-accent)]`}
      >
        <div className="forge-root min-h-screen flex flex-col">
<<<<<<< HEAD
          <div className="forge-canvas-fallback" aria-hidden="true"></div>
          <ThreeBackground />
=======
>>>>>>> d714f2e (Initial commit)
          <header className="fixed top-0 left-0 right-0 z-50 bg-[color-mix(in_srgb,var(--bg)_72%,transparent)] backdrop-blur-md border-b border-[var(--border)]">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
              <a className="flex items-center shrink-0 font-bold text-xl tracking-tight" href="/">
                <span className="text-[var(--fg)]">Qubit</span>
                <span className="text-[var(--accent)]">Forge</span>
              </a>
              <nav className="hidden xl:flex items-center gap-1">
                {['For Individuals', 'For Institutions', 'Pricing', 'Resources', 'Community', 'Contact'].map((item) => (
                  <a key={item} className="inline-flex items-center min-h-[44px] px-4 text-sm text-[var(--fg-faint)] hover:text-[var(--fg)] transition-colors" href="#">
                    {item}
                  </a>
                ))}
              </nav>
              <div className="hidden xl:flex items-center gap-3">
                <a className="inline-flex items-center justify-center min-h-[44px] px-5 py-3 text-sm font-semibold bg-transparent border border-[var(--border)] text-[var(--fg)] rounded-md hover:border-[var(--accent)] hover:text-[var(--accent-text)] transition-colors duration-200" href="#">
                  Log in
                </a>
                <a className="forge-cta" href="#">
                  Create account
                </a>
              </div>
            </div>
          </header>
          
          <main className="flex-1 pt-20">
            {children}
          </main>

<<<<<<< HEAD
          <footer className="relative z-[1] bg-[#08070a] border-t border-[#FF8C00]/15 mt-24">
=======
          <footer className="relative z-[1] bg-[var(--bg)] border-t border-[var(--border)] mt-24">
>>>>>>> d714f2e (Initial commit)
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 sm:pt-20 pb-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-8">
                <div className="sm:col-span-2 md:col-span-3 lg:col-span-1 mb-2 lg:mb-0">
                  <a href="/" className="font-bold text-xl">
                    <span className="text-[var(--fg)]">Qubit</span><span className="text-[var(--accent)]">Forge</span>
                  </a>
<<<<<<< HEAD
                  <p className="text-sm text-[#b8aea1] leading-relaxed max-w-[240px] mt-4">Infrastructure for quantum talent.</p>
                </div>
                <div>
                  <h3 className="mb-3 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[#bda079]">Product</h3>
                  <ul className="space-y-2.5">
                    {['How It Works', 'Challenge Engine', 'Coding Sandbox', 'Performance Profile', 'Pricing'].map(l => (
                      <li key={l}><a className="text-sm leading-relaxed text-[#b8aea1] hover:text-[#ffe7b0] transition-colors" href="#">{l}</a></li>
=======
                  <p className="text-sm text-[var(--fg-faint)] leading-relaxed max-w-[240px] mt-4">Infrastructure for quantum talent.</p>
                </div>
                <div>
                  <h3 className="mb-3 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[var(--fg-muted)]">Product</h3>
                  <ul className="space-y-2.5">
                    {['How It Works', 'Challenge Engine', 'Coding Sandbox', 'Performance Profile', 'Pricing'].map(l => (
                      <li key={l}><a className="text-sm leading-relaxed text-[var(--fg-faint)] hover:text-[var(--accent)] transition-colors" href="#">{l}</a></li>
>>>>>>> d714f2e (Initial commit)
                    ))}
                  </ul>
                </div>
                <div>
<<<<<<< HEAD
                  <h3 className="mb-3 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[#bda079]">Solutions</h3>
                  <ul className="space-y-2.5">
                    {['For Individuals', 'For Universities', 'For Research'].map(l => (
                      <li key={l}><a className="text-sm leading-relaxed text-[#b8aea1] hover:text-[#ffe7b0] transition-colors" href="#">{l}</a></li>
=======
                  <h3 className="mb-3 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[var(--fg-muted)]">Solutions</h3>
                  <ul className="space-y-2.5">
                    {['For Individuals', 'For Universities', 'For Research'].map(l => (
                      <li key={l}><a className="text-sm leading-relaxed text-[var(--fg-faint)] hover:text-[var(--accent)] transition-colors" href="#">{l}</a></li>
>>>>>>> d714f2e (Initial commit)
                    ))}
                  </ul>
                </div>
                {/* ... other footer columns omitted for brevity ... */}
              </div>
<<<<<<< HEAD
              <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-[#FF8C00]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-[0.7rem] uppercase tracking-[0.18em] text-[#b8aea1]">© 2026 Qubit Pty Ltd</p>
                <a href="mailto:hello@qubit.com.au" className="text-[0.7rem] uppercase tracking-[0.18em] text-[#b8aea1] hover:text-[#ffe7b0] transition-colors">hello@qubit.com.au</a>
=======
              <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-[0.7rem] uppercase tracking-[0.18em] text-[var(--fg-faint)]">© 2026 Qubit Pty Ltd</p>
                <a href="mailto:hello@qubit.com.au" className="text-[0.7rem] uppercase tracking-[0.18em] text-[var(--fg-faint)] hover:text-[var(--accent)] transition-colors">hello@qubit.com.au</a>
>>>>>>> d714f2e (Initial commit)
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
