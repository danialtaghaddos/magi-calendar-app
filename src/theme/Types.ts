/* eslint-disable @typescript-eslint/no-namespace */
export namespace ColourTheme {
    export interface Colours {
        magiPurple: string
        magiYellow: string
        magiMagenta: string
        defaultBackground: string
    }

    export enum Types {
        DARK,
        LIGHT
    }
}

export default ColourTheme