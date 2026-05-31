'use client';

import { motion } from 'framer-motion';

export default function Navbar() {
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;

        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <motion.nav
            data-navbar
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-3 left-0 right-0 z-50 transition-all duration-300 sm:top-6"
        >
            <div className="
  max-w-7xl mx-auto px-4 sm:px-6
  mt-1 sm:mt-2
  bg-black/22
  backdrop-blur-2xl
  border border-white/10
  py-1.5 sm:py-2.5
  rounded-full
  transition-all
  shadow-[0_18px_70px_rgba(0,0,0,0.32)]
">
                <div className="flex justify-between items-center px-2 sm:px-4">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-1">
                        <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center overflow-hidden sm:h-10 sm:w-10">
                            <img
                                src="/logo.png"
                                alt="EFFEKT IA"
                                className="w-full h-full object-cover scale-125"
                            />
                        </div>
                        <span className="font-space text-sm font-bold tracking-widest text-white sm:text-base">
                            EFFEKT IA
                        </span>
                    </a>

                    {/* Links */}
                    <div className="hidden md:flex gap-8">
                        {[
                            { label: 'Servicios', href: '#servicios' },
                            { label: 'Resultados', href: '#resultados' },
                            { label: 'Paquetes', href: '#planes' },
                        ].map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={(event) => {
                                    if (item.href === '#servicios' || item.href === '#resultados') {
                                        event.preventDefault();
                                        scrollToSection(item.href.slice(1));
                                    }
                                }}
                                className="font-rajdhani text-sm tracking-wide text-white/70 hover:text-white transition"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA */}
                    <a
                        href="https://wa.me/5214445418701?text=Hola,%20quiero%20hablar%20sobre%20una%20soluci%C3%B3n%20con%20EFFEKT%20IA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
  relative overflow-hidden
  px-3.5 py-1
  font-bold font-space text-[9px] sm:px-5 sm:py-1.5 sm:text-[11px]
  rounded-full
  bg-[linear-gradient(110deg,#ff003c_0%,#97005f_48%,#ff003c_100%)] bg-[length:180%_100%] text-white
  border border-[#ff8bb0]/60
  shadow-[0_0_18px_rgba(255,0,60,0.28),inset_0_1px_0_rgba(255,255,255,0.22)]
  transition-all duration-[250ms] ease-out
  before:absolute before:inset-y-0 before:-left-14 before:w-10 before:skew-x-[-18deg] before:bg-white/35 before:blur-md before:transition-all before:duration-500
  hover:scale-[1.03]
  hover:bg-[position:100%_0]
  hover:border-[#ffc1d2]/80
  hover:shadow-[0_0_30px_rgba(255,0,60,0.44),0_0_46px_rgba(190,0,120,0.22),inset_0_1px_0_rgba(255,255,255,0.32)]
  hover:-translate-y-0.5 hover:before:left-[120%]
"

                    >
                        <span className="relative z-10">EMPEZAR AHORA</span>
                    </a>
                </div>
            </div>
        </motion.nav>
    );

}
