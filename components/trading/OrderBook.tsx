'use client'
import React, { useMemo } from 'react'
import Image from 'next/image'
import { OrderBookProps, OrderBookEntry } from '@/lib/types'
import { cn } from '@/lib/utils'

export function OrderBook({ isDarkMode, sellOrders, buyOrders, currentPrice, onOrderClick }: OrderBookProps) {
  const getOrderBookBarWidth = useMemo(() => {
    return (index: number, total: number, isReversed: boolean = false): string => {
      if (isReversed) {
        const percentage = ((total - index) / total) * 100;
        return `${Math.max(percentage, 28)}%`;
      } else {
        const percentage = ((index + 1) / total) * 100;
        return `${Math.max(percentage, 28)}%`;
      }
    }
  }, [])

  const handleOrderClick = (order: OrderBookEntry, type: 'buy' | 'sell') => {
    onOrderClick?.(order, type)
  }

  return (
    <div className={cn(
      "flex flex-col justify-start items-center w-full border rounded-[12px] backdrop-blur-sm",
      isDarkMode ? "bg-global-4/20 border-[#ffffff19]" : "bg-white border-gray-200"
    )}>
              <div className={cn(
          "flex flex-row justify-between items-center w-full border-b px-4 py-3",
          isDarkMode ? "border-[#ffffff19]" : "border-gray-200"
        )}>
        <span className={cn(
          "text-[12px] sm:text-[14px] font-manrope font-extrabold leading-[19px]",
          isDarkMode ? "text-global-5" : "text-[#121518CC]"
        )}>
          Order Book
        </span>
        <div className="flex flex-row gap-2 items-center">

        </div>
      </div>
      
      {/* Order Book Headers */}
      <div className={cn(
        "flex flex-row justify-between items-center w-full px-4 py-2",
        isDarkMode ? "bg-global-3/30" : "b"
      )}>
        <span className={cn(
          "text-[9px] sm:text-[10px] font-manrope font-semibold leading-[12px] w-[35%] text-left",
          isDarkMode ? "text-global-7" : "text-[#121518CC]"
        )}>
          Price (USDT)
        </span>
        <span className={cn(
          "text-[9px] sm:text-[10px] font-manrope font-semibold leading-[12px] w-[30%] text-center",
          isDarkMode ? "text-global-7" : "text-[#121518CC]"
        )}>
          Size (APT)
        </span>
        <span className={cn(
          "text-[9px] sm:text-[10px] font-manrope font-semibold leading-[12px] w-[35%] text-right",
          isDarkMode ? "text-global-7" : "text-[#121518CC]"
        )}>
          Total
        </span>
      </div>

      {/* Sell Orders */}
      <div className="flex flex-col justify-start items-center w-full max-h-[200px] overflow-hidden">
        {sellOrders.slice(0, 8).map((order, index) => (
          <div key={`sell-${index}`} className="relative w-full h-6 flex items-center hover:bg-global-6/10 transition-colors">
            <div 
              className="absolute  -right-[50px]  top-0 bottom-0 bg-gradient-to-l from-[#FF55551F] to-[#FF55550A] "
              style={{ width: getOrderBookBarWidth(index, sellOrders.length, true) }}
            />
            <div className="relative flex flex-row justify-between items-center w-full px-4 z-10">
              <span className={cn(
                "text-[10px] sm:text-[10px] font-dm-mono font-medium leading-[14px] w-[35%] text-left",
                isDarkMode ? "text-global-3" : "text-[#121518CC]"
              )}>
                {order.price}
              </span>
              <span className={cn(
                "text-[10px] sm:text-[10px] font-dm-mono font-normal leading-[14px] w-[30%] text-center",
                isDarkMode ? "text-global-7" : "text-[#121518CC]"
              )}>
                {order.size}
              </span>
              <span className={cn(
                "text-[10px] sm:text-[10px] font-dm-mono font-normal leading-[14px] w-[35%] text-right",
                isDarkMode ? "text-global-7" : "text-[#121518CC]"
              )}>
                {order.sum}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Current Price Display */}
      <div className={cn(
        "flex flex-row justify-center items-center w-full px-4 py-3 border-y",
        isDarkMode ? "bg-global-4/10 border-[#ffffff19]" : " border-gray-200"
      )}>
        <div className="flex flex-row gap-1 justify-center items-center">
          <span className="text-[16px] sm:text-[18px] font-dm-mono font-bold leading-[24px] text-[#EF5350]">
            2345.5
          </span>
                      <div className="flex flex-row gap-1 items-center">
              <Image 
                src="/assets/perps/arrowdown.svg" 
                alt="Price direction" 
                width={7} 
                height={12}
                className="w-4 h-4"
              />
              <span className={cn(
                "text-[11px] sm:text-[12px] font-dm-mono font-medium leading-[16px]",
                isDarkMode ? "text-global-7" : "text-[#121518CC]"
              )}>
                ≈ 2345.6
              </span>
            </div>
        </div>
      </div>

      {/* Buy Orders */}
      <div className="flex flex-col justify-start items-center w-full max-h-[200px] overflow-hidden">
        {buyOrders.slice(0, 8).map((order, index) => (
          <div key={`buy-${index}`} className="relative w-full h-6 flex items-center hover:bg-global-1/10 transition-colors">
            <div 
              className="absolute right-0 top-0 bottom-0 bg-gradient-to-l from-[#00F9A91F] to-[#00F9A90A]"
              style={{ width: getOrderBookBarWidth(index, buyOrders.length) }}
            />
            <div className="relative flex flex-row justify-between items-center w-full px-4 z-10">
              <span className={cn(
                "text-[9px] sm:text-[10px] font-dm-mono font-medium leading-[14px] w-[35%] text-left",
                isDarkMode ? "text-global-2" : "text-[#121518CC]"
              )}>
                {order.price}
              </span>
              <span className={cn(
                "text-[9px] sm:text-[10px] font-dm-mono font-normal leading-[14px] w-[30%] text-center",
                isDarkMode ? "text-global-7" : "text-[#121518CC]"
              )}
              >
                {order.size}
              </span>
              <span className={cn(
                "text-[9px] sm:text-[10px] font-dm-mono font-normal leading-[14px] w-[35%] text-right",
                isDarkMode ? "text-global-7" : "text-[#121518CC]"
              )}>
                {order.sum}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 