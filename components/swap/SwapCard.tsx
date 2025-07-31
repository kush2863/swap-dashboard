import React, { useMemo } from "react"
import { Button } from "@/components/ui/button"
import { TokenInput } from "./TokenInput"
import { TokenIcon } from "./TokenIcon"
import { Settings, RefreshCw, ArrowUpDown, ChevronDown, Menu, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"
import { themeColors, transitions } from "@/lib/theme"
import { useWallet } from "@/hooks/useWallet"
import { SwapCardProps } from "@/lib/types"
import { SUPPORTED_TOKENS } from "@/lib/constants"
import Image from "next/image"

export function SwapCard({ isDarkMode, activeTab, onSwapDirection, onSwap }: SwapCardProps) {
  const themeClasses = isDarkMode ? themeColors.dark : themeColors.light
  const { isWalletConnected, walletAddress, connectWallet } = useWallet()

  // Memoize the token icons to prevent unnecessary re-renders
  const tokenIcons = useMemo(() => (
    SUPPORTED_TOKENS.map((token, index) => (
      <div key={`${token}-${index}`}>
        <TokenIcon
          token={token}
          size={20}
          className="flex-shrink-0 md:hidden"
        />
        <TokenIcon
          token={token}
          size={28}
          className="flex-shrink-0 hidden md:block lg:hidden"
        />
        <TokenIcon
          token={token}
          size={32}
          className="flex-shrink-0 hidden lg:block"
        />
      </div>
    ))
  ), [])

  return (
    <div className={cn(
      themeClasses.cardBg,
      "rounded-b-2xl rounded-r-2xl p-3 sm:p-4 md:p-6 w-full",
      themeClasses.border
    )}>
      {/* Header */}
      <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
        <h2 className={cn(themeClasses.text, "text-sm sm:text-base md:text-lg font-manrope font-semibold")}>
          {activeTab === "same-chain" ? "Same-chain Swap" : "Cross-chain Swap"}
        </h2>
        <div className="flex items-center space-x-2 sm:space-x-3">
          <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 text-[#2ED3B7]" />
          <Image
            src="/assets/swap/settings-03.svg"
            alt="Settings"
            width={20}
            height={20}
            className={cn("w-4 h-4 sm:w-5 sm:h-5", isDarkMode ? themeClasses.textSecondary : "text-[#4A4B4D]")}
          />
        </div>
      </div>

      {/* Token Icons */}
      <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6 px-1 sm:px-2">
        <div className="flex items-center space-x-1 sm:space-x-2 md:gap-4 lg:gap-7 gap-2 overflow-x-auto">
          {tokenIcons}
        </div>
      </div>

      {/* Pay From Section */}
      <div className="md:-mb-6 lg:-mb-8">
        <TokenInput
          isDarkMode={isDarkMode}
          label="Pay from"
          placeholder="0.00"
          tokenName="Token"
          chainName="on Chain"
          onConnectWallet={connectWallet}
          isWalletConnected={isWalletConnected}
          walletAddress={walletAddress}
        />
      </div>
      
      {/* Swap Direction Button */}
      <div className="flex justify-center -mt-4 md:-mt-5 lg:relative">
        <Button
          variant="outline"
          size="sm"
          onClick={onSwapDirection}
          className={cn(
            "border h-[36px] w-[36px] md:h-[50px] md:w-[50px] lg:h-[60px] lg:w-[60px] z-[9] lg:absolute lg:-top-1",
            isDarkMode ? "bg-[#17181a]" : "bg-white border-[#FCFDFE]",
            themeClasses.borderSecondary,
            "rounded-xl lg:rounded-2xl p-2",
            transitions.default
          )}
        >
          <ArrowUpDown className={cn("w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 font-bold", isDarkMode ? themeClasses.textSecondary : "text-[#2ED3B7]")} />
        </Button>
      </div>

      {/* Receive To Section */}
      <div className="md:mt-5 lg:mt-7"> 
        <TokenInput
          isDarkMode={isDarkMode}
          label="Receive to"
          placeholder="0.00"
          tokenName="Token"
          chainName="on Chain"
          onConnectWallet={connectWallet}
          isWalletConnected={isWalletConnected}
          walletAddress={walletAddress}
        />
      </div>
      
      {/* Swap Button */}
      <Button 
        variant="primary" 
        size="lg"
        onClick={onSwap}
        disabled={!isWalletConnected}
        className={cn(
          "w-full py-2 sm:py-3 md:py-4 hover:bg-[#00B3B3]/30 hover:text-[#00FFF0] rounded-[12px] md:rounded-[16px] text-sm sm:text-base md:text-lg border border-[#00FFF0] font-manrope font-bold mb-3 sm:mb-4 shadow-[0px_10px_8px_0px_rgba(0,255,255,0.1),0px_4px_8px_0px_rgba(0,0,0,0.15),0px_5px_1px_0px_rgba(14,147,132,1)]",
          isDarkMode ? "" : "bg-white text-[#2ED3B7] border-b-0 border hover:bg-[#0E9384]/10",
          !isWalletConnected && "opacity-50 cursor-not-allowed"
        )}
      >
        {isWalletConnected ? "Swap now" : "Connect wallet to swap"}
      </Button>
    </div>
  )
} 