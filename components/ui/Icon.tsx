import React from "react"
import Image from "next/image"

interface IconProps {
  name: string
  size?: number
  className?: string
}

const publicIcons: Record<string, string> = {
  // General icons
  "logo": "/logo.svg",
  "file": "/file.svg",
  "globe": "/globe.svg",
  "vercel": "/vercel.svg",
  "next": "/next.svg",
  "window": "/window.svg",
  
  // Header icons
  "swap": "/assets/header/swap.svg",
  "trade": "/assets/header/trade.svg",
  "perps": "/assets/header/perps.svg",
  "operps": "/assets/header/operps.svg",
  "learn": "/assets/header/learn.svg",
  "bell": "/assets/header/bell-01.svg",
  "bell-01": "/assets/header/bell-01.svg",
  "user": "/assets/header/user.svg",
  "users": "/assets/header/users.svg",
  
  // Swap icons
  "ethereum": "/assets/swap/ethereum.svg",
  "avalanche": "/assets/swap/avalanche (1).svg",
  "polygon": "/assets/swap/polygon1.svg",
  "arbitrum": "/assets/swap/arbitrum (1).svg",
  "solana": "/assets/swap/solana.svg",
  "sui": "/assets/swap/sui-sui-logo (1).svg",
  "zksync": "/assets/swap/zksync.svg",
  "bsc": "/assets/swap/bsc_2.svg",
  "circle": "/assets/swap/circle.svg",
  "crosschain": "/assets/swap/crosschain.svg",
  "samechain": "/assets/swap/samechain.svg",
  "group": "/assets/swap/Group 1261152699.svg",
  
  // Token aliases
  "BTC": "/assets/swap/ethereum.svg",
  "ETH": "/assets/swap/ethereum.svg",
  "AVAX": "/assets/swap/avalanche (1).svg",
  "DOT": "/assets/swap/polygon1.svg",
  "ATOM": "/assets/swap/arbitrum (1).svg",
  "NEAR": "/assets/swap/ethereum.svg",
  "SOL": "/assets/swap/solana.svg",
  "SUI": "/assets/swap/sui-sui-logo (1).svg",
  "ZKSYNC": "/assets/swap/zksync.svg",
  "BSC": "/assets/swap/bsc_2.svg",
}

export function Icon({ name, size = 24, className }: IconProps) {
  const iconPath = publicIcons[name] || "/file.svg"

  return (
    <Image
      src={iconPath}
      alt={`${name} icon`}
      width={size}
      height={size}
      className={className}
    />
  )
} 