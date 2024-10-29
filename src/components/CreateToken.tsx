import React, { useState } from 'react';
import { Shield, ArrowRight } from 'lucide-react';

const CreateToken = () => {
    const [step, setStep] = useState(1);

    return (
        <div className="max-w-2xl mx-auto">
            <div className="bg-slate-800 rounded-xl p-8">
                <div className="flex items-center justify-between mb-8">
                    {[1, 2, 3].map((number) => (
                        <div key={number} className="flex items-center">
                            <div className={`
                w-10 h-10 rounded-full flex items-center justify-center
                ${step === number ? 'bg-blue-600' : step > number ? 'bg-green-500' : 'bg-slate-700'}
              `}>
                                {step > number ? '✓' : number}
                            </div>
                            {number < 3 && (
                                <div className={`w-24 h-1 mx-2 ${step > number ? 'bg-green-500' : 'bg-slate-700'}`} />
                            )}
                        </div>
                    ))}
                </div>

                {step === 1 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Token Information</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Token Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    placeholder="e.g. My Amazing Token"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Token Symbol</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    placeholder="e.g. MAT"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Total Supply</label>
                                <input
                                    type="number"
                                    className="w-full px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    placeholder="e.g. 1000000"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Presale Configuration</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Presale Rate</label>
                                <input
                                    type="number"
                                    className="w-full px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    placeholder="Tokens per ETH"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Soft Cap (ETH)</label>
                                <input
                                    type="number"
                                    className="w-full px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    placeholder="Minimum goal"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Hard Cap (ETH)</label>
                                <input
                                    type="number"
                                    className="w-full px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    placeholder="Maximum goal"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Security Settings</h2>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <Shield className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-1">Liquidity Lock</h3>
                                    <p className="text-slate-300 text-sm mb-3">
                                        Choose how long to lock the liquidity pool tokens
                                    </p>
                                    <select className="w-full px-4 py-2 rounded-lg bg-slate-700 border border-slate-600">
                                        <option>6 months</option>
                                        <option>1 year</option>
                                        <option>2 years</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <Shield className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold mb-1">Anti-Bot Protection</h3>
                                    <p className="text-slate-300 text-sm">
                                        Enable advanced measures to prevent bot manipulation
                                    </p>
                                    <label className="relative inline-flex items-center cursor-pointer mt-3">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                        <span className="ms-3 text-sm font-medium text-slate-300">Enable</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex justify-between mt-8">
                    {step > 1 && (
                        <button
                            onClick={() => setStep(step - 1)}
                            className="px-6 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors"
                        >
                            Back
                        </button>
                    )}
                    <button
                        onClick={() => step < 3 ? setStep(step + 1) : null}
                        className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors ml-auto flex items-center"
                    >
                        {step === 3 ? 'Create Token' : 'Next'}
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreateToken;