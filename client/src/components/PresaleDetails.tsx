import React from 'react';
import { Calendar, Clock, Globe, Twitter, MessageCircle, X, Shield, Coins, Wallet, Info, Activity, ShieldCheck, BarChart2 } from 'lucide-react';

const PresaleDetails = ({ presale, onClose }: any) => {
    if (!presale) return null;

    return (
        <div className="fixed inset-0 bg-[#080a0b]/90 backdrop-blur-xl flex items-center justify-center p-4 z-[100] animate-in fade-in duration-300">
            <div className="bg-[#0e1113] border border-white/5 rounded-[2.5rem] max-w-4xl w-full max-h-[90vh] overflow-hidden relative shadow-2xl flex flex-col md:flex-row">
                
                {/* Left Side: Visual & Identity */}
                <div className="w-full md:w-5/12 relative h-64 md:h-auto border-b md:border-b-0 md:border-r border-white/5">
                    <img
                        src={presale.image}
                        alt={presale.name}
                        className="w-full h-full object-cover grayscale-[0.2] opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e1113] via-[#0e1113]/40 to-transparent" />
                    
                    <button
                        onClick={onClose}
                        className="absolute top-6 left-6 z-10 bg-black/40 backdrop-blur-md p-2 rounded-xl hover:bg-zinc-900 transition-all border border-white/5 group"
                    >
                        <X className="w-4 h-4 text-white" />
                    </button>

                    <div className="absolute bottom-8 left-8 right-8">
                        <div className="flex items-center space-x-2 mb-3">
                             <div className="px-2 py-0.5 bg-emerald-500 rounded text-[9px] font-black text-black">VERIFIED</div>
                             <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{presale.symbol}</span>
                        </div>
                        <h2 className="text-3xl font-black text-white tracking-tight leading-tight">{presale.name}</h2>
                        <p className="text-xs text-slate-500 mt-2 font-medium leading-relaxed">
                            Secured institutional-grade asset allocation protocol.
                        </p>
                    </div>
                </div>

                {/* Right Side: Data & Operations */}
                <div className="flex-1 overflow-y-auto p-10 no-scrollbar">
                    <div className="flex items-center justify-between mb-10">
                        <div className="flex space-x-2">
                            {[Globe, Twitter, MessageCircle].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 flex items-center justify-center bg-[#0a0c0d] rounded-xl border border-white/5 hover:border-emerald-500/30 transition-all text-slate-700 hover:text-emerald-500">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                        <div className="flex items-center space-x-2 bg-emerald-500/5 px-4 py-2 rounded-xl border border-emerald-500/10">
                            <ShieldCheck className="w-4 h-4 text-emerald-500" />
                            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Audit Score: {presale.health || '95'}/100</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-10">
                        <div className="bg-[#0a0c0d] p-5 rounded-2xl border border-white/5 space-y-4">
                            <div className="text-[9px] font-black text-slate-700 uppercase tracking-widest">Target Thresholds</div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center px-1">
                                    <span className="text-[11px] text-slate-500 font-medium">Soft Cap</span>
                                    <span className="text-xs font-bold text-white">{presale.softCap || '50 ETH'}</span>
                                </div>
                                <div className="flex justify-between items-center px-1">
                                    <span className="text-[11px] text-slate-500 font-medium">Hard Cap</span>
                                    <span className="text-xs font-black text-emerald-500">{presale.hardCap || '200 ETH'}</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#0a0c0d] p-5 rounded-2xl border border-white/5 space-y-4">
                            <div className="text-[9px] font-black text-slate-700 uppercase tracking-widest">Temporal Registry</div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center px-1">
                                    <span className="text-[11px] text-slate-500 font-medium">Release</span>
                                    <span className="text-xs font-bold text-white">{presale.startDate || 'Mar 10'}</span>
                                </div>
                                <div className="flex justify-between items-center px-1">
                                    <span className="text-[11px] text-slate-500 font-medium">Expiry</span>
                                    <span className="text-xs font-bold text-white">{presale.endDate || 'Mar 17'}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-10 px-2">
                        <div className="flex justify-between items-end mb-3">
                             <div className="flex items-center text-slate-700 space-x-2">
                                <BarChart2 className="w-3 h-3" />
                                <span className="font-black uppercase tracking-widest text-[9px]">Registry Participation</span>
                             </div>
                             <span className="text-white font-black text-xs">{presale.progress}% FILLED</span>
                        </div>
                        <div className="w-full bg-[#0a0c0d] rounded-full h-1 overflow-hidden">
                            <div
                                className="bg-emerald-500 h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                                style={{ width: `${presale.progress}%` }}
                            />
                        </div>
                    </div>

                    {/* Technical Specs */}
                    <div className="space-y-1 mb-10 bg-[#0a0c0d]/50 p-6 rounded-2xl border border-white/5">
                        <div className="text-[9px] font-black text-slate-800 uppercase tracking-[0.2em] mb-4 px-2">Allocation Parameters</div>
                        {[
                            { label: "Execution Price", value: presale.tokenPrice || '0.0001 ETH' },
                            { label: "Liquidity Ratio", value: presale.liquidityPercent || '70%', highlight: true },
                            { label: "Institutional Lock", value: presale.lockupTime || '365 Days', highlight: true },
                            { label: "Circulating Supply", value: '1,000,000,000' },
                        ].map((item, idx) => (
                            <div key={idx} className="flex justify-between items-center py-2 px-2 hover:bg-white/5 rounded-lg transition-colors">
                                <span className="text-[11px] text-slate-600 font-medium">{item.label}</span>
                                <span className={`text-[11px] font-bold ${item.highlight ? 'text-emerald-500 underline decoration-emerald-500/20 underline-offset-4' : 'text-white'}`}>{item.value}</span>
                            </div>
                        ))}
                    </div>

                    <button className="w-full py-5 bg-white hover:bg-emerald-500 text-black rounded-2xl transition-all font-black uppercase tracking-widest text-[10px] shadow-xl shadow-black/20 flex items-center justify-center active:scale-[0.98]">
                        <Wallet className="w-4 h-4 mr-2" />
                        Authorize Allocation
                    </button>
                    
                    <p className="text-center text-[9px] text-slate-800 font-black uppercase mt-6 tracking-widest">
                        Protocol Disclaimer: Review smart contract before execution.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PresaleDetails;