import React from "react"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/Icon"
import { NavigationIcon } from "./NavigationIcons"
import { Settings, ChevronDown, Sun, Moon, Menu, Star, Bell, Info } from "lucide-react"
import { cn } from "@/lib/utils"
import { themeColors, transitions } from "@/lib/theme"
import { useWallet } from "@/hooks/useWallet"
import { NAVIGATION_ITEMS } from "@/lib/constants"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { usePathname } from "next/navigation"

// Inline SVG components with dynamic colors
const WinIcon = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.6251 10.6252C12.9069 10.3197 14.6667 8.36535 14.6667 6C14.6667 3.42267 12.5773 1.33333 10 1.33333C7.63465 1.33333 5.68032 3.09311 5.37484 5.37484M10.6667 10C10.6667 12.5773 8.57732 14.6667 6 14.6667C3.42267 14.6667 1.33333 12.5773 1.33333 10C1.33333 7.42267 3.42267 5.33333 6 5.33333C8.57732 5.33333 10.6667 7.42267 10.6667 10Z" 
          stroke={isDarkMode ? "#00FFF0" : "#009696"} 
          strokeWidth="1.33333" 
          strokeLinecap="round" 
          strokeLinejoin="round"/>
  </svg>
)

const DepositIcon = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.6667 12V8M10.6667 10H14.6667M14.6667 4.66667H1.33334M14.6667 6V3.46667C14.6667 2.71993 14.6667 2.34656 14.5213 2.06135C14.3935 1.81046 14.1895 1.60649 13.9387 1.47866C13.6534 1.33333 13.2801 1.33333 12.5333 1.33333H3.46667C2.71993 1.33333 2.34656 1.33333 2.06135 1.47866C1.81047 1.60649 1.60649 1.81046 1.47866 2.06134C1.33334 2.34656 1.33334 2.71993 1.33334 3.46667V8.53333C1.33334 9.28007 1.33334 9.65344 1.47866 9.93865C1.60649 10.1895 1.81047 10.3935 2.06135 10.5213C2.34656 10.6667 2.71993 10.6667 3.46667 10.6667H8" 
          stroke={isDarkMode ? "#00FFF0" : "#009696"} 
          strokeWidth="1.33333" 
          strokeLinecap="round" 
          strokeLinejoin="round"/>
  </svg>
)

const UserIcon = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_5008_2736)">
      <path d="M3.54424 12.9589C3.94979 12.0035 4.89666 11.3333 6.00004 11.3333H10C11.1034 11.3333 12.0503 12.0035 12.4558 12.9589M10.6667 6.33333C10.6667 7.80609 9.4728 9 8.00004 9C6.52728 9 5.33337 7.80609 5.33337 6.33333C5.33337 4.86057 6.52728 3.66667 8.00004 3.66667C9.4728 3.66667 10.6667 4.86057 10.6667 6.33333ZM14.6667 8C14.6667 11.6819 11.6819 14.6667 8.00004 14.6667C4.31814 14.6667 1.33337 11.6819 1.33337 8C1.33337 4.3181 4.31814 1.33333 8.00004 1.33333C11.6819 1.33333 14.6667 4.3181 14.6667 8Z" 
            stroke={isDarkMode ? "#00FFF0" : "#009696"} 
            strokeWidth="1.33" 
            strokeLinecap="round" 
            strokeLinejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_5008_2736">
        <rect width="16" height="16" fill="white"/>
      </clipPath>
    </defs>
  </svg>
)

interface HeaderProps {
  isDarkMode: boolean
  onThemeToggle: () => void
}

export function Header({ isDarkMode, onThemeToggle }: HeaderProps) {
  const themeClasses = isDarkMode ? themeColors.dark : themeColors.light
  const { isWalletConnected, walletAddress, connectWallet, disconnectWallet, formatAddress } = useWallet()
  const pathname = usePathname()
  
  // Check if we're on the perps page
  const isPerpsPage = pathname === '/perps'

  return (
    <header className={cn(
      "flex items-center justify-between px-6 py-4",
      isDarkMode ? "bg-global-2 border-[#ffffff19]" : "bg-white border-gray-200",
      !isPerpsPage && ""
    )}>
      {/* Left side - Logo and Navigation */}
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Icon name="logo" size={126} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          {NAVIGATION_ITEMS.map((item) => {
            const isActive = pathname === item.href
            return (
              <div key={item.name} className="flex items-center space-x-2">
                <NavigationIcon 
                  icon={item.icon} 
                  size={20} 
                  className={cn(
                    isActive 
                      ? "text-[#2ED3B7]" 
                      : isDarkMode ? "text-[#ffffff]" : "text-[#121518CC]"
                  )}
                />
                <a
                  href={item.href}
                  className={cn(
                    "font-manrope font-[800] text-xs",
                    isActive 
                      ? "text-[#2ED3B7]" 
                      : cn(
                          isDarkMode ? "text-[#ffffff]" : "text-[#121518CC]",
                          "hover:" + (isDarkMode ? themeClasses.text : "text-[#2ED3B7]"),
                          transitions.default
                        )
                  )}
                >
                  {item.name}
                </a>
              </div>
            )
          })}
          <div className="flex items-center space-x-1">
            <span className={cn(
              "font-manrope font-[800] text-xs",
              isDarkMode ? "text-[#ffffff]" : "text-[#121518CC]",
              "hover:" + (isDarkMode ? themeClasses.text : "text-[#2ED3B7]"),
              transitions.default
            )}>
              More
            </span>
            <ChevronDown className={cn("w-4 h-4", isDarkMode ? "text-[#ffffff]" : "text-[#121518CC]")} />
          </div>
        </nav>
      </div>

      {/* Right side - Action Buttons */}
      <div className="flex items-center space-x-4">
        {/* Perps-specific action buttons - only show on perps page */}
        {isPerpsPage && (
          <div className="flex items-center space-x-3">
            {/* VIP Button with Info Icon */}
            <div className="flex relative">
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "md:flex items-center hidden space-x-2 px-3 py-2 rounded-lg font-medium text-xs",
                  isDarkMode 
                    ? "bg-[#1C1F20] hover:bg-[#25B8A0] text-[#00FFF0]" 
                    : "bg-[#EBEEF2] text-gray-500 font-extrabold border border-[#0000001A] hover:bg-[#EBEEF2] hover:text-[#121518]"
                )}
              >
                <Star className="w-4 h-4 md:block hidden" />
                <span>VIP</span>
                <div className="w-5 h-5 rounded-full flex items-center justify-center md:block hidden">
                  <Info className="w-5 h-5 text-[#FFB74D]" />
                </div>
              </Button>
            </div>
            
            {/* Win $20 Button */}
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "md:flex items-center hidden space-x-2 px-3 py-2 rounded-lg font-medium text-xs",
                isDarkMode 
                  ? "bg-[#1C1F20] hover:bg-[#25B8A0] text-[#00FFF0]" 
                  : "bg-[#EBEEF2] text-[#009696] font-extrabold border border-[#0000001A] hover:bg-[#EBEEF2] hover:text-[#121518]"
              )}
            >
              <div className="w-4 h-4 md:block hidden">
                <WinIcon isDarkMode={isDarkMode} />
              </div>
              <span>Win $20</span>
            </Button>
            
            {/* Deposit Button */}
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "md:flex items-center space-x-2 px-3 py-2 rounded-lg font-medium text-xs hidden",
                isDarkMode 
                  ? "bg-[#1C1F20] hover:bg-[#25B8A0] text-[#00FFF0]" 
                  : "bg-[#EBEEF2] text-[#009696] font-extrabold border border-[#0000001A] hover:bg-[#EBEEF2] hover:text-[#121518]"
              )}
            >
              <div className="w-4 h-3">
                <DepositIcon isDarkMode={isDarkMode} />
              </div>
              <span>Deposit</span>
            </Button>
            
            {/* Sign in Button */}
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "md:flex items-center hidden space-x-2 px-3 py-2 rounded-lg font-medium text-xs",
                isDarkMode 
                  ? "bg-[#1C1F20] hover:bg-[#25B8A0] text-[#00FFF0]" 
                  : "bg-[#EBEEF2] text-[#009696] font-extrabold border border-[#0000001A] hover:bg-[#EBEEF2] hover:text-[#121518]"
              )}
            >
              <div className="w-4 h-4">
                <UserIcon isDarkMode={isDarkMode} />
              </div>
              <span>Sign in</span>
            </Button>
          </div>
        )}

        {/* Theme toggle */}
        <Button
          onClick={onThemeToggle}
          variant="ghost"
          size="sm"
          className={cn(
            isDarkMode 
              ? "bg-[#1d1e20] hover:bg-[#2d374b]" 
              : "bg-[#f0f0f0] hover:bg-[#e0e0e0]",
            isDarkMode ? themeClasses.text : "text-[#121518CC]",
            "rounded-lg p-2"
          )}
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </Button>

        {/* Connect wallet - only show on non-perps pages */}
        {!isPerpsPage && (
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
        )}

        {/* Notifications */}
        <div className="relative">
          {isPerpsPage ? (
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "p-2 rounded-lg",
                isDarkMode ? "bg-[#1C1F20] hover:bg-[#25B8A0]" : "bg-[#EBEEF2] hover:bg-[#EBEEF2]"
              )}
            >
              <Bell className={cn("w-5 h-5", isDarkMode ? "text-[#a5a5a6]" : "text-[#121518CC]")} />
            </Button>
          ) : (
            <NavigationIcon icon="bell" size={20} className={cn(isDarkMode ? "text-[#a5a5a6]" : "text-[#121518CC]")} />
          )}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FFB74D] rounded-full"></div>
        </div>

        {/* Settings */}
        {isPerpsPage ? (
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "p-2 rounded-lg",
              isDarkMode ? "bg-[#1C1F20] hover:bg-[#25B8A0]" : "bg-[#EBEEF2] hover:bg-[#EBEEF2]"
            )}
          >
            <Settings className={cn("w-5 h-5", isDarkMode ? "text-[#a5a5a6]" : "text-[#121518CC]")} />
          </Button>
        ) : (
          <Settings className={cn("w-5 h-5", isDarkMode ? "text-[#a5a5a6]" : "text-[#121518CC]")} />
        )}

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "md:hidden p-2 rounded-lg",
                isDarkMode ? "bg-[#1C1F20] hover:bg-[#25B8A0]" : "bg-[#EBEEF2] hover:bg-[#EBEEF2]"
              )}
            >
              <Menu className={cn("w-5 h-5", isDarkMode ? "text-[#a5a5a6]" : "text-[#121518CC]")} />
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
              <SheetTitle className={cn(
                "text-left",
                isDarkMode ? themeClasses.text : "text-[#121518CC]"
              )}>
                Navigation
              </SheetTitle>
            </SheetHeader>
            
            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-4 mt-6 pr-2 pl-2">
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = pathname === item.href
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-3 p-3 rounded-lg transition-colors",
                      isActive 
                        ? cn("bg-[#2ED3B7] text-white") 
                        : cn(
                            isDarkMode ? themeClasses.cardBg : "bg-white",
                            "hover:" + (isDarkMode ? themeClasses.inputBg : "bg-gray-50"),
                            isDarkMode ? themeClasses.text : "text-[#121518CC]",
                            transitions.default
                          )
                    )}
                  >
                    <NavigationIcon 
                      icon={item.icon} 
                      size={20} 
                      className={cn(
                        isActive 
                          ? "text-[#2ED3B7]" 
                          : isDarkMode ? "text-[#a5a5a6]" : "text-[#121518CC]"
                      )}
                    />
                    <span className={cn(
                      "font-manrope font-medium",
                      isActive ? "text-white" : (isDarkMode ? themeClasses.text : "text-[#121518CC]")
                    )}>{item.name}</span>
                  </a>
                )
              })}
              
              {/* More dropdown */}
              <div className={cn(
                "flex items-center justify-between p-3 rounded-lg cursor-pointer",
                isDarkMode ? themeClasses.cardBg : "bg-white",
                "hover:" + (isDarkMode ? themeClasses.inputBg : "bg-gray-50"),
                isDarkMode ? themeClasses.text : "text-[#121518CC]",
                transitions.default
              )}>
                <div className="flex items-center space-x-3">
                  <div className={cn("w-5 h-5", isDarkMode ? themeClasses.textSecondary : "text-[#121518CC]")}></div>
                  <span className={cn(
                    "font-manrope font-medium",
                    isDarkMode ? themeClasses.text : "text-[#121518CC]"
                  )}>More</span>
                </div>
                <ChevronDown className={cn("w-4 h-4", isDarkMode ? themeClasses.textSecondary : "text-[#121518CC]")} />
              </div>
            </nav>

            {/* Mobile Actions */}
            <div className="mt-8 space-y-4 pr-2 pl-2">
              {/* Perps-specific mobile actions */}
              {isPerpsPage && (
                <>
                  {/* VIP Button */}
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="sm"
                      className={cn(
                        "w-full flex items-center space-x-2 px-3 py-2 rounded-lg font-medium text-xs",
                        isDarkMode 
                          ? "bg-[#1C1F20] hover:bg-[#25B8A0] text-[#00FFF0]" 
                          : "bg-[#EBEEF2] text-[#009696] border border-[#0000001A] hover:bg-[#EBEEF2] hover:text-[#121518]"
                      )}
                    >
                      <Star className="w-4 h-4" />
                      <span>VIP</span>
                    </Button>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FFB74D] rounded-full flex items-center justify-center">
                      <Info className="w-2 h-2 text-white" />
                    </div>
                  </div>

                  {/* Win $20 Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "w-full flex items-center space-x-2 px-3 py-2 rounded-lg font-medium text-xs",
                      isDarkMode 
                        ? "bg-[#1C1F20] hover:bg-[#25B8A0] text-[#00FFF0]" 
                        : "bg-[#EBEEF2] text-[#009696] border border-[#0000001A] hover:bg-[#EBEEF2] hover:text-[#121518]"
                    )}
                  >
                    <div className="w-4 h-4">
                      <WinIcon isDarkMode={isDarkMode} />
                    </div>
                    <span>Win $20</span>
                  </Button>

                  {/* Deposit Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "w-full flex items-center space-x-2 px-3 py-2 rounded-lg font-medium text-xs",
                      isDarkMode 
                        ? "bg-[#1C1F20] hover:bg-[#25B8A0] text-[#00FFF0]" 
                        : "bg-[#EBEEF2] text-[#009696] border border-[#0000001A] hover:bg-[#EBEEF2] hover:text-[#121518]"
                    )}
                  >
                    <div className="w-4 h-4">
                      <DepositIcon isDarkMode={isDarkMode} />
                    </div>
                    <span>Deposit</span>
                  </Button>

                  {/* Sign in Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "w-full flex items-center space-x-2 px-3 py-2 rounded-lg font-medium text-xs",
                      isDarkMode 
                        ? "bg-[#1C1F20] hover:bg-[#25B8A0] text-[#00FFF0]" 
                        : "bg-[#EBEEF2] text-[#009696] border border-[#0000001A] hover:bg-[#EBEEF2] hover:text-[#121518]"
                    )}
                  >
                    <div className="w-4 h-4">
                      <UserIcon isDarkMode={isDarkMode} />
                    </div>
                    <span>Sign in</span>
                  </Button>
                </>
              )}

              {/* Connect wallet */}
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
              
              {/* Theme toggle */}
              <div className={cn(
                "flex items-center justify-between p-3 rounded-lg border",
                isDarkMode ? "border-[#ffffff19]" : "border-gray-200"
              )}>
                <span className={cn(
                  "text-sm",
                  isDarkMode ? themeClasses.textSecondary : "text-[#121518CC]"
                )}>Theme</span>
                <Button
                  onClick={onThemeToggle}
                  variant="ghost"
                  size="sm"
                  className={cn(
                    isDarkMode 
                      ? "bg-[#1d1e20] hover:bg-[#2d374b]" 
                      : "bg-[#f0f0f0] hover:bg-[#e0e0e0]",
                    isDarkMode ? themeClasses.text : "text-[#121518CC]",
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