import React from 'react'
import DarkTheme from './DarkTheme'
import LightTheme from './LightTheme'
import ColourTheme from './Types'

export interface ThemeContextType {
    colourTheme: ColourTheme.Colours
    selectedThemePreference: ColourTheme.Types
}

export const ThemeContext = React.createContext<ThemeContextType>({
    colourTheme: LightTheme,
    selectedThemePreference: ColourTheme.Types.LIGHT,
})

export const useThemeContext = (): ThemeContextType => React.useContext(ThemeContext)

export const ThemeContextProvider: React.FC<
    React.PropsWithChildren<{ selectedThemePreference: ColourTheme.Types }>
> = ({ selectedThemePreference, children }): JSX.Element => {
    const colourTheme: ColourTheme.Colours =
        selectedThemePreference === ColourTheme.Types.LIGHT ? LightTheme : DarkTheme

    return (
        <ThemeContext.Provider
            value={{
                colourTheme,
                selectedThemePreference,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}
