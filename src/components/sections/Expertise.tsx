import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BentoCardProps {
    title: string;
    description: string;
    icon: ReactNode;
    delay?: number;
    className?: string;
    children?: ReactNode;
}

function BentoCard({ title, description, icon, delay = 0, className = "", children }: BentoCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            className={`glass-card rounded-3xl p-8 flex flex-col relative overflow-hidden group ${className}`}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="mb-6 text-indigo-400 group-hover:text-indigo-300 transition-colors">
                {icon}
            </div>

            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{description}</p>

            {children}
        </motion.div>
    );
}

export function Expertise() {
    return (
        <section id="expertise" className="py-32 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-white mb-16 text-center"
                >
                    Our Expertise
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1: SaaS Engineering */}
                    <BentoCard
                        title="SaaS Engineering"
                        description="End-to-end architecture and development of secure, scalable SaaS platforms designed for performance and long-term growth."
                        icon={
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        }
                        className="md:col-span-2"
                    >
                        <div className="mt-auto bg-[#050505] rounded-lg p-4 font-mono text-xs text-indigo-300/80 border border-white/5 relative overflow-hidden">
                            <span className="text-purple-400">const</span> <span className="text-blue-400">scale</span> = <span className="text-yellow-300">async</span> () ={">"} {"{"} <span className="animate-pulse">_</span> {"}"}
                        </div>
                    </BentoCard>

                    {/* Card 2: Internal Systems */}
                    <BentoCard
                        title="Internal Systems"
                        description="Custom dashboards, analytics platforms and operational tools that streamline complex workflows."
                        icon={
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                            </svg>
                        }
                        delay={0.1}
                    />

                    {/* Card 3: API & Backend */}
                    <BentoCard
                        title="API & Backend"
                        description="Robust API design and optimized database structures engineered for reliability and scale."
                        icon={
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        }
                        delay={0.2}
                    />

                    {/* Card 4: Performance & Security */}
                    <BentoCard
                        title="Performance & Security"
                        description="Performance-first engineering and secure-by-design architecture standards across every system we build."
                        icon={
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        }
                        className="md:col-span-2"
                        delay={0.3}
                    >
                        <div className="flex items-center gap-4 mt-4">
                            <div className="flex items-center gap-2 text-xs font-mono text-green-400 bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Secure
                            </div>
                            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> 99.9% Uptime
                            </div>
                        </div>
                    </BentoCard>
                </div>
            </div>
        </section>
    );
}
