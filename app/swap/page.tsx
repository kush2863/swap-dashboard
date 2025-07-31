"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { TabSelector } from "@/components/swap/TabSelector"
import { SwapCard } from "@/components/swap/SwapCard"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { themeColors } from "@/lib/theme"
import { useTheme } from "@/contexts/ThemeContext"

export default function SwapPage() {
  const [activeTab, setActiveTab] = useState("same-chain")
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const { isDarkMode } = useTheme()

  const themeClasses = isDarkMode ? themeColors.dark : themeColors.light

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
    <div className={cn("min-h-screen", themeClasses.background, themeClasses.text)}>
      {/* Main Content */}
      <main className="flex justify-center py-4 sm:py-8 px-2 sm:px-4">
        <div className="w-full max-w-[380px] md:max-w-[750px] flex flex-col items-center">
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
            activeTab={activeTab}
            onSwapDirection={handleSwapDirection}
            onSwap={handleSwap}
          />
</div>
          {/* Additional Details */}
          <div className="mt-3 sm:mt-4 w-full">
            <Button
              variant="ghost"
              onClick={toggleDetails}
              className={cn(
                "w-full",
                themeClasses.cardBg,
                themeClasses.textSecondary,
                "border",
                themeClasses.border,
                "rounded-lg py-2 sm:py-3 flex items-center justify-between",
                "hover:bg-opacity-80 transition-colors duration-200",
                isDarkMode 
                  ? "hover:bg-[#17181a]" 
                  : "hover:bg-gray-100 hover:text-[#2ED3B7]"
              )}
            >
              <span className="text-sm sm:text-base font-manrope">Additional details</span>
              <ChevronDown className={cn(
                "w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200", 
                isDarkMode ? themeClasses.textSecondary : "text-[#4A4B4D]",
                isDetailsOpen ? "rotate-180" : ""
              )} />
            </Button>
            
            {/* Collapsible Content */}
            {isDetailsOpen && (
              <div className={cn(
                "mt-2 p-3 sm:p-4 rounded-lg border",
                themeClasses.cardBg,
                themeClasses.border,
                "animate-in slide-in-from-top-2 duration-200"
              )}>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className={cn(themeClasses.textSecondary, "text-xs sm:text-sm")}>Network Fee</span>
                    <span className={cn(themeClasses.text, "text-xs sm:text-sm font-medium")}>$0.50</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={cn(themeClasses.textSecondary, "text-xs sm:text-sm")}>Slippage Tolerance</span>
                    <span className={cn(themeClasses.text, "text-xs sm:text-sm font-medium")}>0.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={cn(themeClasses.textSecondary, "text-xs sm:text-sm")}>Minimum Received</span>
                    <span className={cn(themeClasses.text, "text-xs sm:text-sm font-medium")}>0.995 ETH</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={cn(themeClasses.textSecondary, "text-xs sm:text-sm")}>Price Impact</span>
                    <span className={cn(themeClasses.text, "text-xs sm:text-sm font-medium")}>0.1%</span>
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
          <div className="w-2 h-2 bg-[#66bb6a] rounded-full"></div>
          <span className={cn(themeClasses.textSecondary, "text-xs sm:text-sm")}>Online</span>
        </div>
      </div>
    </div>
  )
} 