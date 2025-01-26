import { Stock } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const stockService = {
  async getAllStocks(): Promise<Stock[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/stocks`);
      console.log("Fetched Stocks", JSON.stringify(response));
      if (!response.ok) throw new Error('Failed to fetch stocks');
      return response.json();
    } catch (error) {
      console.error('Error fetching stocks:', error);
      throw error;
    }
  },

  async addStock(stock: Omit<Stock, 'id' | 'currentPrice'>): Promise<Stock> {
    try {
      const response = await fetch(`${API_BASE_URL}/stocks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(stock),
      });
      if (!response.ok) throw new Error('Failed to add stock');
      return response.json();
    } catch (error) {
      console.error('Error adding stock:', error);
      throw error;
    }
  },

  async updateStock(id: number, stock: Omit<Stock, 'id' | 'currentPrice'>): Promise<Stock> {
    try {
      const response = await fetch(`${API_BASE_URL}/stocks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(stock),
      });
      if (!response.ok) throw new Error('Failed to update stock');
      return response.json();
    } catch (error) {
      console.error('Error updating stock:', error);
      throw error;
    }
  },

  async deleteStock(id: number): Promise<void> {
    try {
      const response = await fetch(`${API_BASE_URL}/stocks/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete stock');
    } catch (error) {
      console.error('Error deleting stock:', error);
      throw error;
    }
  },
};