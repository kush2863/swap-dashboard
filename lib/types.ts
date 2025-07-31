// Ethereum types
export interface EthereumProvider {
  request: (args: { method: string; params?: any[] }) => Promise<any>
  on: (event: string, callback: (params: any) => void) => void
  removeListener: (event: string, callback: (params: any) => void) => void
}

// Wallet types
export interface WalletState {
  isWalletConnected: boolean
  walletAddress: string
}

// Token types
export type TokenType = 
  | "APTOS" | "ZKSYNC" | "BSC" | "polygon" | "arbitrum" 
  | "avalanche" | "ethereum" | "solana" | "sui"

export interface TokenInfo {
  name: string
  symbol: string
  icon: string
  decimals: number
}

// Swap types
export type SwapType = "same-chain" | "cross-chain"

export interface SwapDetails {
  networkFee: string
  slippageTolerance: string
  minimumReceived: string
  priceImpact: string
}

// Theme types
export type ThemeMode = "dark" | "light"

// Navigation types
export interface NavigationItem {
  name: string
  href: string
  isActive: boolean
  icon: string
}

// Component props types
export interface BaseComponentProps {
  isDarkMode: boolean
  className?: string
}

export interface TokenInputProps extends BaseComponentProps {
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

export interface SwapCardProps extends BaseComponentProps {
  activeTab: SwapType
  onSwapDirection?: () => void
  onSwap?: () => void
}

export interface TabSelectorProps extends BaseComponentProps {
  activeTab: SwapType
  onTabChange: (tab: SwapType) => void
} 