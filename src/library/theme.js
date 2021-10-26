import React, { useState, useEffect } from "react";

import * as CONSTANTS from "./constants";

export const theme = {
    dark: {
        border: CONSTANTS.WHITE,
        text: {
            primary: CONSTANTS.WHITE,
            title: CONSTANTS.WHITE,
            description: CONSTANTS.WHITE
        },
        background: CONSTANTS.BLACK
    },
    light: {
        border: CONSTANTS.BLACK,
        text: {
            primary: CONSTANTS.BLACK,
            title: "#333333",
            description: "#666666"
        },
        background: CONSTANTS.WHITE
    }
};

export const MODES = {
    LIGHT: "light",
    DARK: "dark"
};

export const DEFAULT_MODE = MODES.LIGHT;

export const ThemeContext = React.createContext("light");

export const ThemeProvider = ({ children }) => {
    const [currentMode, setCurrentMode] = useState(DEFAULT_MODE);

    // // On mount, read the preferred theme from the persistence
    // React.useEffect(() => {
    //   const isDark = localStorage.getItem('dark') === 'true'
    //   setDark(isDark)
    // }, [dark])

    const changeMode = () => {
        if (currentMode === MODES.LIGHT) {
            setCurrentMode(MODES.DARK);

            return;
        }
        setCurrentMode(MODES.LIGHT);
    };

    return (
        <ThemeContext.Provider value={{ theme, mode: currentMode, changeMode }}>
            {children}
        </ThemeContext.Provider>
    );
};
