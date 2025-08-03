import React, { useState, useEffect, useCallback, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { TokenSelector } from "./TokenSelector"
import { cn } from "@/lib/utils"
import { themeColors, transitions } from "@/lib/theme"
import { TokenInputProps } from "@/lib/types"
import { WALLET_CONSTANTS, API_ENDPOINTS, ERROR_MESSAGES } from "@/lib/constants"

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
  const [balance, setBalance] = useState<string>(WALLET_CONSTANTS.DEFAULT_BALANCE)

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setInputValue(newValue)
    onChange?.(newValue)
  }, [onChange])

  const fetchBalance = useCallback(async (address: string) => {
    if (typeof window !== 'undefined' && window.ethereum && address) {
      try {
        const balance = await window.ethereum.request({
          method: API_ENDPOINTS.GET_BALANCE,
          params: [address, 'latest']
        })
        
        // Convert from wei to ETH (1 ETH = 10^18 wei)
        const balanceInEth = (parseInt(balance, 16) / Math.pow(10, WALLET_CONSTANTS.ETH_DECIMALS)).toFixed(4)
        setBalance(balanceInEth)
      } catch (error) {
        console.error(ERROR_MESSAGES.BALANCE_FETCH_FAILED, error)
        setBalance(WALLET_CONSTANTS.DEFAULT_BALANCE)
      }
    }
  }, [])

  useEffect(() => {
    if (isWalletConnected && walletAddress) {
      fetchBalance(walletAddress)
    } else {
      setBalance(WALLET_CONSTANTS.DEFAULT_BALANCE)
    }
  }, [isWalletConnected, walletAddress, fetchBalance])

  const handleConnectWallet = useCallback(async () => {
    if (onConnectWallet) {
      onConnectWallet()
    } else {
      // Default wallet connection logic
      if (typeof window !== 'undefined' && window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ 
            method: API_ENDPOINTS.ETHEREUM_RPC 
          })
          console.log('Connected accounts:', accounts)
        } catch (error) {
          console.error(ERROR_MESSAGES.CONNECTION_FAILED, error)
        }
      } else {
        alert(ERROR_MESSAGES.WALLET_NOT_FOUND)
      }
    }
  }, [onConnectWallet])

  const formatAddress = useCallback((address: string) => {
    if (!address) return ""
    return `${address.slice(0, WALLET_CONSTANTS.ADDRESS_PREFIX_LENGTH)}...${address.slice(-WALLET_CONSTANTS.ADDRESS_SUFFIX_LENGTH)}`
  }, [])

  // Memoize the balance display text
  const balanceDisplay = useMemo(() => {
    return isWalletConnected ? `Balance ${balance} ETH` : "Balance -"
  }, [isWalletConnected, balance])

  return (
    <div className={cn(
      "mb-3 sm:mb-4 md:w-[488px] md:h-[136px] box-content md:py-[16px] md:px-[24px] p-3 sm:p-4 rounded-xl sm:rounded-2xl border relative",
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
        "rounded-lg sm:rounded-xl p-3 sm:p-4 relative",
        themeClasses.borderSecondary
      )}>
        <div className="flex items-center justify-between relative">
          <div className="flex-1 min-w-0 md:-ml-4 ">
            <input
              type="text"
              placeholder={placeholder}
              value={inputValue}
              onChange={handleInputChange}
              className={cn(
                "bg-transparent",
                "text-lg sm:text-2xl font-manrope font-normal w-full outline-none",
                isDarkMode ? "placeholder:text-white/20" : "placeholder:text-[#777879]"
              )}
            />
            
            {/* TokenSelector positioned to avoid border clipping */}
            <div className="absolute -top-7 md:-top-10 right-0 transform translate-x-1">
              <TokenSelector
                isDarkMode={isDarkMode}
                tokenName={tokenName}
                chainName={chainName}
                onSelect={onTokenSelect}
              />
            </div>
         
            <hr className={cn(
              "my-2 mt-3 md:mt-3 md:w-[300px] w-40",
              "border-global-4"
            )} />
            <div className="flex items-center justify-between mt-5    ">
              <span className={cn(themeClasses.textSecondary, "text-xs sm:text-sm font-manrope")}>USD 0</span>
              <span className={cn(themeClasses.textSecondary, "text-xs sm:text-sm font-manrope")}>
                {balanceDisplay}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 