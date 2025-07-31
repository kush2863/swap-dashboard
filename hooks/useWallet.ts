import { useState, useEffect, useCallback } from 'react'
import { EthereumProvider, WalletState } from '@/lib/types'
import { WALLET_CONSTANTS, API_ENDPOINTS, ERROR_MESSAGES } from '@/lib/constants'

// Add ethereum type definition
declare global {
  interface Window {
    ethereum?: EthereumProvider
  }
}

export function useWallet() {
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")

  const connectWallet = useCallback(async () => {
    if (typeof window !== 'undefined' && window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ 
          method: API_ENDPOINTS.ETHEREUM_RPC 
        })
        if (accounts && accounts.length > 0) {
          setWalletAddress(accounts[0])
          setIsWalletConnected(true)
          console.log('Wallet connected:', accounts[0])
        }
      } catch (error) {
        console.error(ERROR_MESSAGES.CONNECTION_FAILED, error)
      }
    } else {
      alert(ERROR_MESSAGES.WALLET_NOT_FOUND)
    }
  }, [])

  const disconnectWallet = useCallback(() => {
    setWalletAddress("")
    setIsWalletConnected(false)
  }, [])

  const formatAddress = useCallback((address: string) => {
    if (!address) return ""
    return `${address.slice(0, WALLET_CONSTANTS.ADDRESS_PREFIX_LENGTH)}...${address.slice(-WALLET_CONSTANTS.ADDRESS_SUFFIX_LENGTH)}`
  }, [])

  // Listen for account changes
  useEffect(() => {
    if (typeof window !== 'undefined' && window.ethereum) {
      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length === 0) {
          // User disconnected wallet
          setIsWalletConnected(false)
          setWalletAddress("")
        } else {
          // User switched accounts
          setWalletAddress(accounts[0])
          setIsWalletConnected(true)
        }
      }

      window.ethereum.on('accountsChanged', handleAccountsChanged)

      return () => {
        window.ethereum?.removeListener('accountsChanged', handleAccountsChanged)
      }
    }
  }, [])

  return {
    isWalletConnected,
    walletAddress,
    connectWallet,
    disconnectWallet,
    formatAddress
  }
} 