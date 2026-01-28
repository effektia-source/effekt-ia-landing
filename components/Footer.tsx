export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold font-space text-white tracking-widest mb-6">
                            EFFEKT IA
                        </h3>
                        <p className="text-gray-400 font-rajdhani max-w-sm">
                            Soluciones digitales premium con inteligencia artificial para generar
                            más clientes, automatizar procesos y escalar tu negocio.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold font-space text-white/50 mb-6 tracking-widest">
                            SERVICIOS
                        </h4>
                        <ul className="space-y-4 font-rajdhani text-gray-400">
                            <li><a href="#" className="hover:text-blue-400 transition">Landing Pages Premium</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Automatización con IA</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Chatbots Inteligentes</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Agentes de Voz IA</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold font-space text-white/50 mb-6 tracking-widest">
                            LEGAL
                        </h4>
                        <ul className="space-y-4 font-rajdhani text-gray-400">
                            <li><a href="#" className="hover:text-blue-400 transition">Términos y Condiciones</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Aviso de Privacidad</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Política de Cookies</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-gray-600 font-space tracking-widest">
                        © {new Date().getFullYear()} EFFEKT IA. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-4 items-center">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs text-emerald-500 font-space tracking-widest">
                            SISTEMAS ACTIVOS
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

