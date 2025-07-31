# Kana Labs Swap Interface

A modern, responsive cryptocurrency swap interface built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🌙 **Dark/Light Theme Toggle** - Seamless theme switching
- 📱 **Responsive Design** - Works on all device sizes
- ⚡ **Component-Based Architecture** - Reusable, maintainable components
- 🎨 **Custom Design System** - Consistent styling with Tailwind CSS
- 🔄 **Same-chain & Cross-chain Swaps** - Support for different swap types
- 🎯 **Proper SVG Integration** - Uses actual SVG icons from the design

## Component Structure

### Core Components

#### UI Components (`/components/ui/`)
- **Button** - Reusable button component with variants (primary, secondary, ghost, outline)
- **Theme System** - Centralized theme configuration with dark/light modes

#### Header Components (`/components/header/`)
- **Header** - Main navigation header with logo, navigation, and actions
- **NavigationIcons** - SVG icon component for header navigation

#### Swap Components (`/components/swap/`)
- **SwapCard** - Main swap interface container
- **TokenInput** - Input field for token amounts with token selector
- **TokenSelector** - Token selection dropdown
- **TokenIcon** - Displays token icons using SVG files
- **TabSelector** - Toggle between same-chain and cross-chain swaps

### Theme System

The application uses a centralized theme system with:

```typescript
// Dark theme colors
dark: {
  background: "bg-[#080a0a]",
  text: "text-[#ffffff]",
  textSecondary: "text-[#a5a5a6]",
  cardBg: "bg-[#111213]",
  inputBg: "bg-[#1d1e20]",
  border: "border-[#1d1e20]",
  // ... more colors
}

// Light theme colors
light: {
  background: "bg-[#ffffff]",
  text: "text-[#111213]",
  textSecondary: "text-[#777879]",
  cardBg: "bg-[#f8f9fa]",
  inputBg: "bg-[#ffffff]",
  border: "border-[#e0e0e0]",
  // ... more colors
}
```

## Pages

### Home Page (`/`)
- Landing page with navigation to swap interfaces
- Theme toggle functionality
- Feature showcase
- Responsive design with hover effects

### Dark Swap Page (`/swap`)
- Dark theme swap interface
- Same-chain swap by default
- All swap functionality

### Light Swap Page (`/light`)
- Light theme swap interface
- Cross-chain swap by default
- Demonstrates theme consistency

## Icon System

The application uses a comprehensive icon system with name-based mapping to SVG files:

### Icon Components

#### General Icon (`/components/ui/Icon.tsx`)
- **Usage**: `<Icon name="logo" size={96} />`
- **Supports**: All icons from `/public` folder

#### Navigation Icon (`/components/header/NavigationIcons.tsx`)
- **Usage**: `<NavigationIcon icon="swap" size={20} />`
- **Supports**: Header navigation icons

#### Token Icon (`/components/swap/TokenIcon.tsx`)
- **Usage**: `<TokenIcon token="ETH" size={32} />`
- **Supports**: Token and chain icons with proper colors

### Available Icons

#### General Icons (`/public/`)
- `logo.svg` - Kana Labs logo
- `file.svg` - File icon
- `globe.svg` - Globe icon
- `vercel.svg` - Vercel logo
- `next.svg` - Next.js logo
- `window.svg` - Window icon

#### Header Icons (`/public/assets/header/`)
- `swap.svg` - Swap functionality
- `trade.svg` - Trading interface
- `perps.svg` - Perpetuals
- `operps.svg` - OPerps
- `learn.svg` - Learning resources
- `bell-01.svg` - Notifications
- `user.svg` - User profile
- `users.svg` - User management

#### Swap Icons (`/public/assets/swap/`)
- `ethereum.svg` - Ethereum token/chain
- `avalanche (1).svg` - Avalanche token/chain
- `polygon1.svg` - Polygon token/chain
- `arbitrum (1).svg` - Arbitrum token/chain
- `solana.svg` - Solana token/chain
- `sui-sui-logo (1).svg` - Sui token/chain
- `zksync.svg` - zkSync token/chain
- `bsc_2.svg` - BSC token/chain
- `circle.svg` - Circle icon
- `crosschain.svg` - Cross-chain icon
- `samechain.svg` - Same-chain icon
- `Group 1261152699.svg` - Group icon

### Icon Library Page

Visit `/icons` to see all available icons with usage examples and code snippets.

## Getting Started

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

## Key Features Implemented

✅ **Component-Based Architecture** - All repetitive elements are components
✅ **Theme System** - Centralized color and style management
✅ **Responsive Design** - Works on mobile, tablet, and desktop
✅ **Hover Transitions** - Smooth animations on all interactive elements
✅ **SVG Integration** - Proper use of design assets
✅ **Dark/Light Themes** - Complete theme switching functionality
✅ **TypeScript** - Full type safety
✅ **Tailwind CSS** - Utility-first styling

## Component Usage Examples

### Button Component
```tsx
<Button variant="primary" size="md" onClick={handleClick}>
  Connect Wallet
</Button>
```

### Token Input
```tsx
<TokenInput
  isDarkMode={isDarkMode}
  label="Pay from"
  placeholder="0.00"
  tokenName="ETH"
  chainName="Ethereum"
  onTokenSelect={handleTokenSelect}
/>
```

### Theme Toggle
```tsx
const [isDarkMode, setIsDarkMode] = useState(true)
const themeClasses = isDarkMode ? themeColors.dark : themeColors.light
```

## Styling Guidelines

- Use the `cn()` utility for conditional classes
- Apply transitions using the `transitions` object
- Use theme colors from the centralized theme system
- Maintain consistent spacing and typography
- Ensure all interactive elements have hover states

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images with Next.js Image component
- Lazy loading for better performance
- Efficient component re-rendering
- Minimal bundle size with tree shaking
