import React from 'react';

const OrderStatusCard = ({ order }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Getting Ready':
        return 'bg-green-500/10 text-green-700';
      case 'On Process':
        return 'bg-yellow-500/10 text-yellow-700';
      case 'Pending':
        return 'bg-red-500/10 text-red-700';
      default:
        return 'bg-gray-500/10 text-gray-700';
    }
  };

  return (
    <div 
      className=" backdrop-blur-xm  shadow-lg p-2  shadow-xl " 
      role="region" 
      aria-labelledby={`order-${order.orderId}`}
      style={{ height: 'auto', minHeight: '80px' }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 id={`order-${order.orderId}`} className="text-sm font-bold text-amber-600">
          {order.orderId}
        </h2>
        <div className={`text-xs px-1 py-1 rounded ${getStatusColor(order.status)} inline-block`}>
          {order.status}
        </div>
      </div>
      <div className="text-xs text-white flex justify-between">
        <p className='font-Dancing text-white'>{order.timeSpent} </p>
        <p>{order.items} items</p>
      </div>
    </div>
  );
};

export default OrderStatusCard;
