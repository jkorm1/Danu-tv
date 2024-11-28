import React, { useState, useEffect } from 'react';
import { ChefHat, UtensilsCrossed, Cloud } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-12 bg-gray-800/95 shadow-md z-50">
      <div className="h-full mx-8 flex items-center justify-between">
        {/* Left section - Brand */}
        <div className="flex items-center gap-4">
          <ChefHat className="h-6 w-6 text-white" />
          <h1 className="text-xl font-semibold tracking-wider px-1 text-white">Bell's Kitchen</h1>
          <UtensilsCrossed className="h-6 w-6 text-white" />
        </div>

        {/* Center section - Current Time */}
        <div className="flex items-center text-lg font-medium tracking-wide text-white">
          {new Date().toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit', 
            hour12: false 
          })}
        </div>

        {/* Right section - Enhanced glass effect */}
        <div className="flex items-center">
          <div className="bg-white/10 backdrop-blur-md rounded-lg 
                        shadow-[0_4px_15px_-1px_rgba(0,0,0,0.1)]
                        border border-white/20 overflow-hidden">
            <div className="flex items-center divide-x divide-white/10">
              {/* Date section */}
              <div className="px-4 py-1.5 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"/>
                <div className="text-sm text-white/90 tracking-wide relative z-10">
                  {new Date().toLocaleDateString('en-US', { 
                    weekday: 'long',
                    month: 'long', 
                    day: 'numeric'
                  })}
                </div>
              </div>

              {/* Weather section */}
              <div className="px-4 py-1.5 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"/>
                <div className="flex items-center gap-2 relative z-10">
                  <Cloud className="h-4 w-4 text-white/90" />
                  <span className="text-sm text-white/90">24°C</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}