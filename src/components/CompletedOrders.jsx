import React from 'react'
import { Truck, ShoppingBag, UtensilsCrossed, Clock, CheckCircle2 } from 'lucide-react'

export default function CompletedOrders({ orders }) {
  const getOrderTypeIcon = (type) => {
    switch(type.toLowerCase()) {
      case 'delivery':
        return <Truck className="h-3 w-3 text-green-600" />;
      case 'take-out':
        return <ShoppingBag className="h-3 w-3 text-green-600" />;
      case 'reserved':
        return <Clock className="h-3 w-3 text-green-600" />;
      default:
        return <ShoppingBag className="h-3 w-3 text-green-600" />;
    }
  };

  return (
    <div className="h-full flex flex-col bg-gray-100/50 w-full">
      <h1 className="text-xs font-semibold py-4 text-center 
                     bg-green-50/80 backdrop-blur-sm sticky top-0 
                     text-green-800 border-b border-gray-200">
        Completed Orders
      </h1>
      <div className="overflow-y-auto flex-1">
        {orders.map((order) => (
          <div
            key={order.orderId}
            className="bg-white/40 backdrop-blur-md border-b border-gray-200"
          >
            <div className="relative py-2 px-3">
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none"/>
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex flex-col space-y-0.5">
                  <span className="text-[10px] font-semibold text-gray-800">
                    {order.orderId}
                  </span>
                  <div className="flex items-center text-[9px] text-gray-600 gap-1">
                    {getOrderTypeIcon(order.orderType)}
                    <span>{order.orderType}</span>
                  </div>
                </div>
                <CheckCircle2 className="h-3 w-3 text-green-600" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}