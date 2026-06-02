'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

type PackagePlan = {
    id: string;
    name: string;
    price: string;
    description?: string;
    includes: string[];
    note?: string;
    cta: string;
};

const whatsappBase =
    'https://wa.me/524445166077?text=Hola,%20quiero%20informacion%20sobre%20';

const packages: PackagePlan[] = [
    {
        id: 'flyers-ia',
        name: 'Flyers',
        price: '2 flyers por $99 MXN',
        description:
            'Disenos profesionales creados con IA para promociones, productos y redes sociales.',
        includes: [
            'Diseno profesional para tu negocio',
            'Adaptado a tu marca',
            'Uso de logo y productos',
            'Entrega rapida',
        ],
        cta: 'COMENZAR',
    },
    {
        id: 'plan-basico',
        name: 'Plan Starter',
        price: '$499/mes',
        includes: [
            '8 flyers mensuales',
            '2 flyers con movimiento',
            '1 video promocional de hasta 30 segundos',
            'Adaptado para Instagram y Facebook',
        ],
        cta: 'COMENZAR',
    },
    {
        id: 'plan-plus',
        name: 'Plan Plus',
        price: '$999/mes',
        includes: [
            '12 flyers mensuales',
            '4 flyers con movimiento',
            '3 videos promocionales de hasta 30 segundos',
            '1 video con modelo virtual',
        ],
        cta: 'COMENZAR',
    },
    {
        id: 'plan-autoridad',
        name: 'Plan Pro',
        price: '$1,499/mes',
        includes: [
            '16 flyers mensuales',
            '6 flyers con movimiento',
            '5 videos promocionales de hasta 30 segundos',
            '2 videos con modelo virtual',
        ],
        cta: 'COMENZAR',
    },
    {
        id: 'modelos-ia',
        name: 'Modelos IA',
        price: 'Cotizacion',
        includes: [
            'Imagen promocional con modelo virtual',
            'Flyer profesional con modelo',
            'Modelo animado de 5 a 7 segundos',
            'Video promocional con modelo virtual',
        ],
        cta: 'SOLICITAR COTIZACION',
    },
    {
        id: 'landing-page',
        name: 'Landing Page',
        price: '$2,490 + $499/mes',
        includes: [
            'Hasta 4 secciones',
            'Boton directo a WhatsApp',
            'Hosting incluido',
            'Links a redes sociales',
            'Certificado de seguridad SSL',
        ],
        note: 'NO INCLUYE DOMINIO',
        cta: 'QUIERO MI LANDING',
    },
    {
        id: 'automatizacion-ia',
        name: 'Automatizacion IA',
        price: 'Cotizacion personalizada',
        includes: [
            'Agente de ventas para WhatsApp',
            'Respuestas automaticas 24/7',
            'Agenda citas en Google Calendar',
            'Seguimiento automatico de prospectos',
        ],
        cta: 'SOLICITAR COTIZACION',
    },
];

const AUTO_PLAY_INTERVAL = 6200;

const ctaClassName =
    'group relative mb-5 mt-auto inline-flex h-[54px] w-full items-center justify-center gap-2 overflow-hidden rounded-[16px] border border-[#ff8bb0]/60 bg-[linear-gradient(90deg,#FF005C,#D40088)] px-5 text-center font-space text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white shadow-[0_0_35px_rgba(255,0,110,0.45),inset_0_1px_0_rgba(255,255,255,0.24)] transition-all duration-[250ms] ease-out before:absolute before:inset-y-0 before:-left-16 before:w-12 before:skew-x-[-18deg] before:bg-white/35 before:blur-md before:transition-all before:duration-500 hover:scale-[1.02] hover:brightness-110 hover:shadow-[0_0_44px_rgba(255,0,110,0.58),inset_0_1px_0_rgba(255,255,255,0.32)] hover:before:left-[120%]';

const navButtonClassName =
    'flex h-9 w-9 items-center justify-center rounded-full border border-white/14 bg-black/32 font-space text-xs text-white/76 backdrop-blur-xl transition hover:border-[#ff2f68]/70 hover:text-white hover:shadow-[0_0_24px_rgba(255,0,92,0.26)] sm:h-10 sm:w-10 sm:text-sm';

function getWhatsappHref(plan: PackagePlan) {
    return `${whatsappBase}${encodeURIComponent(plan.name)}`;
}

function splitPrice(plan: PackagePlan) {
    if (plan.id === 'flyers-ia') {
        return { main: '2x$99', suffix: 'MXN' };
    }

    if (plan.id === 'landing-page') {
        return { main: '$2,490', suffix: '+ $499 / MES' };
    }

    if (plan.id === 'automatizacion-ia') {
        return { main: 'Cotizacion', suffix: 'Personalizada' };
    }

    const price = plan.price;
    const slashIndex = price.indexOf('/');

    if (slashIndex > -1) {
        return {
            main: price.slice(0, slashIndex).trim(),
            suffix: 'MXN / MES',
        };
    }

    const mxnIndex = price.indexOf(' MXN');

    if (mxnIndex > -1) {
        return {
            main: price.slice(0, mxnIndex).trim(),
            suffix: 'MXN',
        };
    }

    return { main: price, suffix: '' };
}

function PackageCard({
    plan,
    active,
    onMouseEnter,
    onMouseLeave,
}: {
    plan: PackagePlan;
    active: boolean;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}) {
    const visibleIncludes = plan.includes.slice(0, 4);
    const priceParts = splitPrice(plan);

    return (
        <article
            onMouseEnter={active ? onMouseEnter : undefined}
            onMouseLeave={active ? onMouseLeave : undefined}
            className={`relative flex h-[460px] min-h-0 w-[calc(100vw-32px)] max-w-[390px] flex-col overflow-hidden rounded-[28px] border px-5 py-5 transition-colors md:w-[390px] md:px-7 md:py-6 min-[900px]:h-[500px] min-[900px]:px-[30px] min-[900px]:py-7 ${active ? 'border-white/18 bg-[radial-gradient(circle_at_top,rgba(255,0,110,0.12),transparent_45%),linear-gradient(180deg,#111111_0%,#080808_48%,#050505_100%)] shadow-[0_0_70px_rgba(255,0,110,0.22),0_28px_90px_rgba(0,0,0,0.82),inset_0_0_36px_rgba(255,0,110,0.06)] hover:border-[#ff006e]/55' : 'border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,0,110,0.08),transparent_45%),linear-gradient(180deg,#101010_0%,#070707_48%,#040404_100%)] shadow-[0_24px_70px_rgba(0,0,0,0.76),inset_0_0_28px_rgba(255,0,110,0.035)]'}`}
        >
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#ff005a]/18 blur-3xl" />
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#ff8bb0]/50 to-transparent" />

            <div className="relative">
                <h3 className="text-[2.1rem] font-extrabold leading-[0.95] tracking-tight text-white md:text-[38px]">
                    {plan.name}
                </h3>
            </div>

            <div className="mt-5">
                <p className="font-space font-extrabold leading-none text-[#FF2D7A] drop-shadow-[0_0_20px_rgba(255,45,122,0.32)]">
                    <span className="block text-[3rem] md:text-[54px]">{priceParts.main}</span>
                    {priceParts.suffix ? (
                        <span className="mt-3 block text-[0.68rem] uppercase tracking-[0.35em] text-white/65 md:text-xs [@media(max-height:780px)]:mt-2">
                            {priceParts.suffix}
                        </span>
                    ) : null}
                </p>
            </div>

            <div className="mb-5 mt-4 h-[3px] w-[76px] rounded-full bg-[linear-gradient(90deg,#FF005C,#FF2D7A)] shadow-[0_0_16px_rgba(255,45,122,0.45)]" />

            <div>
                <p className="font-space text-[0.52rem] font-bold uppercase tracking-[0.24em] text-white/50 sm:text-[0.56rem]">
                    Beneficios
                </p>
                <ul className="mt-3 space-y-3.5">
                    {visibleIncludes.map((item) => (
                        <li key={item} className="flex gap-3 text-[0.9rem] leading-[1.35] text-white/84 md:text-base [@media(max-height:780px)]:text-[0.92rem]">
                            <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#FF005C] font-space text-[0.7rem] font-bold text-white shadow-[0_0_14px_rgba(255,0,92,0.3)]">
                                ✓
                            </span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {plan.note ? (
                <p className="mt-3 rounded-2xl border border-white/10 bg-black/24 px-3 py-1.5 text-xs font-medium text-white/62 sm:text-sm">
                    Nota: {plan.note}
                </p>
            ) : null}

            <a
                href={getWhatsappHref(plan)}
                target="_blank"
                rel="noopener noreferrer"
                className={ctaClassName}
            >
                <span className="relative z-10">{plan.cta}</span>
                <span className="relative z-10 text-[#ffd0dc] transition-transform duration-300 ease-out group-hover:translate-x-1">
                    →
                </span>
            </a>
        </article>
    );
}

export default function PackagesSection() {
    const shouldReduceMotion = useReducedMotion();
    const reduceMotion = Boolean(shouldReduceMotion);
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [viewportWidth, setViewportWidth] = useState(0);
    const activePlan = packages[activeIndex];

    useEffect(() => {
        const query = window.matchMedia('(max-width: 639px)');
        const updateIsMobile = () => setIsMobile(query.matches);

        updateIsMobile();
        query.addEventListener('change', updateIsMobile);

        return () => query.removeEventListener('change', updateIsMobile);
    }, []);

    useEffect(() => {
        const updateViewportWidth = () => setViewportWidth(window.innerWidth);

        updateViewportWidth();
        window.addEventListener('resize', updateViewportWidth);

        return () => window.removeEventListener('resize', updateViewportWidth);
    }, []);

    useEffect(() => {
        if (paused || reduceMotion) return;

        const interval = window.setInterval(() => {
            setActiveIndex((current) => (current + 1) % packages.length);
        }, AUTO_PLAY_INTERVAL);

        return () => window.clearInterval(interval);
    }, [paused, reduceMotion]);

    const visiblePlans = useMemo(() => {
        return packages.map((plan, index) => {
            let offset = index - activeIndex;
            if (offset > packages.length / 2) offset -= packages.length;
            if (offset < -packages.length / 2) offset += packages.length;

            return { plan, index, offset };
        });
    }, [activeIndex]);

    const goToPrevious = () => {
        setActiveIndex((current) => (current - 1 + packages.length) % packages.length);
    };

    const goToNext = () => {
        setActiveIndex((current) => (current + 1) % packages.length);
    };

    const getSideOffset = (level: 1 | 2, scale: number) => {
        const width = viewportWidth || 1280;
        const sectionPadding = width >= 1024 ? 40 : width >= 640 ? 32 : 20;
        const cardWidth = Math.min(width - sectionPadding * 2, 390);
        const scaledHalfCard = (cardWidth * scale) / 2;
        const maxInsideViewport = Math.max(0, width / 2 - scaledHalfCard - sectionPadding);
        const idealOffset = level === 1 ? 480 : 850;

        return Math.min(idealOffset, maxInsideViewport);
    };

    const getPosition = (offset: number) => {
        if (isMobile && offset !== 0) {
            return { x: offset > 0 ? 120 : -120, scale: 0.78, opacity: 0, zIndex: 0, blur: 'blur(3px)', rotateY: 0 };
        }

        if (offset === 0) return { x: 0, scale: 1, opacity: 1, zIndex: 40, blur: 'blur(0px)', rotateY: 0 };
        if (offset === -1) return { x: -getSideOffset(1, 0.72), scale: 0.72, opacity: 0.45, zIndex: 16, blur: 'blur(0.5px)', rotateY: 8 };
        if (offset === 1) return { x: getSideOffset(1, 0.72), scale: 0.72, opacity: 0.45, zIndex: 16, blur: 'blur(0.5px)', rotateY: -8 };
        if (offset === -2) return { x: -getSideOffset(2, 0.56), scale: 0.56, opacity: 0.16, zIndex: 6, blur: 'blur(2px)', rotateY: 12 };
        return { x: getSideOffset(2, 0.56), scale: 0.56, opacity: 0.16, zIndex: 6, blur: 'blur(2px)', rotateY: -12 };
    };

    return (
        <section
            id="planes"
            className="section-screen plans-section-layout relative flex flex-col overflow-hidden bg-[#030303] px-5 text-white sm:px-8 lg:px-10"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(255,0,92,0.15),transparent_32%),radial-gradient(circle_at_16%_76%,rgba(157,78,221,0.14),transparent_31%),radial-gradient(circle_at_88%_70%,rgba(255,0,60,0.1),transparent_29%),linear-gradient(135deg,#030303_0%,#080808_52%,#030303_100%)]" />
            <motion.div
                key={activePlan.id}
                animate={reduceMotion ? undefined : { opacity: [0.18, 0.32, 0.18], scale: [1, 1.08, 1] }}
                transition={reduceMotion ? undefined : { duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-1/2 top-[42%] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#ff003c]/14 blur-3xl"
            />
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/88 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/86 to-transparent" />
            <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-7xl flex-1 flex-col items-center">
                <div
                    className="plans-carousel-stage relative flex min-h-0 w-full flex-1 items-center justify-center overflow-visible"
                    aria-label="Carrusel de paquetes"
                    style={{ perspective: 1500 }}
                >
                    <motion.div
                        key={activePlan.id}
                        animate={reduceMotion ? undefined : { opacity: [0.28, 0.5, 0.28], scale: [1, 1.08, 1] }}
                        transition={reduceMotion ? undefined : { duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,0,98,0.34)_0%,rgba(120,0,80,0.14)_35%,transparent_70%)] blur-2xl"
                    />
                    <div className="absolute bottom-[24px] left-1/2 h-[90px] w-[min(520px,80vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(255,0,98,0.32),transparent_70%)] blur-[18px]" />
                    {visiblePlans.map(({ plan, offset }) => {
                        const position = getPosition(offset);
                        const active = offset === 0;

                        return (
                            <motion.div
                                key={plan.id}
                                className="absolute left-1/2 top-1/2"
                                animate={{
                                    x: position.x,
                                    scale: position.scale,
                                    opacity: position.opacity,
                                    zIndex: position.zIndex,
                                    filter: position.blur,
                                    rotateY: position.rotateY,
                                }}
                                transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                                style={{
                                    transformStyle: 'preserve-3d',
                                    pointerEvents: active ? 'auto' : 'none',
                                }}
                            >
                                <div className="-translate-x-1/2 -translate-y-1/2">
                                    <PackageCard
                                        plan={plan}
                                        active={active}
                                        onMouseEnter={() => setPaused(true)}
                                        onMouseLeave={() => setPaused(false)}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>

            <div
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                className="absolute bottom-6 right-10 z-50 flex h-[var(--plan-carousel-controls-height)] items-center justify-end gap-3 sm:bottom-8 sm:right-12 lg:bottom-10 lg:right-14"
            >
                <button
                    type="button"
                    onClick={goToPrevious}
                    aria-label="Paquete anterior"
                    className={navButtonClassName}
                >
                    &lt;
                </button>
                <span className="min-w-16 text-center font-space text-[0.64rem] font-bold tracking-[0.18em] text-white/64">
                    {String(activeIndex + 1).padStart(2, '0')} / {String(packages.length).padStart(2, '0')}
                </span>
                <button
                    type="button"
                    onClick={goToNext}
                    aria-label="Paquete siguiente"
                    className={navButtonClassName}
                >
                    &gt;
                </button>
            </div>
        </section>
    );
}
