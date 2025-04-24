import React from 'react';
import { Search, Filter } from 'lucide-react';

const SearchAndFilter = () => {
    return (
        <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                    type="text"
                    placeholder="Search by token name or symbol..."
                    className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
            </div>

            <div className="flex gap-4">
                <select className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                    <option value="">All Categories</option>
                    <option value="defi">DeFi</option>
                    <option value="gaming">Gaming</option>
                    <option value="metaverse">Metaverse</option>
                    <option value="nft">NFT</option>
                </select>

                <select className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                    <option value="all">All Status</option>
                    <option value="upcoming">Upcoming</option>
                    <option value="live">Live</option>
                    <option value="ended">Ended</option>
                </select>

                <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                    <Filter className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}

export default SearchAndFilter;