import React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { themeColors, transitions } from "@/lib/theme"
import Image from "next/image"

interface TokenSelectorProps {
  isDarkMode: boolean
  tokenName?: string
  chainName?: string
  onSelect?: () => void
  className?: string
}

export function TokenSelector({ 
  isDarkMode, 
  tokenName = "Token", 
  chainName = "on Chain", 
  onSelect,
  className 
}: TokenSelectorProps) {
  const themeClasses = isDarkMode ? themeColors.dark : themeColors.light

  return (
    <Button
      onClick={onSelect}
      variant="secondary"
      className={cn(
        isDarkMode ? themeClasses.text : "text-[#4A4B4D]",
        "rounded-2xl px-2 sm:px-4 h-[46px] md:w-[180px] md:h-[76px] py-2 flex items-center space-x-1 sm:space-x-2 shadow-sm",
        isDarkMode ? "bg-[#17181a] hover:bg-[#1d1e20]" : "bg-white hover:bg-[#00B3B3]/10",
        transitions.default,
        className
      )}
    >
      <Image
        src={isDarkMode ? "/assets/swap/circle.svg" : "/assets/swap/circles-light.svg"}
        alt="Token icon"
        width={24}
        height={24}
        className="w-6 h-6 md:w-12 md:h-12 mr-4"
      />
      <div className="text-left min-w-0">
        <div className="md:text-lg sm:text-xs font-manrope font-medium truncate">{tokenName}</div>
        <div className={cn("text-xs sm:text-xss font-manrope", themeClasses.textSecondary, "truncate")}>{chainName}</div>
      </div>
    </Button>
  )
} 