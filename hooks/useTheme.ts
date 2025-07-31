import { useCallback, useMemo } from 'react'
import { themeColors, transitions } from '@/lib/theme'
import { ThemeMode } from '@/lib/types'

export function useTheme(isDarkMode: boolean) {
  const themeClasses = useMemo(() => 
    isDarkMode ? themeColors.dark : themeColors.light, 
    [isDarkMode]
  )

  const getThemeClass = useCallback((baseClass: string, darkClass?: string, lightClass?: string) => {
    if (isDarkMode && darkClass) {
      return `${baseClass} ${darkClass}`
    }
    if (!isDarkMode && lightClass) {
      return `${baseClass} ${lightClass}`
    }
    return baseClass
  }, [isDarkMode])

  const getConditionalClass = useCallback((
    condition: boolean, 
    trueClass: string, 
    falseClass: string
  ) => {
    return condition ? trueClass : falseClass
  }, [])

  return {
    isDarkMode,
    themeClasses,
    getThemeClass,
    getConditionalClass,
    transitions
  }
} 