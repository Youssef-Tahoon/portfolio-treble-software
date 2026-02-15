import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
    return (
        <>
            {/* Final CTA */}
            <section className="py-32 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/10 pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative z-10 max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                        Ready to build something <br />
                        <span className="text-gradient">that scales?</span>
                    </h2>

                    <button className="group relative px-10 py-5 bg-white text-black font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-indigo-500/20">
                        <span className="relative z-10">Start a Project</span>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-100 to-cyan-100 opacity-0 group-hover:opacity-100 transition-opacity blur-lg -z-10" />
                    </button>
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-white/5 bg-[#050505]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col gap-2">
                        <span className="text-xl font-bold text-white tracking-tight">Treble</span>
                        <p className="text-sm text-gray-500">Premium SaaS Engineering Studio</p>
                    </div>

                    <div className="flex gap-8 text-sm text-gray-400">
                        <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
                        <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
                        <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
                        <Link href="mailto:hello@treble.com" className="hover:text-white transition-colors">Email</Link>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-mono text-gray-400">OPERATIONAL</span>
                    </div>
                </div>
            </footer>
        </>
    );
}
