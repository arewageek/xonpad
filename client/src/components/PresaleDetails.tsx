import React from 'react';
import { Calendar, Clock, Globe, Twitter, MessageCircle, X } from 'lucide-react';

const PresaleDetails = ({ presale, onClose }: any) => {
    if (!presale) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-slate-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 left-4 z-10 bg-slate-800/80 p-2 rounded-lg hover:bg-slate-700 transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

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
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold">{presale.name}</h2>
                        <div className="flex space-x-3">
                            <a href="#" className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
                                <Globe className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors">
                                <MessageCircle className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-slate-700 p-4 rounded-lg">
                            <div className="text-sm text-slate-400">Start Date</div>
                            <div className="flex items-center mt-1">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span>{presale.startDate}</span>
                            </div>
                        </div>
                        <div className="bg-slate-700 p-4 rounded-lg">
                            <div className="text-sm text-slate-400">End Date</div>
                            <div className="flex items-center mt-1">
                                <Clock className="w-4 h-4 mr-2" />
                                <span>{presale.endDate}</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 mb-6">
                        <div>
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

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <div className="text-sm text-slate-400">Soft Cap</div>
                                <div className="font-semibold">{presale.softCap}</div>
                            </div>
                            <div>
                                <div className="text-sm text-slate-400">Hard Cap</div>
                                <div className="font-semibold">{presale.hardCap}</div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-700 pt-6">
                        <h3 className="font-semibold mb-4">Token Information</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-slate-400">Token Price</span>
                                <span>{presale.tokenPrice}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-400">Listing Price</span>
                                <span>{presale.listingPrice}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-400">Initial Market Cap</span>
                                <span>{presale.initialMarketCap}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-400">Liquidity %</span>
                                <span>{presale.liquidityPercent}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-400">Lockup Time</span>
                                <span>{presale.lockupTime}</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                            Participate Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PresaleDetails;