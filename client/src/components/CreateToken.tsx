import React, { useState } from 'react';
import { Shield, ArrowRight, ArrowLeft, CheckCircle2, Sparkles, Coins, Terminal, Zap, ShieldCheck } from 'lucide-react';

const CreateToken = () => {
    const [step, setStep] = useState(1);

    const steps = [
        { id: 1, name: "Asset Definition", icon: Terminal },
        { id: 2, name: "Economic Logic", icon: Zap },
        { id: 3, name: "Security Verification", icon: ShieldCheck },
    ];

    return (
        <div className="max-w-3xl mx-auto animate-in slide-in-from-bottom-4 duration-500">
            <div className="pro-card rounded-[2.5rem] p-12 overflow-hidden relative">
                {/* Stepper Progress Indicator */}
                <div className="flex items-center justify-between mb-20 relative px-4">
                    {steps.map((s, idx) => (
                        <React.Fragment key={s.id}>
                            <div className="flex flex-col items-center relative z-10">
                                <div className={`
                                    w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 border
                                    ${step === s.id ? 'bg-emerald-500 border-white text-black shadow-[0_0_20px_rgba(16,185,129,0.4)]' : step > s.id ? 'bg-[#0a0c0d] border-emerald-500/50 text-emerald-500' : 'bg-[#0a0c0d] border-white/5 text-slate-800'}
                                `}>
                                    {step > s.id ? <CheckCircle2 className="w-5 h-5" /> : <s.icon className={`w-4 h-4`} />}
                                </div>
                                <span className={`absolute -bottom-8 text-[9px] font-black uppercase tracking-[0.2em] whitespace-nowrap transition-colors duration-300 ${step === s.id ? 'text-white' : 'text-slate-800'}`}>
                                    {s.name}
                                </span>
                            </div>
                            {idx < steps.length - 1 && (
                                <div className="flex-1 h-px mx-4 bg-white/5 relative">
                                    <div 
                                        className="absolute inset-0 bg-emerald-500 transition-all duration-700"
                                        style={{ width: step > (idx + 1) ? '100%' : '0%' }}
                                    />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Form Sections */}
                <div className="min-h-[380px] px-4">
                    {step === 1 && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-10">
                            <div>
                                <h2 className="text-xl font-black text-white tracking-tight mb-2 uppercase">Protocol Definition</h2>
                                <p className="text-xs text-slate-500 font-medium">Specify the fundamental immutable parameters for the ERC-20 smart contract.</p>
                            </div>
                            
                            <div className="grid gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-700 uppercase tracking-widest ml-1">Symbolic Identifier (Name)</label>
                                    <input type="text" className="pro-input w-full px-6 py-4 text-white text-sm" placeholder="e.g. MetaVerse X" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-700 uppercase tracking-widest ml-1">Ticker Symbol</label>
                                        <input type="text" className="pro-input w-full px-6 py-4 text-white text-sm" placeholder="MVX" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-700 uppercase tracking-widest ml-1">Precision (Decimals)</label>
                                        <input type="number" className="pro-input w-full px-6 py-4 text-white text-sm" placeholder="18" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-700 uppercase tracking-widest ml-1">Total Supply Allocation</label>
                                    <input type="number" className="pro-input w-full px-6 py-4 text-white text-sm" placeholder="100,000,000" />
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-10">
                            <div>
                                <h2 className="text-xl font-black text-white tracking-tight mb-2 uppercase">Economic Mechanics</h2>
                                <p className="text-xs text-slate-500 font-medium">Configure the fundraising logic and soft/hard thresholds.</p>
                            </div>
                            <div className="grid gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-700 uppercase tracking-widest ml-1">Valuation Rate (Presale)</label>
                                    <div className="relative">
                                        <input type="number" className="pro-input w-full px-6 py-4 text-white text-sm" placeholder="Token units per 1 ETH" />
                                        <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[9px] font-black text-slate-800 tracking-widest italic">UNITS/ETH</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-700 uppercase tracking-widest ml-1">Soft Launch Cap</label>
                                        <input type="number" className="pro-input w-full px-6 py-4 text-white text-sm" placeholder="Min Target" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-700 uppercase tracking-widest ml-1">Hard Exit Cap</label>
                                        <input type="number" className="pro-input w-full px-6 py-4 text-white text-sm" placeholder="Max Threshold" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-10">
                            <div>
                                <h2 className="text-xl font-black text-white tracking-tight mb-2 uppercase">Verification Protocol</h2>
                                <p className="text-xs text-slate-500 font-medium">Finalize safety features and initiate smart contract deployment.</p>
                            </div>
                            <div className="space-y-6">
                                <div className="bg-[#0a0c0d] p-8 rounded-2xl border border-white/5 space-y-6">
                                    <div className="flex items-start justify-between">
                                        <div className="space-y-1">
                                            <h3 className="text-sm font-bold text-white tracking-tight">EVM Liquidity Lock</h3>
                                            <p className="text-[10px] text-slate-600 font-medium leading-relaxed">Percentage of raised capital to be locked in liquidity pools.</p>
                                        </div>
                                        <span className="text-emerald-500 font-black italic">90% Recommended</span>
                                    </div>
                                    <input type="range" className="w-full h-1.5 bg-white/5 rounded-full accent-emerald-500 cursor-pointer" min="51" max="100" />
                                </div>

                                <div className="flex items-center justify-between p-6 bg-emerald-500/5 rounded-2xl border border-emerald-500/10 group">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black transition-all">
                                            <Shield className="w-5 h-5 text-emerald-500 group-hover:text-inherit" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold text-white">Smart Audit Shield</h4>
                                            <p className="text-[9px] text-slate-600 font-bold uppercase tracking-widest">Pre-verified on-chain logic</p>
                                        </div>
                                    </div>
                                    <div className="px-3 py-1 bg-emerald-500 text-black text-[9px] font-black rounded-lg">ENABLED</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Navigation Footer */}
                <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/5 px-4">
                    {step > 1 ? (
                        <button
                            onClick={() => setStep(step - 1)}
                            className="text-slate-600 hover:text-white font-black uppercase tracking-widest text-[10px] transition-colors py-2 flex items-center"
                        >
                            <ArrowLeft className="w-3.5 h-3.5 mr-2" />
                            Return
                        </button>
                    ) : <div />}
                    
                    <button
                        onClick={() => step < 3 ? setStep(step + 1) : null}
                        className="px-8 py-3.5 rounded-xl bg-white text-black hover:bg-emerald-500 transition-all font-black text-[10px] uppercase tracking-widest flex items-center active:scale-95 shadow-xl shadow-white/5"
                    >
                        <span>{step === 3 ? 'Execute Deployment' : 'Advance Station'}</span>
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="mt-8 flex items-center justify-center space-x-2 text-slate-800">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span className="text-[9px] font-black uppercase tracking-[0.2em]">Xonpad Deployment Protocol V2.0</span>
            </div>
        </div>
    );
}

export default CreateToken;