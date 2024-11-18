import React from 'react';

const CompletedOrders = ({ orders }) => {
  if (!orders || orders.length === 0) {
    return <p className="text-xs text-gray-500">No completed orders.</p>;
  }

  return (
    <div className="space-y-2  shadow-xm" role="list">
      {orders.map(order => (
        <div
          key={order.orderId}
          className="  backdrop-blur-sm rounded-lg shadow p-2 text-center shadow-lg duration-200"
          role="listitem"
        >
          <h3 className="text-sm font-bold text-black">{order.orderId}</h3>
          <p className="text-xs  font-Dancing text-black">{order.timeSpent} ago</p>
          <div className={`text-xs px-1 py-1 rounded bg-green-500/10`}>
           <span className="text-xs text-green-600 text-black">{order.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompletedOrders;
