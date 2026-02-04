"use client"

import React, { useState } from 'react';
import { 
  LayoutGrid, 
  PlusCircle, 
  Lock, 
  ShieldCheck, 
  Users, 
  Activity, 
  Search,
  Bell,
  Menu,
  X,
  Settings,
  CircleUser,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  BarChart3
} from 'lucide-react';
import ActivePresales from '@/components/ActivePresales';
import CreateToken from '@/components/CreateToken';
import LiquidityLocker from '@/components/LiquidityLocker';
import TokenMetrics from '@/components/TokenMetrics';
import SearchAndFilter from '@/components/SearchAndFilter';
import PresaleDetails from '@/components/PresaleDetails';

// Internal Components for the New Professional Layout
const SidebarItem = ({ icon: Icon, label, isActive, onClick }: any) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
      isActive 
        ? 'bg-emerald-500/10 text-emerald-500' 
        : 'text-slate-500 hover:text-white hover:bg-white/5'
    }`}
  >
    <Icon className={`w-5 h-5 ${isActive ? 'text-emerald-500' : 'group-hover:text-white'}`} />
    <span className="text-sm font-semibold">{label}</span>
  </button>
);

function Home() {
  const [activeTab, setActiveTab] = useState('presales');
  const [showPresaleDetails, setShowPresaleDetails] = useState(false);
  const [selectedPresale, setSelectedPresale] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handlePresaleClick = (presale: any) => {
    setSelectedPresale(presale);
    setShowPresaleDetails(true);
  };

  const navItems = [
    { id: 'presales', label: 'Ecosystem', icon: LayoutGrid },
    { id: 'create', label: 'Launch Console', icon: PlusCircle },
    { id: 'locker', label: 'Liquidity Vault', icon: Lock },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-[#080a0b] text-slate-200">
      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar - Mobile & Desktop */}
      <aside className={`
        fixed inset-y-0 left-0 w-72 flex flex-col border-r border-white/5 bg-[#0a0c0d] p-6 z-[70] transition-transform duration-300 lg:static lg:translate-x-0
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between mb-12 px-2">
          <div className="flex items-center space-x-3">
            <div className="bg-emerald-500 p-1.5 rounded-lg">
               <Activity className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white uppercase italic">
               Xon<span className="text-emerald-500">pad</span>
            </span>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-slate-500 hover:text-white lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 space-y-2">
          <div className="text-[10px] font-black text-slate-700 uppercase tracking-widest px-4 mb-4">Core Platform</div>
          {navItems.map((item) => (
            <SidebarItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              isActive={activeTab === item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
            />
          ))}
          
          <div className="pt-8 text-[10px] font-black text-slate-700 uppercase tracking-widest px-4 mb-4">Account</div>
          <SidebarItem icon={Settings} label="Settings" />
          <SidebarItem icon={CircleUser} label="My Project" />
        </div>

        <div className="mt-auto pt-6 border-t border-white/5">
             <div className="bg-emerald-500/5 rounded-2xl p-4 border border-emerald-500/10">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-emerald-500">Node Status</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="text-[10px] text-slate-500 font-medium whitespace-nowrap overflow-hidden text-ellipsis">Synced with Ethereum Mainnet</div>
             </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {/* Top Header */}
        <header className="h-20 border-b border-white/5 bg-[#080a0b]/80 backdrop-blur-md flex items-center justify-between px-8 z-40">
           <div className="flex items-center lg:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 -ml-2 text-slate-400 hover:text-white"
              >
                <Menu className="w-6 h-6" />
              </button>
              <span className="ml-4 text-xl font-bold text-white tracking-tight">Xonpad</span>
           </div>

           <div className="hidden lg:flex items-center flex-1 max-w-md bg-white/5 border border-white/10 rounded-xl px-4 py-2 group focus-within:border-emerald-500/50 transition-all">
              <Search className="w-4 h-4 text-slate-500 group-focus-within:text-emerald-500" />
              <input 
                 type="text" 
                 placeholder="Command + K to search..." 
                 className="bg-transparent border-none outline-none ml-3 text-sm text-white placeholder:text-slate-700 w-full"
              />
           </div>

           <div className="flex items-center space-x-6">
              <div className="hidden md:flex flex-col items-end">
                 <div className="text-xs font-bold text-white">Ethereum</div>
                 <div className="text-[10px] font-medium text-emerald-500">2,450.22 USDT</div>
              </div>
              
              <button className="relative p-2 text-slate-500 hover:text-emerald-500 transition-colors">
                 <Bell className="w-5 h-5" />
                 <span className="absolute top-2 right-2 w-2 h-2 bg-emerald-500 rounded-full border-2 border-[#030706]" />
              </button>

              <button className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black rounded-xl transition-all font-bold text-xs shadow-lg shadow-emerald-500/10 active:scale-95">
                Connect Wallet
              </button>
           </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-8 relative scroll-smooth no-scrollbar">
           {/* Dynamic Dashboard Breadcrumb */}
           <div className="flex items-center justify-between mb-8">
              <div>
                 <h1 className="text-2xl font-black text-white tracking-tight capitalize">
                   {activeTab === 'presales' ? 'Global Ecosystem' : activeTab.replace('-', ' ')}
                 </h1>
                 <p className="text-sm text-slate-500 font-medium mt-1">Professional tools for institutional-grade token launching.</p>
              </div>
              
              <div className="flex space-x-3">
                 <button className="flex items-center space-x-2 px-4 py-2 border border-white/5 bg-white/5 rounded-xl text-xs font-bold hover:bg-white/10 transition-all">
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                    <span>View Trends</span>
                 </button>
                 <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-500/10 text-emerald-500 rounded-xl text-xs font-bold hover:bg-emerald-500/20 transition-all">
                    <ExternalLink className="w-4 h-4" />
                    <span>Xonpad Bridge</span>
                 </button>
              </div>
           </div>

           {/* Content Router */}
           <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
              {activeTab === 'presales' && (
                <div className="space-y-12">
                   <TokenMetrics />
                   <div className="pro-card rounded-3xl p-8">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-lg font-black text-white tracking-tight">Discovery Console</h2>
                            <SearchAndFilter />
                        </div>
                        <ActivePresales onPresaleClick={handlePresaleClick} />
                   </div>
                </div>
              )}

              {activeTab === 'create' && (
                <div className="max-w-4xl mx-auto py-12">
                  <CreateToken />
                </div>
              )}

              {activeTab === 'locker' && (
                <div className="max-w-5xl mx-auto py-12">
                  <LiquidityLocker />
                </div>
              )}

              {activeTab === 'analytics' && (
                <div className="h-96 flex flex-col items-center justify-center border border-dashed border-white/5 rounded-[3rem]">
                   <BarChart3 className="w-16 h-16 text-slate-800 mb-4 animate-pulse" />
                   <h3 className="text-xl font-bold text-slate-400">Advanced Analytics Hub</h3>
                   <p className="text-sm text-slate-600 mt-2 uppercase tracking-widest font-black">Coming Q2 2024</p>
                </div>
              )}
           </div>

           {/* Minimal Footer */}
           <footer className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-800">
              <div className="flex space-x-8">
                 <a href="#" className="hover:text-emerald-500 transition-colors">Privacy</a>
                 <a href="#" className="hover:text-emerald-500 transition-colors">Security Audit</a>
                 <a href="#" className="hover:text-emerald-500 transition-colors">Docs</a>
              </div>
              <div>© 2024 Xonpad Protocol Labs. Cryptographical Infrastructure.</div>
           </footer>
        </main>
      </div>

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