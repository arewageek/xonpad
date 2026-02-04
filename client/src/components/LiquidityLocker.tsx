import React, { useState } from 'react';
import { Lock, AlertCircle, Search, Plus, Calendar, Coins, ExternalLink, ShieldCheck, Database } from 'lucide-react';

const LiquidityLocker = () => {
    const [showLockForm, setShowLockForm] = useState(false);

    const lockedTokens = [
        {
            id: 1,
            name: "USDC/ETH LP",
            amount: "245,000",
            value: "$123,500",
            lockDate: "Mar 1, 2024",
            unlockDate: "Mar 1, 2025",
            owner: "0x1234...5678",
            status: "Secured"
        },
        {
            id: 2,
            name: "DAI/ETH LP",
            amount: "180,000",
            value: "$90,000",
            lockDate: "Feb 15, 2024",
            unlockDate: "Aug 15, 2024",
            owner: "0x8765...4321",
            status: "Secured"
        }
    ];

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Action Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 px-4">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/10">
                        <Database className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                        <h2 className="text-xl font-black text-white tracking-tight">Vault Management</h2>
                        <p className="text-xs text-slate-500 font-medium">Verify and monitor ecosystem-wide locked liquidity.</p>
                    </div>
                </div>
                
                <button
                    onClick={() => setShowLockForm(!showLockForm)}
                    className="px-6 py-3 bg-white text-black rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-500 transition-all shadow-xl shadow-white/5 active:scale-95 flex items-center"
                >
                    <Plus className="w-4 h-4 mr-2" />
                    {showLockForm ? 'Cancel Operation' : 'Initialize Vault'}
                </button>
            </div>

            {showLockForm && (
                <div className="pro-card rounded-3xl p-10 animate-in slide-in-from-top-4 duration-300">
                    <div className="max-w-2xl mx-auto space-y-10">
                        <div className="grid gap-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-700 uppercase tracking-widest ml-1">Repository Identifier (LP Address)</label>
                                <input
                                    type="text"
                                    className="pro-input w-full px-6 py-4 text-white text-sm"
                                    placeholder="0x..."
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-700 uppercase tracking-widest ml-1">Allocation Volume</label>
                                    <div className="relative">
                                        <input
                                            type="number"
                                            className="pro-input w-full px-6 py-4 text-white text-sm"
                                            placeholder="0.00"
                                        />
                                        <button className="absolute right-4 top-1/2 -translate-y-1/2 px-2.5 py-1 text-[9px] font-black bg-emerald-500 text-black rounded-lg">MAX</button>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-700 uppercase tracking-widest ml-1">Unlock Timestamp</label>
                                    <input
                                        type="date"
                                        className="pro-input w-full px-6 py-4 text-white text-sm [color-scheme:dark]"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex space-x-4 items-center bg-emerald-500/5 p-6 rounded-2xl border border-emerald-500/10">
                            <ShieldCheck className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                            <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                                <strong className="text-white">Immutability Protocol:</strong> Once confirmed, this allocation will be cryptographically locked until the release timestamp. No intervention possible.
                            </p>
                        </div>

                        <button className="w-full py-5 bg-emerald-500 hover:bg-emerald-400 text-black rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all shadow-xl shadow-emerald-500/10 active:scale-95">
                            Execute Lock Protocol
                        </button>
                    </div>
                </div>
            )}

            {/* Active Vaults Table-like View */}
            <div className="pro-card rounded-[2.5rem] p-8">
                <div className="flex items-center justify-between mb-10 px-2">
                    <h3 className="text-sm font-black text-slate-700 uppercase tracking-widest">Global Vault Registry</h3>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-800 w-3.5 h-3.5" />
                        <input
                            type="text"
                            placeholder="Filter registry..."
                            className="bg-transparent border-b border-white/5 py-1 pl-9 pr-4 text-xs text-white outline-none focus:border-emerald-500/50 transition-all placeholder:text-slate-900"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto no-scrollbar">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-[9px] font-black text-slate-800 uppercase tracking-[0.2em] border-b border-white/5">
                                <th className="pb-6 px-4">Identifier</th>
                                <th className="pb-6 px-4">Allocation</th>
                                <th className="pb-6 px-4">Valuation</th>
                                <th className="pb-6 px-4">Scheduled Release</th>
                                <th className="pb-6 px-4 text-right">Verification</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {lockedTokens.map((token) => (
                                <tr key={token.id} className="group hover:bg-white/[0.02] transition-colors border-b border-white/5">
                                    <td className="py-6 px-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 text-slate-500">
                                                <Coins className="w-4 h-4" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-bold text-white tracking-tight">{token.name}</span>
                                                <span className="text-[10px] font-mono text-slate-700 uppercase tracking-tighter mt-0.5">{token.owner}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-6 px-4 text-slate-400 font-bold">{token.amount} LP</td>
                                    <td className="py-6 px-4 text-emerald-500 font-black italic">{token.value}</td>
                                    <td className="py-6 px-4">
                                        <div className="flex items-center text-slate-600 font-bold space-x-2">
                                            <Calendar className="w-3.5 h-3.5" />
                                            <span>{token.unlockDate}</span>
                                        </div>
                                    </td>
                                    <td className="py-6 px-4 text-right">
                                        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-500/10 rounded-lg text-emerald-500 text-[9px] font-black tracking-widest border border-emerald-500/20">
                                            <ShieldCheck className="w-3 h-3" />
                                            <span>{token.status}</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default LiquidityLocker;