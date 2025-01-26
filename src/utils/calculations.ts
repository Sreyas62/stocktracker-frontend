import { Stock, PortfolioMetrics } from '../types';

export function calculateMetrics(stocks: Stock[]): PortfolioMetrics {
  const totalValue = stocks.reduce(
    (sum, stock) => sum + stock.currentPrice * stock.quantity,
    0
  );

  const totalGainLoss = stocks.reduce(
    (sum, stock) => sum + (stock.currentPrice - stock.buyPrice) * stock.quantity,
    0
  );

  const performanceList = stocks.map((stock) => ({
    ...stock,
    performance: ((stock.currentPrice - stock.buyPrice) / stock.buyPrice) * 100,
  }));

  const sortedByPerformance = [...performanceList].sort(
    (a, b) => b.performance - a.performance
  );

  return {
    totalValue,
    totalGainLoss,
    topPerformer: sortedByPerformance[0] || null,
    worstPerformer: sortedByPerformance[sortedByPerformance.length - 1] || null,
  };
}