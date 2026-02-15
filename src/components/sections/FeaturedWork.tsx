import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    gradient: string;
    alignment?: "left" | "right";
}

function ProjectCard({ title, description, tags, gradient, alignment = "left" }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`group relative grid md:grid-cols-2 gap-8 items-center mb-32 ${alignment === "right" ? "md:grid-flow-dense" : ""}`}
        >
            <div className={`relative aspect-[16/10] bg-gray-900 rounded-lg overflow-hidden border border-white/5 shadow-2xl ${alignment === "right" ? "md:col-start-2" : ""}`}>
                {/* Abstract Placeholder for Project UI */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                <div className="absolute inset-4 bg-[#0A0A0A] rounded border border-white/5 flex items-center justify-center">
                    <span className="font-mono text-xs text-white/20">UI MOCKUP PLACEHOLDER</span>
                </div>

                {/* Floating Elements (Abstract) */}
                <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-glow" />
            </div>

            <div className={`${alignment === "right" ? "md:col-start-1 md:text-right" : "md:text-left"}`}>
                <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    {description}
                </p>
                <div className={`flex flex-wrap gap-2 ${alignment === "right" ? "justify-end" : "justify-start"}`}>
                    {tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-gray-300">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export function FeaturedWork() {
    return (
        <section id="work" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-24">Selected Work</h2>

                <ProjectCard
                    title="QuickFeeder"
                    description="A custom-engineered web-based system designed to streamline business operations and scale efficiently."
                    tags={["Next.js", "Node.js", "PostgreSQL", "TypeScript"]}
                    gradient="from-indigo-500 via-purple-500 to-pink-500"
                />

                <ProjectCard
                    title="DataSync Pro"
                    description="Real-time database synchronization across platforms with sub-millisecond latency and conflict resolution."
                    tags={["React", "Rust", "WebAssembly", "Socket.io"]}
                    gradient="from-cyan-500 via-blue-500 to-indigo-500"
                    alignment="right"
                />

                <ProjectCard
                    title="AuthFlow"
                    description="Enterprise-grade authentication and identity management system for multi-tenant SaaS applications."
                    tags={["OAuth 2.0", "JWT", "Redis", "Docker"]}
                    gradient="from-emerald-500 via-teal-500 to-cyan-500"
                />
            </div>
        </section>
    );
}
