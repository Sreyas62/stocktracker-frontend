import { Pencil, Trash2, TrendingUp, TrendingDown } from 'lucide-react';
import { Stock } from '../types';

interface StockListProps {
  stocks: Stock[];
  onEdit: (stock: Stock) => void;
  onDelete: (id: number) => void;
}

export function StockList({ stocks, onEdit, onDelete }: StockListProps) {
  console.log("Rendering StockList with stocks:", stocks);
  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="table-header">Symbol</th>
              <th className="table-header">Name</th>
              <th className="table-header">Quantity</th>
              <th className="table-header">Buy Price</th>
              <th className="table-header">Current Price</th>
              <th className="table-header">Gain/Loss</th>
              <th className="table-header">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {stocks.map((stock) => {
              // Fallbacks to avoid errors
              const buyPrice = stock.buyPrice ?? 0;
              const currentPrice = stock.currentPrice ?? 0;
              const gainLoss = (currentPrice - buyPrice) * stock.quantity;
              const percentageChange = buyPrice !== 0 ? ((currentPrice - buyPrice) / buyPrice) * 100 : 0;

              return (
                <tr key={stock.id} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="table-cell font-medium">{stock.ticker}</td>
                  <td className="table-cell">{stock.name}</td>
                  <td className="table-cell">{stock.quantity}</td>
                  <td className="table-cell">₹{buyPrice.toFixed(2)}</td>
                  <td className="table-cell">₹{currentPrice.toFixed(2)}</td>
                  <td className="table-cell">
                    <div className="flex items-center gap-2">
                      <span className={gainLoss >= 0 ? 'text-green-600' : 'text-red-600'}>
                      ₹{Math.abs(gainLoss).toFixed(2)}
                      </span>
                      <div className={`flex items-center ${gainLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {gainLoss >= 0 ? (
                          <TrendingUp className="h-4 w-4" />
                        ) : (
                          <TrendingDown className="h-4 w-4" />
                        )}
                        <span className="ml-1 text-xs">
                          {Math.abs(percentageChange).toFixed(2)}%
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="table-cell">
                    <div className="flex gap-3">
                      <button
                        onClick={() => onEdit(stock)}
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => onDelete(stock.id)}
                        className="text-red-600 hover:text-red-800 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
