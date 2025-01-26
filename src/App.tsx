import  { useState } from 'react';
import { Plus } from 'lucide-react';
import { Stock } from './types';
import { Dashboard } from './components/Dashboard';
import { StockList } from './components/StockList';
import { StockForm } from './components/StockForm';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import { useStocks } from './hooks/useStocks';

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [editingStock, setEditingStock] = useState<Stock | undefined>();
  
  const {
    stocks,
    loading,
    error,
    metrics,
    addStock,
    updateStock,
    deleteStock,
  } = useStocks();

  const handleAddStock = async (stockData: Omit<Stock, 'id' | 'currentPrice'>) => {
    await addStock(stockData);
    setShowForm(false);
  };

  const handleEditStock = async (stockData: Omit<Stock, 'id' | 'currentPrice'>) => {
    if (!editingStock) return;
    await updateStock(editingStock.id, stockData);
    setShowForm(false);
    setEditingStock(undefined);
  };

  const handleDeleteStock = async (id: number) => {
    await deleteStock(id);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Portfolio Tracker</h1>
            <p className="text-gray-500 mt-1">Track your investments in real-time</p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="btn-primary"
          >
            <Plus className="h-5 w-5" />
            Add Stock
          </button>
        </div>

        <Dashboard stocks={stocks} metrics={metrics} />

        <StockList
          stocks={stocks}
          onEdit={(stock) => {
            setEditingStock(stock);
            setShowForm(true);
          }}
          onDelete={handleDeleteStock}
        />

        {showForm && (
          <StockForm
            stock={editingStock}
            onSubmit={editingStock ? handleEditStock : handleAddStock}
            onClose={() => {
              setShowForm(false);
              setEditingStock(undefined);
            }}
          />
        )}
      </div>
    </div>
  );
}