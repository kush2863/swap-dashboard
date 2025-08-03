"use client"
import React from 'react'
import { TradingTabsProps } from '@/lib/types'
import { cn } from '@/lib/utils'
import { themeColors, transitions } from '@/lib/theme'
import Image from 'next/image'
const TAB_CONFIG = [
  { id: 'open', label: 'Open Orders' },
  { id: 'positions', label: 'Positions' },
  { id: 'orderHistory', label: 'Order History' },
  { id: 'tradeHistory', label: 'Trade History' },
  { id: 'fundingHistory', label: 'Funding History' },
  { id: 'depositHistory', label: 'Deposit/Withdraw History' }
] as const

export function TradingTabs({ isDarkMode, selectedTab, onTabChange }: TradingTabsProps) {
  const themeClasses = isDarkMode ? themeColors.dark : themeColors.light

  return (
    <div className={cn(
      "flex flex-row justify-start gap-2 h-[38px] items-center w-full border rounded-t-lg lg:overflow-visible overflow-x-auto relative", 
      isDarkMode ? "border-[#ffffff19]" : "border-gray-200 bg-white"
    )}>
      
            {TAB_CONFIG.map((tab, index) => (
        <div
          key={tab.id}
          className={cn(
            "flex flex-row justify-center items-center px-2 sm:px-5 py-2 cursor-pointer h-full lg:flex-shrink-0 flex-shrink-0 min-w-[80px] sm:min-w-[120px]",
            index === 0 && "rounded-tl-lg",
            "transition-all duration-200",
            selectedTab === tab.id
              ? cn(
                  "border-b-1",
                  isDarkMode ? "bg-[#1C1F20] border-[#00fff0]" : "bg-[#EBEEF2] border-[#2ED3B7]"
                )
              : "border-b-2 border-transparent"
          )}
          onClick={() => onTabChange(tab.id)}
        >
          <span
            className={cn(
              "text-[9px] sm:text-[12px] font-manrope leading-[15px] text-center whitespace-nowrap",
              selectedTab === tab.id
                ? cn(
                    "font-extrabold",
                    isDarkMode ? "text-white" : "text-[black]"
                  )
                : cn(
                    "font-[400]",
                    isDarkMode ? "text-global-7" : "text-[#121518CC]"
                  )
            )}
          >
            {tab.label}
          </span>
        </div>
      ))}
              <div className="md:flex flex-col justify-start items-center w-auto px-2 py-2 lg:flex-shrink-0 flex-shrink-0 absolute right-0 hidden lg:block">
          <Image   src="/assets/perps/3-dots.svg" width={36} height={36} alt="More options" className="" />
        </div>
    </div>
  )
} 