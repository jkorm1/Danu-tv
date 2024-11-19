import React from 'react'
import { Menu, Bell } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cards } from './cardsData'

export default function Header() {
  const totalOrders = cards.length;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-10 mb-7">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
            <Menu className="h-5 w-5" strokeWidth={2} />
            <h1 className="text-xl font-bold text-primary">Bell's Kitchen</h1>
          </div>
     
          <div className="relative">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            {totalOrders > 0 && (
              <div className="absolute -top-1 -right-1">
                <Badge 
                  variant="destructive" 
                  className="absolute -top-0 -right-[0.1rem] h-5 w-5 flex items-center justify-center p-2 rounded-3xl text-xs font-normal"
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