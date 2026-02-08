'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const ShowcaseSection = ({
    videoPath,
    title,
    subtitle,
    align = 'center',
    mobilePoster
}: any) => {

    const [videoReady, setVideoReady] = useState(false);

    return (
        <section className="
          relative
          w-full
          h-[85vh] md:h-screen
          mb-24 md:mb-0
          bg-black
          overflow-hidden
          flex
flex-col
md:items-center
md:justify-center
          border-t
          border-white/5
        ">

            {/* Fallback base (siempre existe) */}
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
  object-cover
  object-top
  z-10
  transition-opacity duration-700 ease-out
  ${videoReady ? 'opacity-100' : 'opacity-0'}
`}

            >
                <source src={videoPath} type="video/mp4" />
            </video>

            <div className="absolute inset-0 z-20 bg-black/25" />


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
    text-4xl md:text-6xl lg:text-7xl
    font-bold
    text-transparent
    bg-clip-text
    bg-gradient-to-b from-white to-white/50
    tracking-[-0.04em]
    mb-4
    font-space
    whitespace-pre-line
  ">
                    {title}
                </h2>

                <p className="
    text-base md:text-xl
    text-gray-300
    font-medium
    max-w-2xl
    font-rajdhani
  ">
                    {subtitle}
                </p>
            </motion.div>

            <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent" />
            <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black to-transparent" />
        </section>
    );
};

export default function CloseupGalleryVideo() {
    return (
        <div id="servicios" className="bg-black text-white relative z-20">

            <section className="relative py-24 md:py-40 text-center overflow-hidden">

                {/* Fondo estético */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-80"
                    style={{ backgroundImage: "url('/images/section2-bg.jpg')" }}
                />
                <div className="absolute inset-0 bg-black/20" />

                {/* Contenido */}
                <div className="relative z-10">
                    <h3 className="text-sm font-bold font-space text-blue-500 mb-6 tracking-[0.3em] uppercase">
                        SISTEMAS DIGITALES INTELIGENTES
                    </h3>
                    <p className="text-3xl sm:text-4xl md:text-7xl font-bold tracking-tight text-white leading-tight">

                        Diseñados para hacer crecer tu negocio.<br />
                        <span className="text-gray-300">Potenciados por inteligencia artificial.</span>
                    </p>
                </div>
                <div className="mt-14 flex flex-col md:flex-row gap-4 md:gap-12 justify-center text-base md:text-lg
 font-medium tracking-wide text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]
">
                    <span>Automatización de procesos</span>
                    <span>Atención inteligente 24/7</span>
                    <span>Sistemas que escalan contigo</span>
                </div>

            </section>


            <ShowcaseSection
                videoPath="/videos/closeups/ventas-inteligentes.mp4"
                mobilePoster="/images/ventas-inteligentes-mobile.webp"
                title={`VENTAS
INTELIGENTES`}
                subtitle="Convierte más clientes con sistemas que venden por ti."
            />

            <ShowcaseSection
                videoPath="/videos/closeups/model-luxury.mp4"
                title={`TU MARCA
CON ROSTRO PROPIO`}
                subtitle="Modelos digitales realistas para campañas, redes y anuncios."
                align="left"
            />

            <ShowcaseSection
                videoPath="/videos/closeups/landing-pages-hero.mp4"

                mobilePoster="/images/landing-pages-hero-mobile.webp"
                title={`LANDING PAGES
PREMIUM`}
                subtitle="Diseñadas para convertir visitas en clientes."
                align="right"
            />



            {/* Spotlight CTA */}
            <section className="py-24 md:py-40 bg-black text-center px-6">

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
                        <button className="w-full px-8 py-5 bg-blue-600 text-white text-lg font-bold rounded-full hover:scale-105 transition shadow-[0_0_50px_blue]">COMENZAR AHORA</button>
                    </div>
                </motion.div>
            </section>
        </div >
    );
}
