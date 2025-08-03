import React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
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
  return (
    <Button
      onClick={onSelect}
      className={cn(
        "rounded-2xl md:p-[16px] sm:px-4 h-16 sm:h-14 md:h-[79px] md:w-[170px] ",
        "flex items-center space-x-2 shadow-sm",
        "transition-all duration-200",
        isDarkMode 
          ? "bg-[#17181A] border-white/20 text-global-5 hover:bg-global-3" 
          : "bg-[#F2F9F9] border-gray-300/50 text-[##4A4B4D] hover:bg-[#E8F5F5]",
        className
      )}
    >
      <div className="flex items-center md:-ml-6">
      <Image
        src={isDarkMode ? "/assets/swap/circle.svg" : "/assets/swap/circles-light.svg"}
        alt="Token icon"
        width={24}
        height={24}
        className="mr-2 md:mr-10 block md:hidden"
      />
    
      <Image
        src={isDarkMode ? "/assets/swap/circle.svg" : "/assets/swap/circles-light.svg"}
        alt="Token icon"
        width={48}
        height={48}
        className="mr-2 md:mr-6 hidden md:block"
      />
      <div className="text-left min-w-0 md:-ml-4">
        <div className={cn(
          "text-xs sm:text-sm md:text-base font-manrope font-bold truncate",
          isDarkMode ? "text-white/80" : "text-[#4A4B4D]"
        )}>{tokenName}</div>
        <div className={cn(
          "text-xs font-manrope truncate",
          isDarkMode ? "text-white" : "text-[#121518CC]"
        )}>{chainName}</div>
      </div>
      </div>
    </Button>
  )
} 