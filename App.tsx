import {StyleSheet} from 'react-native';
import {useState} from "react";
import ColourTheme from "./src/theme/Types";
import {ThemeContextProvider} from "./src/theme/ThemeContext";
import MainScreen from "./src/MainScreen";

const App = () => {
    const [themePref, setThemePref] = useState(ColourTheme.Types.LIGHT)

    const changeTheme = () => {
        setThemePref(themePref === ColourTheme.Types.LIGHT ? ColourTheme.Types.DARK : ColourTheme.Types.LIGHT)
    }

    return (
        <ThemeContextProvider selectedThemePreference={themePref}>
            <MainScreen changeTheme={changeTheme} />
        </ThemeContextProvider>
    );
}

export default App
