import {useThemeContext} from "./theme/ThemeContext";
import ColourTheme from "./theme/Types";
import {Button, SafeAreaView, StyleSheet, View} from 'react-native'
import LogoWithNameSVG from "./assets/svg/LogoWithNameSVG";

const MainScreen = ({changeTheme}: { changeTheme: () => void }) => {
    const {colourTheme} = useThemeContext()
    const themedStyle = styles(colourTheme)

    return (
        <SafeAreaView style={themedStyle.background}>
            <View style={{flex: 1}}>
                <LogoWithNameSVG/>
            </View>
            <View style={{flex: 1}}>
                <Button title={"Change Theme"} onPress={changeTheme}/>
            </View>
        </SafeAreaView>
    )
}

export default MainScreen

const styles = (theme: ColourTheme.Colours) =>
    StyleSheet.create({
        background: {
            flex: 1,
            backgroundColor: theme.defaultBackground,
        },
    })