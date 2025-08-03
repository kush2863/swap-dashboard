import React from 'react'
import { MarketStatsProps } from '@/lib/types'

export function MarketStats({ isDarkMode, high24h, low24h, openInterest, indexPrice }: MarketStatsProps) {
  return (
    <div className="flex flex-col justify-start items-center w-full bg-gradient-to-br from-global-4/20 to-global-3/10 border border-[#ffffff19] rounded-[12px] backdrop-blur-sm p-4">
      <div className="flex flex-row justify-between items-center w-full mb-3">
        <span className="text-[12px] sm:text-[14px] font-manrope font-extrabold leading-[19px] text-global-5">
          Market Stats
        </span>
        <div className="w-2 h-2 bg-global-1 rounded-full animate-pulse"></div>
      </div>
      <div className="flex flex-col gap-3 w-full">
        <div className="flex flex-row justify-between items-center">
          <span className="text-[9px] sm:text-[10px] font-manrope font-medium leading-[14px] text-global-6">
            24h High
          </span>
          <span className="text-[10px] sm:text-[11px] font-mono font-semibold leading-[15px] text-global-5">
            {high24h}
          </span>
        </div>
        <div className="flex flex-row justify-between items-center">
          <span className="text-[9px] sm:text-[10px] font-manrope font-medium leading-[14px] text-global-6">
            24h Low
          </span>
          <span className="text-[10px] sm:text-[11px] font-mono font-semibold leading-[15px] text-global-5">
            {low24h}
          </span>
        </div>
        <div className="flex flex-row justify-between items-center">
          <span className="text-[9px] sm:text-[10px] font-manrope font-medium leading-[14px] text-global-6">
            Open Interest
          </span>
          <span className="text-[10px] sm:text-[11px] font-mono font-semibold leading-[15px] text-global-5">
            {openInterest}
          </span>
        </div>
        <div className="flex flex-row justify-between items-center pt-2 border-t border-[#ffffff15]">
          <span className="text-[9px] sm:text-[10px] font-manrope font-medium leading-[14px] text-global-6">
            Index Price
          </span>
          <span className="text-[10px] sm:text-[11px] font-mono font-semibold leading-[15px] text-global-1">
            {indexPrice}
          </span>
        </div>
      </div>
    </div>
  )
} 