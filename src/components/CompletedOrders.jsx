
import React from 'react'
import { ChefHat, Clock, Package } from 'lucide-react'
import { cn } from "@/lib/utils"

export default function CompletedOrdersSidepanel({ orders = [] }) {
  if (!orders || orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-gray-50 p-4">
        <Package className="w-12 h-12 text-gray-400 mb-4" />
        <p className="text-sm text-gray-500 text-center">No completed orders at the moment.</p>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 h-full flex flex-col">
      <div className="flex-1 overflow-y-auto">
        {orders.map((order) => (
          <div
            key={order.orderId}
            className={cn(
              "bg-white p-4 border-b border-gray-200 last:border-b-0",
              "hover:bg-gray-50 transition-colors duration-150 ease-in-out"
            )}
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-medium text-gray-900">{order.orderId}</h3>
              <span className="text-center rounded-full text-xs font-bold text-green-400">
                . . . .
              </span>

            </div>

            <div className="flex flex-row justify-between">
              <div className="flex items-center text-gray-600 mb-2">
                <p className="text-xs font-medium text-blue-700">{order.orderType}</p>
              </div>

              <div className="flex items-center text-gray-600 mb-2">
                <ChefHat className="h-5 w-5" strokeWidth={1.5}></ChefHat>
              </div>
            </div>



          </div>
        ))}
      </div>
    </div>
  )
}