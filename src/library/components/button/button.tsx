import React, { useState } from 'react';

import * as THEME from '../../theme/constants';
import { rems } from '../../theme/utils';
import { FONT_SIZES, FontSizes } from '../../style';
// import type { FontSizes } from '../../style';

const PRIMARY = 'primary';
const SECONDARY = 'secondary';
const FIDUCIARY = 'fiduciary';
const TERTIARY = 'tertiary';

type ButtonProps = {
    children: React.ReactNode;
    fontSize: FontSizes;
    type: typeof PRIMARY | typeof SECONDARY | typeof FIDUCIARY | typeof TERTIARY;
};
export const Button = ({
    children,
    fontSize = FONT_SIZES.MEDIUM,
    type = PRIMARY,
    ...remainingProps
}: ButtonProps) => {
    const [hover, setHover] = useState(false);

    type ButtonStyles = {
        backgroundColor?: string;
        border: string;
        borderColor?: string;
        borderRadius: string;
        color: string;
        cursor: string;
        fontSize?: string;
        margin: string;
        padding: string;
        width: string;
        height: string;
        minWidth: string;
    };
    const buttonStyles: ButtonStyles = {
        border: `${rems('1px')} solid`,
        borderRadius: `${rems('10px')}`,
        color: `${THEME.WHITE}`,
        cursor: 'pointer',
        margin: `${rems('3px')}`,
        padding: `${rems('6px 10px')}`,
        width: 'fit-content',
        height: 'fit-content',
        minWidth: `${rems('60px')}`
        // "&:hover": {
        //   boxShadow: `${rems("0px 0px 10px")} gray`
        // }
    };

    const hoverStyles = {
        boxShadow: `${rems('0px 0px 10px')} gray`
    };

    switch (type) {
        default:
        case PRIMARY:
            buttonStyles.backgroundColor = THEME.BLUE;
            buttonStyles.borderColor = THEME.BLUE;
            break;
        case SECONDARY:
            buttonStyles.backgroundColor = THEME.SALMON;
            buttonStyles.borderColor = THEME.SALMON;
            break;
        case FIDUCIARY:
            buttonStyles.backgroundColor = THEME.WHITE;
            buttonStyles.borderColor = THEME.GRAY1;
            buttonStyles.color = THEME.BLACK;
            break;
        case TERTIARY:
            buttonStyles.backgroundColor = THEME.GRAY1;
            buttonStyles.borderColor = THEME.GRAY1;
            break;
    }

    switch (fontSize) {
        case FONT_SIZES.SMALL:
            buttonStyles.fontSize = `${rems('12px')}`;
            break;
        default:
        case FONT_SIZES.MEDIUM:
            buttonStyles.fontSize = `${rems('16px')}`;
            break;
        case FONT_SIZES.LARGE:
            buttonStyles.fontSize = `${rems('24px')}`;
            break;
        case FONT_SIZES.XLARGE:
            buttonStyles.fontSize = `${rems('36px')}`;
            break;
    }

    let styling = {
        ...buttonStyles
    };

    if (hover) {
        styling = {
            ...buttonStyles,
            ...hoverStyles
        };
    }

    return (
        <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={styling}
            {...remainingProps}>
            {children}
        </button>
    );
};
