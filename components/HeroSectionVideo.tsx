'use client';

import { motion } from 'framer-motion';
import { droneData } from '@/data/droneData';

export default function HeroSectionVideo() {
    return (
        <section className="relative w-full h-[85vh] md:h-screen overflow-hidden bg-black">



            {/* Video solo en desktop */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="hidden md:block absolute inset-0 w-full h-full object-cover"
            >
                <source src={droneData.hero.videoPath} type="video/mp4" />
            </video>

            {/* Imagen fallback solo en mobile */}
            <div
                className="block md:hidden absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/hero-mobile.webp')" }}
            />

            <div className="absolute inset-x-0 top-0 h-20 md:h-40 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />

            <div className="absolute inset-x-0 bottom-0 h-48 md:h-[32rem] bg-gradient-to-t from-black/50 via-black/40 to-transparent pointer-events-none" />
            {/* HERO MOBILE */}
            <div className="relative z-10 flex min-h-[85vh] flex-col items-center justify-center text-center px-6 lg:hidden">

                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                    WEBS<br />PREMIUM
                </h1>

                <p className="mt-4 text-base sm:text-lg text-white/70 max-w-md">
                    {droneData.hero.subtitle}
                </p>

                <div className="mt-8 flex w-full flex-col gap-4">
                    <a
                        href="https://wa.me/5214445166077?text=Hola,%20quiero%20agendar%20una%20demo%20con%20EFFEKT%20IA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full rounded-xl bg-white py-4 text-sm font-bold tracking-widest text-black transition hover:scale-105"
                    >
                        AGENDA UNA DEMO
                    </a>

                    <a
                        href="#planes"
                        className="w-full rounded-xl border border-white/40 py-4 text-sm font-bold tracking-widest text-white transition hover:bg-white hover:text-black"
                    >
                        VER PLANES
                    </a>
                </div>

            </div>

            <div className="relative z-10 min-h-full max-w-[1920px] mx-auto px-6 lg:px-12 pt-32 pb-32 hidden lg:block">

                {/* Top HUD */}
                <div className="absolute top-28 left-0 right-0 hidden md:flex justify-between px-12 pointer-events-none">

                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-5 py-2.5">
                        <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
                        <span className="font-space font-bold text-xs tracking-[0.2em]">
                            MENSAJES ENTRANDO
                        </span>

                    </div>
                    <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md rounded-full px-5 py-2 border border-white/10">
                        <div className="text-right"><p className="text-xs font-bold font-space">SOLUCIONES</p>
                            <p className="text-[10px] text-white/50 uppercase">INTELIGENTES</p>

                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">🤖</div>
                    </div>
                </div>

                {/* Floating Feature Tag */}
                <div className="absolute top-[50%] left-[22%] hidden lg:flex flex-col items-center gap-2 pointer-events-none">
                    <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                        <span className="text-[10px] font-bold font-space">
                            AUTOMATIZACIÓN 24/7
                        </span>
                    </div>

                </div>


                {/* Bottom Right Metric */}
                <div className="absolute bottom-12 right-12 hidden md:block bg-black/80 ...
 backdrop-blur-3xl border border-white/10 rounded-3xl px-8 py-6 w-[22rem] shadow-2xl shadow-emerald-500/10 border-emerald-500/40
">

                    <div className="flex justify-between items-center gap-6">

                        <div>
                            <p className="text-[10px] font-space text-white/40 tracking-widest">
                                RESULTADOS REALES
                            </p>
                            <p className="text-4xl font-bold font-space">
                                MÁS VENTAS
                            </p>
                            <p className="text-xs text-emerald-400 font-bold tracking-widest mt-1">
                                PARA TU NEGOCIO
                            </p>

                        </div>
                        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                            ⚡
                        </div>
                    </div>
                </div>


                {/* Main Title - Bottom Left */}
                <div className="absolute bottom-12 left-12 max-w-5xl pointer-events-none hidden lg:block">
                    <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
                        <div className="relative">
                            <h1 className="text-[7rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/40 leading-[0.9] tracking-tighter drop-shadow-2xl">
                                WEBS<br />PREMIUM
                            </h1>

                        </div>
                        <div className="mt-8 pl-6 border-l-2 border-white/40 pointer-events-auto">
                            <p className="text-xl font-rajdhani text-gray-200">{droneData.hero.subtitle}</p>
                            <div className="flex gap-4 mt-6 flex-wrap">

                                <a
                                    href="https://wa.me/5214445166077?text=Hola,%20quiero%20agendar%20una%20demo%20con%20EFFEKT%20IA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-8 py-3 bg-white text-black font-bold font-space text-sm tracking-widest rounded transition hover:scale-105"
                                >
                                    AGENDA UNA DEMO
                                </a>
                                <a
                                    href="#planes"
                                    className="inline-block px-8 py-3 border border-white/40 text-white font-bold font-space text-sm tracking-widest rounded transition hover:bg-white hover:text-black"
                                >
                                    VER PLANES
                                </a>


                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
