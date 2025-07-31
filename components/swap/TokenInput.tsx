import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { TokenSelector } from "./TokenSelector"
import { cn } from "@/lib/utils"
import { themeColors, transitions } from "@/lib/theme"

// Add ethereum type definition
declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: any[] }) => Promise<any>
      on: (event: string, callback: (params: any) => void) => void
      removeListener: (event: string, callback: (params: any) => void) => void
    }
  }
}

interface TokenInputProps {
  isDarkMode: boolean
  label: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  tokenName?: string
  chainName?: string
  onTokenSelect?: () => void
  onConnectWallet?: () => void
  showConnectWallet?: boolean
  isWalletConnected?: boolean
  walletAddress?: string
}

export function TokenInput({
  isDarkMode,
  label,
  placeholder = "0.00",
  value = "",
  onChange,
  tokenName = "Token",
  chainName = "on Chain",
  onTokenSelect,
  onConnectWallet,
  showConnectWallet = true,
  isWalletConnected = false,
  walletAddress = ""
}: TokenInputProps) {
  const themeClasses = isDarkMode ? themeColors.dark : themeColors.light
  const [inputValue, setInputValue] = useState(value)
  const [balance, setBalance] = useState<string>("0.00")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setInputValue(newValue)
    onChange?.(newValue)
  }

  const fetchBalance = async (address: string) => {
    if (typeof window !== 'undefined' && window.ethereum && address) {
      try {
        const balance = await window.ethereum.request({
          method: 'eth_getBalance',
          params: [address, 'latest']
        })
        
        // Convert from wei to ETH (1 ETH = 10^18 wei)
        const balanceInEth = (parseInt(balance, 16) / Math.pow(10, 18)).toFixed(4)
        setBalance(balanceInEth)
      } catch (error) {
        console.error('Error fetching balance:', error)
        setBalance("0.00")
      }
    }
  }

  useEffect(() => {
    if (isWalletConnected && walletAddress) {
      fetchBalance(walletAddress)
    } else {
      setBalance("0.00")
    }
  }, [isWalletConnected, walletAddress])

  const handleConnectWallet = async () => {
    if (onConnectWallet) {
      onConnectWallet()
    } else {
      // Default wallet connection logic
      if (typeof window !== 'undefined' && window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ 
            method: 'eth_requestAccounts' 
          })
          console.log('Connected accounts:', accounts)
        } catch (error) {
          console.error('Error connecting wallet:', error)
        }
      } else {
        alert('Please install MetaMask or another Web3 wallet')
      }
    }
  }

  const formatAddress = (address: string) => {
    if (!address) return ""
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  return (
    <div className={cn(
      "mb-3 sm:mb-4 w-full p-3 sm:p-4 rounded-xl sm:rounded-2xl border",
      isDarkMode 
        ? "bg-[#111213] border-white/20" 
        : "bg-[#F2F9F9] border-gray-300/50"
    )}>
      <div className="flex items-center gap-2 mb-2">
        <span className={cn(themeClasses.textSecondary, "text-xs sm:text-sm font-manrope")}>{label}</span>
        {showConnectWallet && (
          <button
            onClick={handleConnectWallet}
            className={cn(
              "text-xs sm:text-sm font-manrope font-bold hover:underline",
              "text-[#2ED3B7]",
              transitions.default
            )}
          >
            {isWalletConnected ? formatAddress(walletAddress) : "Connect Wallet"}
          </button>
        )}
      </div>
      <div className={cn(
        "rounded-lg sm:rounded-xl p-3 sm:p-4 relative overflow-hidden",
        "",
        themeClasses.borderSecondary
      )}>
        {/* Circular border pattern overlay */}
        {/* <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-2 right-2 w-4 h-4 rounded-full border border-dashed border-white/20"></div>
        </div> */}
        
        <div className="flex items-center justify-between relative">
          <div className="flex-1 min-w-0">
            <input
              type="text"
              placeholder={placeholder}
              value={inputValue}
              onChange={handleInputChange}
              className={cn(
                "bg-transparent",
                themeClasses.text,
                "text-lg sm:text-2xl font-manrope font-semibold w-full outline-none",
                "placeholder:text-gray-600 placeholder:dark:text-gray-400"
              )}
            />
            <div className="ml-2 sm:ml-7 flex-shrink-0 absolute -top-2 md:-top-3 right-0 h-[200px] ">
            <TokenSelector
              isDarkMode={isDarkMode}
              tokenName={tokenName}
              chainName={chainName}
              onSelect={onTokenSelect}
            />
          </div>
            <hr className="my-2 border-white/10 mt-8  md:mt-10 md:w-[420px] w-40"  />
            <div className="flex items-center justify-between mt-10 px-5">
              <span className={cn(themeClasses.textSecondary, "text-xs sm:text-sm font-manrope")}>USD 0</span>
              <span className={cn(themeClasses.textSecondary, "text-xs sm:text-sm font-manrope")}>
                {isWalletConnected ? `Balance ${balance} ETH` : "Balance -"}
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
} 