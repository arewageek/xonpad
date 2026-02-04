import React from 'react';
import { Timer, Users, Wallet, ArrowRight, Shield, TrendingUp, CheckCircle2 } from 'lucide-react';

const ActivePresales = ({ onPresaleClick }: any) => {
    const presales = [
        {
            id: 1,
            name: "MetaVerse Token",
            symbol: "MVT",
            progress: 75,
            raised: "156.5 ETH",
            goal: "200 ETH",
            participants: 234,
            endsIn: "2d 14h",
            image: "https://images.unsplash.com/photo-1614854262318-831574f15f1f?auto=format&fit=crop&q=80&w=400&h=400",
            health: "98/100",
            category: "Metaverse"
        },
        {
            id: 2,
            name: "DeFi Protocol",
            symbol: "DFP",
            progress: 45,
            raised: "89.2 ETH",
            goal: "150 ETH",
            participants: 156,
            endsIn: "5d 8h",
            image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=400&h=400",
            health: "92/100",
            category: "DeFi"
        },
        {
            id: 3,
            name: "GameFi Token",
            symbol: "GFT",
            progress: 90,
            raised: "178.5 ETH",
            goal: "180 ETH",
            participants: 312,
            endsIn: "16h",
            image: "https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?auto=format&fit=crop&q=80&w=400&h=400",
            health: "95/100",
            category: "Gaming"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
            {presales.map((presale) => (
                <div
                    key={presale.id}
                    onClick={() => onPresaleClick(presale)}
                    className="group relative bg-[#131618] border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:border-emerald-500/30 cursor-pointer overflow-hidden"
                >
                    {/* Header: Name, Symbol, & Category */}
                    <div className="flex items-start justify-between mb-8">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10 group-hover:border-emerald-500/50 transition-colors">
                                <img src={presale.image} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-white tracking-tight">{presale.name}</h3>
                                <div className="flex items-center space-x-2 mt-0.5">
                                    <span className="text-[10px] font-bold text-slate-500">{presale.symbol}</span>
                                    <span className="text-[10px] px-2 py-0.5 bg-white/5 rounded-md text-slate-400 font-bold uppercase tracking-wider">{presale.category}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <div className="flex items-center text-emerald-500 space-x-1.5">
                                <Shield className="w-3.5 h-3.5" />
                                <span className="text-[10px] font-black">{presale.health}</span>
                            </div>
                            <span className="text-[9px] text-slate-700 font-bold uppercase mt-1 tracking-widest">Audit Score</span>
                        </div>
                    </div>

                    {/* Funding Progress Section */}
                    <div className="space-y-4 mb-8">
                        <div className="flex justify-between items-end">
                             <div className="space-y-1">
                                <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest block">Total Raised</span>
                                <div className="text-lg font-bold text-white flex items-center">
                                    {presale.raised}
                                    <span className="ml-2 text-[10px] text-slate-500 font-bold">/ {presale.goal}</span>
                                </div>
                             </div>
                             <div className="text-right">
                                <div className="text-xl font-black text-emerald-500 italic">{presale.progress}%</div>
                             </div>
                        </div>
                        <div className="w-full h-1 bg-[#0a0c0d] rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)] transition-all duration-1000"
                                style={{ width: `${presale.progress}%` }}
                            />
                        </div>
                    </div>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                        <div className="flex items-center space-x-2.5">
                            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5">
                                <Users className="w-3.5 h-3.5 text-slate-500" />
                            </div>
                            <div>
                                <div className="text-xs font-bold text-white">{presale.participants}</div>
                                <div className="text-[9px] text-slate-700 font-bold uppercase tracking-widest">Wallets</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2.5">
                            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5">
                                <Timer className="w-3.5 h-3.5 text-rose-500/70" />
                            </div>
                            <div>
                                <div className="text-xs font-bold text-white">{presale.endsIn}</div>
                                <div className="text-[9px] text-slate-700 font-bold uppercase tracking-widest">Ending</div>
                            </div>
                        </div>
                    </div>

                    {/* Subtle Overlay Action */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                         <div className="p-2 bg-emerald-500 rounded-xl shadow-lg shadow-emerald-500/20">
                            <ArrowRight className="w-4 h-4 text-black" />
                         </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ActivePresales;