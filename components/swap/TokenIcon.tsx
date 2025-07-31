import React from "react"
import Image from "next/image"

interface TokenIconProps {
  token: string
  size?: number
  className?: string
  isDarkMode?: boolean
}

const tokenIcons: Record<string, string> = {
  // Token icons
  "APTOS": "/assets/swap/aptos.svg",
  "BTC": "/assets/swap/ethereum.svg", // Using ethereum as placeholder for BTC
  "ETH": "/assets/swap/ethereum.svg",
  "AVAX": "/assets/swap/avalanche (1).svg",
  "DOT": "/assets/swap/polygon1.svg",
  "ATOM": "/assets/swap/arbitrum (1).svg",
  "NEAR": "/assets/swap/ethereum.svg", // Using ethereum as placeholder
  "SOL": "/assets/swap/solana.svg",
  "SUI": "/assets/swap/sui-sui-logo (1).svg",
  "ZKSYNC": "/assets/swap/zksync.svg",
  "BSC": "/assets/swap/bsc_2.svg",
  
  // Chain icons
  "ethereum": "/assets/swap/ethereum.svg",
  "avalanche": "/assets/swap/avalanche (1).svg",
  "polygon": "/assets/swap/polygon1.svg",
  "arbitrum": "/assets/swap/arbitrum (1).svg",
  "solana": "/assets/swap/solana.svg",
  "sui": "/assets/swap/sui-sui-logo (1).svg",
  "zksync": "/assets/swap/zksync.svg",
  "bsc": "/assets/swap/bsc_2.svg",
  
  // Special icons
  "circle": "/assets/swap/circle.svg",
  "crosschain": "/assets/swap/crosschain.svg",
  "samechain": "/assets/swap/samechain.svg",
  "group": "/assets/swap/Group 1261152699.svg",
}

const tokenColors: Record<string, string> = {
  "BTC": "#f0b90b",
  "ETH": "#627eea",
  "AVAX": "#d64f4a",
  "DOT": "#8247e5",
  "ATOM": "#2d374b",
  "NEAR": "#96bedc",
  "SOL": "#000000",
  "SUI": "#6FBCF0",
  "ZKSYNC": "#000000",
  "BSC": "#F0B90B",
  
  // Chain colors
  "ethereum": "#627eea",
  "avalanche": "#d64f4a",
  "polygon": "#8247e5",
  "arbitrum": "#2d374b",
  "solana": "#000000",
  "sui": "#6FBCF0",
  "zksync": "#000000",
  "bsc": "#F0B90B",
}

export function TokenIcon({ token, size = 24, className, isDarkMode = false }: TokenIconProps) {
  const iconPath = tokenIcons[token] || "/assets/swap/ethereum.svg"
  
  // Apply filter to make white icons visible in light mode
  const getIconStyle = () => {
    if (token === "samechain" && !isDarkMode) {
      return {
        filter: "brightness(0) saturate(100%) invert(40%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0.7) contrast(1)"
      }
    }
    return {}
  }

  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{ 
        width: size, 
        height: size, 
        minWidth: size,
        minHeight: size
      }}
    >
      <Image
        src={iconPath}
        alt={`${token} icon`}
        width={size}
        height={size}
        className="object-contain"
        style={getIconStyle()}
      />
    </div>
  )
} 