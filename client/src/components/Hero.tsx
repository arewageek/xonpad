import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = ({ onCreateToken, onViewPresales }: any) => {
    return (
        <div className="relative overflow-hidden bg-slate-900 py-24">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
            <div className="relative container mx-auto px-4">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        Launch Your Token with Confidence
                    </h1>
                    <p className="text-xl text-slate-300 mb-8">
                        The most secure and user-friendly platform for launching your ERC20 tokens.
                        Automated security checks, fair launch system, and locked liquidity.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={onCreateToken}
                            className="px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center"
                        >
                            Launch Your Token
                            <ChevronRight className="ml-2 w-5 h-5" />
                        </button>
                        <button
                            onClick={onViewPresales}
                            className="px-8 py-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors"
                        >
                            View Active Presales
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;