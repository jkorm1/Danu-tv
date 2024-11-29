import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Clock, Activity } from "lucide-react";

const OrderStatusCard = ({ order }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'on process':
        return 'bg-amber-100/80 text-amber-800 pointer-events-none';
      case 'pending':
      default:
        return 'bg-blue-100/80 text-blue-800 pointer-events-none';
    }
  };

  return (
    <Card className={cn(
      "w-full bg-white/90 transition-all duration-500",
      "hover:shadow-md",
      order.status === "On Process" && "animate-pulse-slow",
      // Animation for cards moving out
      "data-[moving=true]:animate-slide-out-fade",
      "data-[moving=true]:transform",
      "data-[moving=true]:transition-all",
      "data-[moving=true]:duration-700"
    )}>
      <CardContent className="p-1.5">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center justify-between w-full">
            <div className="text-[9px] font-bold text-gray-800/90">
              {order.orderId}
            </div>
            
            <div className={`${getStatusColor(order.status)} text-[8px] px-1 py-0.5 rounded-sm flex items-center gap-0.5`}>
              <Activity className="h-1.5 w-1.5" />
              <span>{order.status}</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-full border-t border-gray-300 my-0.5" />
            <div className="flex items-center gap-0.5">
              <Clock className="h-1.5 w-1.5 text-gray-600/90" />
              <div className="text-[8px] text-gray-600/90">
                {order.timeSpent}
              </div>
            </div>
            <div className="w-full border-t border-gray-300 my-0.5" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderStatusCard;
