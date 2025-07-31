import React from 'react'
import { cn } from '@/lib/utils'
import { themeColors } from '@/lib/theme'

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'spinner' | 'dots' | 'pulse'
  className?: string
  text?: string
  isDarkMode?: boolean
}

export function Loading({ 
  size = 'md', 
  variant = 'spinner', 
  className,
  text,
  isDarkMode = false 
}: LoadingProps) {
  const themeClasses = isDarkMode ? themeColors.dark : themeColors.light

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  const renderSpinner = () => (
    <div className={cn(
      'animate-spin rounded-full border-2 border-gray-300 border-t-transparent',
      sizeClasses[size],
      isDarkMode ? 'border-gray-600 border-t-white' : 'border-gray-300 border-t-blue-600'
    )} />
  )

  const renderDots = () => (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={cn(
            'animate-bounce rounded-full',
            size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-3 h-3' : 'w-4 h-4',
            isDarkMode ? 'bg-white' : 'bg-gray-600'
          )}
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
    </div>
  )

  const renderPulse = () => (
    <div className={cn(
      'animate-pulse rounded-full',
      sizeClasses[size],
      isDarkMode ? 'bg-white' : 'bg-gray-600'
    )} />
  )

  const renderLoader = () => {
    switch (variant) {
      case 'dots':
        return renderDots()
      case 'pulse':
        return renderPulse()
      default:
        return renderSpinner()
    }
  }

  return (
    <div className={cn('flex flex-col items-center justify-center', className)}>
      {renderLoader()}
      {text && (
        <p className={cn(
          'mt-2 text-sm font-medium',
          themeClasses.textSecondary
        )}>
          {text}
        </p>
      )}
    </div>
  )
} 