import React from 'react'
import { Clock, Flame, ChefHat, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import OrderStatusCard from './OrderStatusCard'
import { cards, completedOrders } from './cardsData'

// Add this CSS to your index.css or create a new animation class
`
@keyframes cooking {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
}

.cooking-animation {
  animation: cooking 2s infinite ease-in-out;
}
`

export default function OrderStatusBoard() {
  const totalOrders = cards.length + completedOrders.length
  const cookingOrders = cards.filter(order => order.status === 'Cooking').length
  const completedOrdersCount = completedOrders.length

  return (
    <div className="min-h-screen w-full bg-gray-50 p-4">
      <div className="flex flex-col space-y-3">
        <div className="flex flex-row gap-4">
          <Card className="flex-1 bg-blue-50/60">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalOrders}</div>
              <p className="text-xs text-muted-foreground">For today</p>
            </CardContent>
          </Card>
          <Card className="flex-1 bg-amber-50/60">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cooking</CardTitle>
              <div className="animate-pulse">
                <Flame className="h-5 w-5 text-orange-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{cookingOrders}</div>
              <p className="text-xs text-muted-foreground">Orders in progress</p>
            </CardContent>
          </Card>
          <Card className="flex-1 bg-green-50/60">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{completedOrdersCount}</div>
              <p className="text-xs text-muted-foreground">Orders finished</p>
            </CardContent>
          </Card>
        </div>

        <Card className="flex-1">
          <CardHeader className="flex flex-row justify-between p-3">
            <div className="flex flex-row items-center space-x-4">
              <CardTitle className="uppercase tracking-wide">Up-Next</CardTitle>
              <p className="text-sm text-muted-foreground">
                {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
              <div className="text-sm border rounded-md px-2 py-1 text-muted-foreground">
                {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-2 px-3">
            <div className="grid grid-cols-4 gap-3">
              {cards.map(order => (
                <OrderStatusCard 
                  key={order.orderId} 
                  order={order}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}