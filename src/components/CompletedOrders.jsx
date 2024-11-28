import React from 'react'
import { Truck, ShoppingBag, UtensilsCrossed, Clock } from 'lucide-react'

export default function CompletedOrders({ orders }) {
  const getOrderTypeIcon = (type) => {
    switch(type.toLowerCase()) {
      case 'delivery':
        return <Truck className="h-4 w-4 mr-1" />;
      case 'take-out':
      case 'takeout':
        return <ShoppingBag className="h-4 w-4 mr-1" />;
      case 'dine-in':
      case 'dinein':
        return <UtensilsCrossed className="h-4 w-4 mr-1" />;
      case 'reserved':
        return <Clock className="h-4 w-4 mr-1" />;
      default:
        return <ShoppingBag className="h-4 w-4 mr-1" />;
    }
  };

  return (
    <div className="h-full flex flex-col">
      <h2 className="text-sm font-semibold py-2 text-center border-b bg-green-200/70 sticky top-0">
        Completed Orders
      </h2>
      <div className="overflow-y-auto flex-1">
        {orders.map((order) => (
          <div
            key={order.orderId}
            className="border-b last:border-b-0 py-3 px-4 hover:bg-gray-100 transition-colors"
          >
            <div className="flex flex-col space-y-1">
              <span className="text-sm font-semibold text-gray-800">{order.orderId}</span>
              <div className="flex items-center text-xs text-gray-600">
                {getOrderTypeIcon(order.orderType)}
                <span>{order.orderType}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}