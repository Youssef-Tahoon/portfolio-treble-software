import Link from "next/link";
import { motion } from "framer-motion";

export function Navbar() {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 md:p-6"
        >
            <div className="glass-panel rounded-full px-6 py-3 flex items-center gap-8 md:gap-12">
                <Link href="/" className="text-xl font-bold tracking-tight text-white">
                    Treble
                </Link>
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
                    <Link href="#expertise" className="hover:text-white transition-colors">Expertise</Link>
                    <Link href="#process" className="hover:text-white transition-colors">Process</Link>
                    <Link href="#work" className="hover:text-white transition-colors">Work</Link>
                    <Link href="#labs" className="hover:text-white transition-colors">Labs</Link>
                </nav>
                <button className="hidden md:block text-sm font-medium text-white bg-white/10 hover:bg-white/20 px-4 py-1.5 rounded-full transition-colors border border-white/5">
                    Contact
                </button>
            </div>
        </motion.header>
    );
}
