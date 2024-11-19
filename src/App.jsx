import React from 'react';
import './App.css';
import OrderStatusBoard from './components/OrderStatusBoard';
import Header from './components/Header';
import CompletedOrders from './components/CompletedOrders';
import { completedOrders } from './components/cardsData';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex">
        <aside className="w-[320px] fixed left-0 top-16 bottom-0 bg-white border-r p-4 overflow-hidden">
          <h2 className="text-lg font-semibold mb-4 text-center">Completed Orders</h2>
          <CompletedOrders orders={completedOrders} />
        </aside>
        <div className="flex-1 ml-[320px]">
          <OrderStatusBoard />
        </div>
      </main>
    </div>
  );
}

export default App;
