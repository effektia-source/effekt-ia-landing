'use client';

import { motion } from 'framer-motion';
import { droneData } from '@/data/droneData';

export default function PricingTiers() {
    return (
        <section className="py-32 bg-black text-white relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-bold font-space mb-6 tracking-tight">ACQUISITION</h2>
                    <p className="text-xl text-gray-400 font-rajdhani max-w-2xl mx-auto">Select your operational clearance level.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {droneData.pricing.map((tier, index) => (
                        <motion.div
                            key={tier.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className={`group relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,122,255,0.15)] flex flex-col`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl pointer-events-none" />

                            <h3 className="text-xl font-bold font-space text-white mb-2">{tier.name.toUpperCase()}</h3>
                            <div className="text-4xl font-bold font-rajdhani text-blue-400 mb-8">{tier.price}</div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="text-blue-500 mt-1">▹</span>
                                        <span className="text-gray-300 font-rajdhani">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full py-4 bg-white/10 hover:bg-white text-white hover:text-black font-space font-bold rounded-lg transition-all duration-300 tracking-widest text-sm border border-white/10 group-hover:border-transparent">
                                SELECT CONFIGURATION
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
