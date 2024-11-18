import React from 'react';
import OrderStatusCard from './OrderStatusCard';
import CompletedOrders from './CompletedOrders';
import { cards, completedOrders } from './cardsData';
import logo from '../assets/public/logo.png';

const OrderStatusBoard = () => {
  return (
    <div className="relative font-Outfit  min-h-screen w-full overflow-hidden p-4">
      <div className="text-white flex flex-row w-full space-x-4">
        <div className="w-1/5 p-4 bg-gray-200/70 backdrop-blur-md rounded-lg shadow-lg transition-transform transform hover:translate-y-1 hover:shadow-xl">
          <CompletedOrders orders={completedOrders} />
        </div>
        <div className="flex-1 p-4 bg-gray-200/70 backdrop-blur-md rounded-lg shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-3">
            {cards.map(order => (
              <OrderStatusCard key={order.orderId} order={order} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatusBoard;
