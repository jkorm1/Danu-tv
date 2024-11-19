import React from 'react'
import { Clock, Utensils, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import OrderStatusCard from './OrderStatusCard'
import CompletedOrders from './CompletedOrders'
import { cards, completedOrders } from './cardsData'

export default function OrderStatusBoard() {
  const totalOrders = cards.length + completedOrders.length
  const cookingOrders = cards.filter(order => order.status === 'Cooking').length
  const completedOrdersCount = completedOrders.length

  return (
    <div className="min-h-screen w-full bg-gray-50 p-6 pt-20">
      <div className="flex flex-col space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalOrders}</div>
              <p className="text-xs text-muted-foreground">For today</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cooking</CardTitle>
              <Utensils className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{cookingOrders}</div>
              <p className="text-xs text-muted-foreground">Orders in progress</p>
            </CardContent>
          </Card>
          <Card>
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

        <div className="flex flex-col md:flex-row w-full space-y-6 md:space-y-0 md:space-x-6">
  
          <Card className="flex-1">
            <CardHeader className="flex flex-row justify-between">
              <div className="flex flex-col">
                <CardTitle>Orders List</CardTitle>
                <div className="flex items-center space-x-4 mt-1">
                  <p className="text-sm text-muted-foreground">{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </div>
              </div>

              <div className="text-sm border w-auto rounded-md px-2 py-1 text-muted-foreground">
                {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}
              </div>
            </CardHeader>


            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cards.map(order => (
                  <OrderStatusCard key={order.orderId} order={order} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}