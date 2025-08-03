import React from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { TradingPairHeaderProps } from '@/lib/types'
import { cn } from '@/lib/utils'

export function TradingPairHeader({ isDarkMode, tradingPair, onPairSelect }: TradingPairHeaderProps) {
  return (
    <div className={cn(
      "flex flex-row justify-center items-center w-full border rounded-[8px] lg:overflow-visible overflow-x-auto",
      isDarkMode ? "border-[#ffffff19]" : "border-gray-200 bg-white"
    )}>
      <div className="flex ml-20 md:ml-0 flex-row justify-center items-center w-auto p-3">
        <div 
          className="flex flex-col md:flex-row gap-2 justify-center items-center w-auto cursor-pointer"
          onClick={onPairSelect}
        >
          <Image 
            src={tradingPair.icon} 
            alt={tradingPair.name} 
            width={40} 
            height={24}
            className="w-[32px] h-[32px] sm:w-[40px] sm:h-[24px] object-contain"
          />
          <span className={cn(
            "text-[14px] sm:text-[16px] font-manrope font-extrabold leading-[22px] text-center",
            isDarkMode ? "text-global-5" : "text-[#121518CC]"
          )}>
            {tradingPair.name}
          </span>
        </div>
        <ChevronDown className={cn(
          "w-6 h-6 ml-2",
          isDarkMode ? "text-global-7" : "text-[#121518CC]"
        )} />
      </div>
      <div className="flex flex-row justify-start items-center flex-1">
        <div className={cn(
          "flex flex-col justify-center items-start w-full border-l px-4 py-1",
          isDarkMode ? "border-[#ffffff19]" : "border-gray-200"
        )}>
          <span className={cn(
            "text-[8px] sm:text-[10px]  font-manrope font-normal leading-[14px] text-center border-b border-dotted ",
            isDarkMode ? "text-global-7 border-white" : "text-[#121518CC] border-black"
          )}>
            Mark
          </span>
          <span className={cn(
            "text-[10px] sm:text-[12px] font-manrope font-extrabold leading-[17px] text-center",
            isDarkMode ? "text-global-5" : "text-[#121518CC]"
          )}>
            {tradingPair.markPrice}
          </span>
        </div>
        <div className={cn(
          "flex flex-col justify-center items-start w-full border-l px-4 py-1",
          isDarkMode ? "border-[#ffffff19]" : "border-gray-200"
        )}>
          <span className={cn(
            "text-[8px] sm:text-[10px] font-manrope font-normal leading-[14px] text-center border-b border-dotted ",
            isDarkMode ? "text-global-7 border-white" : "text-[#121518CC] border-black"
          )}>
            24h change
          </span>
          <span className="text-[10px] sm:text-[12px] font-manrope font-extrabold leading-[17px] text-center text-green-500">
            {tradingPair.change24h}
          </span>
        </div>
        <div className={cn(
          "flex flex-col justify-center items-start w-full border-l px-4 py-1",
          isDarkMode ? "border-[#ffffff19]" : "border-gray-200"
        )}>
          <span className={cn(
            "text-[8px] sm:text-[10px] font-manrope font-normal leading-[14px] text-center border-b border-dotted",
            isDarkMode ? "text-global-7 border-white" : "text-[#121518CC] border-black"
          )}>
            Oracle Price
          </span>
          <span className={cn(
            "text-[10px] sm:text-[12px] font-manrope font-extrabold leading-[17px] text-center",
            isDarkMode ? "text-global-5" : "text-[#121518CC]"
          )}>
            {tradingPair.oraclePrice}
          </span>
        </div>
        <div className={cn(
          "flex flex-col justify-center items-start w-full border-l px-4 py-1",
          isDarkMode ? "border-[#ffffff19]" : "border-gray-200"
        )}>
          <span className={cn(
            "text-[8px] sm:text-[10px] font-manrope font-normal leading-[14px] text-center border-b border-dotted ",
            isDarkMode ? "text-global-7 border-white" : "text-[#121518CC] border-black"
          )}>
            24h volume
          </span>
          <span className={cn(
            "text-[10px] sm:text-[12px] font-manrope font-extrabold leading-[17px] text-center",
            isDarkMode ? "text-global-5" : "text-[#121518CC]"
          )}>
            {tradingPair.volume24h}
          </span>
        </div>
        <div className={cn(
          "flex flex-row justify-center items-center w-full border-l px-1 py-1",
          isDarkMode ? "border-[#ffffff19]" : "border-gray-200"
        )}>
          <div className="flex flex-col justify-start items-start w-auto">
            <span className={cn(
              "text-[8px] sm:text-[10px] font-manrope font-normal leading-[14px] text-center border-b border-dotted ",
              isDarkMode ? "text-global-7 border-white" : "text-[#121518CC] border-black"
            )}>
              Funding
            </span>
            <span className="text-[10px] sm:text-[12px] font-manrope font-extrabold leading-[17px] text-center text-[#FFB74D]">
              {tradingPair.funding}
            </span>
          </div>
          <div className="flex flex-col justify-start items-start w-auto ml-4">
            <span className={cn(
              "text-[8px] sm:text-[10px] font-manrope font-normal leading-[14px] text-center border-b border-dotted ",
              isDarkMode ? "text-global-7 border-white" : "text-[#121518CC] border-black"
            )}>
              Next Funding
            </span>
            <span className={cn(
              "text-[10px] sm:text-[12px] font-manrope font-extrabold leading-[17px] text-center",
              isDarkMode ? "text-global-5" : "text-[#121518CC]"
            )}>
              {tradingPair.nextFunding}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}