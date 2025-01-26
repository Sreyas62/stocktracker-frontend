import { Stock } from '../types';

export const mockStocks: Stock[] = [
  {
    id: 1,
    ticker: 'AAPL',
    name: 'Apple Inc.',
    quantity: 1,
    buyPrice: 150.25,
    currentPrice: 175.50,
    userid: "1",
  },
  {
    id: 2,
    ticker: 'MSFT',
    name: 'Microsoft Corporation',
    quantity: 1,
    buyPrice: 280.75,
    currentPrice: 305.20,
    userid: "1",
  },
  {
    id: 3,
    ticker: 'GOOGL',
    name: 'Alphabet Inc.',
    quantity: 1,
    buyPrice: 2750.10,
    currentPrice: 2850.75,
    userid: "1",
  },
  {
    id: 4,
    ticker: 'AMZN',
    name: 'Amazon.com Inc.',
    quantity: 1,
    buyPrice: 3200.50,
    currentPrice: 3350.25,
    userid: "1",
  },
  {
    id: 5,
    ticker: 'TSLA',
    name: 'Tesla Inc.',
    quantity: 1,
    buyPrice: 850.75,
    currentPrice: 875.30,
    userid: "1",
  },
];