import React from 'react';
import { Rocket, Wallet } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="bg-slate-800/50 backdrop-blur-md border-b border-slate-700 sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-2">
                        <Rocket className="w-8 h-8 text-blue-500" />
                        <span className="text-xl font-bold">TokenLaunch</span>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors">
                            <span className="hidden md:inline mr-2">Total Launches:</span>
                            <span className="text-blue-400">247</span>
                        </button>
                        <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors flex items-center">
                            <Wallet className="w-4 h-4 mr-2" />
                            <span>Connect Wallet</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;