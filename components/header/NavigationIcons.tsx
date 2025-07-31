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

  return (
    <div className={className}>
      <Image
        src={iconPath}
        alt={`${icon} icon`}
        width={size}
        height={size}
        className="object-contain"
        style={{
          filter: className?.includes('text-[#121518CC]') ? 'brightness(0) saturate(100%) invert(8%) sepia(10%) saturate(747%) hue-rotate(202deg) brightness(95%) contrast(86%)' : undefined
        }}
      />
    </div>
  )
} 