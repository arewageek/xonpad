import React from 'react';
import { ChevronRight, Shield, Zap, LayoutGrid } from 'lucide-react';

const Hero = ({ onCreateToken, onViewPresales }: any) => {
    return (
        <section className="relative pt-20 pb-24 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full -z-10" />
            
            <div className="container mx-auto px-6 text-center">
                <div className="inline-flex items-center space-x-2 bg-emerald-500/5 border border-emerald-500/10 px-4 py-1.5 rounded-full mb-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em]">Next-Gen Launchpad Active</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-8 leading-[1.1]">
                    Launch Your Token <br />
                    <span className="text-gradient">With Confidence.</span>
                </h1>
                
                <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
                    The most secure and user-friendly platform for launching on Ethereum. 
                    Automated security audits, locked liquidity, and fair distributions.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
                    <button
                        onClick={onCreateToken}
                        className="w-full sm:w-auto px-10 py-4 bg-emerald-500 hover:bg-emerald-400 text-black rounded-2xl transition-all font-black uppercase tracking-widest text-xs shadow-xl shadow-emerald-500/20 active:scale-95 flex items-center justify-center"
                    >
                        Create New Token
                        <ChevronRight className="ml-2 w-4 h-4" />
                    </button>
                    <button
                        onClick={onViewPresales}
                        className="w-full sm:w-auto px-10 py-4 bg-white/5 hover:bg-white/10 border border-white/5 text-white rounded-2xl transition-all font-black uppercase tracking-widest text-xs flex items-center justify-center group"
                    >
                        View Presales
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {[
                        { icon: Shield, label: "Verified Security", desc: "Automated LP locking" },
                        { icon: Zap, label: "Instant Launch", desc: "Deploy in seconds" },
                        { icon: LayoutGrid, label: "Multi-Chain", desc: "Scale across networks" }
                    ].map((feature, i) => (
                        <div key={i} className="flex flex-col items-center p-6 rounded-3xl bg-zinc-900/40 border border-white/5 transition-all hover:bg-zinc-900/60">
                            <feature.icon className="w-6 h-6 text-emerald-500 mb-4" />
                            <h3 className="text-white font-bold text-sm mb-1">{feature.label}</h3>
                            <p className="text-xs text-slate-500 font-medium">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Hero;