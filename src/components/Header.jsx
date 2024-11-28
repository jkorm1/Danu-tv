import React from 'react'
import { ChefHat,UtensilsCrossed, Bell, Utensils,  } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cards } from './cardsData'

export default function Header() {
  const totalOrders = cards.length;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ChefHat className="h-5 w-5 text-primary" />
            <h1 className="text-xl font-semibold tracking-wide">Bell's Kitchen</h1>
            <UtensilsCrossed className="h-5 w-5 text-primary" />
          </div>
     
          <div className="relative">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Notifications</span>
            </Button>
            {totalOrders > 0 && (
              <div className="absolute -top-1 -right-1">
                <Badge 
                  variant="destructive" 
                  className="h-4 w-4 flex items-center justify-center p-0 rounded-full text-[10px] font-normal"
                >
                  {totalOrders}
                </Badge>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}