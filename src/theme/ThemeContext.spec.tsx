import '@testing-library/jest-native/extend-expect'
import { render, screen } from '@testing-library/react-native'
import { Text, View } from 'react-native'
import DarkTheme from '../ColourThemes/DarkTheme'
import LightTheme from '../ColourThemes/LightTheme'
import ColourTheme from '../Types/ThemeTypes'
import { ThemeContextProvider, useThemeContext } from './ThemeContext'

const ContextTestingComponent = () => {
    const { colourTheme, selectedThemePreference } = useThemeContext()

    return (
        <View>
            <Text testID='themePref'>{selectedThemePreference.toString()}</Text>
            <Text testID='colourTheme'>{JSON.stringify(colourTheme)}</Text>
        </View>
    )
}

describe('ThemeContext', () => {
    it.each`
        inputTheme                 | expectedColourTheme
        ${ColourTheme.Types.LIGHT} | ${JSON.stringify(LightTheme)}
        ${ColourTheme.Types.DARK}  | ${JSON.stringify(DarkTheme)}
    `(
        'renders a themeContext with correct props when input theme is $inputTheme',
        async ({ inputTheme, expectedColourTheme }) => {
            render(
                <ThemeContextProvider selectedThemePreference={inputTheme}>
                    <ContextTestingComponent />
                </ThemeContextProvider>,
            )

            const themePref = screen.getByTestId('themePref')
            const colourTheme = screen.getByTestId('colourTheme')

            expect(themePref).toHaveTextContent(inputTheme)
            expect(colourTheme).toHaveTextContent(expectedColourTheme)
        },
    )
})
