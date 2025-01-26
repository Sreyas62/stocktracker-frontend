export interface Stock {
  id: number;
  ticker: string;
  name: string;
  quantity: number;
  buyPrice: number;
  currentPrice: number;
  userid: string;
}

export interface PortfolioMetrics {
  totalValue: number;
  totalGainLoss: number;
  topPerformer: Stock | null;
  worstPerformer: Stock | null;
}

export interface ApiError {
  message: string;
  status: number;
}