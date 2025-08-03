import { NavigationItem, TradingPair, OrderBookEntry, TradeEntry, AccountInfo, PositionInfo, TokenType } from './types'

// Supported tokens for swap
export const SUPPORTED_TOKENS: TokenType[] = [
  "APTOS", "ZKSYNC", "BSC", "polygon", "arbitrum", 
  "avalanche", "ethereum", "solana", "sui"
]

// Swap types
export const SWAP_TYPES = ['same-chain', 'cross-chain'] as const

// Navigation items
export const NAVIGATION_ITEMS: NavigationItem[] = [
  { name: 'Swap', href: '/swap', icon: 'swap' },
  { name: 'Trade', href: '/trade', icon: 'trade' },
  { name: 'Perps', href: '/perps', icon: 'perps' },
  { name: 'OPerps', href: '/operps', icon: 'operps' },
  { name: 'Refer', href: '/refer', icon: 'users' },
  { name: 'Learn', href: '/learn', icon: 'learn' },
  // { name: 'More', href: '/more', icon: 'more' }
]

// Wallet constants
export const WALLET_CONSTANTS = {
  DEFAULT_BALANCE: '0.0000',
  ETH_DECIMALS: 18,
  ADDRESS_PREFIX_LENGTH: 6,
  ADDRESS_SUFFIX_LENGTH: 4
} as const

// API endpoints
export const API_ENDPOINTS = {
  ETHEREUM_RPC: 'eth_requestAccounts',
  GET_BALANCE: 'eth_getBalance'
} as const

// Error messages
export const ERROR_MESSAGES = {
  WALLET_NOT_FOUND: 'No wallet found. Please install MetaMask or another Ethereum wallet.',
  CONNECTION_FAILED: 'Failed to connect wallet',
  BALANCE_FETCH_FAILED: 'Failed to fetch wallet balance'
} as const

// UI constants
export const UI_CONSTANTS = {
  ANIMATION_DURATION: 200,
  DEBOUNCE_DELAY: 300
} as const

// Trading constants
export const TRADING_CONSTANTS = {
  // Trading pair data
  TRADING_PAIR: {
    symbol: 'APT-PERP',
    name: 'APT - PERP',
    icon: '/assets/perps/Frame 1261153096.svg',
    markPrice: '$7.32',
    change24h: '+2 %',
    oraclePrice: '$11.1',
    volume24h: '245,694,542',
    funding: '0.012%',
    nextFunding: '00:23:34'
  } as TradingPair,

  // Account info
  ACCOUNT_INFO: {
    profile: 'Profile 1',
    balance: '0.00 USDT',
    equity: '$0.00',
    availableBalance: '$0.00',
    unrealizedPnL: '$0.00'
  } as AccountInfo,

  // Position info
  POSITION_INFO: {
    liquidationPrice: '126.59',
    value: '$2,409.23',
    margin: '$120.59',
    slippage: '8%'
  } as PositionInfo,

  // Sell orders
  SELL_ORDERS: [
    { price: '22.038', size: '1.132', sum: '22.038' },
    { price: '22.038', size: '1.132', sum: '22.038' },
    { price: '22.035', size: '1.132', sum: '22.035' },
    { price: '22.035', size: '1.132', sum: '22.035' },
    { price: '22.025', size: '307.825', sum: '22.025' },
    { price: '22.025', size: '307.825', sum: '22.025' },
    { price: '22.000', size: '45.082', sum: '22.000' },
    { price: '22.000', size: '45.082', sum: '22.000' },
    { price: '21.990', size: '0.114', sum: '21.990' },
    { price: '21.990', size: '0.114', sum: '21.990' },
    { price: '21.990', size: '0.114', sum: '21.990' },
    { price: '21.990', size: '0.114', sum: '21.990' },
    { price: '21.990', size: '0.114', sum: '21.990' },
    { price: '21.990', size: '0.114', sum: '21.990' }
  ] as OrderBookEntry[],

  // Buy orders
  BUY_ORDERS: [
    { price: '21.990', size: '0.114', sum: '21.990' },
    { price: '21.990', size: '0.114', sum: '21.990' },
    { price: '21.990', size: '0.114', sum: '21.990' },
    { price: '21.990', size: '0.114', sum: '21.990' },
    { price: '22.000', size: '45.082', sum: '22.000' },
    { price: '22.000', size: '45.082', sum: '22.000' },
    { price: '22.025', size: '307.825', sum: '22.025' },
    { price: '22.025', size: '307.825', sum: '22.025' },
    { price: '22.035', size: '1.132', sum: '22.035' },
    { price: '22.035', size: '1.132', sum: '22.035' },
    { price: '22.038', size: '1.132', sum: '22.038' },
    { price: '22.038', size: '1.132', sum: '22.038' }
  ] as OrderBookEntry[],

  // Recent trades
  RECENT_TRADES: [
    { price: '5.660', size: '23.234', time: '12:36:28', type: 'buy' },
    { price: '5.660', size: '23.234', time: '12:35:28', type: 'sell' },
    { price: '5.660', size: '23.234', time: '12:35:28', type: 'buy' },
    { price: '5.660', size: '23.234', time: '12:35:28', type: 'sell' },
    { price: '5.660', size: '23.234', time: '12:35:28', type: 'buy' },
    { price: '5.660', size: '23.234', time: '12:35:28', type: 'sell' },
    { price: '5.660', size: '23.234', time: '12:35:28', type: 'buy' },
    { price: '5.660', size: '23.234', time: '12:35:28', type: 'sell' },
    { price: '5.660', size: '23.234', time: '12:35:28', type: 'buy' },
    { price: '5.660', size: '23.234', time: '12:35:28', type: 'sell' },
    { price: '5.660', size: '23.234', time: '12:35:28', type: 'buy' },
    { price: '5.660', size: '23.234', time: '12:35:28', type: 'sell' },
    { price: '5.660', size: '23.234', time: '12:35:28', type: 'buy' },
    { price: '5.660', size: '23.234', time: '12:35:28', type: 'sell' },
    { price: '5.660', size: '23.234', time: '12:35:28', type: 'buy' },
    { price: '5.660', size: '23.234', time: '12:35:28', type: 'sell' },
    { price: '5.660', size: '23.234', time: '12:35:28', type: 'buy' },
    { price: '5.660', size: '23.234', time: '12:35:28', type: 'sell' },
    { price: '5.660', size: '23.234', time: '12:35:28', type: 'buy' },
    { price: '5.660', size: '23.234', time: '12:35:28', type: 'sell' }
  ] as TradeEntry[],

  // Market stats
  MARKET_STATS: {
    high24h: '$7.89',
    low24h: '$6.95',
    openInterest: '125.4M',
    indexPrice: '$7.32'
  },

  // Default values
  DEFAULT_VALUES: {
    currentPrice: '2345.5',
    leverage: '2x',
    price: '1245689',
    amount: '0.00',
    sliderValue: 50,
    tpslEnabled: false
  }
} as const 