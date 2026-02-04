import React from 'react';
import { Rocket, Wallet, Activity } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="glass sticky top-0 z-50 py-4">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 group cursor-pointer">
                        <div className="bg-emerald-500/10 p-2 rounded-xl group-hover:bg-emerald-500/20 transition-all duration-300">
                            <Rocket className="w-6 h-6 text-emerald-500" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white uppercase italic">
                            Xon<span className="text-emerald-500">pad</span>
                        </span>
                    </div>

                    <div className="hidden lg:flex items-center bg-zinc-900/50 rounded-full px-5 py-2 border border-white/5 space-x-6">
                        <div className="flex items-center space-x-3">
                            <Activity className="w-4 h-4 text-emerald-500" />
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Launches: <span className="text-white">247</span></span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-6">
                        <button className="hidden sm:block text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-emerald-400 transition-colors">
                            Docs
                        </button>
                        <button className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black rounded-xl transition-all flex items-center shadow-lg shadow-emerald-500/20 active:scale-95 text-xs font-black uppercase tracking-widest">
                            <Wallet className="w-4 h-4 mr-2" />
                            Connect Wallet
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;