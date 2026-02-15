import { motion } from "framer-motion";

const steps = [
    {
        id: "01",
        title: "Discovery",
        description: "We define technical requirements, constraints and system goals before writing code."
    },
    {
        id: "02",
        title: "Architecture",
        description: "Scalable system design, data modeling and infrastructure strategy."
    },
    {
        id: "03",
        title: "Build",
        description: "Structured sprint cycles with milestone-based delivery."
    },
    {
        id: "04",
        title: "Optimize",
        description: "Performance tuning, testing, deployment and scalability planning."
    }
];

export function Process() {
    return (
        <section id="process" className="py-24 px-6 border-y border-white/5 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">How We Build</h2>
                    <p className="text-gray-400 max-w-xl">A structured engineering process designed for reliability.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-6 border-l border-white/10"
                        >
                            <span className="absolute -left-[9px] top-0 w-[17px] h-[17px] rounded-full bg-[#0A0A0A] border border-white/20 flex items-center justify-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                            </span>
                            <div className="font-mono text-sm text-indigo-400 mb-3">{step.id}</div>
                            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
