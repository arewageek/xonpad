import React from 'react';
import { TrendingUp, DollarSign, Clock, Users } from 'lucide-react';

const MetricCard = ({ icon: Icon, title, value, change }: {
    icon: React.ElementType;
    title: string;
    value: string;
    change?: string;
}) => (
    <div className="bg-slate-800 p-6 rounded-xl">
        <div className="flex items-start justify-between">
            <div>
                <p className="text-slate-400 text-sm">{title}</p>
                <h4 className="text-2xl font-bold mt-2">{value}</h4>
                {change && (
                    <p className="text-green-400 text-sm mt-1">
                        +{change} (24h)
                    </p>
                )}
            </div>
            <Icon className="w-6 h-6 text-blue-500" />
        </div>
    </div>
);

const TokenMetrics = () => {
    return (
        <section className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6">Platform Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard
                    icon={TrendingUp}
                    title="Total Value Locked"
                    value="$24.5M"
                    change="12.3%"
                />
                <MetricCard
                    icon={DollarSign}
                    title="Total Raised"
                    value="$8.2M"
                    change="5.7%"
                />
                <MetricCard
                    icon={Clock}
                    title="Active Presales"
                    value="18"
                />
                <MetricCard
                    icon={Users}
                    title="Unique Participants"
                    value="12.4K"
                    change="8.9%"
                />
            </div>
        </section>
    );
}

export default TokenMetrics;