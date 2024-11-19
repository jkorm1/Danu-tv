import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
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
    <Card className="m-2 w-[250px] rounded-xl shadow-none">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle className="text-sm">{order.orderId}</CardTitle>
          <Badge
            variant="secondary"
            className={cn(
              getStatusColor(order.status),
              "font-medium rounded-full tracking-wide"
            )}
          >
            {order.status}
          </Badge>
        </div>
        <hr />
        <div className="flex items-center justify-center mt-2 space-x-2">
          <span><Clock className="w-4 h-4" strokeWidth={1} /></span>
          <CardDescription className="text-xs">{order.timeSpent}</CardDescription>
        </div>
        <hr className="mt-2" />
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          <CardTitle className="text-xs">{order.items} items</CardTitle>
          <CardTitle className="text-xs text-blue-700">
            Table {order.table}
          </CardTitle>
        </div>
        <div className="flex justify-between mt-2">
          <CardTitle className="text-gray-500 text-xs font-normal">
            {order.name}
          </CardTitle>
          <CardTitle className="text-primary text-xs font-medium">
            {order.orderType}
          </CardTitle>
          
        </div>
      </CardContent>
      <CardFooter className="flex relative items-center" />
    </Card>
  );
};

export default OrderStatusCard;
