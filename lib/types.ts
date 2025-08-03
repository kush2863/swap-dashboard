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
  icon: string
}

// Trading types
export interface TradingPair {
  symbol: string
  name: string
  icon: string
  markPrice: string
  change24h: string
  oraclePrice: string
  volume24h: string
  funding: string
  nextFunding: string
}

export interface OrderBookEntry {
  price: string
  size: string
  sum: string
}

export interface TradeEntry {
  price: string
  size: string
  time: string
  type: 'buy' | 'sell'
}

export interface AccountInfo {
  profile: string
  balance: string
  equity: string
  availableBalance: string
  unrealizedPnL: string
}

export interface PositionInfo {
  liquidationPrice: string
  value: string
  margin: string
  slippage: string
}

export type TradingTab = 'open' | 'positions' | 'orderHistory' | 'tradeHistory' | 'fundingHistory' | 'depositHistory'
export type TradingMode = 'isolated' | 'hedge'
export type OrderType = 'market' | 'limit'
export type PositionType = 'open' | 'close'
export type Direction = 'long' | 'short'

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

// Trading component props
export interface TradingPairHeaderProps extends BaseComponentProps {
  tradingPair: TradingPair
  onPairSelect?: () => void
}

export interface OrderBookProps extends BaseComponentProps {
  sellOrders: OrderBookEntry[]
  buyOrders: OrderBookEntry[]
  currentPrice: string
  onOrderClick?: (order: OrderBookEntry, type: 'buy' | 'sell') => void
}

export interface RecentTradesProps extends BaseComponentProps {
  trades: TradeEntry[]
}

export interface MarketStatsProps extends BaseComponentProps {
  high24h: string
  low24h: string
  openInterest: string
  indexPrice: string
}

export interface TradingTabsProps extends BaseComponentProps {
  selectedTab: TradingTab
  onTabChange: (tab: TradingTab) => void
}

export interface TradingPanelProps extends BaseComponentProps {
  accountInfo: AccountInfo
  positionInfo: PositionInfo
  selectedMode: TradingMode
  selectedOrderType: OrderType
  selectedPosition: PositionType
  selectedDirection: Direction
  leverage: string
  price: string
  amount: string
  sliderValue: number
  tpslEnabled: boolean
  onModeChange: (mode: TradingMode) => void
  onOrderTypeChange: (type: OrderType) => void
  onPositionChange: (position: PositionType) => void
  onDirectionChange: (direction: Direction) => void
  onLeverageChange: () => void
  onPriceChange: (price: string) => void
  onAmountChange: (amount: string) => void
  onSliderChange: (value: number) => void
  onTpslToggle: (enabled: boolean) => void
  onTrade: () => void
}