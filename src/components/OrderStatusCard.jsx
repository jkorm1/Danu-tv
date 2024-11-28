import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Clock } from 'lucide-react';

const OrderStatusCard = ({ order }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Ready':
        return 'text-green-500 bg-green-50';
      case 'On Cook':
        return 'text-red-900 bg-amber-50';
      case 'Pending':
        return 'text-blue-500 bg-blue-50';
      default:
        return 'text-gray-500 bg-gray-50';
    }
  };

  return (
    <Card className="w-full rounded-xl shadow-none">
      <CardHeader className="p-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-sm">{order.orderId}</CardTitle>
          <Badge
            variant="secondary"
            className={cn(
              getStatusColor(order.status),
              "font-medium rounded-full tracking-wide text-[10px] px-2 py-0.5"
            )}
          >
            {order.status}
          </Badge>
        </div>
        <hr className="my-1.5" />
        <div className="flex items-center justify-center space-x-1.5">
          <span><Clock className="w-3.5 h-3.5" strokeWidth={1} /></span>
          <CardDescription className="text-xs">{order.timeSpent}</CardDescription>
        </div>
        <hr className="mt-1.5" />
      </CardHeader>
      <CardContent className="p-2 pt-1">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xs">{order.items} items</CardTitle>
          <CardTitle className="text-xs text-blue-700">
            Table {order.table}
          </CardTitle>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderStatusCard;
