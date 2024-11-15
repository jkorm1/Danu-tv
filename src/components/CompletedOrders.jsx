import React from 'react';

const CompletedOrders = ({ orders }) => {
  if (!orders || orders.length === 0) {
    return <p className="text-xs text-gray-500">No completed orders.</p>;
  }

  return (
    <div className="space-y-2 shadow-xm" role="list">
      {orders.map(order => (
        <div
          key={order.orderId}
          className="bg-black/100  backdrop-blur-sm rounded-lg shadow p-2 text-center hover:shadow-lg transition-shadow duration-200"
          role="listitem"
        >
          <h3 className="text-sm font-bold text-amber-600">{order.orderId}</h3>
          <p className="text-xs  font-Dancing text-white">{order.timeSpent} ago</p>
          <span className="text-xs text-green-600 text-white">{order.status}</span>
        </div>
      ))}
    </div>
  );
};

export default CompletedOrders;
