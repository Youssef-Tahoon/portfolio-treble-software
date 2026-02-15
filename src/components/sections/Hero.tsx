import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-[110vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[128px] animate-pulse-glow" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

            <motion.div style={{ y, opacity }} className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-indigo-300 mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                    </span>
                    AVAILABLE FOR NEW PROJECTS
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8"
                >
                    Build <span className="text-gradient">Scalable SaaS</span> Systems
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    Treble is a remote-first engineering studio partnering with founders to architect and launch secure, high-performance web-based systems.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button className="group relative px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)]">
                        <span className="relative z-10">Start a Project</span>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity blur-lg" />
                    </button>

                    <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all hover:scale-105 active:scale-95 backdrop-blur-sm">
                        View Work
                    </button>
                </motion.div>
            </motion.div>

            {/* Abstract 3D/Glass Visual Hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-20 pointer-events-none"
            />
        </section>
    );
}
