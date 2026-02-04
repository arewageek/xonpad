import React from 'react';
import { Search, SlidersHorizontal, ChevronDown, Filter } from 'lucide-react';

const SearchAndFilter = () => {
    return (
        <div className="flex items-center space-x-3">
            <div className="relative group min-w-[300px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-800 w-3.5 h-3.5 group-focus-within:text-emerald-500 transition-colors" />
                <input
                    type="text"
                    placeholder="Search ecosystem registry..."
                    className="w-full pl-9 pr-4 py-2 bg-[#0a0c0d] border border-white/5 rounded-xl focus:border-emerald-500/30 transition-all text-white outline-none placeholder:text-slate-800 text-[11px] font-medium"
                />
            </div>

            <div className="flex items-center bg-[#0a0c0d] border border-white/5 rounded-xl px-1 py-1">
                <div className="relative">
                    <select className="pl-3 pr-8 py-1.5 bg-transparent text-slate-600 outline-none cursor-pointer appearance-none font-black text-[9px] uppercase tracking-widest hover:text-white transition-colors">
                        <option value="">Category</option>
                        <option value="defi">DeFi</option>
                        <option value="gaming">Gaming</option>
                        <option value="metaverse">Metaverse</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-800 pointer-events-none" />
                </div>
                
                <div className="w-px h-4 bg-white/5 mx-1" />

                <div className="relative">
                    <select className="pl-3 pr-8 py-1.5 bg-transparent text-slate-600 outline-none cursor-pointer appearance-none font-black text-[9px] uppercase tracking-widest hover:text-white transition-colors">
                        <option value="all">Status</option>
                        <option value="upcoming">Upcoming</option>
                        <option value="live">Live</option>
                        <option value="ended">Ended</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-800 pointer-events-none" />
                </div>
            </div>

            <button className="p-2.5 bg-[#0a0c0d] hover:bg-zinc-800 border border-white/5 rounded-xl transition-all group active:scale-95">
                <Filter className="w-3.5 h-3.5 text-slate-700 group-hover:text-emerald-500 transition-colors" />
            </button>
        </div>
    );
}

export default SearchAndFilter;