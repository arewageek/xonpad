"use client"

import React, { useState } from 'react';
import { Rocket, Shield, Users, Coins, Lock } from 'lucide-react';
import ActivePresales from '@/components/ActivePresales';
import CreateToken from '@/components/CreateToken';
import LiquidityLocker from '@/components/LiquidityLocker';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TokenMetrics from '@/components/TokenMetrics';
import SearchAndFilter from '@/components/SearchAndFilter';
import PresaleDetails from '@/components/PresaleDetails';

function Home() {
  const [activeTab, setActiveTab] = useState('presales');
  const [showPresaleDetails, setShowPresaleDetails] = useState(false);
  const [selectedPresale, setSelectedPresale] = useState(null);

  const handlePresaleClick = (presale: any) => {
    setSelectedPresale(presale);
    setShowPresaleDetails(true);
  };

  const handleCreateToken = () => {
    setActiveTab('create');
    window.scrollTo({ top: document.getElementById('main-content')?.offsetTop, behavior: 'smooth' });
  };

  const handleViewPresales = () => {
    setActiveTab('presales');
    window.scrollTo({ top: document.getElementById('main-content')?.offsetTop, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <Navbar />
      <Hero onCreateToken={handleCreateToken} onViewPresales={handleViewPresales} />

      <TokenMetrics />

      <main id="main-content" className="container mx-auto px-4 py-8">
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('presales')}
            className={`px-6 py-3 rounded-lg flex items-center space-x-2 ${activeTab === 'presales'
              ? 'bg-blue-600 text-white'
              : 'bg-slate-700 hover:bg-slate-600'
              }`}
          >
            <Rocket size={20} />
            <span>Active Presales</span>
          </button>
          <button
            onClick={() => setActiveTab('create')}
            className={`px-6 py-3 rounded-lg flex items-center space-x-2 ${activeTab === 'create'
              ? 'bg-blue-600 text-white'
              : 'bg-slate-700 hover:bg-slate-600'
              }`}
          >
            <Coins size={20} />
            <span>Create Token</span>
          </button>
          <button
            onClick={() => setActiveTab('locker')}
            className={`px-6 py-3 rounded-lg flex items-center space-x-2 ${activeTab === 'locker'
              ? 'bg-blue-600 text-white'
              : 'bg-slate-700 hover:bg-slate-600'
              }`}
          >
            <Lock size={20} />
            <span>Liquidity Locker</span>
          </button>
        </div>

        {activeTab === 'presales' && <SearchAndFilter />}
        {activeTab === 'presales' && <ActivePresales onPresaleClick={handlePresaleClick} />}
        {activeTab === 'create' && <CreateToken />}
        {activeTab === 'locker' && <LiquidityLocker />}

        <section className="mt-20 mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Why Choose Our Launchpad?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-xl">
              <Shield className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Security First</h3>
              <p className="text-slate-300">Automated audits and security checks for every token launch</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl">
              <Users className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
              <p className="text-slate-300">Fair launch system with anti-bot measures</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl">
              <Lock className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Locked Liquidity</h3>
              <p className="text-slate-300">Automatic liquidity locking for project safety</p>
            </div>
          </div>
        </section>
      </main>

      {showPresaleDetails && (
        <PresaleDetails
          presale={selectedPresale}
          onClose={() => setShowPresaleDetails(false)}
        />
      )}
    </div>
  );
}

export default Home;