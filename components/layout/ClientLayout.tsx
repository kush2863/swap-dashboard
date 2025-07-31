"use client"

import { Header } from "@/components/header/Header"
import { useTheme } from "@/contexts/ThemeContext"

interface ClientLayoutProps {
  children: React.ReactNode
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <>
      <Header isDarkMode={isDarkMode} onThemeToggle={toggleTheme} />
      {children}
    </>
  )
} 