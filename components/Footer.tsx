export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold font-space text-white tracking-widest mb-6">RAJ INDUSTRIES</h3>
                        <p className="text-gray-400 font-rajdhani max-w-sm">
                            Pioneering the future of autonomous tactical systems.
                            Superior engineering for superior dominance.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold font-space text-white/50 mb-6 tracking-widest">SYSTEMS</h4>
                        <ul className="space-y-4 font-rajdhani text-gray-400">
                            <li><a href="#" className="hover:text-blue-400 transition">Executioner M1</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Vulcan Mounts</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Sensor Arrays</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Command Station</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold font-space text-white/50 mb-6 tracking-widest">LEGAL</h4>
                        <ul className="space-y-4 font-rajdhani text-gray-400">
                            <li><a href="#" className="hover:text-blue-400 transition">Terms of Sale</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Export Compliance</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-gray-600 font-space tracking-widest">
                        © 2024 RAJ INDUSTRIES. DEFENSE AUTHORIZED.
                    </p>
                    <div className="flex gap-4">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs text-green-500 font-space tracking-widest">SYSTEM OPTIMAL</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
