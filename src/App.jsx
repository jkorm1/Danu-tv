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
    setCompletedOrders(prev => [completedOrder, ...prev]);
    
    // Remove completed orders after 30 seconds
    setTimeout(() => {
      setCompletedOrders(prev => 
        prev.filter(order => order.orderId !== completedOrder.orderId)
      );
    }, 30000);
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

