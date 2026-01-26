'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }} animate={{ y: 0 }}
            className={`fixed top-6 left-0 right-0 z-50 transition-all duration-300`}
        >
            <div className={`max-w-7xl mx-auto px-6 transition-all ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-4 w-full' : 'mt-2 bg-white/5 backdrop-blur-md border border-white/10 py-3 rounded-full'}`}>
                <div className="flex justify-between items-center px-4">
                    <div className="flex items-center gap-1">
                        <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center overflow-hidden">
                            <img
                                src="/logo.png"
                                alt="EFFEKT IA"
                                className="w-full h-full object-cover scale-125"
                            />
                        </div>



                        <span className="font-space font-bold tracking-widest text-white">EFFEKT IA</span>
                    </div>
                    <div className="hidden md:flex gap-8">
                        {['SERVICIOS', 'PORTAFOLIO', 'CONTACTO'].map((item) => (
                            <a key={item} href="#" className="font-rajdhani text-sm tracking-wide text-white/70 hover:text-white transition">
                                {item}
                            </a>
                        ))}

                    </div>
                    <button className={`px-5 py-2 font-bold font-space text-xs rounded-lg transition ${scrolled ? 'bg-white text-black' : 'bg-white text-black hover:shadow-[0_0_15px_white]'}`}>
                        HABLEMOS


                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
