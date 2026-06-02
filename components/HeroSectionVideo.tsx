'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const whatsappHref =
    'https://wa.me/524445166077';

const AUTO_PLAY_INTERVAL = 6000;

type Slide = {
    id: string;
    label: string;
    title: string;
    subtitle: string;
    text: string;
    accent: string;
    image?: string;
    poster?: string;
    video: string;
    videoVersion?: string;
    alt: string;
};

const slides: Slide[] = [
    {
        id: 'reels',
        label: 'Reels',
        title: 'Reels premium',
        subtitle: 'Reels premium para que tu marca destaque.',
        text: 'Reels premium para que tu marca destaque.',
        accent: '#ff003c',
        image: '/images/reel_barberia_premium.png',
        poster: '/images/reel_barberia_premium.png',
        video: '/videos/hero/reel_barberia_premium.mp4',
        alt: 'Reel premium para barberia creado por Effekt IA',
    },
    {
        id: 'flyers',
        label: 'Flyers',
        title: 'Flyers premium',
        subtitle: 'Flyers que hacen que tus promos vendan mas.',
        text: 'Flyers que hacen que tus promos vendan mas.',
        accent: '#ff8a00',
        image: '/images/flyer_hamburguesa_premium.png',
        poster: '/images/flyer_hamburguesa_premium.png',
        video: '/videos/hero/flyer_hamburguesa_premium.mp4',
        alt: 'Flyer premium de hamburguesa para redes sociales',
    },
    {
        id: 'landing',
        label: 'Landing',
        title: 'Landing pages',
        subtitle: 'Landing pages listas para convertir visitas en clientes.',
        text: 'Landing pages listas para convertir visitas en clientes.',
        accent: '#9d4edd',
        image: '/images/landing_page_premium.png',
        poster: '/images/landing_page_premium.png',
        video: '/videos/hero/landing_page_premium.mp4',
        alt: 'Landing page premium para negocios locales',
    },
    {
        id: 'modelos',
        label: 'Modelos IA',
        title: 'Modelos IA',
        subtitle: 'Modelos IA para mostrar tus productos como una gran marca.',
        text: 'Modelos IA para mostrar tus productos como una gran marca.',
        accent: '#00e5ff',
        image: '/images/modelo_ia_beauty_premium.png',
        poster: '/images/modelo_ia_beauty_premium.png',
        video: '/videos/hero/modelo_ia_beauty_premium.mp4',
        alt: 'Modelo IA beauty premium mostrando producto',
    },
    {
        id: 'whatsapp',
        label: 'WhatsApp',
        title: 'WhatsApp',
        subtitle: 'WhatsApp automatizado para responder y agendar.',
        text: 'WhatsApp automatizado para responder y agendar.',
        accent: '#25d366',
        image: undefined,
        poster: undefined,
        video: '/videos/hero/whatsapp_automation_premium.mp4',
        videoVersion: '20260528-142811',
        alt: 'Automatizacion WhatsApp premium para negocios',
    },
];

function ShowcaseCard({
    slide,
    active,
}: {
    slide: Slide;
    active: boolean;
}) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [failedVideoId, setFailedVideoId] = useState<string | null>(null);
    const videoFailed = failedVideoId === slide.id;
    const isAutomationVideo = slide.video.includes('whatsapp_automation_premium.mp4');
    const shouldUseVideo = active && slide.video && !videoFailed;
    const isModelVideo = slide.video.includes('modelo_ia_beauty_premium.mp4');
    const isContainedVideo = slide.video.includes('flyer_hamburguesa_premium.mp4');
    const videoSrc = 'videoVersion' in slide ? `${slide.video}?v=${slide.videoVersion}` : slide.video;

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (shouldUseVideo) {
            video.currentTime = 0;
            video.playbackRate = 1;
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    setFailedVideoId(slide.id);
                });
            }
            return () => {
                video.pause();
                video.currentTime = 0;
            };
        }

        video.pause();
        video.currentTime = 0;
    }, [shouldUseVideo, slide.id]);

    return (
        <div
            className="relative w-[min(68svw,260px)] overflow-hidden rounded-[24px] bg-black shadow-2xl transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] sm:w-[245px] sm:rounded-[28px]"
            style={{
                aspectRatio: isModelVideo ? '1020 / 1920' : '9 / 16',
                boxShadow: active
                    ? '0 0 22px rgba(255, 0, 60, .75), 0 0 70px rgba(255, 0, 60, .35), 0 34px 120px rgba(0,0,0,0.85), inset 0 0 0 1px rgba(255,255,255,0.2)'
                    : `0 24px 74px rgba(0,0,0,0.66), 0 0 42px ${slide.accent}1f, inset 0 0 0 1px rgba(255,255,255,0.12)`,
            }}
        >
            {shouldUseVideo ? (
                <video
                    ref={videoRef}
                    key={slide.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onError={() => setFailedVideoId(slide.id)}
                    className="h-full w-full bg-black"
                    style={{
                        objectFit: isContainedVideo ? 'contain' : 'cover',
                        objectPosition: isContainedVideo ? 'center top' : 'center',
                    }}
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>
            ) : isAutomationVideo && !videoFailed ? (
                <video
                    ref={videoRef}
                    key={`${slide.video}-paused`}
                    muted
                    playsInline
                    preload="metadata"
                    onLoadedMetadata={(event) => {
                        event.currentTarget.currentTime = 0;
                        event.currentTarget.pause();
                    }}
                    onError={() => setFailedVideoId(slide.id)}
                    className="h-full w-full bg-black object-cover object-center"
                >
                    <source src={videoSrc} type="video/mp4" />
                </video>
            ) : slide.poster || slide.image ? (
                <Image
                    src={slide.poster ?? slide.image ?? ''}
                    alt={slide.title}
                    fill
                    sizes="260px"
                    className={isContainedVideo ? 'object-contain object-top' : 'object-cover'}
                    priority={active}
                />
            ) : (
                <div className="h-full w-full bg-[radial-gradient(circle_at_50%_35%,rgba(255,0,60,0.18),transparent_45%),linear-gradient(180deg,#080808,#000)]" />
            )}
        </div>
    );
}

function HeroCarousel({
    activeIndex,
    setActiveIndex,
    setPaused,
    onMobileTap,
}: {
    activeIndex: number;
    setActiveIndex: (index: number) => void;
    setPaused: (paused: boolean) => void;
    onMobileTap: () => void;
}) {
    const shouldReduceMotion = useReducedMotion();
    const reduceMotion = Boolean(shouldReduceMotion);
    const activeSlide = slides[activeIndex];
    const [pointer, setPointer] = useState({ x: 0, y: 0 });

    const getOffset = (index: number) => {
        const rawOffset = index - activeIndex;
        if (rawOffset > slides.length / 2) return rawOffset - slides.length;
        if (rawOffset < -slides.length / 2) return rawOffset + slides.length;
        return rawOffset;
    };

    const getPosition = (offset: number) => {
        if (offset === 0) {
            return { x: 0, y: 0, scale: 1, rotateY: 0, opacity: 1, zIndex: 50, blur: 'blur(0px)' };
        }

        if (offset === -1) {
            return { x: -150, y: 0, scale: 0.78, rotateY: 18, opacity: 0.75, zIndex: 30, blur: 'blur(0px)' };
        }

        if (offset === 1) {
            return { x: 150, y: 0, scale: 0.78, rotateY: -18, opacity: 0.75, zIndex: 30, blur: 'blur(0px)' };
        }

        if (offset === -2) {
            return { x: -260, y: 0, scale: 0.62, rotateY: 28, opacity: 0.4, zIndex: 10, blur: 'blur(2px)' };
        }

        return { x: 260, y: 0, scale: 0.62, rotateY: -28, opacity: 0.4, zIndex: 10, blur: 'blur(2px)' };
    };

    const goToPrevious = () => {
        setActiveIndex((activeIndex - 1 + slides.length) % slides.length);
    };

    const goToNext = () => {
        setActiveIndex((activeIndex + 1) % slides.length);
    };

    return (
        <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.94, x: 44 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="no-scrollbar relative mx-auto mt-2 flex h-[31rem] w-full max-w-full items-center justify-center overflow-x-hidden overflow-y-visible pb-0 sm:mt-6 sm:h-[28rem] sm:-translate-y-11 sm:pb-16 lg:mt-0 lg:h-[calc(100vh-140px)] lg:min-w-0 lg:pb-20"
            onClick={onMobileTap}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => {
                setPaused(false);
                setPointer({ x: 0, y: 0 });
            }}
            onMouseMove={(event) => {
                const rect = event.currentTarget.getBoundingClientRect();
                setPointer({
                    x: (event.clientX - rect.left) / rect.width - 0.5,
                    y: (event.clientY - rect.top) / rect.height - 0.5,
                });
            }}
            aria-label="Carrusel de ejemplos visuales"
            style={{ perspective: 1600 }}
        >
            <motion.div
                animate={reduceMotion ? undefined : { opacity: [0.2, 0.34, 0.2], scale: [1, 1.08, 1] }}
                transition={reduceMotion ? undefined : { duration: 6.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-1/2 top-1/2 h-[20rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
                style={{
                    background: `radial-gradient(circle, ${activeSlide.accent}1a 0%, rgba(255,0,60,0.07) 42%, transparent 74%)`,
                    transform: reduceMotion
                        ? undefined
                        : `translate(calc(-50% + ${pointer.x * 14}px), calc(-50% + ${pointer.y * 10}px))`,
                }}
            />
            {slides.map((slide, index) => {
                const offset = getOffset(index);
                const position = getPosition(offset);
                const active = offset === 0;

                return (
                    <motion.div
                        key={slide.id}
                        className="absolute left-1/2 top-[48%] -ml-[min(34svw,130px)] -mt-[min(60.44svw,231.11px)] sm:top-[39%] sm:-ml-[122.5px] sm:-mt-[217.78px] lg:top-1/2"
                        animate={{
                            x: position.x + (reduceMotion ? 0 : pointer.x * (active ? 10 : 4)),
                            y: position.y + (reduceMotion ? 0 : pointer.y * (active ? 6 : 3)),
                            scale: position.scale,
                            rotateY: position.rotateY,
                            opacity: position.opacity,
                            zIndex: position.zIndex,
                            filter: position.blur,
                        }}
                        transition={{ duration: 0.86, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            transformStyle: 'preserve-3d',
                            transformOrigin: 'center bottom',
                            pointerEvents: active ? 'auto' : 'none',
                        }}
                    >
                        <div>
                            <ShowcaseCard slide={slide} active={active} />
                        </div>
                    </motion.div>
                );
            })}

            <div className="absolute bottom-2 left-1/2 z-[70] hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-black/28 px-2.5 py-1.5 backdrop-blur-xl sm:flex sm:bottom-2 sm:gap-3 sm:px-3 sm:py-2 lg:bottom-5">
                <button
                    type="button"
                    aria-label="Anterior"
                    onClick={goToPrevious}
                    className="inline-flex min-h-7 items-center gap-1 rounded-full border border-[#ff003c]/38 bg-black/38 px-2.5 py-1 font-space text-[0.5rem] font-bold uppercase tracking-[0.1em] text-white/78 shadow-[0_0_18px_rgba(255,0,60,0.14)] transition hover:border-[#ff003c]/80 hover:bg-[#ff003c]/14 hover:text-white hover:shadow-[0_0_28px_rgba(255,0,60,0.3)] sm:min-h-8 sm:gap-1.5 sm:px-3 sm:py-1.5 sm:text-[0.56rem] sm:tracking-[0.13em]"
                >
                    <span aria-hidden="true" className="text-xs leading-none text-[#ff003c]">&lt;</span>
                    Anterior
                </button>
                <div className="flex items-center gap-1.5 sm:gap-2">
                    {slides.map((slide, index) => (
                        <button
                            key={slide.id}
                            type="button"
                            aria-label={`Ver ${slide.label}`}
                            onClick={() => setActiveIndex(index)}
                            className="h-1.5 rounded-full transition-all"
                            style={{
                                width: index === activeIndex ? '2rem' : '0.5rem',
                                backgroundColor: index === activeIndex ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.35)',
                            }}
                        />
                    ))}
                </div>
                <button
                    type="button"
                    aria-label="Siguiente"
                    onClick={goToNext}
                    className="inline-flex min-h-7 items-center gap-1 rounded-full border border-[#ff003c]/38 bg-black/38 px-2.5 py-1 font-space text-[0.5rem] font-bold uppercase tracking-[0.1em] text-white/78 shadow-[0_0_18px_rgba(255,0,60,0.14)] transition hover:border-[#ff003c]/80 hover:bg-[#ff003c]/14 hover:text-white hover:shadow-[0_0_28px_rgba(255,0,60,0.3)] sm:min-h-8 sm:gap-1.5 sm:px-3 sm:py-1.5 sm:text-[0.56rem] sm:tracking-[0.13em]"
                >
                    Siguiente
                    <span aria-hidden="true" className="text-xs leading-none text-[#ff003c]">&gt;</span>
                </button>
            </div>
        </motion.div>
    );
}

export default function HeroSectionVideo() {
    const shouldReduceMotion = useReducedMotion();
    const reduceMotion = Boolean(shouldReduceMotion);
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const activeSlide = slides[activeIndex];

    useEffect(() => {
        if (reduceMotion || paused) return;

        const interval = window.setInterval(() => {
            setActiveIndex((current) => (current + 1) % slides.length);
        }, AUTO_PLAY_INTERVAL);

        return () => window.clearInterval(interval);
    }, [paused, reduceMotion]);

    const toggleMobileAutoplay = () => {
        if (!window.matchMedia('(max-width: 639px)').matches) return;
        setPaused((current) => !current);
    };

    return (
        <section
            id="hero"
            className="section-screen relative w-full scroll-mt-0 overflow-x-hidden overflow-y-visible bg-[#050505] text-white sm:overflow-hidden"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_46%,rgba(255,0,60,0.11),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.045),transparent_34%),linear-gradient(135deg,#050505_0%,#080808_50%,#050505_100%)]" />
            <motion.div
                key={activeSlide.accent}
                animate={reduceMotion ? undefined : { opacity: [0.06, 0.14, 0.06], scale: [1, 1.08, 1] }}
                transition={reduceMotion ? undefined : { duration: 6.4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute right-[10%] top-[23%] hidden h-[25rem] w-[25rem] rounded-full blur-3xl sm:block"
                style={{ backgroundColor: `${activeSlide.accent}14` }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.05),transparent_24%,rgba(255,255,255,0.016)_58%,transparent_76%)] opacity-45" />
            <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/90 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/78 to-transparent" />

            <div className="relative z-10 mx-auto grid min-h-[inherit] max-w-7xl items-start gap-0 px-5 pb-8 pt-[4.25rem] sm:items-center sm:gap-5 sm:px-6 sm:pb-8 sm:pt-32 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:px-10 lg:pb-7 lg:pt-28 xl:px-6">
                <motion.div
                    initial={reduceMotion ? false : { y: 28, opacity: 0 }}
                    animate={reduceMotion ? undefined : { y: 0, opacity: 1 }}
                    transition={{ duration: 0.76, ease: 'easeOut' }}
                    className="hidden max-w-[37rem] sm:block"
                >
                    <motion.div
                        initial={reduceMotion ? false : { y: 12, opacity: 0 }}
                        animate={reduceMotion ? undefined : { y: 0, opacity: 1 }}
                        transition={{ duration: 0.58, delay: 0.05 }}
                        className="mb-3 hidden max-w-full items-center gap-2 rounded-full border border-white/16 bg-white/[0.06] px-3 py-1.5 backdrop-blur-xl sm:mb-6 sm:inline-flex sm:px-4 sm:py-2"
                    >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff003c] shadow-[0_0_18px_rgba(255,0,60,0.92)]" />
                        <span className="font-space text-[0.6rem] font-bold uppercase tracking-[0.18em] text-white/86">
                            MARKETING PREMIUM CON IA
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={reduceMotion ? false : { y: 16, opacity: 0 }}
                        animate={reduceMotion ? undefined : { y: 0, opacity: 1 }}
                        transition={{ duration: 0.68, delay: 0.12 }}
                        className="max-w-[35rem] text-[1.76rem] font-bold leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-[4rem] xl:text-[4.45rem]"
                    >
                        Tu negocio puede verse <span className="text-[#ff003c] drop-shadow-[0_0_24px_rgba(255,0,60,0.45)]">así.</span>
                    </motion.h1>

                    <div className="mt-1.5 min-h-[2.1rem] max-w-[34rem] sm:mt-7 sm:min-h-[4.6rem]">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={activeSlide.text}
                                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                                exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
                                transition={{ duration: 0.36, ease: 'easeOut' }}
                                className="font-rajdhani text-[0.96rem] leading-snug text-white/88 drop-shadow-[0_0_18px_rgba(255,0,60,0.2)] sm:text-[1.7rem] sm:leading-relaxed lg:text-[1.68rem]"
                            >
                                ✨ {activeSlide.text}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    <motion.div
                        initial={reduceMotion ? false : { y: 16, opacity: 0 }}
                        animate={reduceMotion ? undefined : { y: 0, opacity: 1 }}
                        transition={{ duration: 0.62, delay: 0.28 }}
                        className="mt-4 hidden flex-col gap-3 sm:mt-7 sm:flex sm:flex-row"
                    >
                        <a
                            href={whatsappHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex min-h-10 items-center justify-center gap-2 overflow-hidden rounded-full border border-[#ff8bb0]/60 bg-[linear-gradient(110deg,#ff003c_0%,#97005f_48%,#ff003c_100%)] bg-[length:180%_100%] px-6 py-2.5 text-center font-space text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white shadow-[0_0_24px_rgba(255,0,60,0.36),inset_0_1px_0_rgba(255,255,255,0.24)] transition-all duration-[250ms] ease-out before:absolute before:inset-y-0 before:-left-16 before:w-12 before:skew-x-[-18deg] before:bg-white/35 before:blur-md before:transition-all before:duration-500 hover:-translate-y-0.5 hover:scale-[1.03] hover:border-[#ffc1d2]/80 hover:bg-[position:100%_0] hover:shadow-[0_0_36px_rgba(255,0,60,0.46),0_0_56px_rgba(190,0,120,0.24),inset_0_1px_0_rgba(255,255,255,0.34)] hover:before:left-[120%] sm:min-h-12 sm:px-7 sm:py-3 sm:text-xs sm:tracking-[0.16em]"
                        >
                            <span className="relative z-10">✦</span>
                            <span className="relative z-10">QUIERO MÁS CLIENTES</span>
                            <span className="relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1">→</span>
                        </a>
                        <a
                            href="#resultados"
                            className="group relative hidden min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full border border-[#ff2f68]/70 bg-[linear-gradient(110deg,rgba(12,0,7,0.86)_0%,rgba(110,0,72,0.6)_48%,rgba(255,0,60,0.24)_100%)] bg-[length:180%_100%] px-5 py-3 text-center font-space text-xs font-bold uppercase tracking-[0.14em] text-white shadow-[0_0_18px_rgba(255,0,60,0.2),inset_0_1px_0_rgba(255,255,255,0.16)] transition-all duration-[250ms] ease-out before:absolute before:inset-y-0 before:-left-16 before:w-12 before:skew-x-[-18deg] before:bg-white/28 before:blur-md before:transition-all before:duration-500 hover:-translate-y-0.5 hover:scale-[1.03] hover:border-[#ff8bb0]/85 hover:bg-[position:100%_0] hover:shadow-[0_0_30px_rgba(255,0,60,0.34),0_0_44px_rgba(190,0,120,0.2),inset_0_1px_0_rgba(255,255,255,0.28)] hover:before:left-[120%] sm:inline-flex sm:px-6"
                        >
                            <span className="relative z-10">VER RESULTADOS</span>
                            <span className="relative z-10 text-[#ff7a9a] transition-transform duration-300 ease-out group-hover:translate-x-1">→</span>
                        </a>
                    </motion.div>

                    <p className="mt-6 hidden max-w-[35rem] text-sm leading-relaxed text-white/70 sm:block md:max-w-[560px] md:text-sm">
                        Landing pages premium, reels cinematográficos, automatización WhatsApp, contenido para redes sociales y marketing con IA para marcas en México.
                    </p>
                </motion.div>

                <div className="no-scrollbar relative min-w-0 overflow-x-hidden overflow-y-visible lg:h-[calc(100vh-140px)]">
                    <HeroCarousel
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        setPaused={setPaused}
                        onMobileTap={toggleMobileAutoplay}
                    />
                </div>

                <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative mt-3 inline-flex min-h-10 w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-[#ff8bb0]/60 bg-[linear-gradient(110deg,#ff003c_0%,#97005f_48%,#ff003c_100%)] bg-[length:180%_100%] px-6 py-2.5 text-center font-space text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white shadow-[0_0_24px_rgba(255,0,60,0.36),inset_0_1px_0_rgba(255,255,255,0.24)] transition-all duration-[250ms] ease-out before:absolute before:inset-y-0 before:-left-16 before:w-12 before:skew-x-[-18deg] before:bg-white/35 before:blur-md before:transition-all before:duration-500 hover:-translate-y-0.5 hover:scale-[1.03] hover:border-[#ffc1d2]/80 hover:bg-[position:100%_0] hover:shadow-[0_0_36px_rgba(255,0,60,0.46),0_0_56px_rgba(190,0,120,0.24),inset_0_1px_0_rgba(255,255,255,0.34)] hover:before:left-[120%] sm:hidden"
                >
                    <span className="relative z-10">QUIERO MÁS CLIENTES</span>
                    <span className="relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1">→</span>
                </a>
            </div>
        </section>
    );
}
