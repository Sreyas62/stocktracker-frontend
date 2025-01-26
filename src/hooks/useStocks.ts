import { useState, useEffect, useCallback } from 'react';
import { Stock } from '../types';
import { stockService } from '../services/api';
import { calculateMetrics } from '../utils/calculations';


export function useStocks() {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStocks = useCallback(async () => {
    try {
      setLoading(true);
      console.log("Fetching Stocks")

      const data = await stockService.getAllStocks();
      
      setStocks(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch stocks');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStocks();
  }, [fetchStocks]);

  const addStock = async (stockData: Omit<Stock, 'id' | 'currentPrice'>) => {
    try {
      stockData.userid = "1";
      console.log("Adding Stock", stockData)
      const newStock = await stockService.addStock(stockData);
      setStocks((prev) => [...prev, newStock]);
      window.location.reload()
    } catch (err) {
      setError('Failed to add stock');
      throw err;
    }
  };

  const updateStock = async (id: number, stockData: Omit<Stock, 'id' | 'currentPrice'>) => {
    try {


      const updatedStock = await stockService.updateStock(id, stockData);
      setStocks((prev) =>
        prev.map((stock) => (stock.id === id ? updatedStock : stock))
      );
    } catch (err) {
      setError('Failed to update stock');
      throw err;
    }
  };

  const deleteStock = async (id: number) => {
    try {

      await stockService.deleteStock(id);
      setStocks((prev) => prev.filter((stock) => stock.id !== id));
    } catch (err) {
      setError('Failed to delete stock');
      throw err;
    }
  };

  const metrics = calculateMetrics(stocks);

  return {
    stocks,
    loading,
    error,
    metrics,
    addStock,
    updateStock,
    deleteStock,
    refreshStocks: fetchStocks,
  };
}