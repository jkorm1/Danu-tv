import React, { useState, useEffect } from 'react';
import { Clock, Flame, ChefHat, CheckCircle, ListOrdered, Utensils, Loader2, PizzaIcon, CookingPot } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import OrderStatusCard from './OrderStatusCard'
import { cards as initialCards } from './cardsData'
import { ClipboardList } from 'lucide-react'
import axios from 'axios'

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

export default function OrderStatusBoard({ onOrderComplete }) {
  const [cards, setCards] = useState([]);
  const [movingCards, setMovingCards] = useState(new Set());

  useEffect(() => {
    // Fetch orders when component mounts
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://192.168.12.163:8002/screen_display/fetch_tv_status', {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
          }
        });
        
        setCards(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
    
    // Set up polling interval
    const interval = setInterval(fetchOrders, 10000);
    return () => clearInterval(interval);
  }, []);

  const processOrders = cards.filter(order => order.status === "On Process");
  const pendingOrders = cards.filter(order => order.status === "Pending");

  const allOrders = [...processOrders, ...pendingOrders];

  return (
    <div className="min-h-screen w-full bg-gray-50 p-2 mt-12 overflow-hidden">
      <div className="flex flex-col h-[calc(100vh-4rem)]">
        <div className="grid grid-cols-3 gap-2 h-20">
          <Card className="bg-blue-50/60">
            <CardHeader className="flex flex-row items-center justify-between p-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <ClipboardList className="h-4 w-4 text-muted-foreground text-blue-600" />
            </CardHeader>
            <CardContent className="pt-0 px-2 pb-2">
              <div className="text-xl font-bold">{allOrders.length}</div>
            </CardContent>
          </Card>

          <Card className="bg-amber-50/60">
            <CardHeader className="flex flex-row items-center justify-between p-2">
              <CardTitle className="text-sm font-medium">On Process</CardTitle>
              <div className="relative">
                <CookingPot className="h-4 w-4 text-amber-600 animate-spin [animation-duration:3s]" />
              </div>
            </CardHeader>
            <CardContent className="pt-0 px-2 pb-2">
              <div className="text-xl font-bold">{processOrders.length}</div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50/60">
            <CardHeader className="flex flex-row items-center justify-between p-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground text-blue-600 animate-pulse" />
            </CardHeader>
            <CardContent className="pt-0 px-2 pb-2">
              <div className="text-xl font-bold">{pendingOrders.length}</div>
            </CardContent>
          </Card>
        </div>

        <Card className="flex-1 mt-2 justify-between p-2 bg-black/5 backdrop-blur-sm">
          <CardHeader className="flex flex-row justify-between p-2">
            <div className="flex items-center gap-2">
              <ListOrdered className="h-5 w-5 text-blue-600" />
              <CardTitle className="tracking-wide ">Up-Next</CardTitle>
            </div>
          </CardHeader>

          <CardContent className="p-2">
            <div className="grid grid-cols-5 gap-2">
              {allOrders.map(order => (
                <OrderStatusCard 
                  key={order.orderId} 
                  order={order}
                  data-moving={movingCards.has(order.orderId)}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}