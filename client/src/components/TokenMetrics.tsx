import React from 'react';
import { TrendingUp, DollarSign, Clock, Users, ArrowUpRight, BarChart3, LineChart } from 'lucide-react';

const MetricCard = ({ icon: Icon, title, value, change, isPositive, trend }: {
    icon: React.ElementType;
    title: string;
    value: string;
    change?: string;
    isPositive?: boolean;
    trend?: "up" | "down" | "neutral";
}) => (
    <div className="pro-card p-6 rounded-2xl flex items-center justify-between group hover:border-emerald-500/20">
        <div className="flex items-center space-x-5">
            <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 transition-all group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20">
                <Icon className="w-5 h-5 text-slate-400 group-hover:text-emerald-500" />
            </div>
            <div>
                <p className="text-[10px] font-black text-slate-700 uppercase tracking-widest leading-none mb-1.5">{title}</p>
                <div className="flex items-baseline space-x-2">
                    <h4 className="text-xl font-bold text-white tracking-tight">{value}</h4>
                    {change && (
                        <span className={`text-[9px] font-black transition-colors ${isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
                            {isPositive ? '+' : ''}{change}
                        </span>
                    )}
                </div>
            </div>
        </div>
        
        {/* Minimal Sparkline Representation */}
        <div className="h-8 w-16 opacity-30 group-hover:opacity-100 transition-opacity">
            {trend === 'up' ? <TrendingUp className="w-full h-full text-emerald-500/50" /> : <BarChart3 className="w-full h-full text-slate-800" />}
        </div>
    </div>
);

const TokenMetrics = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
                icon={LineChart}
                title="Total Value Locked"
                value="$24,502,118"
                change="12.3%"
                isPositive={true}
                trend="up"
            />
            <MetricCard
                icon={BarChart3}
                title="Protocol Raised"
                value="$8,211,900"
                change="5.7%"
                isPositive={true}
                trend="up"
            />
            <MetricCard
                icon={Clock}
                title="Active Sessions"
                value="18 Projects"
                trend="neutral"
            />
            <MetricCard
                icon={Users}
                title="Unique Wallets"
                value="12.4K"
                change="8.9%"
                isPositive={true}
                trend="up"
            />
        </div>
    );
}

export default TokenMetrics;