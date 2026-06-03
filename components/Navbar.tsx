'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const navbar = navRef.current;
        if (!navbar) return;

        let animationFrame = 0;

        const updateNavbarMetrics = () => {
            window.cancelAnimationFrame(animationFrame);
            animationFrame = window.requestAnimationFrame(() => {
                const navbarHeight = navbar.offsetHeight;
                const navbarClearance = navbar.offsetTop + navbarHeight;
                document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
                document.documentElement.style.setProperty('--navbar-clearance', `${navbarClearance}px`);
            });
        };

        updateNavbarMetrics();

        const resizeObserver = new ResizeObserver(updateNavbarMetrics);
        resizeObserver.observe(navbar);
        window.addEventListener('resize', updateNavbarMetrics);

        return () => {
            window.cancelAnimationFrame(animationFrame);
            resizeObserver.disconnect();
            window.removeEventListener('resize', updateNavbarMetrics);
        };
    }, []);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;

        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const navItems = [
        { label: 'Inicio', href: '#hero' },
        { label: 'Servicios', href: '#servicios' },
        { label: 'Resultados', href: '#resultados' },
        { label: 'Planes', href: '#planes' },
    ];

    const handleSectionClick = (href: string) => {
        scrollToSection(href.slice(1));
        setMobileMenuOpen(false);
    };

    return (
        <motion.nav
            ref={navRef}
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
                    <a
                        href="#hero"
                        onClick={(event) => {
                            event.preventDefault();
                            scrollToSection('hero');
                        }}
                        className="flex items-center gap-1"
                    >
                        <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center overflow-hidden sm:h-10 sm:w-10">
                            <Image
                                src="/logo.png"
                                alt="EFFEKT IA"
                                width={40}
                                height={40}
                                className="w-full h-full object-cover scale-125"
                            />
                        </div>
                        <span className="font-space text-sm font-bold tracking-widest text-white sm:text-base">
                            EFFEKT IA
                        </span>
                    </a>

                    {/* Links */}
                    <div className="hidden md:flex gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={(event) => {
                                    if (item.href === '#hero' || item.href === '#servicios' || item.href === '#resultados') {
                                        event.preventDefault();
                                        handleSectionClick(item.href);
                                    }
                                }}
                                className="font-rajdhani text-sm tracking-wide text-white/70 hover:text-white transition"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    <div className="relative md:hidden">
                        <button
                            type="button"
                            aria-label={mobileMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
                            aria-expanded={mobileMenuOpen}
                            onClick={() => setMobileMenuOpen((open) => !open)}
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 backdrop-blur transition hover:border-[#ff8bb0]/60 hover:text-white"
                        >
                            <span className="relative h-3.5 w-4">
                                <span className={`absolute left-0 top-0 h-px w-4 bg-current transition ${mobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
                                <span className={`absolute left-0 top-[7px] h-px w-4 bg-current transition ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                                <span className={`absolute left-0 top-[14px] h-px w-4 bg-current transition ${mobileMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
                            </span>
                        </button>

                        {mobileMenuOpen ? (
                            <div className="absolute right-0 top-full mt-2 w-max min-w-[10.5rem] rounded-2xl border border-cyan-100/20 bg-[rgba(0,0,0,0.95)] px-1.5 py-1.5 shadow-[0_16px_42px_rgba(0,0,0,0.74),0_0_22px_rgba(0,229,255,0.09)] backdrop-blur-md">
                                <div className="flex flex-col gap-0.5">
                                    {navItems.map((item) => (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            onClick={(event) => {
                                                event.preventDefault();
                                                handleSectionClick(item.href);
                                            }}
                                            className="rounded-xl px-3 py-2 font-space text-[0.66rem] font-bold uppercase tracking-[0.16em] text-white/90 transition hover:bg-cyan-300/[0.08] hover:text-cyan-50"
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ) : null}
                    </div>

                    {/* CTA */}
                    <a
                        href="https://wa.me/524445166077"
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
