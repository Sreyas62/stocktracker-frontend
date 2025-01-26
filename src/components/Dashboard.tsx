import { TrendingUp, TrendingDown, PieChart, ArrowUpRight, ArrowDownRight, IndianRupee } from 'lucide-react';
import { Stock, PortfolioMetrics } from '../types';

interface DashboardProps {
  stocks: Stock[];
  metrics: PortfolioMetrics;
}

export function Dashboard({ stocks, metrics }: DashboardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="card p-6 hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Total Value</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
            ₹{metrics.totalValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </p>
          </div>
          <div className="bg-blue-100 p-3 rounded-full">
            <IndianRupee className="h-6 w-6 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="card p-6 hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Total Gain/Loss</p>
            <div className="flex items-center gap-2 mt-1">
              <p className={`text-2xl font-bold ${metrics.totalGainLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ₹{Math.abs(metrics.totalGainLoss).toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </p>
              {metrics.totalGainLoss >= 0 ? (
                <ArrowUpRight className="h-5 w-5 text-green-600" />
              ) : (
                <ArrowDownRight className="h-5 w-5 text-red-600" />
              )}
            </div>
          </div>
          <div className={`p-3 rounded-full ${metrics.totalGainLoss >= 0 ? 'bg-green-100' : 'bg-red-100'}`}>
            {metrics.totalGainLoss >= 0 ? (
              <TrendingUp className={`h-6 w-6 ${metrics.totalGainLoss >= 0 ? 'text-green-600' : 'text-red-600'}`} />
            ) : (
              <TrendingDown className={`h-6 w-6 ${metrics.totalGainLoss >= 0 ? 'text-green-600' : 'text-red-600'}`} />
            )}
          </div>
        </div>
      </div>

      <div className="card p-6 hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Top Performer</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{metrics.topPerformer?.ticker || 'N/A'}</p>
            {metrics.topPerformer && (
              <p className="text-sm text-green-600 mt-1">
                +{((metrics.topPerformer.currentPrice - metrics.topPerformer.buyPrice) / metrics.topPerformer.buyPrice * 100).toFixed(2)}%
              </p>
            )}
          </div>
          <div className="bg-green-100 p-3 rounded-full">
            <TrendingUp className="h-6 w-6 text-green-600" />
          </div>
        </div>
      </div>

      <div className="card p-6 hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Portfolio Size</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{stocks.length} Stocks</p>
            <p className="text-sm text-gray-500 mt-1">Diversified Portfolio</p>
          </div>
          <div className="bg-purple-100 p-3 rounded-full">
            <PieChart className="h-6 w-6 text-purple-600" />
          </div>
        </div>
      </div>
    </div>
  );
}