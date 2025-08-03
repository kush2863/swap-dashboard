"use client"

import { Header } from "@/components/header/Header"
import { useTheme } from "@/contexts/ThemeContext"
import { useEffect } from "react"

interface ClientLayoutProps {
  children: React.ReactNode
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const { isDarkMode, toggleTheme } = useTheme()

  // Apply dark theme class to HTML element
  useEffect(() => {
    const htmlElement = document.documentElement
    if (isDarkMode) {
      htmlElement.classList.add('dark')
    } else {
      htmlElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <>
      <Header isDarkMode={isDarkMode} onThemeToggle={toggleTheme} />
      {children}
    </>
  )
} 