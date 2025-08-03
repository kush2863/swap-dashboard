'use client'
import React from 'react'
import { ChevronDown, Download, ChevronRight, ArrowRightLeft, Upload, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import { themeColors, transitions } from '@/lib/theme'
import { 
  AccountInfo, 
  PositionInfo,
  TradingMode,
  OrderType,
  PositionType,
  Direction
} from '@/lib/types'

interface TradingPanelProps {
  isDarkMode: boolean
  accountInfo: AccountInfo
  positionInfo: PositionInfo
  selectedMode: TradingMode
  selectedOrderType: OrderType
  selectedPosition: PositionType
  selectedDirection: Direction
  leverage: string
  price: string
  amount: string
  sliderValue: number
  tpslEnabled: boolean
  onModeChange: (mode: TradingMode) => void
  onOrderTypeChange: (type: OrderType) => void
  onPositionChange: (position: PositionType) => void
  onDirectionChange: (direction: Direction) => void
  onLeverageChange: () => void
  onPriceChange: (price: string) => void
  onAmountChange: (amount: string) => void
  onSliderChange: (value: number) => void
  onTpslToggle: (enabled: boolean) => void
  onTrade: () => void
}

export default function TradingPanel({
  isDarkMode,
  accountInfo,
  positionInfo,
  selectedMode,
  selectedOrderType,
  selectedPosition,
  selectedDirection,
  leverage,
  price,
  amount,
  sliderValue,
  tpslEnabled,
  onModeChange,
  onOrderTypeChange,
  onPositionChange,
  onDirectionChange,
  onLeverageChange,
  onPriceChange,
  onAmountChange,
  onSliderChange,
  onTpslToggle,
  onTrade
}: TradingPanelProps) {
  const themeClasses = isDarkMode ? themeColors.dark : themeColors.light

  return (
    <div className={cn(
      "flex flex-col -mt-3 gap-3 w-full max-w-[330px] h-auto p-3",
      isDarkMode ? "text-white" : "text-[#121518CC]"
    )}>
      {/* Account Info */}
      <div className={cn(
        "flex flex-row justify-between items-center w-full border rounded-lg p-3",
        isDarkMode ? themeClasses.borderSecondary : "border-gray-200 bg-white"
      )}>
        <div className="flex flex-col">
          <div className="flex items-center">
            <span className={cn(
              "text-xs",
              isDarkMode ? themeClasses.textSecondary : "text-[#121518CC]"
            )}>{accountInfo.profile}</span>
            <ChevronDown className={cn(
              "w-3 h-3 ml-1",
              isDarkMode ? "" : "text-[#EBEEF2]"
            )} />
          </div>
          <span className={cn(
            "text-sm font-bold",
            isDarkMode ? themeClasses.text : "text-[#121518CC]"
          )}>{accountInfo.balance}</span>
        </div>
        <div className="flex gap-2">
          <button className={cn(
            "p-2 border rounded transition-colors",
            isDarkMode ? "border-[#ffffff19] hover:bg-[#1c1f1f]" : "border-gray-200 hover:bg-gray-50",
            transitions.default
          )}>
            <Upload className="w-4 h-4 text-gray-400" />
          </button>
          <button className={cn(
            "p-2 border rounded transition-colors",
            isDarkMode ? "border-[#ffffff19] hover:bg-[#1c1f1f]" : "border-gray-200 hover:bg-gray-50",
            transitions.default
          )}>
            <Download className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Mode Selection */}
      <div className="flex gap-2 w-full">
        <button 
          className={cn(
            "flex-1 text-xs font-bold py-2 px-4 border rounded-lg transition-colors",
            isDarkMode ? "border-[#ffffff19]" : "border-gray-200",
            transitions.default,
            selectedMode === 'isolated' 
              ? (isDarkMode ? themeClasses.text : "text-[#121518CC]")
              : (isDarkMode ? themeClasses.textSecondary : "text-[#121518CC]")
          )}
          style={{ backgroundColor: selectedMode === 'isolated' ? (isDarkMode ? '#1c1f1f' : '#f3f4f6') : 'transparent' }}
          onClick={() => onModeChange('isolated')}
        >
          Isolated
        </button>
        <button 
          className={cn(
            "flex-1 text-xs font-bold py-2 px-4 border rounded-lg transition-colors",
            isDarkMode ? "border-[#ffffff19]" : "border-gray-200",
            transitions.default,
            selectedMode === 'hedge' 
              ? (isDarkMode ? themeClasses.text : "text-[#121518CC]")
              : (isDarkMode ? themeClasses.textSecondary : "text-[#121518CC]")
          )}
          style={{ backgroundColor: selectedMode === 'hedge' ? (isDarkMode ? '#1c1f1f' : '#f3f4f6') : 'transparent' }}
          onClick={() => onModeChange('hedge')}
        >
          Hedge
        </button>
      </div>

      {/* Trading Interface */}
      <div className={cn(
        "flex flex-col w-full border rounded-lg overflow-hidden",
        isDarkMode ? themeClasses.borderSecondary : "border-gray-200 bg-white"
      )}>
        {/* Position Tabs */}
        <div className={cn(
          "flex border-b",
          isDarkMode ? "border-[#ffffff19]" : "border-gray-200"
        )}>
          <div 
            className={cn(
              "flex-1 py-2 px-4 text-center cursor-pointer transition-colors",
              transitions.default,
              selectedPosition === 'open' 
                ? cn(
                    'border-b-2 border-[#00fff0]',
                    isDarkMode ? 'text-white' : 'text-[#121518CC]'
                  )
                : cn(
                    isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-[#121518CC] hover:text-[#2ED3B7]'
                  )
            )}
            style={{ backgroundColor: selectedPosition === 'open' ? (isDarkMode ? '#1c1f1f' : '#f3f4f6') : 'transparent' }}
            onClick={() => onPositionChange('open')}
          >
            <span className="text-xs font-bold">Open</span>
          </div>
          <div 
            className={cn(
              "flex-1 py-2 px-4 text-center cursor-pointer transition-colors",
              transitions.default,
              selectedPosition === 'close' 
                ? cn(
                    'border-b-2 border-[#00fff0]',
                    isDarkMode ? 'text-white' : 'text-[#121518CC]'
                  )
                : cn(
                    isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-[#121518CC] hover:text-[#2ED3B7]'
                  )
            )}
            style={{ backgroundColor: selectedPosition === 'close' ? (isDarkMode ? '#1c1f1f' : '#f3f4f6') : 'transparent' }}
            onClick={() => onPositionChange('close')}
          >
            <span className="text-xs font-bold">Close</span>
          </div>
        </div>

        {/* Order Type Selection */}
        <div className={cn(
          "flex items-center justify-between p-3 border-b",
          isDarkMode ? "border-[#ffffff19]" : "border-gray-200"
        )}>
          <div className="flex gap-4">
            <button 
              className={cn(
                "text-xs font-bold transition-colors",
                transitions.default,
                selectedOrderType === 'market' 
                  ? cn(
                      'border-b border-[#00fff0]',
                      isDarkMode ? 'text-white' : 'text-[#121518CC]'
                    )
                  : cn(
                      isDarkMode ? 'text-gray-400' : 'text-[#121518CC]'
                    )
              )}
              onClick={() => onOrderTypeChange('market')}
            >
              Market
            </button>
            <button 
              className={cn(
                "text-xs font-bold transition-colors",
                transitions.default,
                selectedOrderType === 'limit' 
                  ? cn(
                      'border-b border-[#00fff0]',
                      isDarkMode ? 'text-white' : 'text-[#121518CC]'
                    )
                  : cn(
                      isDarkMode ? 'text-gray-400' : 'text-[#121518CC]'
                    )
              )}
              onClick={() => onOrderTypeChange('limit')}
            >
              Limit
            </button>
          </div>
          <button 
            className={cn(
              "flex items-center gap-1 text-xs font-bold text-[#00fff0] rounded px-3 py-1 transition-colors",
              transitions.default,
              isDarkMode ? "hover:bg-[#1c1f1f]" : "hover:bg-gray-100"
            )}
            style={{ backgroundColor: isDarkMode ? '#1c1f1f' : '#f3f4f6' }}
            onClick={onLeverageChange}
          >
            {leverage}
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        {/* Trading Form */}
        <div className="flex flex-col gap-3 p-3">
          {/* Price Input */}
          <div className={cn(
            "flex flex-col w-full border rounded-lg",
            isDarkMode ? "bg-[#121414] border-[#ffffff19]" : "bg-[#F7F8FA] border-gray-200"
          )}>
            <div className="flex justify-between ] items-center px-3 py-1 ">
              <span className={cn(
                "text-[8px]",
                isDarkMode ? "text-gray-400" : "text-[#121518CC]"
              )}>Price</span>
              <span className="text-[8px] font-bold text-[#00fff0]">Mid</span>
            </div>
            <div className={cn(
              "flex items-center border rounded-lg mx-2 mb-2 px-3 py-2",
              isDarkMode ? "border-[#ffffff19] bg-[#080A0A]" : "border-gray-200 bg-white"
            )}>
              <input 
                type="text" 
                value={price}
                onChange={(e) => onPriceChange(e.target.value)}
                className={cn(
                  "flex-1 text-sm bg-transparent border-none outline-none",
                  isDarkMode ? "text-white" : "text-[#121518CC]"
                )}
              />
              <span className={cn(
                "text-xs font-bold",
                isDarkMode ? "text-gray-400" : "text-[#121518CC]"
              )}>USDT</span>
            </div>
          </div>

          {/* Amount Input */}
          <div className={cn(
            "flex flex-col w-full border rounded-lg",
            isDarkMode ? "bg-[#121414] border-[#ffffff19]" : "bg-[#F7F8FA] border-gray-200"
          )}>
            <div className="px-3">
              <span className={cn(
                "text-[8px]",
                isDarkMode ? "text-gray-400" : "text-[#121518CC]"
              )}>Amount</span>
            </div>
            <div className={cn(
              "flex items-center border rounded-lg mx-2 mb-2 px-3 py-2",
              isDarkMode ? "border-[#ffffff19] bg-[#080A0A]" : "border-gray-200 bg-white"
            )}>
              <input 
                type="text" 
                value={amount}
                onChange={(e) => onAmountChange(e.target.value)}
                className={cn(
                  "flex-1 text-sm bg-transparent border-none outline-none",
                  isDarkMode ? "text-white" : "text-[#121518CC]"
                )}
                placeholder="0.00"
              />
              <div className="flex items-center gap-1 -ml-4">
                <span className={cn(
                  "text-xs font-bold",
                  isDarkMode ? "text-white" : "text-[#121518CC]"
                )}>APT</span>
                <ArrowRightLeft className={cn(
                  "w-3 h-3",
                  isDarkMode ? "text-white" : "text-[#121518CC]"
                )} />
              </div>
            </div>
          </div>

          {/* Slider */}
          <div className={cn(
            "flex items-center gap-2 border rounded-lg p-3",
            isDarkMode ? "bg-[#121414] border-[#ffffff19]" : "bg-[#F7F8FA] border-gray-200"
          )}>
            <div className={cn(
              "flex-1 rounded-lg p-2",
              isDarkMode ? "border-[#ffffff19] bg-[#121414]" : "border-gray-200 bg-white"
            )}>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={sliderValue}
                onChange={(e) => onSliderChange(Number(e.target.value))}
                className="w-full h-1 rounded-lg appearance-none cursor-pointer slider"
                style={{ backgroundColor: isDarkMode ? '#1c1f1f' : '#e5e7eb' }}
              />
            </div>
            <div className={cn(
              "flex items-center gap-1 border mt-2 rounded-lg px-2 py-1",
              isDarkMode ? "border-[#ffffff19] bg-[#080A0A]" : "border-gray-200 bg-white"
            )}>
              <span className={cn(
                "text-xs",
                isDarkMode ? "text-white" : "text-[#121518CC]"
              )}>{sliderValue}</span>
              <span className={cn(
                "text-xs",
                isDarkMode ? "text-gray-400" : "text-[#121518CC]"
              )}>%</span>
            </div>
          </div>

          {/* Buy/Sell Info */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <span className={cn(
                "text-xs font-thin",
                isDarkMode ? "text-gray-400" : "text-[#121518CC]"
              )}>Buy</span>
              <span className={cn(
                "text-xs font-bold",
                isDarkMode ? "text-gray-300" : "text-[#121518CC]"
              )}>0.049 BTC</span>
            </div>
            <div className="flex items-center gap-1">
              <span className={cn(
                "text-xs font-thin",
                isDarkMode ? "text-gray-400" : "text-[#121518CC]"
              )}>Sell</span>
              <span className={cn(
                "text-xs font-bold",
                isDarkMode ? "text-gray-300" : "text-[#121518CC]"
              )}>0.049 BTC</span>
            </div>
          </div>

          {/* TP/SL Section */}
          <div className={cn(
            "flex items-center justify-between border rounded-lg p-3",
            isDarkMode ? "bg-[#121414] border-[#ffffff19]" : "bg-[#F7F8FA] border-gray-200"
          )}>
            <div className="flex items-center gap-2">
              <div 
                className={cn(
                  "w-4 h-4 border rounded cursor-pointer transition-colors",
                  isDarkMode ? "border-[#ffffff19]" : "border-gray-200",
                  transitions.default,
                  tpslEnabled ? 'bg-[#00fff0]' : (isDarkMode ? 'bg-[#1c1f1f]' : 'bg-white')
                )}
                onClick={() => onTpslToggle(!tpslEnabled)}
              />
              <span className={cn(
                "text-xs",
                isDarkMode ? "text-white" : "text-[#121518CC]"
              )}>TP/SL</span>
            </div>
            <div className="flex items-center gap-2">
              <button 
                className={cn(
                  "text-xs px-2 font-thin py-1 rounded transition-colors",
                  transitions.default,
                  selectedDirection === 'long' 
                    ? cn(
                        isDarkMode ? 'text-white' : 'text-[#121518CC]'
                      )
                    : cn(
                        isDarkMode ? 'text-gray-400' : 'text-[#121518CC]'
                      )
                )}
                style={{ backgroundColor: selectedDirection === 'long' ? (isDarkMode ? '#1c1f1f' : '#f3f4f6') : 'transparent' }}
                onClick={() => onDirectionChange('long')}
              >
                Long
              </button>
              <button 
                className={cn(
                  "text-xs px-2 font-thin py-1 rounded transition-colors",
                  transitions.default,
                  selectedDirection === 'short' 
                    ? cn(
                        isDarkMode ? 'text-white' : 'text-[#121518CC]'
                      )
                    : cn(
                        isDarkMode ? 'text-gray-400' : 'text-[#121518CC]'
                      )
                )}
                style={{ backgroundColor: selectedDirection === 'short' ? (isDarkMode ? '#1c1f1f' : '#f3f4f6') : 'transparent' }}
                onClick={() => onDirectionChange('short')}
              >
                Short
              </button>
            </div>
          </div>

          {/* Sign In Button */}
          <button 
            className={cn(
              "w-full py-3 border border-[#00fff0] text-[#00fff0] font-bold text-sm rounded-xl hover:bg-[#00fff0]/10 transition-colors shadow-[0px_10px_8px_0px_rgba(0,255,255,0.1),0px_4px_8px_0px_rgba(0,0,0,0.15),0px_5px_1px_0px_rgba(14,147,132,1)]",
              transitions.default
            )}
            onClick={onTrade}
          >
            Sign in
          </button>

          {/* Position Info */}
          <div className="flex flex-col gap-2 mt-2 font-bold">
            <div className="flex justify-between items-center">
              <span className={cn(
                "text-xs",
                 "text-gray-400" 
              )}>{positionInfo.liquidationPrice}</span>
              <span className={cn(
                "text-xs font-bold underline",
                isDarkMode ? "text-gray-500" : "text-gray-300"
              )}>Liq</span>
              <span className={cn(
                "text-xs",
                isDarkMode ? "text-gray-300" : "text-gray-400"
              )}>{positionInfo.liquidationPrice}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className={cn(
                "text-xs",
                isDarkMode ? "text-gray-300" : "text-gray-400"
              )}>{positionInfo.value}</span>
              <span className={cn(
                "text-xs font-bold underline",
                isDarkMode ? "text-gray-500" : "text-gray-300"
              )}>Value</span>
              <span className={cn(
                "text-xs",
                isDarkMode ? "text-gray-300" : "text-gray-400"
              )}>{positionInfo.value}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className={cn(
                "text-xs",
                isDarkMode ? "text-gray-300" : "text-gray-400"
              )}>{positionInfo.margin}</span>
              <span className={cn(
                "text-xs font-bold underline",
                isDarkMode ? "text-gray-500" : "text-gray-300"
              )}>Margin</span>
              <span className={cn(
                "text-xs",
                isDarkMode ? "text-gray-300" : "text-gray-400"
              )}>{positionInfo.margin}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className={cn(
                "text-xs",
                isDarkMode ? "text-gray-300" : "text-gray-400"
              )}>{positionInfo.slippage}</span>
              <span className={cn(
                "text-xs font-bold underline",
                isDarkMode ? "text-gray-500" : "text-gray-300"
              )}>Slippage</span>
              <span className={cn(
                "text-xs",
                isDarkMode ? "text-gray-300" : "text-gray-400"
              )}>{positionInfo.slippage}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className={cn(
                "text-xs underline",
                isDarkMode ? "text-gray-500" : "text-gray-400"
              )}>Estimated fees</span>
              <span className={cn(
                "text-xs font-bold",
                isDarkMode ? "text-gray-300" : "text-gray-400"
              )}>0.035% / 0.010%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Account Overview */}
      <div className="flex flex-col gap-2">
        <div className="px-2">
          <span className={cn(
            "text-sm font-bold",
            isDarkMode ? themeClasses.text : "text-gray-400"
          )}>Account Overview</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center px-2">
            <span className={cn(
              "text-xs font-bold underline",
              isDarkMode ? "text-gray-400" : "text-gray-400"
            )}>Account Equity</span>
            <span className={cn(
              "text-xs font-bold",
              isDarkMode ? "text-gray-300" : "text-gray-400"
            )}>{accountInfo.equity}</span>
          </div>
          <div className="flex justify-between items-center px-2">
            <span className={cn(
              "text-xs font-bold underline",
              isDarkMode ? "text-gray-400" : "text-gray-400"
            )}>Balance</span>
            <span className={cn(
              "text-xs font-bold",
              isDarkMode ? "text-gray-300" : "text-gray-400"
            )}>{accountInfo.equity}</span>
          </div>
          <div className="flex justify-between items-center px-2">
            <span className={cn(
              "text-xs font-bold underline",
              isDarkMode ? "text-gray-400" : "text-gray-400"
            )}>Balance available to trade</span>
            <span className={cn(
              "text-xs font-bold",
              isDarkMode ? "text-gray-300" : "text-gray-400"
            )}>{accountInfo.availableBalance}</span>
          </div>
          <div className="flex justify-between items-center px-2">
            <span className={cn(
              "text-xs font-bold underline",
              isDarkMode ? "text-gray-400" : "text-gray-400"
            )}>Unrealised PnL</span>
            <span className={cn(
              "text-xs font-bold",
              isDarkMode ? "text-gray-300" : "text-gray-400"
            )}>{accountInfo.unrealizedPnL}</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #00fff0;
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #00fff0;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  )
} 