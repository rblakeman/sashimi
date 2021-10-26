import React, { useEffect, useState } from "react";
import { styled } from "@stitches/react";

import { Content, SideNav } from "./docs";
import {
    theme,
    MODES,
    DEFAULT_MODE,
    ThemeContext,
    ThemeProvider
} from "./library";
import { Text, Button, IconButton } from "./library/components";

const Page = ({ children, ...remainingProps }) => {
    const { theme, mode } = React.useContext(ThemeContext);

    const pageStyles = {
        fontFamily: "sans-serif",
        textAlign: "center",

        display: "flex",
        flexDirection: "row",
        backgroundColor: mode === MODES.DARK && "#000000"
    };

    return (
        <div style={pageStyles} {...remainingProps}>
            {children}
        </div>
    );
};

export default function App() {
    const [currentPage, setCurrentPage] = useState("");

    useEffect(() => {
        // Currently ignores any nested slugs
        const urlPath = window.location.pathname.split("/")[1].toLowerCase();

        if (urlPath && urlPath !== currentPage) {
            setCurrentPage(urlPath);
        }
    }, [window.location.pathname]);

    return (
        <Page className="App">
            <SideNav onRouteChange={setCurrentPage} />
            <Content currentPage={currentPage} />
        </Page>
    );
}
