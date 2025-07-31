'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/Icon'
import { cn } from '@/lib/utils'
import { themeColors, transitions } from '@/lib/theme'
import { useTheme } from '@/contexts/ThemeContext'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  const { isDarkMode, toggleTheme } = useTheme()

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const themeClasses = isDarkMode ? themeColors.dark : themeColors.light

  if (isLoading) {
    return (
      <div className={cn("flex items-center justify-center min-h-screen", themeClasses.background)}>
        <div className="flex flex-col items-center">
          <Icon
            name="logo"
            size={120}
            className="animate-pulse"
          />
          <div className={cn("mt-4 text-lg font-medium", themeClasses.textSecondary)}>Loading...</div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("min-h-screen", themeClasses.background, themeClasses.text, "animate-fade-in")}>
      

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] p-4">
        <div className="text-center mb-8">
          <h1 className={cn("text-4xl font-bold mb-4", themeClasses.text)}>
            Welcome to Kana Labs
          </h1>
          <p className={cn("text-lg mb-8", themeClasses.textSecondary)}>
            Experience seamless cryptocurrency swapping with our advanced platform
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 w-full max-w-2xl">
          {/* Dark Mode Swap */}
          <Link href="/swap">
            <div className={cn(
              themeClasses.cardBg,
              "rounded-2xl p-6 border cursor-pointer",
              themeClasses.border,
              "hover:scale-105",
              transitions.default
            )}>
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-[#2ED3B7] rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🌙</span>
                </div>
                <div>
                  <h3 className={cn("text-xl font-semibold", themeClasses.text)}> Swap</h3>
                  
                </div>
              </div>
              <Button variant="primary" className="w-full">
                Go to  Swap
              </Button>
            </div>
          </Link>

          
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          <div className={cn("text-center p-4", themeClasses.cardBg, "rounded-lg border", themeClasses.border)}>
            <div className="w-12 h-12 bg-[#2ED3B7] rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">⚡</span>
            </div>
            <h4 className={cn("font-semibold mb-2", themeClasses.text)}>Fast Swaps</h4>
            <p className={cn("text-sm", themeClasses.textSecondary)}>Lightning-fast cryptocurrency exchanges</p>
          </div>
          
          <div className={cn("text-center p-4", themeClasses.cardBg, "rounded-lg border", themeClasses.border)}>
            <div className="w-12 h-12 bg-[#2ED3B7] rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">🔒</span>
            </div>
            <h4 className={cn("font-semibold mb-2", themeClasses.text)}>Secure</h4>
            <p className={cn("text-sm", themeClasses.textSecondary)}>Advanced security protocols</p>
          </div>
          
          <div className={cn("text-center p-4", themeClasses.cardBg, "rounded-lg border", themeClasses.border)}>
            <div className="w-12 h-12 bg-[#2ED3B7] rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">🌐</span>
            </div>
            <h4 className={cn("font-semibold mb-2", themeClasses.text)}>Cross-Chain</h4>
            <p className={cn("text-sm", themeClasses.textSecondary)}>Swap across different blockchains</p>
          </div>
        </div>

        {/* Icon Library Link */}
        <div className="mt-8 text-center">
          <Link href="/icons">
            <Button variant="outline" className="text-sm">
              View Icon Library
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer Status */}
      <div className="fixed bottom-4 left-4">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-[#66bb6a] rounded-full"></div>
          <span className={cn(themeClasses.textSecondary, "text-sm")}>Online</span>
        </div>
      </div>
    </div>
  )
}

export default Home