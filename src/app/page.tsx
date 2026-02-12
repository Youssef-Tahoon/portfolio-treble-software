"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Reveal } from "@/components/motion/Reveal";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { TiltCard } from "@/components/motion/TiltCard";
import { useMemo } from "react";

const services = [
  { id: 1, name: "Cloud Analytics", description: "Real-time data analytics and insights for your business.", price: "$49/mo" },
  { id: 2, name: "API Gateway", description: "Secure and scalable API management solution.", price: "$99/mo" },
  { id: 3, name: "Team Collaboration", description: "Streamline your team's workflow and communication.", price: "$29/mo" },
  { id: 4, name: "Security Suite", description: "Enterprise-grade security for your applications.", price: "$149/mo" },
];

const projects = [
  { id: 1, name: "QuickFeeder", description: "Automated content delivery platform for social media.", tech: "Next.js, Node.js" },
  { id: 2, name: "DataSync Pro", description: "Real-time database synchronization across platforms.", tech: "React, PostgreSQL" },
  { id: 3, name: "AuthFlow", description: "Complete authentication system with SSO support.", tech: "TypeScript, OAuth" },
];

export default function Home() {
  const reduceMotion = useReducedMotion();

  const easeOut = [0.16, 1, 0.3, 1] as const;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = useMemo(
    () => [
      { id: "services", label: "Services" },
      { id: "projects", label: "Projects" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: reduceMotion
        ? { duration: 0 }
        : { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: reduceMotion ? { duration: 0 } : { duration: 0.5, ease: easeOut },
    },
  } as const;

  const sectionPadding = "px-5 py-16 md:py-24";
  const sectionMinHeight = "min-h-[calc(100vh-3.5rem)]";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ScrollProgress />

      {/* Sticky top nav */}
      <header className="fixed left-0 right-0 top-0 z-40 border-b border-gray-200/50 bg-white/60 backdrop-blur-md dark:border-gray-700/50 dark:bg-gray-900/60">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
          <button
            onClick={() => scrollTo("top")}
            className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white"
          >
            Treble Software
          </button>

          <nav className="flex items-center gap-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                whileHover={reduceMotion ? undefined : { y: -1 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                transition={{ type: "spring", stiffness: 420, damping: 26 }}
                className="rounded-md px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-100/60 dark:text-gray-200 dark:hover:bg-gray-700/40"
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              onClick={() => scrollTo("contact")}
              whileHover={reduceMotion ? undefined : { y: -1 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              transition={{ type: "spring", stiffness: 420, damping: 26 }}
              className="ml-1 rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700"
            >
              Let’s Talk
            </motion.button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative overflow-hidden">

        {/* Subtle ambient background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-28 h-72 w-72 rounded-full blob bg-blue-500/8 dark:bg-blue-400/8" />
          <div className="absolute top-32 -right-24 h-80 w-80 rounded-full blob bg-purple-500/8 dark:bg-purple-400/8" style={{ animationDelay: "-1.6s" }} />
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] bg-grid" />
        </div>

        <div className="snap-y snap-mandatory">
          {/* Hero */}
          <section
            id="top"
            className={`snap-start ${sectionMinHeight} scroll-mt-20 border-b border-gray-200/40 dark:border-gray-700/40`}
          >
            <div className={`mx-auto max-w-6xl ${sectionPadding} pt-28 md:pt-28`}>
              <Reveal className="max-w-4xl">
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={reduceMotion ? undefined : { duration: 0.7, ease: easeOut }}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200/50 bg-white/50 px-3 py-1 text-xs font-medium text-gray-600 backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-900/30 dark:text-gray-300"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 glow-pulse" />
                  Portfolio • SaaS Interfaces
                </motion.div>

                <motion.h2
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={reduceMotion ? undefined : { duration: 0.7, delay: 0.05, ease: easeOut }}
                  className="mt-4 text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white mb-4 tracking-tight leading-[1.05]"
                >
                  Build <span className="text-shimmer">premium SaaS</span> experiences
                  <br />
                  with motion that sells.
                </motion.h2>

                <motion.p
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={reduceMotion ? undefined : { duration: 0.7, delay: 0.12, ease: easeOut }}
                  className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed"
                >
                  Scroll through distinct interfaces: Services, Projects, and Contact. Bigger cards, stronger depth, and clearer animation beats.
                </motion.p>

                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={reduceMotion ? undefined : { duration: 0.7, delay: 0.2, ease: easeOut }}
                  className="mt-7 flex flex-wrap gap-2.5"
                >
                  <motion.button
                    onClick={() => scrollTo("services")}
                    whileHover={reduceMotion ? undefined : { scale: 1.05, y: -2 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 420, damping: 22 }}
                    className="group relative overflow-hidden rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400/60"
                  >
                    <span className="relative z-10">Explore Services</span>
                    <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-white/0 via-white/22 to-white/0 transition-transform duration-700 group-hover:translate-x-full" />
                  </motion.button>
                  <motion.button
                    onClick={() => scrollTo("projects")}
                    whileHover={reduceMotion ? undefined : { scale: 1.03, y: -2 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 420, damping: 24 }}
                    className="rounded-lg border border-gray-300/60 bg-white/40 px-5 py-2.5 text-sm font-semibold text-gray-900 backdrop-blur transition hover:bg-white/60 dark:border-gray-700/60 dark:bg-gray-800/40 dark:text-white dark:hover:bg-gray-800/60"
                  >
                    View Projects
                  </motion.button>
                </motion.div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-3">
                  {["Fast delivery", "Reliable systems", "Beautiful UI"].map((label) => (
                    <TiltCard
                      key={label}
                      className="group relative rounded-xl border border-gray-200/40 bg-white/40 p-5 backdrop-blur-sm dark:border-gray-700/40 dark:bg-gray-800/30"
                      maxTilt={8}
                      spotlight
                    >
                      <div className="relative">
                        <div className="text-xs font-semibold text-gray-500 dark:text-gray-300">{label}</div>
                        <div className="mt-1.5 text-sm text-gray-700 dark:text-gray-200">
                          Clear beats: reveal → hover → focus. No clutter.
                        </div>
                      </div>
                    </TiltCard>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          {/* Services */}
          <section
            id="services"
            className={`snap-start ${sectionMinHeight} scroll-mt-20 border-b border-gray-200/40 dark:border-gray-700/40`}
          >
            <div className={`mx-auto max-w-6xl ${sectionPadding} pt-28 md:pt-28`}>
              <Reveal>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white tracking-tight">Services Interface</h3>
                <motion.div
                  aria-hidden
                  initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
                  whileInView={reduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={reduceMotion ? undefined : { duration: 0.6, ease: easeOut }}
                  className="origin-left mt-3 h-px w-32 bg-linear-to-r from-blue-500 via-cyan-400 to-purple-500"
                />
                <p className="mt-4 text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl">
                  Big vertical cards make your offer scannable and your animations obvious.
                </p>
              </Reveal>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
              >
                {services.map((service) => (
                  <TiltCard
                    key={service.id}
                    variants={itemVariants}
                    whileHover={reduceMotion ? undefined : { y: -8, scale: 1.02 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                    transition={reduceMotion ? undefined : { type: "spring", stiffness: 320, damping: 22 }}
                    className="group relative overflow-hidden rounded-xl border border-gray-200/40 bg-white/40 p-5 backdrop-blur-sm dark:border-gray-700/40 dark:bg-gray-800/30"
                    maxTilt={12}
                    spotlight
                  >
                    {/* Animated gradient edge */}
                    <motion.div
                      className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background: "linear-gradient(120deg, #3b82f6, #a855f7, #06b6d4, #3b82f6)",
                        backgroundSize: "300% 300%",
                      }}
                      animate={reduceMotion ? undefined : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                      transition={reduceMotion ? undefined : { duration: 3, repeat: Infinity, ease: "linear" }}
                    />

                    <div className="relative flex h-85 flex-col">
                      <div>
                        <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">Service</div>
                        <h4 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white tracking-tight">
                          {service.name}
                        </h4>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="mt-4 space-y-2 text-xs text-gray-600 dark:text-gray-300">
                          <div className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                            Fast setup
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                            Secure by default
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                            Scales with usage
                          </div>
                        </div>
                      </div>

                      <div className="mt-auto pt-6">
                        <div className="flex items-end justify-between gap-4">
                          <div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Starting at</div>
                            <div className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
                              {service.price}
                            </div>
                          </div>

                          <motion.button
                            whileHover={reduceMotion ? undefined : { scale: 1.05 }}
                            whileTap={reduceMotion ? undefined : { scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 420, damping: 22 }}
                            className="group/btn relative overflow-hidden rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                          >
                            <span className="relative z-10">Subscribe</span>
                            <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-white/0 via-white/25 to-white/0 transition-transform duration-700 group-hover/btn:translate-x-full" />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                ))}
              </motion.div>
            </div>
          </section>

        {/* Projects */}
        <section
          id="projects"
          className={`snap-start ${sectionMinHeight} scroll-mt-20 border-b border-gray-200/40 dark:border-gray-700/40`}
        >
          <div className={`mx-auto max-w-6xl ${sectionPadding} pt-28 md:pt-28`}>
            <Reveal>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white tracking-tight">Projects Interface</h3>
              <motion.div
                aria-hidden
                initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
                whileInView={reduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={reduceMotion ? undefined : { duration: 0.6, ease: easeOut }}
                className="origin-left mt-3 h-px w-32 bg-linear-to-r from-blue-500 via-cyan-400 to-purple-500"
              />
              <p className="mt-4 text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl">
                Case-study style cards: vertical, dense, and animated on hover.
              </p>
            </Reveal>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
              {projects.map((project) => (
                <TiltCard
                  key={project.id}
                  variants={itemVariants}
                  whileHover={reduceMotion ? undefined : { y: -10, scale: 1.02 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                  transition={reduceMotion ? undefined : { type: "spring", stiffness: 320, damping: 22 }}
                  className="group relative overflow-hidden rounded-xl border border-gray-200/40 bg-white/40 p-5 backdrop-blur-sm dark:border-gray-700/40 dark:bg-gray-800/30 cursor-pointer"
                  maxTilt={13}
                  spotlight
                >
                  {/* Pulse border */}
                  <motion.div
                    className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100"
                    style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}
                    animate={reduceMotion ? undefined : { scale: [1, 1.02, 1] }}
                    transition={reduceMotion ? undefined : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />

                  <div className="relative flex h-90 flex-col">
                    <div>
                      <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">Project</div>
                      <h4 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white tracking-tight">
                        {project.name}
                      </h4>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="mt-5 rounded-lg border border-gray-200/40 bg-white/40 px-3 py-2 text-xs text-gray-700 backdrop-blur-sm dark:border-gray-700/40 dark:bg-gray-900/20 dark:text-gray-200">
                        <span className="text-gray-500 dark:text-gray-400">Tech:</span> {project.tech}
                      </div>
                    </div>

                    <div className="mt-auto pt-6">
                      <motion.div
                        whileHover={reduceMotion ? undefined : { x: 3 }}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400"
                      >
                        View case study
                        <span className="text-base">→</span>
                      </motion.div>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className={`snap-start ${sectionMinHeight} scroll-mt-20`}>
          <div className={`mx-auto max-w-6xl ${sectionPadding} pt-28 md:pt-28`}>
            <Reveal>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white tracking-tight">Contact Interface</h3>
              <motion.div
                aria-hidden
                initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
                whileInView={reduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={reduceMotion ? undefined : { duration: 0.6, ease: easeOut }}
                className="origin-left mt-3 h-px w-32 bg-linear-to-r from-blue-500 via-cyan-400 to-purple-500"
              />
              <p className="mt-4 text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl">
                One clear call-to-action. Big interface. Strong motion.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
                <TiltCard
                  className="group relative overflow-hidden rounded-xl border border-gray-200/40 bg-white/40 p-6 backdrop-blur-sm dark:border-gray-700/40 dark:bg-gray-800/30"
                  maxTilt={10}
                  spotlight
                >
                  <div className="relative">
                    <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">Email</div>
                    <div className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">contact@treblesoftware.com</div>
                    <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      Send us a quick note and we’ll reply with the next steps.
                    </div>
                    <motion.a
                      href="mailto:contact@treblesoftware.com"
                      whileHover={reduceMotion ? undefined : { scale: 1.03, y: -2 }}
                      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 420, damping: 22 }}
                      className="group/btn relative mt-6 inline-flex overflow-hidden rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
                    >
                      <span className="relative z-10">Email us</span>
                      <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-white/0 via-white/25 to-white/0 transition-transform duration-700 group-hover/btn:translate-x-full" />
                    </motion.a>
                  </div>
                </TiltCard>

                <TiltCard
                  className="group relative overflow-hidden rounded-xl border border-gray-200/40 bg-white/40 p-6 backdrop-blur-sm dark:border-gray-700/40 dark:bg-gray-800/30"
                  maxTilt={10}
                  spotlight
                >
                  <div className="relative">
                    <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">Next</div>
                    <div className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">Book a walkthrough</div>
                    <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      Want this portfolio to feel like a real SaaS app? We can build a full pricing page + onboarding flow.
                    </div>
                    <motion.button
                      onClick={() => scrollTo("top")}
                      whileHover={reduceMotion ? undefined : { x: 3 }}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400"
                    >
                      Back to top <span className="text-base">↑</span>
                    </motion.button>
                  </div>
                </TiltCard>
              </div>
            </Reveal>
          </div>
        </section>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200/40 py-10 text-center text-xs text-gray-400 dark:border-gray-700/40 dark:text-gray-500">
          © 2025 Treble Software. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
