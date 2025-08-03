"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { TabSelector } from "@/components/swap/TabSelector"
import { SwapCard } from "@/components/swap/SwapCard"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/contexts/ThemeContext"
import { SwapType } from "@/lib/types"

export default function SwapPage() {
  const [activeTab, setActiveTab] = useState("same-chain")
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const { isDarkMode } = useTheme()

  const handleSwapDirection = () => {
    // Handle swap direction logic
    console.log("Swap direction clicked")
  }

  const handleSwap = () => {
    // Handle swap logic
    console.log("Swap clicked")
  }

  const toggleDetails = () => {
    setIsDetailsOpen(!isDetailsOpen)
  }

  return (
    <div className={cn(
      "min-h-screen mr-8 md:mr-0 px-5 md:px-10",
      isDarkMode ? "bg-global-2 text-global-5" : "bg-white text-[#121518]"
    )}>
      {/* Main Content */}
      <main className="flex md:justify-center py-4 sm:py-8">
        <div className="w-full max-w-[380px] md:max-w-[536px] flex flex-col items-center  ">
          <div className="w-full">
            {/* Tab Buttons */}
            <TabSelector
              isDarkMode={isDarkMode}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />

            {/* Swap Card */}
            <SwapCard
              isDarkMode={isDarkMode}
              activeTab={activeTab as SwapType}
              onSwapDirection={handleSwapDirection}
              onSwap={handleSwap}
            />
          </div>
          
          {/* Additional Details */}
          <div className="mt-3 sm:mt-4 w-full md:w-[579px] md:ml-10">
            <Button
              variant="ghost"
              onClick={toggleDetails}
              className={cn(
                "w-full rounded-lg py-3 sm:py-4 flex items-center justify-between",
                "transition-all duration-200",
                isDarkMode 
                  ? "bg-global-3 text-global-7 border border-global-4 hover:bg-global-4 hover:text-global-5"
                  : "bg-[#F7F8FA] text-[#121518CC] border border-gray-200 hover:bg-[#EBEEF2] hover:text-[#121518]"
              )}
            >
              <span className="text-sm sm:text-base font-manrope">Additional details</span>
              <ChevronDown className={cn(
                "w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200",
                isDarkMode ? "text-global-7" : "text-[#121518CC]",
                isDetailsOpen ? "rotate-180" : ""
              )} />
            </Button>
            
            {/* Collapsible Content */}
            {isDetailsOpen && (
              <div className={cn(
                "mt-2 p-3 sm:p-4 rounded-lg border",
                "animate-in slide-in-from-top-2 duration-200",
                isDarkMode 
                  ? "bg-global-3 border-global-4"
                  : "bg-white border-gray-200"
              )}>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className={cn(
                      "text-xs sm:text-sm",
                      isDarkMode ? "text-global-7" : "text-[#121518CC]"
                    )}>Network Fee</span>
                    <span className={cn(
                      "text-xs sm:text-sm font-medium",
                      isDarkMode ? "text-global-5" : "text-[#121518]"
                    )}>$0.50</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={cn(
                      "text-xs sm:text-sm",
                      isDarkMode ? "text-global-7" : "text-[#121518CC]"
                    )}>Slippage Tolerance</span>
                    <span className={cn(
                      "text-xs sm:text-sm font-medium",
                      isDarkMode ? "text-global-5" : "text-[#121518]"
                    )}>0.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={cn(
                      "text-xs sm:text-sm",
                      isDarkMode ? "text-global-7" : "text-[#121518CC]"
                    )}>Minimum Received</span>
                    <span className={cn(
                      "text-xs sm:text-sm font-medium",
                      isDarkMode ? "text-global-5" : "text-[#121518]"
                    )}>0.995 ETH</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={cn(
                      "text-xs sm:text-sm",
                      isDarkMode ? "text-global-7" : "text-[#121518CC]"
                    )}>Price Impact</span>
                    <span className={cn(
                      "text-xs sm:text-sm font-medium",
                      isDarkMode ? "text-global-5" : "text-[#121518]"
                    )}>0.1%</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer Status */}
      <div className="fixed bottom-2 sm:bottom-4 left-2 sm:left-4">
        <div className="flex items-center space-x-2">
          <div className={cn(
            "w-2 h-2 rounded-full",
            isDarkMode ? "bg-global-1" : "bg-[#2ED3B7]"
          )}></div>
          <span className={cn(
            "text-xs sm:text-sm",
            isDarkMode ? "text-global-7" : "text-[#121518CC]"
          )}>Online</span>
        </div>
      </div>
    </div>
  )
} 