import React from 'react'
import Image from 'next/image'
import { RecentTradesProps } from '@/lib/types'
import { cn } from '@/lib/utils'

export function RecentTrades({ isDarkMode, trades }: RecentTradesProps) {
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
          Trades
        </span>
     
      </div>

      {/* Trades Headers */}
      <div className={cn(
        "flex flex-row justify-between items-center w-full px-4 py-2",
        isDarkMode ? "bg-global-3/30" : "bg-gray-50"
      )}>
        <span className={cn(
          "text-[9px] sm:text-[10px] font-manrope font-semibold leading-[12px] w-[30%] text-left",
          isDarkMode ? "text-global-7" : "text-[#121518CC]"
        )}>
          Price
        </span>
        <span className={cn(
          "text-[9px] sm:text-[10px] font-manrope font-semibold leading-[12px] w-[25%] text-center",
          isDarkMode ? "text-global-7" : "text-[#121518CC]"
        )}>
          Size
        </span>
        <span className={cn(
          "text-[9px] sm:text-[10px] font-manrope font-semibold leading-[12px] w-[30%] text-right",
          isDarkMode ? "text-global-7" : "text-[#121518CC]"
        )}>
          Time
        </span>
        <span className={cn(
          "text-[9px] sm:text-[10px] font-manrope font-semibold leading-[12px] w-[15%] text-center",
          isDarkMode ? "text-global-7" : "text-[#121518CC]"
        )}>
          
        </span>
       
      </div>

      {/* Trades List */}
      <div className="flex flex-col justify-start items-center w-full max-h-[300px] overflow-y-auto">
        {trades.slice(0, 5).map((trade, index) => (
          <div key={`trade-${index}`} className={cn(
            "flex flex-row justify-between items-center w-full px-4 py-1.5 transition-colors border-b last:border-b-0",
            isDarkMode ? "hover:bg-global-4/10 border-[#ffffff08]" : "hover:bg-gray-50 border-gray-100"
          )}>
            <span className={cn(
              "text-[10px] sm:text-[10px] font-['DM_Mono'] font-medium leading-[14px] w-[30%] text-left",
              trade.type === 'buy' 
                ? (isDarkMode ? 'text-global-2' : 'text-green-600')
                : (isDarkMode ? 'text-global-3' : 'text-red-600')
            )}>
              {trade.price}
            </span>
            <span className={cn(
              "text-[10px] sm:text-[10px] font-['DM_Mono'] font-normal leading-[14px] w-[25%] text-center",
              isDarkMode ? "text-global-7" : "text-[#121518CC]"
            )}>
              {trade.size}
            </span>
            <span className={cn(
              "text-[10px] sm:text-[10px] font-['DM_Mono'] font-normal leading-[14px] w-[30%] text-right",
              isDarkMode ? "text-global-7" : "text-[#121518CC]"
            )}>
              {trade.time}
            </span>
            <div className="w-[15%] flex justify-end">
              <Image 
                src="/assets/perps/link-external-02.svg" 
                alt="Share trade" 
                width={12} 
                height={12}
                className="w-3 h-3 cursor-pointer hover:opacity-70 transition-opacity"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 