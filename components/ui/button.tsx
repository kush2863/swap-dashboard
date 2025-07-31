import React from "react"
import { cn } from "@/lib/utils"
import { transitions } from "@/lib/theme"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

export function Button({ 
  variant = "primary", 
  size = "md", 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center rounded-lg font-manrope font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
  
  const variants = {
    primary: "bg-[#17181A] hover:bg-[#25B8A0] text-[#00FFF0] focus:ring-[#2ED3B7]",
    secondary: "bg-[#2d374b] hover:bg-[#1d1e20] text-[#ffffff] focus:ring-[#2d374b] dark:bg-[#2d374b] dark:hover:bg-[#1d1e20] light:bg-[#ffffff] light:hover:bg-[#f0f0f0] light:text-[#4A4B4D]",
    ghost: "bg-transparent hover:bg-[#1d1e20] text-[#a5a5a6] hover:text-[#ffffff] focus:ring-[#1d1e20]",
    outline: "border border-[#2d374b] bg-transparent hover:bg-[#1d1e20] text-[#ffffff] focus:ring-[#2d374b]"
  }
  
  const sizes = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  }

  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        transitions.default,
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
} 