'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const services = [
    {
        label: 'VIDEOS',
        headline: 'Contenido imposible de ignorar.',
        description: 'Videos creados para captar atención, generar confianza y vender más.',
        video: '/videos/servicios/reels_personaje_viral_panda.mp4',
        image: '/images/reels_personaje_viral_panda.png',
    },
    {
        label: 'MODELOS IA',
        headline: 'Haz que tu marca se vea premium.',
        description: 'Modelos IA para campañas, anuncios y contenido que elevan la percepción de tu negocio.',
        video: '/videos/servicios/modelos_ia_butterfly_campaign.mp4',
        image: '/images/modelos_ia_butterfly_campaign.png',
    },
    {
        label: 'AUTOMATIZACIÓN IA',
        headline: 'Responde en segundos. Vende todo el día.',
        description: 'Automatización para WhatsApp y redes sociales que responde, califica y da seguimiento.',
        video: '/videos/servicios/automatizacion_ia.mp4',
        image: '/images/automatizacion_ia.png',
    },
    {
        label: 'FLYERS',
        headline: 'Diseños creados para vender.',
        description: 'Flyers para promociones, campañas y anuncios que destacan frente a tu competencia.',
        video: '/videos/servicios/flyer_deportivo.mp4',
        image: '/images/flyer_deportivo.png',
    },
    {
        label: 'LANDING PAGES',
        headline: 'Convierte visitas en clientes.',
        description: 'Landing pages creadas para atraer clientes, generar confianza y aumentar conversiones.',
        video: '/videos/servicios/landing_restaurante.mp4',
        image: '/images/landing_restaurante.png',
    },
];

const ShowcaseSection = ({
    id,
    videoPath,
    title,
    subtitle,
    align = 'center',
    mobilePoster
}: any) => {
    const [videoReady, setVideoReady] = useState(false);

    return (
        <section
            id={id}
            className="
    relative
    w-full
    h-[100dvh]
    bg-black
    overflow-hidden
    flex
    flex-col
    md:items-center
    md:justify-center
    snap-start
  "
        >
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url('${mobilePoster ?? '/images/fallback.jpg'}')` }}
            />

            <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                onCanPlay={() => setVideoReady(true)}
                className={`
  absolute inset-0
  w-full h-full
  object-fill
  object-center
  bg-black
  z-10
  transition-opacity duration-700 ease-out
  ${videoReady ? 'opacity-100' : 'opacity-0'}
`}
            >
                <source src={videoPath} type="video/mp4" />
            </video>

            <div className="absolute inset-0 z-20 bg-black/8" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="
    absolute
    right-6 md:right-24
    bottom-20 md:bottom-32
    z-30
    max-w-xl md:max-w-2xl
    text-right
  "
            >
                <h2 className="
  text-[2.6rem] md:text-6xl lg:text-7xl
  leading-[0.95]
  font-bold
  text-transparent
  bg-clip-text
  bg-gradient-to-b from-white to-white/60
  tracking-[-0.045em]
  mb-5
  font-space
  whitespace-pre-line
">
                    {title}
                </h2>

                <p className="
  text-[0.95rem] md:text-lg
  leading-relaxed
  text-gray-300/90
  font-medium
  max-w-lg md:max-w-xl
  font-rajdhani
">
                    {subtitle}
                </p>
            </motion.div>
        </section>
    );
};

export default function CloseupGalleryVideo() {
    const [activeServiceIndex, setActiveServiceIndex] = useState(0);
    const [servicesPaused, setServicesPaused] = useState(false);
    const activeService = services[activeServiceIndex];
    const isPandaVideo = activeService.video.includes('reels_personaje_viral_panda.mp4');
    const pauseServicesAutoplay = () => setServicesPaused(true);
    const resumeServicesAutoplay = () => setServicesPaused(false);
    const goToPreviousService = () => {
        setActiveServiceIndex((current) => (current - 1 + services.length) % services.length);
    };
    const goToNextService = () => {
        setActiveServiceIndex((current) => (current + 1) % services.length);
    };

    useEffect(() => {
        if (servicesPaused) return;

        const interval = window.setInterval(() => {
            setActiveServiceIndex((current) => (current + 1) % services.length);
        }, 5000);

        return () => window.clearInterval(interval);
    }, [servicesPaused]);

    return (
        <div
            id="servicios"
            className="
    bg-black
    text-white
    relative
    z-20
    scroll-mt-0
    scroll-smooth
    snap-y
    snap-mandatory
  "
        >
            <section
                className="section-screen relative overflow-hidden bg-[#030303] px-6 pb-8 pt-28 text-white snap-start sm:pt-32 lg:px-10 lg:pb-7 lg:pt-28"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_46%,rgba(255,0,92,0.16),transparent_36%),radial-gradient(circle_at_20%_18%,rgba(190,0,120,0.1),transparent_34%),linear-gradient(135deg,#030303_0%,#080808_52%,#030303_100%)]" />
                <div className="absolute right-[7%] top-[18%] h-[34rem] w-[34rem] rounded-full bg-[#ff003c]/10 blur-3xl" />
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/88 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/82 to-transparent" />

                <div className="relative z-10 mx-auto flex min-h-[calc(100svh-9rem)] max-w-7xl flex-col justify-center pb-28 md:min-h-[calc(100dvh-10rem)] lg:min-h-[calc(100dvh-8.75rem)] lg:pb-[5.25rem]">
                    <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)]">
                        <motion.div
                            key={`${activeService.label}-copy`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.48, ease: 'easeOut' }}
                            className="order-2 max-w-3xl lg:order-1"
                        >
                            <h2
                                onMouseEnter={pauseServicesAutoplay}
                                onMouseLeave={resumeServicesAutoplay}
                                className="max-w-[33rem] text-[2.15rem] font-bold leading-[0.95] tracking-tight text-white sm:text-[2.85rem] lg:text-[3.15rem] xl:text-[3.55rem]"
                            >
                                {activeService.headline}
                            </h2>
                            <p
                                onMouseEnter={pauseServicesAutoplay}
                                onMouseLeave={resumeServicesAutoplay}
                                className="mt-3.5 max-w-lg text-base leading-relaxed text-white/74 sm:text-[1.05rem] lg:text-base"
                            >
                                {activeService.description}
                            </p>
                            <a
                                href="https://wa.me/524445166077"
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseEnter={pauseServicesAutoplay}
                                onMouseLeave={resumeServicesAutoplay}
                                className="mt-4 inline-flex min-h-[46px] items-center gap-2 rounded-full border border-[#ff2f68]/70 bg-black/24 px-7 py-3 font-space text-xs font-bold uppercase tracking-[0.18em] text-white/90 shadow-[0_0_26px_rgba(255,0,92,0.22)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#ff8bb0]/85 hover:text-white hover:shadow-[0_0_34px_rgba(255,0,92,0.36)] md:px-8 md:py-3.5 md:text-sm"
                            >
                                Me interesa
                                <span className="text-[#ff4d78]">→</span>
                            </a>
                        </motion.div>

                        <motion.div
                            key={`${activeService.label}-visual`}
                            initial={{ opacity: 0, scale: 0.965 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
                            onMouseEnter={pauseServicesAutoplay}
                            onMouseLeave={resumeServicesAutoplay}
                            className="order-1 relative aspect-[16/9] min-h-[18rem] overflow-hidden rounded-[30px] bg-zinc-950 shadow-[0_34px_130px_rgba(0,0,0,0.72),0_0_70px_rgba(255,0,92,0.18),inset_0_0_0_1px_rgba(255,255,255,0.08)] sm:min-h-[23rem] lg:order-2 lg:h-[55vh] lg:min-h-0 lg:translate-x-14 xl:h-[57vh]"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: isPandaVideo ? 'none' : `url('${activeService.image}')` }}
                            />
                            {activeService.video ? (
                                <video
                                    key={activeService.video}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="auto"
                                    className="absolute inset-0 z-10 block h-full w-full bg-black object-center"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: isPandaVideo ? 'cover' : 'fill',
                                        objectPosition: 'center center',
                                    }}
                                >
                                    <source src={activeService.video} type="video/mp4" />
                                </video>
                            ) : null}
                            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.04)_48%,rgba(0,0,0,0.18)_100%)]" />
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.04)_45%,rgba(0,0,0,0.34)_100%)]" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_24%,rgba(255,0,92,0.08),transparent_36%)]" />
                            <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8">
                                <p className="font-space text-[0.64rem] font-bold uppercase tracking-[0.2em] text-white/54">
                                    {activeService.label}
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div
                        onMouseEnter={pauseServicesAutoplay}
                        onMouseLeave={resumeServicesAutoplay}
                        className="absolute bottom-2 left-0 right-0 lg:bottom-0"
                    >
                        <div className="mx-auto max-w-7xl">
                            <div className="flex max-h-[80px] flex-col gap-2 border-t border-white/10 pt-2.5 lg:flex-row lg:items-end lg:justify-between">
                                <div className="no-scrollbar -mx-6 overflow-x-auto px-6 lg:mx-0 lg:flex-1 lg:overflow-visible lg:px-0">
                                    <div className="grid min-w-[48rem] grid-cols-5 lg:min-w-0">
                                        {services.map((service, index) => {
                                            const active = index === activeServiceIndex;

                                            return (
                                                <button
                                                    key={service.label}
                                                    type="button"
                                                    onClick={() => setActiveServiceIndex(index)}
                                                    className="group relative min-h-11 border-r border-white/10 px-4 text-left last:border-r-0"
                                                    aria-label={`Ver ${service.label}`}
                                                >
                                                    <span className={`block font-space text-[0.56rem] font-bold uppercase tracking-[0.22em] transition-colors ${active ? 'text-[#ff4d78]' : 'text-white/35 group-hover:text-white/62'}`}>
                                                        {String(index + 1).padStart(2, '0')}
                                                    </span>
                                                    <span className={`mt-1.5 block truncate font-space text-[0.58rem] font-bold uppercase tracking-[0.18em] transition-colors ${active ? 'text-white' : 'text-white/40 group-hover:text-white/70'}`}>
                                                        {service.label}
                                                    </span>
                                                    {active ? (
                                                        <motion.span
                                                            layoutId="services-active-indicator"
                                                            className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-[#ff2f68] shadow-[0_0_16px_rgba(255,47,104,0.75)]"
                                                            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                                                        />
                                                    ) : null}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="flex items-center justify-end gap-3 lg:min-w-[12rem]">
                                    <button
                                        type="button"
                                        onClick={goToPreviousService}
                                        aria-label="Servicio anterior"
                                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/12 bg-black/24 font-space text-xs text-white/70 backdrop-blur transition hover:border-[#ff2f68]/70 hover:text-white hover:shadow-[0_0_24px_rgba(255,0,92,0.24)]"
                                    >
                                        &lt;
                                    </button>
                                    <span className="font-space text-[0.62rem] font-bold tracking-[0.18em] text-white/64">
                                        {String(activeServiceIndex + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={goToNextService}
                                        aria-label="Servicio siguiente"
                                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/12 bg-black/24 font-space text-xs text-white/70 backdrop-blur transition hover:border-[#ff2f68]/70 hover:text-white hover:shadow-[0_0_24px_rgba(255,0,92,0.24)]"
                                    >
                                        &gt;
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*
            <ShowcaseSection
                id="ventas-inteligentes"
                videoPath="/videos/closeups/ventas-inteligentes.mp4"
                mobilePoster="/images/ventas-inteligentes-mobile.webp"
                title={`VENTAS
INTELIGENTES`}
                subtitle="Convierte más clientes con sistemas que venden por ti."
            />

            <ShowcaseSection
                id="rostro-propio"
                videoPath="/videos/closeups/model-luxury.mp4"
                title={`TU MARCA
CON ROSTRO PROPIO`}
                subtitle="Modelos digitales realistas para campañas, redes y anuncios."
                align="left"
            />

            <ShowcaseSection
                id="landing-pages-premium"
                videoPath="/videos/closeups/landing-pages-hero.mp4"
                mobilePoster="/images/landing-pages-hero-mobile.webp"
                title={`LANDING PAGES
PREMIUM`}
                subtitle="Diseñadas para convertir visitas en clientes."
                align="right"
            />

            <section className="
  relative
  min-h-[100svh]
  bg-black
  text-center
  px-6
  flex
  items-center
  justify-center
  snap-start
">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="max-w-[90rem] mx-auto rounded-[1.5rem] md:rounded-[3rem]
 bg-zinc-900/50 border border-white/10 p-8 md:p-32 overflow-hidden relative"
                >
                    <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-b from-white/5 to-transparent rotate-45 pointer-events-none" />
                    <div className="relative z-10">
                        <h2 className="text-4xl sm:text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-tight">
                            ¿LISTO PARA VENDER MÁS?</h2>
                        <button
                            onClick={() =>
                                window.open(
                                    'https://wa.me/524445166077',
                                    '_blank'
                                )
                            }
                            className="
    w-full
    px-8 py-5
    bg-blue-600
    text-white
    text-lg
    font-bold
    rounded-full
    hover:scale-105
    transition
    shadow-[0_0_50px_blue]
  "
                        >
                            COMENZAR AHORA
                        </button>
                    </div>
                </motion.div>
            </section>
            */}
        </div >
    );
}
