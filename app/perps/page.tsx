'use client'

import React, { useState, useCallback } from 'react'

import { TradingPairHeader } from '@/components/trading/TradingPairHeader'
import { OrderBook } from '@/components/trading/OrderBook'
import { RecentTrades } from '@/components/trading/RecentTrades'
import { MarketStats } from '@/components/trading/MarketStats'
import { TradingTabs } from '@/components/trading/TradingTabs'
import TradingPanel from '@/components/trading/TradingPanel'
import { useTheme } from '@/contexts/ThemeContext'
import { TRADING_CONSTANTS } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { 
  TradingTab,
  TradingMode,
  OrderType,
  PositionType,
  Direction
} from '@/lib/types'

export default function PerpsPage() {
  const { isDarkMode, toggleTheme } = useTheme()
  
  // State management
  const [selectedTab, setSelectedTab] = useState<TradingTab>('open')
  const [selectedMode, setSelectedMode] = useState<TradingMode>('isolated')
  const [selectedOrderType, setSelectedOrderType] = useState<OrderType>('limit')
  const [selectedPosition, setSelectedPosition] = useState<PositionType>('open')
  const [leverage, setLeverage] = useState<string>(TRADING_CONSTANTS.DEFAULT_VALUES.leverage)
  const [price, setPrice] = useState<string>(TRADING_CONSTANTS.DEFAULT_VALUES.price)
  const [amount, setAmount] = useState<string>(TRADING_CONSTANTS.DEFAULT_VALUES.amount)
  const [sliderValue, setSliderValue] = useState<number>(TRADING_CONSTANTS.DEFAULT_VALUES.sliderValue)
  const [tpslEnabled, setTpslEnabled] = useState<boolean>(TRADING_CONSTANTS.DEFAULT_VALUES.tpslEnabled)
  const [selectedDirection, setSelectedDirection] = useState<Direction>('long')

  // Event handlers
  const handleTabChange = useCallback((tab: TradingTab) => {
    setSelectedTab(tab)
  }, [])

  const handleModeChange = useCallback((mode: TradingMode) => {
    setSelectedMode(mode)
  }, [])

  const handleOrderTypeChange = useCallback((type: OrderType) => {
    setSelectedOrderType(type)
  }, [])

  const handlePositionChange = useCallback((position: PositionType) => {
    setSelectedPosition(position)
  }, [])

  const handleDirectionChange = useCallback((direction: Direction) => {
    setSelectedDirection(direction)
  }, [])

  const handleLeverageChange = useCallback(() => {
    const leverageOptions = ['2x', '5x', '10x', '20x']
    const currentIndex = leverageOptions.indexOf(leverage)
    const nextIndex = (currentIndex + 1) % leverageOptions.length
    setLeverage(leverageOptions[nextIndex])
  }, [leverage])

  const handlePriceChange = useCallback((newPrice: string) => {
    setPrice(newPrice)
  }, [])

  const handleAmountChange = useCallback((newAmount: string) => {
    setAmount(newAmount)
  }, [])

  const handleSliderChange = useCallback((value: number) => {
    setSliderValue(value)
  }, [])

  const handleTpslToggle = useCallback((enabled: boolean) => {
    setTpslEnabled(enabled)
  }, [])

  const handleTrade = useCallback(() => {
    console.log('Trade executed:', {
      price,
      amount,
      selectedDirection,
      selectedOrderType,
      leverage
    })
  }, [price, amount, selectedDirection, selectedOrderType, leverage])

  const handleOrderClick = useCallback((order: any, type: 'buy' | 'sell') => {
    setPrice(order.price)
    console.log(`${type} order clicked:`, order)
  }, [])

  const handlePairSelect = useCallback(() => {
    console.log('Trading pair selection clicked')
  }, [])

  return (
    <div className={cn(
      "w-full min-h-screen flex flex-col",
      isDarkMode ? "bg-global-2" : "bg-white"
    )}>
      {/* <Header isDarkMode={isDarkMode} onThemeToggle={toggleTheme} /> */}
      <main className="w-full p-2 sm:p-4 md:py-8">
        <div className="w-full max-w-[1440px] mx-auto">
          {/* Mobile Layout - Single Column */}
          <div className="flex justify-center items-center flex-col lg:hidden gap-4">
            {/* Trading Pair Header */}
            <TradingPairHeader
              isDarkMode={isDarkMode}
              tradingPair={TRADING_CONSTANTS.TRADING_PAIR}
              onPairSelect={handlePairSelect}
            />
            
            Chart Area 
         <div className={cn(
              "flex flex-row justify-start items-center w-full border rounded-[8px] px-4 py-32",
              isDarkMode ? "bg-global-3 border-[#ffffff19]" : " border-gray-200 bg-[#F7F8FA]"
            )}>
              <div className="flex flex-row justify-center items-center w-full ">
                <span className={cn(
                  "text-[8px] sm:text-[10px] font-manrope font-normal leading-[14px] text-center",
                  isDarkMode ? "text-global-1" : "text-[#121518CC]"
                )}>
                  Graph
                </span>
              </div>
            </div> 

            {/* OrderBook and RecentTrades in horizontal scroll */}
            <div className="flex-col justify-center items-center  lg:flex-row flex gap-4 overflow-x-auto">
              <div className="flex-shrink-0 w-[280px]">
                <OrderBook
                  isDarkMode={isDarkMode}
                  sellOrders={TRADING_CONSTANTS.SELL_ORDERS}
                  buyOrders={TRADING_CONSTANTS.BUY_ORDERS}
                  currentPrice={TRADING_CONSTANTS.DEFAULT_VALUES.currentPrice}
                  onOrderClick={handleOrderClick}
                />
              </div>
              <div className="flex-shrink-0 w-[280px]">
                <RecentTrades
                  isDarkMode={isDarkMode}
                  trades={TRADING_CONSTANTS.RECENT_TRADES}
                />
              </div>
            </div>

            {/* Trading Panel */}
            <TradingPanel
              isDarkMode={isDarkMode}
              accountInfo={TRADING_CONSTANTS.ACCOUNT_INFO}
              positionInfo={TRADING_CONSTANTS.POSITION_INFO}
              selectedMode={selectedMode}
              selectedOrderType={selectedOrderType}
              selectedPosition={selectedPosition}
              selectedDirection={selectedDirection}
              leverage={leverage}
              price={price}
              amount={amount}
              sliderValue={sliderValue}
              tpslEnabled={tpslEnabled}
              onModeChange={handleModeChange}
              onOrderTypeChange={handleOrderTypeChange}
              onPositionChange={handlePositionChange}
              onDirectionChange={handleDirectionChange}
              onLeverageChange={handleLeverageChange}
              onPriceChange={handlePriceChange}
              onAmountChange={handleAmountChange}
              onSliderChange={handleSliderChange}
              onTpslToggle={handleTpslToggle}
              onTrade={handleTrade}
            />

            {/* TradingTabs */}
            <div className="flex flex-col justify-start items-start w-full">
              <TradingTabs
                isDarkMode={isDarkMode}
                selectedTab={selectedTab}
                onTabChange={handleTabChange}
              />
              <div className={cn(
                "flex flex-col gap-[10px] justify-start items-center w-full px-4 py-8 border border-t-0 rounded-t-none rounded-[8px]",
                isDarkMode ? "border-[#ffffff19]" : "border-gray-200 bg-white"
              )}>
                <span className={cn(
                  "text-[8px] sm:text-[10px] font-manrope font-normal leading-[14px] text-left",
                  isDarkMode ? "text-global-6" : "text-[#121518CC]"
                )}>
                  Sign in to see your Open orders
                </span>
                <span className={cn(
                  "text-[10px] sm:text-[12px] font-manrope font-extrabold leading-[17px] text-left cursor-pointer hover:underline mb-2",
                  isDarkMode ? "text-global-1" : "text-[#2ED3B7]"
                )}>
                  Sign in
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Multi Column */}
          <div className="hidden lg:flex flex-row justify-start items-start w-full h-screen">
            {/* Main Content Area */}
            <div className="flex flex-col gap-4 justify-start items-start flex-1">
              {/* Top Row */}
              <div className="flex flex-row gap-4 justify-start items-start w-full flex-1">
                {/* Left Side - Trading Pair Header + Chart (wider) */}
                <div className="flex flex-col gap-4 justify-start items-center w-[100%]">
                  <TradingPairHeader
                    isDarkMode={isDarkMode}
                    tradingPair={TRADING_CONSTANTS.TRADING_PAIR}
                    onPairSelect={handlePairSelect}
                  />
                  
                  {/* Chart Area */}
                  <div className={cn(
                    "flex flex-row justify-start items-center w-full flex-1 border rounded-[8px] px-32 py-[327px]",
                    isDarkMode ? "bg-global-3 border-[#ffffff19]" : "bg-[#F7F8FA] border-gray-200"
                  )}>
                    <div className="flex flex-row justify-center items-center w-full">
                      <span className={cn(
                        "text-[8px] sm:text-[10px] font-manrope font-normal leading-[14px] text-center",
                        isDarkMode ? "text-global-1" : "text-[#121518CC]"
                      )}>
                        Graph
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Side - OrderBook + RecentTrades + MarketStats stacked vertically (narrower) */}
                <div className="flex flex-col gap-4 justify-start items-start w-[250px]">
                  <OrderBook
                    isDarkMode={isDarkMode}
                    sellOrders={TRADING_CONSTANTS.SELL_ORDERS}
                    buyOrders={TRADING_CONSTANTS.BUY_ORDERS}
                    currentPrice={TRADING_CONSTANTS.DEFAULT_VALUES.currentPrice}
                    onOrderClick={handleOrderClick}
                  />
                  <RecentTrades
                    isDarkMode={isDarkMode}
                    trades={TRADING_CONSTANTS.RECENT_TRADES}
                  />
                </div>
              </div>

              {/* Bottom Row - TradingTabs spanning full width */}
              <div className="flex flex-col justify-start items-start w-full">
                <div className="flex flex-col justify-start items-center w-full">
                  <TradingTabs
                    isDarkMode={isDarkMode}
                    selectedTab={selectedTab}
                    onTabChange={handleTabChange}
                  />
                  <div className={cn(
                    "flex flex-col gap-[10px] justify-start items-center w-full px-14 py-14 border border-t-0 rounded-t-none rounded-[8px]",
                    isDarkMode ? "border-[#ffffff19]" : "border-gray-200 bg-white"
                  )}>
                    <span className={cn(
                      "text-[8px] sm:text-[10px] font-manrope font-normal leading-[14px] text-left",
                      isDarkMode ? "text-global-6" : "text-[#121518CC]"
                    )}>
                      Sign in to see your Open orders
                    </span>
                    <span className={cn(
                      "text-[10px] sm:text-[12px] font-manrope font-extrabold leading-[17px] text-left cursor-pointer hover:underline mb-2",
                      isDarkMode ? "text-global-1" : "text-[#2ED3B7]"
                    )}>
                      Sign in
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Rightmost - TradingPanel taking full height */}
            <div className="w-[280px] h-full xl:-mr-10">
              <TradingPanel
                isDarkMode={isDarkMode}
                accountInfo={TRADING_CONSTANTS.ACCOUNT_INFO}
                positionInfo={TRADING_CONSTANTS.POSITION_INFO}
                selectedMode={selectedMode}
                selectedOrderType={selectedOrderType}
                selectedPosition={selectedPosition}
                selectedDirection={selectedDirection}
                leverage={leverage}
                price={price}
                amount={amount}
                sliderValue={sliderValue}
                tpslEnabled={tpslEnabled}
                onModeChange={handleModeChange}
                onOrderTypeChange={handleOrderTypeChange}
                onPositionChange={handlePositionChange}
                onDirectionChange={handleDirectionChange}
                onLeverageChange={handleLeverageChange}
                onPriceChange={handlePriceChange}
                onAmountChange={handleAmountChange}
                onSliderChange={handleSliderChange}
                onTpslToggle={handleTpslToggle}
                onTrade={handleTrade}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={cn(
        "w-full border-t mt-20",
        isDarkMode ? "border-[#ffffff19] bg-global-2" : "border-gray-200 bg-white"
      )}>
        <div className="w-full max-w-[1440px] mx-auto px-2 py-1">
          <div className="flex flex-row justify-start items-center w-full">
            <div className="flex flex-row justify-start items-start flex-1">
              <div className={cn(
                "w-2 h-2 rounded-[4px]",
                isDarkMode ? "bg-global-1" : "bg-[#2ED3B7]"
              )} />
              <span className={cn(
                "text-[8px] sm:text-[10px] font-manrope font-normal leading-[14px] text-center self-center ml-3",
                isDarkMode ? "text-global-5" : "text-[#121518CC]"
              )}>
                Online
              </span>
            </div>
            <span className={cn(
              "text-[8px] sm:text-[10px] font-manrope font-normal leading-[14px] text-center",
              isDarkMode ? "text-global-7" : "text-gray-500"
            )}>
              v1
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}