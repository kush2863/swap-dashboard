import React from "react"
import { TokenIcon } from "./TokenIcon"
import { cn } from "@/lib/utils"
import { themeColors, transitions } from "@/lib/theme"
import Image from "next/image"

interface TabSelectorProps {
  isDarkMode: boolean
  activeTab: string
  onTabChange: (tab: string) => void
}

const tabs = [
  { id: "same-chain", label: "Same-chain", icon: "samechain" },
  { id: "cross-chain", label: "Cross-chain", icon: "crosschain" },
]

export function TabSelector({ isDarkMode, activeTab, onTabChange }: TabSelectorProps) {
  const themeClasses = isDarkMode ? themeColors.dark : themeColors.light

  return (
    <div className="flex w-full items-center justify-between ">
      <div className=" flex items-center">
      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "flex-1 flex items-center   justify-center rounded-t-xl sm:rounded-t-2xl space-x-1 sm:space-x-2 border-b-0 py-3 sm:py-5 px-2 sm:px-5 border",
            transitions.default,
            index === 0 ? "rounded-t-xl sm:rounded-t-2xl border-b-0" : "rounded-t-xl sm:rounded-t-2xl border-b-0",
            activeTab === tab.id
              ? cn(themeClasses.cardBg, themeClasses.borderSecondary, themeClasses.text, "border-b-0")
              : cn(
                  isDarkMode ? "bg-transparent" : "bg-[#F2F9F9]", 
                  themeClasses.border, 
                  "opacity-50", 
                  themeClasses.textSecondary
                )
          )}
        >
          <TokenIcon 
            token={tab.icon} 
            size={20}
            isDarkMode={isDarkMode}
            className={cn("bg-transparent flex-shrink-0",
              activeTab === tab.id 
                ? "opacity-100" 
                : "opacity-60"
            )}
          />
          <span className="text-sm sm:text-lg font-semibold truncate">{tab.label}</span>
        </button>
      ))}
      </div>
      {/* Button Icon at the end */}
      <div className="ml-2 flex-shrink-0">
        <Image
          src="/assets/swap/Button.svg"
          alt="Settings"
          width={48}
          height={48}
          className="w-12 h-12"
        />
      </div>
    </div>
  )
} 