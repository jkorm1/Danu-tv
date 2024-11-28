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
        <aside className="w-[120px] fixed left-0 top-12 bottom-0 bg-white border-r">
          <div className="h-full">
            <CompletedOrders orders={completedOrders} />
          </div>
        </aside>
        <div className="flex-1 ml-[120px] mt-12">
          <OrderStatusBoard />
        </div>
      </main>
    </div>
  );
}

export default App;
