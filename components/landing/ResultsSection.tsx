'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

type ResultSlide = {
    eyebrow: string;
    label: string;
    headline: string;
    highlight: string;
    description: string;
    benefits: string[];
    image: string;
    objectPosition: string;
};

const whatsappHref =
    'https://wa.me/5214445418701?text=Hola,%20quiero%20mejorar%20mi%20negocio%20con%20EFFEKT%20IA';

const resultSlides: ResultSlide[] = [
    {
        eyebrow: 'SEO',
        label: 'SEO',
        headline: 'APARECE EN GOOGLE\nANTES QUE TU COMPETENCIA.',
        highlight: 'GOOGLE',
        description:
            'Posicionamos tu negocio para que los clientes te encuentren primero cuando buscan tus productos o servicios.',
        benefits: ['MÁS VISIBILIDAD', 'MÁS CLIENTES', 'MÁS VENTAS'],
        image: '/images/seo.png',
        objectPosition: 'center right',
    },
    {
        eyebrow: 'GEO',
        label: 'GEO',
        headline: 'APARECE EN LAS RESPUESTAS\nDE LA IA.',
        highlight: 'IA',
        description:
            'Optimizamos tu presencia para que ChatGPT, Gemini y otros asistentes puedan encontrarte y recomendarte.',
        benefits: ['MÁS VISIBILIDAD', 'MÁS AUTORIDAD', 'MÁS OPORTUNIDADES'],
        image: '/images/geo.png',
        objectPosition: 'center right',
    },
    {
        eyebrow: 'WEB + REDES',
        label: 'WEB + REDES',
        headline: 'TODO TU NEGOCIO DIGITAL,\nCONECTADO.',
        highlight: 'CONECTADO',
        description:
            'Tu sitio web y tus redes trabajan juntos para atraer clientes, generar confianza y convertir visitas en oportunidades.',
        benefits: ['MÁS PRESENCIA', 'MÁS INTERACCIÓN', 'MÁS CLIENTES'],
        image: '/images/landing_mas_redes.png',
        objectPosition: 'center right',
    },
    {
        eyebrow: 'AUTOMATIZACIÓN IA',
        label: 'AUTOMATIZACIÓN',
        headline: 'MENOS TAREAS.\nMÁS RESULTADOS.',
        highlight: 'RESULTADOS',
        description:
            'Automatizamos procesos repetitivos para que puedas enfocarte en hacer crecer tu negocio mientras la tecnología trabaja por ti.',
        benefits: ['MÁS TIEMPO', 'MÁS EFICIENCIA', 'MÁS CRECIMIENTO'],
        image: '/images/automatizacion_ia_resultados.png',
        objectPosition: 'center right',
    },
    {
        eyebrow: 'AUTORIDAD DIGITAL',
        label: 'AUTORIDAD',
        headline: 'CONVIERTE TU NEGOCIO\nEN UNA REFERENCIA.',
        highlight: 'REFERENCIA',
        description:
            'Construimos una presencia digital sólida para que más personas te encuentren, te recuerden y confíen en tu marca.',
        benefits: ['MÁS CONFIANZA', 'MÁS RECONOCIMIENTO', 'MÁS CLIENTES'],
        image: '/images/autoridad.png',
        objectPosition: 'center right',
    },
];

export default function ResultsSection() {
    const shouldReduceMotion = useReducedMotion();
    const reduceMotion = Boolean(shouldReduceMotion);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const activeSlide = resultSlides[activeIndex];

    useEffect(() => {
        if (isPaused) return;

        const interval = window.setInterval(() => {
            setActiveIndex((current) => (current + 1) % resultSlides.length);
        }, 10000);

        return () => window.clearInterval(interval);
    }, [activeIndex, isPaused]);

    const goToPrevious = () => {
        setActiveIndex((current) => (current - 1 + resultSlides.length) % resultSlides.length);
    };

    const goToNext = () => {
        setActiveIndex((current) => (current + 1) % resultSlides.length);
    };

    const sweepInitial = reduceMotion ? false : { opacity: 0, x: -18, clipPath: 'inset(0 100% 0 0)' };
    const sweepAnimate = reduceMotion ? undefined : { opacity: 1, x: 0, clipPath: 'inset(0 0% 0 0)' };
    const sweepExit = reduceMotion ? undefined : { opacity: 0, x: -8, clipPath: 'inset(0 100% 0 0)' };
    const sweepTransition = (delay: number) => ({
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1] as const,
    });

    const renderHeadline = () => {
        const parts = activeSlide.headline.split(activeSlide.highlight);

        return (
            <>
                {parts[0]}
                <span className="bg-gradient-to-r from-white via-[#ff8bb0] to-[#ff003c] bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(255,0,60,0.42)]">
                    {activeSlide.highlight}
                </span>
                {parts[1]}
            </>
        );
    };

    return (
        <section
            id="resultados"
            className="section-screen relative overflow-hidden bg-black"
        >
            {resultSlides.map((slide, index) => (
                <motion.img
                    key={slide.image}
                    src={slide.image}
                    alt=""
                    initial={false}
                    animate={
                        reduceMotion
                            ? undefined
                            : {
                                opacity: index === activeIndex ? 1 : 0,
                                scale: index === activeIndex ? 1 : 1.015,
                            }
                    }
                    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        objectPosition: slide.objectPosition,
                        zIndex: index === activeIndex ? 1 : 0,
                        opacity: reduceMotion ? (index === activeIndex ? 1 : 0) : undefined,
                    }}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                />
            ))}

            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/70 to-black/30 sm:from-black/85 sm:via-black/45 sm:to-black/10" />

            <div className="relative z-20 flex min-h-[inherit] items-center px-5 pb-28 pt-24 sm:px-10 sm:pb-24 sm:pt-24 lg:px-16">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSlide.eyebrow}
                        initial={reduceMotion ? false : { opacity: 0, x: 18, filter: 'blur(6px)' }}
                        animate={reduceMotion ? undefined : { opacity: 1, x: 0, filter: 'blur(0px)' }}
                        exit={reduceMotion ? undefined : { opacity: 0, x: -12, filter: 'blur(4px)' }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        className="max-w-[520px]"
                    >
                        <motion.div
                            initial={sweepInitial}
                            animate={sweepAnimate}
                            exit={sweepExit}
                            transition={sweepTransition(0)}
                            className="mb-4 sm:mb-5"
                        >
                            <p className="font-space text-[1rem] font-bold uppercase tracking-[0.22em] text-[#ff4d78] drop-shadow-[0_0_20px_rgba(255,0,60,0.5)] sm:text-[1.1rem]">
                                {activeSlide.eyebrow}
                            </p>
                        </motion.div>

                        <motion.h2
                            initial={sweepInitial}
                            animate={sweepAnimate}
                            exit={sweepExit}
                            transition={sweepTransition(0.08)}
                            className="whitespace-pre-line text-[2.1rem] font-bold leading-[0.94] tracking-tight text-white drop-shadow-[0_12px_38px_rgba(0,0,0,0.66)] sm:text-[2.9rem] lg:text-[3.25rem] xl:text-[3.55rem]"
                        >
                            {renderHeadline()}
                        </motion.h2>

                        <motion.p
                            initial={sweepInitial}
                            animate={sweepAnimate}
                            exit={sweepExit}
                            transition={sweepTransition(0.16)}
                            className="mt-4 max-w-xl text-[0.98rem] leading-relaxed text-white/78 drop-shadow-[0_10px_30px_rgba(0,0,0,0.7)] sm:mt-4 sm:text-[1.04rem] lg:text-base"
                        >
                            {activeSlide.description}
                        </motion.p>

                        <motion.div
                            initial={sweepInitial}
                            animate={sweepAnimate}
                            exit={sweepExit}
                            transition={sweepTransition(0.24)}
                            className="mt-5 flex flex-wrap gap-x-5 gap-y-2.5 border-t border-white/12 pt-4 sm:gap-x-7"
                        >
                            {activeSlide.benefits.map((benefit) => (
                                <span
                                    key={benefit}
                                    className="font-space text-[0.64rem] font-bold uppercase tracking-[0.18em] text-white/86 drop-shadow-[0_8px_22px_rgba(0,0,0,0.8)]"
                                >
                                    {benefit}
                                </span>
                            ))}
                        </motion.div>

                        <motion.a
                            href={whatsappHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                            initial={sweepInitial}
                            animate={sweepAnimate}
                            exit={sweepExit}
                            transition={sweepTransition(0.32)}
                            className="group relative mt-5 inline-flex min-h-10 items-center justify-center gap-2 overflow-hidden rounded-full border border-[#ff8bb0]/60 bg-[linear-gradient(110deg,#ff003c_0%,#97005f_48%,#ff003c_100%)] bg-[length:180%_100%] px-6 py-3 font-space text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white shadow-[0_0_24px_rgba(255,0,60,0.34),inset_0_1px_0_rgba(255,255,255,0.24)] transition-all duration-[250ms] ease-out before:absolute before:inset-y-0 before:-left-16 before:w-12 before:skew-x-[-18deg] before:bg-white/35 before:blur-md before:transition-all before:duration-500 hover:-translate-y-0.5 hover:scale-[1.03] hover:border-[#ffc1d2]/80 hover:bg-[position:100%_0] hover:shadow-[0_0_34px_rgba(255,0,60,0.44),0_0_50px_rgba(190,0,120,0.22),inset_0_1px_0_rgba(255,255,255,0.32)] hover:before:left-[120%]"
                        >
                            <span className="relative z-10">OBTENER RESULTADOS</span>
                            <span className="relative z-10 text-[#ffd0dc] transition-transform duration-300 ease-out group-hover:translate-x-1">→</span>
                        </motion.a>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="absolute bottom-6 left-1/2 z-30 w-[calc(100%-2.5rem)] -translate-x-1/2 sm:bottom-8 sm:w-auto"
            >
                <div className="no-scrollbar overflow-x-auto">
                    <div className="flex min-w-max justify-center gap-0 border-t border-white/12 pt-3">
                        {resultSlides.map((slide, index) => {
                            const active = index === activeIndex;

                            return (
                                <button
                                    key={slide.label}
                                    type="button"
                                    onClick={() => setActiveIndex(index)}
                                    className="group relative min-h-11 px-4 text-center sm:px-5 lg:px-6"
                                    aria-label={`Ver resultado ${slide.label}`}
                                >
                                    <span className={`font-space text-[0.7rem] font-bold uppercase tracking-[0.18em] transition-all sm:text-[0.78rem] lg:text-[0.82rem] ${active ? 'text-white drop-shadow-[0_0_16px_rgba(255,47,104,0.52)]' : 'text-white/34 group-hover:text-white/78 group-hover:drop-shadow-[0_0_12px_rgba(255,47,104,0.28)]'}`}>
                                        {String(index + 1).padStart(2, '0')} {slide.label}
                                    </span>
                                    {active ? (
                                        <motion.span
                                            layoutId="results-active-indicator"
                                            className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[#ff2f68] shadow-[0_0_16px_rgba(255,47,104,0.75)] sm:left-4 sm:right-4"
                                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                        />
                                    ) : null}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="absolute bottom-6 right-5 z-30 flex items-center justify-end gap-3 sm:bottom-8 sm:right-10"
            >
                <button
                    type="button"
                    onClick={goToPrevious}
                    aria-label="Resultado anterior"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/14 bg-black/28 font-space text-sm text-white/76 backdrop-blur transition hover:border-[#ff2f68]/70 hover:text-white hover:shadow-[0_0_24px_rgba(255,0,92,0.24)]"
                >
                    ←
                </button>
                <button
                    type="button"
                    onClick={goToNext}
                    aria-label="Resultado siguiente"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/14 bg-black/28 font-space text-sm text-white/76 backdrop-blur transition hover:border-[#ff2f68]/70 hover:text-white hover:shadow-[0_0_24px_rgba(255,0,92,0.24)]"
                >
                    →
                </button>
            </div>
        </section>
    );
}
