import React from 'react';
import { Timer, Users, Wallet } from 'lucide-react';

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
            startDate: "Mar 10, 2024",
            endDate: "Mar 17, 2024",
            tokenPrice: "0.00015 ETH",
            listingPrice: "0.00018 ETH",
            initialMarketCap: "$780,000",
            liquidityPercent: "70%",
            lockupTime: "365 days",
            softCap: "100 ETH",
            hardCap: "200 ETH"
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
            startDate: "Mar 15, 2024",
            endDate: "Mar 20, 2024",
            tokenPrice: "0.0001 ETH",
            listingPrice: "0.00012 ETH",
            initialMarketCap: "$520,000",
            liquidityPercent: "65%",
            lockupTime: "180 days",
            softCap: "50 ETH",
            hardCap: "150 ETH"
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
            startDate: "Mar 8, 2024",
            endDate: "Mar 16, 2024",
            tokenPrice: "0.0002 ETH",
            listingPrice: "0.00025 ETH",
            initialMarketCap: "$950,000",
            liquidityPercent: "75%",
            lockupTime: "365 days",
            softCap: "120 ETH",
            hardCap: "180 ETH"
        }
    ];

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {presales.map((presale) => (
                <div
                    key={presale.id}
                    className="bg-slate-800 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all cursor-pointer"
                    onClick={() => onPresaleClick(presale)}
                >
                    <div className="relative h-48">
                        <img
                            src={presale.image}
                            alt={presale.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-blue-600 px-3 py-1 rounded-full text-sm">
                            {presale.symbol}
                        </div>
                    </div>

                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-4">{presale.name}</h3>

                        <div className="mb-4">
                            <div className="flex justify-between text-sm text-slate-300 mb-2">
                                <span>Progress</span>
                                <span>{presale.progress}%</span>
                            </div>
                            <div className="w-full bg-slate-700 rounded-full h-2">
                                <div
                                    className="bg-blue-600 h-2 rounded-full"
                                    style={{ width: `${presale.progress}%` }}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div>
                                <div className="text-sm text-slate-400">Raised</div>
                                <div className="font-semibold">{presale.raised}</div>
                            </div>
                            <div>
                                <div className="text-sm text-slate-400">Goal</div>
                                <div className="font-semibold">{presale.goal}</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm text-slate-300 mb-6">
                            <div className="flex items-center">
                                <Users className="w-4 h-4 mr-2" />
                                {presale.participants} participants
                            </div>
                            <div className="flex items-center">
                                <Timer className="w-4 h-4 mr-2" />
                                Ends in {presale.endsIn}
                            </div>
                        </div>

                        <button
                            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center justify-center"
                            onClick={(e) => {
                                e.stopPropagation();
                                onPresaleClick(presale);
                            }}
                        >
                            <Wallet className="w-4 h-4 mr-2" />
                            Participate Now
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ActivePresales;