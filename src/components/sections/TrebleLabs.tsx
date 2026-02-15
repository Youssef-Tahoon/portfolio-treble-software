import { motion } from "framer-motion";

export function TrebleLabs() {
    return (
        <section id="labs" className="py-24 px-6 bg-[#0F0F0F] border-y border-white/5 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-sm font-mono text-indigo-400 mb-4 tracking-wider">TREBLE LABS</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Building Beyond Client Work</h3>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed mb-12">
                        We don't just build systems for others. Treble Labs is where we design, architect, and operate our own SaaS products.
                    </p>
                </motion.div>

                {/* QuickFeeder Feature */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-card rounded-2xl p-8 md:p-12 text-left relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors duration-500" />

                    <div className="relative z-10">
                        <h4 className="text-2xl font-bold text-white mb-2">QuickFeeder</h4>
                        <p className="text-gray-400 mb-6 max-w-xl">
                            A performance-driven SaaS platform engineered to streamline digital engagement and scale with modern business demands.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                                <span className="w-2 h-2 rounded-full bg-green-500" /> Active Users
                            </div>
                            <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                                <span className="w-2 h-2 rounded-full bg-blue-500" /> 99.99% Uptime
                            </div>
                        </div>

                        <a href="#" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                            View Product <span className="text-lg">→</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export function Standard() {
    const standards = [
        "Performance-first engineering",
        "Scalable architecture by default",
        "Clean, maintainable codebases",
        "Security as a baseline",
        "Transparent collaboration"
    ];

    return (
        <section className="py-24 px-6 bg-[#0A0A0A]">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">The Treble Standard</h2>
                    <p className="text-gray-500 font-mono text-sm">NON-NEGOTIABLE ENGINEERING PRINCIPLES</p>
                </div>

                <div className="space-y-4">
                    {standards.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-4 p-4 border-b border-white/5 hover:border-white/10 transition-colors group"
                        >
                            <span className="font-mono text-gray-600 group-hover:text-indigo-500 transition-colors">0{index + 1}</span>
                            <span className="text-lg text-gray-300 group-hover:text-white transition-colors">{item}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
