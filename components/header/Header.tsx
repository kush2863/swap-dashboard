import React from "react"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/Icon"
import { NavigationIcon } from "./NavigationIcons"
import { Settings, ChevronDown, Sun, Moon, Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { themeColors, transitions } from "@/lib/theme"
import { useWallet } from "@/hooks/useWallet"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"

interface HeaderProps {
  isDarkMode: boolean
  onThemeToggle: () => void
}

const navigationItems = [
  { name: "Swap", href: "#", isActive: true, icon: "swap" },
  { name: "Trade", href: "#", icon: "trade" },
  { name: "Perps", href: "#", icon: "perps" },
  { name: "OPerps", href: "#", icon: "operps" },
  { name: "Refer", href: "#", icon: "users" },
  { name: "Learn", href: "#", icon: "learn" },
]

export function Header({ isDarkMode, onThemeToggle }: HeaderProps) {
  const themeClasses = isDarkMode ? themeColors.dark : themeColors.light
  const { isWalletConnected, walletAddress, connectWallet, disconnectWallet, formatAddress } = useWallet()

  return (
    <header className={cn(
      "flex items-center justify-between px-6 py-4 border-b",
      themeClasses.cardBg,
      themeClasses.headerBorder
    )}>
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
          <Icon name="logo" size={126} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <div key={item.name} className="flex items-center space-x-2">
              <NavigationIcon 
                icon={item.icon} 
                size={20} 
                className={isDarkMode ? "text-[#a5a5a6]" : "text-[#121518CC]"}
              />
                          <a
              href={item.href}
              className={cn(
                "font-manrope font-[800] text-md ",
                item.isActive 
                  ? "text-[#2ED3B7]" 
                  : cn(themeClasses.textSecondary, "hover:" + themeClasses.text, transitions.default)
              )}
            >
                {item.name}
              </a>
            </div>
          ))}
          <div className="flex items-center space-x-1">
            <span className={cn("font-manrope", themeClasses.textSecondary, "hover:" + themeClasses.text, transitions.default)}>
              More
            </span>
            <ChevronDown className={cn("w-4 h-4", isDarkMode ? themeClasses.textSecondary : "text-[#121518CC]")} />
          </div>
        </nav>
      </div>

      {/* Right side actions */}
      <div className="flex items-center space-x-4">
        {/* Theme toggle */}
        <Button
          onClick={onThemeToggle}
          variant="ghost"
          size="sm"
          className={cn(
            isDarkMode 
              ? "bg-[#1d1e20] hover:bg-[#2d374b]" 
              : "bg-[#f0f0f0] hover:bg-[#e0e0e0]",
            themeClasses.text,
            "rounded-lg p-2"
          )}
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </Button>

        {/* Connect wallet */}
        <Button 
          variant="primary" 
          size="md" 
          onClick={isWalletConnected ? disconnectWallet : connectWallet}
          className={cn(
            "hidden rounded-xl sm:inline-flex font-bold",
            isDarkMode 
              ? "bg-[#1C1F20] hover:bg-[#25B8A0] text-[#00FFF0]" 
              : "bg-[#EBEEF2] text-[#00FFF0] border-2 border-[#0000001A] hover:bg-[#EBEEF2] hover:text-[#121518]"
          )}
        >
          <NavigationIcon icon="user" size={16} className="mr-2" />
          {isWalletConnected ? formatAddress(walletAddress) : "Connect wallet"}
        </Button>

        {/* Notifications */}
        <div className="relative">
          <NavigationIcon icon="bell" size={20} className={cn(isDarkMode ? "text-[#a5a5a6]" : "text-[#121518CC]")} />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#d64f4a] rounded-full"></div>
        </div>

        {/* Settings */}
        <Settings className={cn("w-5 h-5", isDarkMode ? "text-[#a5a5a6]" : "text-[#121518CC]")} />

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "md:hidden",
                themeClasses.text,
                "rounded-lg p-2"
              )}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right"
            className={cn(
              "w-[300px] sm:w-[400px]",
              themeClasses.background,
              themeClasses.border
            )}
          >
            <SheetHeader>
              <SheetTitle className={cn("text-left", themeClasses.text)}>
                Navigation
              </SheetTitle>
            </SheetHeader>
            
            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-4 mt-6 pr-2 pl-2">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-3 p-3 rounded-lg transition-colors",
                    item.isActive 
                      ? cn("bg-[#15b79e] text-white") 
                      : cn(
                          themeClasses.cardBg,
                          "hover:" + themeClasses.inputBg,
                          themeClasses.text,
                          transitions.default
                        )
                  )}
                >
                  <NavigationIcon 
                    icon={item.icon} 
                    size={20} 
                    className={item.isActive ? "text-white" : (isDarkMode ? themeClasses.textSecondary : "text-[#121518CC]")}
                  />
                  <span className="font-manrope font-medium">{item.name}</span>
                </a>
              ))}
              
              {/* More dropdown */}
              <div className={cn(
                "flex items-center justify-between p-3 rounded-lg cursor-pointer",
                themeClasses.cardBg,
                "hover:" + themeClasses.inputBg,
                themeClasses.text,
                transitions.default
              )}>
                <div className="flex items-center space-x-3">
                  <div className={cn("w-5 h-5", isDarkMode ? themeClasses.textSecondary : "text-[#121518CC]")}></div>
                  <span className="font-manrope font-medium">More</span>
                </div>
                <ChevronDown className={cn("w-4 h-4", isDarkMode ? themeClasses.textSecondary : "text-[#121518CC]")} />
              </div>
            </nav>

            {/* Mobile Actions */}
            <div className="mt-8 space-y-4 pr-2 pl-2">
              <Button 
                variant="primary" 
                onClick={isWalletConnected ? disconnectWallet : connectWallet}
                className={cn(
                  "w-full",
                  isDarkMode 
                    ? "bg-[#2ED3B7] hover:bg-[#25B8A0] text-white" 
                    : "bg-[#EBEEF2] text-[#121518] hover:bg-[#EBEEF2] hover:text-[#121518]"
                )}
              >
                <NavigationIcon icon="user" size={16} className="mr-2" />
                {isWalletConnected ? formatAddress(walletAddress) : "Connect wallet"}
              </Button>
              
              <div className="flex items-center justify-between p-3 rounded-lg border">
                <span className={cn("text-sm", themeClasses.textSecondary)}>Theme</span>
                <Button
                  onClick={onThemeToggle}
                  variant="ghost"
                  size="sm"
                  className={cn(
                    isDarkMode 
                      ? "bg-[#1d1e20] hover:bg-[#2d374b]" 
                      : "bg-[#f0f0f0] hover:bg-[#e0e0e0]",
                    themeClasses.text,
                    "rounded-lg p-2"
                  )}
                >
                  {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
} 