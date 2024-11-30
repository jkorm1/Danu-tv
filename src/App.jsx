import React, { useState } from 'react';
import './App.css';
import OrderStatusBoard from './components/OrderStatusBoard';
import Header from './components/Header';
import CompletedOrders from './components/CompletedOrders';
import { cards as initialCards } from './components/cardsData';

function App() {
  const [completedOrders, setCompletedOrders] = useState([]);

  // Handler to receive completed orders from OrderStatusBoard
  const handleOrderComplete = (completedOrder) => {
    // First check if this order is already in completedOrders
    const isAlreadyCompleted = completedOrders.some(
      order => order.orderId === completedOrder.orderId
    );

    // Only proceed if the order isn't already completed
    if (!isAlreadyCompleted) {
      const uniqueCompletedOrder = {
        ...completedOrder,
        uniqueId: `${completedOrder.orderId}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
      };
      
      // Add console.log to debug
      console.log('Adding order:', uniqueCompletedOrder.orderId);
      
      setCompletedOrders(prev => {
        // Double check for duplicates before adding
        if (prev.some(order => order.orderId === completedOrder.orderId)) {
          return prev;
        }
        return [...prev, uniqueCompletedOrder];
      });
      
      setTimeout(() => {
        setCompletedOrders(prev => 
          prev.filter(order => order.uniqueId !== uniqueCompletedOrder.uniqueId)
        );
      }, 30000);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex">
        <aside className="w-1/7 fixed left-0 top-10 bottom-0 bg-white border-r">
          <div className="h-full">
            <CompletedOrders orders={completedOrders} />
          </div>
        </aside>
        <div className="flex-1 ml-[100px] -mt-1">
          <OrderStatusBoard onOrderComplete={handleOrderComplete} />
        </div>
      </main>
    </div>
  );
}

export default App;

