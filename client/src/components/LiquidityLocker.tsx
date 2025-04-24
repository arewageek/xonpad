import React, { useState } from 'react';
import { Lock, AlertCircle, ChevronDown, Search } from 'lucide-react';

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
            owner: "0x1234...5678"
        },
        {
            id: 2,
            name: "DAI/ETH LP",
            amount: "180,000",
            value: "$90,000",
            lockDate: "Feb 15, 2024",
            unlockDate: "Aug 15, 2024",
            owner: "0x8765...4321"
        }
    ];

    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800 rounded-xl p-8 mb-8">
                <div className="flex items-start space-x-4 mb-6">
                    <Lock className="w-12 h-12 text-blue-500 flex-shrink-0" />
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Liquidity Locker</h2>
                        <p className="text-slate-300">
                            Lock your liquidity pool tokens to build trust with your community.
                            Locked tokens cannot be withdrawn until the specified unlock date.
                        </p>
                    </div>
                </div>

                <button
                    onClick={() => setShowLockForm(!showLockForm)}
                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center justify-center"
                >
                    <Lock className="w-5 h-5 mr-2" />
                    Lock New Liquidity
                </button>

                {showLockForm && (
                    <div className="mt-6 border-t border-slate-700 pt-6">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">LP Token Address</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    placeholder="Enter LP token contract address"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Amount to Lock</label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        className="w-full px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                        placeholder="Enter amount"
                                    />
                                    <button className="absolute right-2 top-1/2 -translate-y-1/2 px-2 py-1 text-sm bg-blue-600 rounded">
                                        MAX
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Lock Until</label>
                                <input
                                    type="date"
                                    className="w-full px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    min={new Date().toISOString().split('T')[0]}
                                />
                            </div>

                            <div className="bg-blue-900/20 border border-blue-500/20 rounded-lg p-4 flex items-start space-x-3">
                                <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                <p className="text-sm text-slate-300">
                                    Make sure you're locking the correct LP tokens. This action cannot be undone,
                                    and tokens will be locked until the specified unlock date.
                                </p>
                            </div>

                            <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                                Lock Liquidity
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="bg-slate-800 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6">Locked Liquidity</h3>

                <div className="relative mb-6">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search by token name or address..."
                        className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                <div className="space-y-4">
                    {lockedTokens.map((token) => (
                        <div key={token.id} className="bg-slate-700 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h4 className="font-semibold">{token.name}</h4>
                                    <p className="text-sm text-slate-400">{token.owner}</p>
                                </div>
                                <button className="p-1 hover:bg-slate-600 rounded-lg transition-colors">
                                    <ChevronDown className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                <div>
                                    <div className="text-slate-400">Amount</div>
                                    <div>{token.amount}</div>
                                </div>
                                <div>
                                    <div className="text-slate-400">Value</div>
                                    <div>{token.value}</div>
                                </div>
                                <div>
                                    <div className="text-slate-400">Lock Date</div>
                                    <div>{token.lockDate}</div>
                                </div>
                                <div>
                                    <div className="text-slate-400">Unlock Date</div>
                                    <div>{token.unlockDate}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LiquidityLocker;