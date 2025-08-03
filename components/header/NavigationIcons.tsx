import React from "react"
import Image from "next/image"

interface NavigationIconProps {
  icon: string
  size?: number
  className?: string
}

const headerIcons: Record<string, string> = {
  "swap": "/assets/header/swap.svg",
  "trade": "/assets/header/trade.svg",
  "perps": "/assets/header/perps.svg",
  "operps": "/assets/header/operps.svg",
  "learn": "/assets/header/learn.svg",
  "bell": "/assets/header/bell-01.svg",
  "user": "/assets/header/user.svg",
  "users": "/assets/header/users.svg",
  "bell-01": "/assets/header/bell-01.svg",
}

export function NavigationIcon({ icon, size = 16, className }: NavigationIconProps) {
  const iconPath = headerIcons[icon.toLowerCase()] || "/assets/header/swap.svg"

  // Determine filter based on className
  const getFilter = () => {
    if (className?.includes('text-[#2ED3B7]')) {
      // Teal color filter
      return 'brightness(0) saturate(100%) invert(85%) sepia(31%) saturate(638%) hue-rotate(118deg) brightness(101%) contrast(101%)'
    } else if (className?.includes('text-[#121518CC]')) {
      // Black color filter
      return 'brightness(0) saturate(100%) invert(8%) sepia(10%) saturate(747%) hue-rotate(202deg) brightness(95%) contrast(86%)'
    } else if (className?.includes('text-[#a5a5a6]')) {
      // Gray color filter
      return 'brightness(0) saturate(100%) invert(67%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(89%) contrast(86%)'
    } else if (className?.includes('text-white')) {
      // White color filter
      return 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)'
    }
    return undefined
  }

  return (
    <div className={className}>
      <Image
        src={iconPath}
        alt={`${icon} icon`}
        width={size}
        height={size}
        className="object-contain"
        style={{
          filter: getFilter()
        }}
      />
    </div>
  )
} 