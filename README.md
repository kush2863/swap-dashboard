# Kana Labs Swap Interface

A modern, responsive cryptocurrency swap interface built with Next.js, TypeScript, and Tailwind CSS.

## ✨ Features

- 🌙 **Dark/Light Theme Toggle** - Seamless theme switching
- 📱 **Responsive Design** - Works on all device sizes
- 🔗 **Web3 Wallet Integration** - MetaMask and other wallet support
- 🔄 **Same-chain & Cross-chain Swaps** - Support for different swap types
- 🚀 **Performance Optimized** - Memoization, lazy loading, and efficient rendering
- 🛡️ **Error Handling** - Graceful error boundaries and user feedback
- 📦 **Type Safety** - Full TypeScript implementation with strict typing

## 🚀 Performance Optimizations

### **React Performance**
- ✅ **useMemo** for expensive computations (token icons, balance display)
- ✅ **useCallback** for event handlers to prevent unnecessary re-renders
- ✅ **React.memo** for component memoization where beneficial
- ✅ **Lazy loading** for components and routes

### **Code Organization**
- ✅ **Centralized Types** (`lib/types.ts`) - Single source of truth for TypeScript interfaces
- ✅ **Constants Management** (`lib/constants.ts`) - Configuration values and magic numbers
- ✅ **Custom Hooks** - Reusable logic (`useWallet`, `useTheme`)
- ✅ **Error Boundaries** - Graceful error handling with user-friendly fallbacks

### **Bundle Optimization**
- ✅ **Tree shaking** - Unused code elimination
- ✅ **Dynamic imports** - Code splitting for better initial load times
- ✅ **Image optimization** - Next.js Image component with proper sizing
- ✅ **SVG optimization** - Inline SVGs for better performance

## 🏗️ Architecture

### **Core Components**
- **UI Components** (`/components/ui/`) - Button, Loading, ErrorBoundary, Theme System
- **Header Components** (`/components/header/`) - Navigation with logo and actions
- **Swap Components** (`/components/swap/`) - Complete swap interface with wallet integration

### **Custom Hooks** (`/hooks/`)
- **useWallet** - Web3 wallet connection and management
- **useTheme** - Theme utilities and conditional styling

### **Type Definitions** (`/lib/types.ts`)
- **EthereumProvider** - Web3 provider interface
- **WalletState** - Wallet connection state
- **TokenType** - Supported token types
- **SwapType** - Swap operation types
- **Component Props** - Reusable prop interfaces

### **Constants** (`/lib/constants.ts`)
- **SUPPORTED_TOKENS** - Available cryptocurrency tokens
- **NAVIGATION_ITEMS** - Header navigation configuration
- **WALLET_CONSTANTS** - Wallet-related configuration
- **UI_CONSTANTS** - UI configuration values
- **ERROR_MESSAGES** - Centralized error messages

## 🎨 Theme System

```typescript
// Dark theme colors
dark: {
  background: "bg-[#080a0a]",
  text: "text-[#ffffff]",
  textSecondary: "text-[#a5a5a6]",
  cardBg: "bg-[#111213]",
  inputBg: "bg-[#1d1e20]",
  border: "border-[#1d1e20]",
}

// Light theme colors
light: {
  background: "bg-[#ffffff]",
  text: "text-[#111213]",
  textSecondary: "text-[#777879]",
  cardBg: "bg-[#f8f9fa]",
  inputBg: "bg-[#ffffff]",
  border: "border-[#e0e0e0]",
}
```

## 🔗 Web3 Integration



## 📱 Pages

### **Home Page** (`/`)
- Landing page with navigation to swap interfaces
- Theme toggle functionality
- Feature showcase

### **Swap Page** (`/swap`)
- Complete swap interface with wallet integration
- Same-chain and cross-chain swap support
- Real-time balance display
- Collapsible transaction details

## 🎯 Icon System

The application uses a comprehensive icon system with name-based mapping to SVG files:

### **Icon Components**
- **General Icon** (`/components/ui/Icon.tsx`) - `<Icon name="logo" size={96} />`
- **Navigation Icon** (`/components/header/NavigationIcons.tsx`) - `<NavigationIcon icon="swap" size={20} />`
- **Token Icon** (`/components/swap/TokenIcon.tsx`) - `<TokenIcon token="ETH" size={32} />`

### **Available Icons**
- **General Icons** (`/public/`) - logo, file, globe, vercel, next, window
- **Header Icons** (`/public/assets/header/`) - swap, trade, perps, operps, learn, bell, user, users
- **Swap Icons** (`/public/assets/swap/`) - ethereum, avalanche, polygon, arbitrum, solana, sui, zksync, bsc, circle, crosschain, samechain, settings

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

## 💻 Component Usage Examples

### **Button Component**
```tsx
<Button variant="primary" size="md" onClick={handleClick}>
  Connect Wallet
</Button>
```

### **Loading Component**
```tsx
<Loading 
  size="md" 
  variant="spinner" 
  text="Connecting wallet..." 
  isDarkMode={isDarkMode} 
/>
```

### **Error Boundary**
```tsx
<ErrorBoundary fallback={<CustomErrorComponent />}>
  <YourComponent />
</ErrorBoundary>
```

### **Token Input with Wallet Integration**
```tsx
<TokenInput
  isDarkMode={isDarkMode}
  label="Pay from"
  placeholder="0.00"
  tokenName="ETH"
  chainName="Ethereum"
  onTokenSelect={handleTokenSelect}
  isWalletConnected={isWalletConnected}
  walletAddress={walletAddress}
  onConnectWallet={connectWallet}
/>
```

### **Custom Hook Usage**
```tsx
const { isWalletConnected, walletAddress, connectWallet } = useWallet()
const { themeClasses, getThemeClass } = useTheme(isDarkMode)
```

## 📋 Key Features Implemented

✅ **Component-Based Architecture** - All repetitive elements are components
✅ **Theme System** - Centralized color and style management
✅ **Responsive Design** - Works on mobile, tablet, and desktop
✅ **Hover Transitions** - Smooth animations on all interactive elements
✅ **SVG Integration** - Proper use of design assets
✅ **Dark/Light Themes** - Complete theme switching functionality
✅ **TypeScript** - Full type safety with strict interfaces
✅ **Tailwind CSS** - Utility-first styling
✅ **Web3 Integration** - Wallet connection and balance fetching
✅ **Performance Optimizations** - Memoization and efficient rendering
✅ **Error Handling** - Graceful error boundaries and user feedback
✅ **Code Organization** - Centralized types, constants, and hooks

## 🎨 Styling Guidelines

- Use the `cn()` utility for conditional classes
- Apply transitions using the `transitions` object
- Use theme colors from the centralized theme system
- Maintain consistent spacing and typography
- Ensure all interactive elements have hover states
- Use the `useTheme` hook for conditional styling


