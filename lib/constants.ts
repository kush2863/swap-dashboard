import { TokenType, SwapType, NavigationItem } from './types'

// Token constants
export const SUPPORTED_TOKENS: TokenType[] = [
  "APTOS", "ZKSYNC", "BSC", "polygon", "arbitrum", 
  "avalanche", "ethereum", "solana", "sui"
]

export const SWAP_TYPES: SwapType[] = ["same-chain", "cross-chain"]

// Navigation constants
export const NAVIGATION_ITEMS: NavigationItem[] = [
  { name: "Swap", href: "#", isActive: true, icon: "swap" },
  { name: "Trade", href: "#", isActive: false, icon: "trade" },
  { name: "Perps", href: "#", isActive: false, icon: "perps" },
  { name: "OPerps", href: "#", isActive: false, icon: "operps" },
  { name: "Refer", href: "#", isActive: false, icon: "users" },
  { name: "Learn", href: "#", isActive: false, icon: "learn" },
]

// Wallet constants
export const WALLET_CONSTANTS = {
  DEFAULT_BALANCE: "0.00",
  ADDRESS_PREFIX_LENGTH: 6,
  ADDRESS_SUFFIX_LENGTH: 4,
  ETH_DECIMALS: 18,
} as const

// UI constants
export const UI_CONSTANTS = {
  LOADING_DELAY: 2000,
  ANIMATION_DURATION: 200,
  TRANSITION_DURATION: 200,
  BORDER_RADIUS: {
    sm: "rounded-lg",
    md: "rounded-xl", 
    lg: "rounded-2xl",
  },
  SPACING: {
    xs: "space-x-1",
    sm: "space-x-2",
    md: "space-x-4",
    lg: "space-x-6",
  },
} as const

// API constants
export const API_ENDPOINTS = {
  ETHEREUM_RPC: "eth_requestAccounts",
  GET_BALANCE: "eth_getBalance",
} as const

// Error messages
export const ERROR_MESSAGES = {
  WALLET_NOT_FOUND: "Please install MetaMask or another Web3 wallet",
  CONNECTION_FAILED: "Failed to connect wallet",
  BALANCE_FETCH_FAILED: "Failed to fetch wallet balance",
} as const 