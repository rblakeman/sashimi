import React, { useContext } from "react";
import PropTypes from "prop-types";

import * as THEME from "../constants";
import { ThemeContext } from "../theme";
import { rems, color } from "../utils";

export const Text = (props) => {
    const { bold, semibold, light, size, ...remainingProps } = props;
    const { theme, mode } = useContext(ThemeContext);

    const textStyles = {
        color: color("text", theme, mode),
        fontWeight: "400", // normal
        margin: `${rems("8px 0px")}`
    };

    if (bold) {
        textStyles.fontWeight = "900";
    } else if (semibold) {
        textStyles.fontWeight = "600";
    } else if (light) {
        textStyles.fontWeight = "100";
    }

    switch (size) {
        case "title":
            textStyles.fontSize = `${rems("54px")}`;
            break;
        case "header":
            textStyles.fontSize = `${rems("36px")}`;
            break;
        case "description":
            textStyles.fontSize = `${rems("24px")}`;
            break;
        default:
        case "standard":
            textStyles.fontSize = `${rems("16px")}`;
            break;
        case "small":
            textStyles.fontSize = `${rems("12px")}`;
            break;
    }

    return (
        <p style={textStyles} {...remainingProps}>
            {props.children}
        </p>
    );
};

Text.propTypes = {
    bold: PropTypes.bool,
    color: PropTypes.string,
    light: PropTypes.bool,
    semibold: PropTypes.bool,
    size: PropTypes.string
};

Text.defaultProps = {
    bold: false,
    color: THEME.BLACK,
    light: false,
    semibold: false,
    size: "standard"
};
