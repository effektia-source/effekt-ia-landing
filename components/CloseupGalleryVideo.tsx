'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const ShowcaseSection = ({ videoPath, title, subtitle, align = 'center' }: any) => {
    const [videoReady, setVideoReady] = useState(false);

    return (
        <section className="
          relative
          w-full
          min-h-[85vh] md:min-h-[110vh]
          py-20 md:py-0
          mb-24 md:mb-0
          bg-black
          overflow-hidden
          flex
          flex-col
          items-center
          justify-center
          border-t
          border-white/5
        ">



            <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/images/model-poster.webp"
                onCanPlay={() => setVideoReady(true)}
                className={`
      absolute inset-0 w-full h-full object-cover
      transition-opacity duration-700 ease-out
      ${videoReady ? 'opacity-75' : 'opacity-0'}
    `}
            >

                <source src={videoPath} type="video/mp4" />
            </video>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-20%" }}
                transition={{ duration: 1 }}
                className={`relative z-10 max-w-7xl px-6 w-full
${align === 'left'
                        ? 'md:ml-20 text-left'
                        : align === 'right'
                            ? 'md:mr-20 text-right'
                            : 'md:ml-24 text-left'}
`}

            >

                <div className={`inline-block ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''}`}>
                    <h2 className="
  text-2xl
  sm:text-3xl
  md:text-6xl
  lg:text-7xl
  font-bold
  text-transparent
  bg-clip-text
  bg-gradient-to-b from-white to-white/40
  tracking-[-0.04em]
  mb-6
  font-space
  leading-[0.95]
  whitespace-pre-line
">
                        {title}
                    </h2>




                    <p className="
  text-base
  sm:text-lg
  md:text-2xl
  lg:text-3xl
  text-gray-300
  font-medium
  max-w-2xl
  leading-relaxed
  font-rajdhani
">
                        {subtitle}
                    </p>

                </div>
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
                <div className="absolute inset-0 bg-black/40" />

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
                <div className="mt-10 flex flex-col md:flex-row gap-4 md:gap-8 justify-center text-sm font-semibold tracking-wide text-white/100">
                    <span>Automatización de procesos</span>
                    <span>Atención inteligente 24/7</span>
                    <span>Sistemas que escalan contigo</span>
                </div>

            </section>


            <ShowcaseSection videoPath="/videos/closeups/vulcan-cannon.mp4" title="VENTAS INTELIGENTES
" subtitle="Impulsadas por IA
" />
            <ShowcaseSection
                videoPath="/videos/closeups/model-luxury.mp4"
                title={`TU MARCA
CON ROSTRO PROPIO`}
                subtitle="Modelos digitales realistas para campañas, redes y anuncios."
                align="left"
            />

            <ShowcaseSection
                videoPath="/videos/closeups/sensor-integration.mp4"
                title={`TU NEGOCIO
TRABAJANDO SOLO`}
                subtitle="Chatbots, automatizaciones y agentes de voz con IA."
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
