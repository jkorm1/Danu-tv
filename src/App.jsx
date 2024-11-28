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
        <aside className="w-1/7 fixed left-0 top-10 bottom-0 bg-white border-r">
          <div className="h-full">
            <CompletedOrders orders={completedOrders} />
          </div>
        </aside>
        <div className="flex-1 ml-[100px] -mt-1">
          <OrderStatusBoard />
        </div>
      </main>
    </div>
  );
}
export default App;

