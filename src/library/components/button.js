import React, { useState } from 'react';
import PropTypes from 'prop-types';

import * as THEME from '../constants';
import { rems } from '../utils';

export const Button = ({ children, fontSize, type, ...remainingProps }) => {
    const [hover, setHover] = useState(false);

    const buttonStyles = {
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
        case 'primary':
            buttonStyles.backgroundColor = THEME.BLUE;
            buttonStyles.borderColor = THEME.BLUE;
            break;
        case 'secondary':
            buttonStyles.backgroundColor = THEME.SALMON;
            buttonStyles.borderColor = THEME.SALMON;
            break;
        case 'fiduciary':
            buttonStyles.backgroundColor = THEME.WHITE;
            buttonStyles.borderColor = THEME.GRAY1;
            buttonStyles.color = THEME.BLACK;
            break;
        case 'tertiary':
            buttonStyles.backgroundColor = THEME.GRAY1;
            buttonStyles.borderColor = THEME.GRAY1;
            break;
    }

    switch (fontSize) {
        case 'small':
            buttonStyles.fontSize = `${rems('12px')}`;
            break;
        default:
        case 'medium':
            buttonStyles.fontSize = `${rems('16px')}`;
            break;
        case 'large':
            buttonStyles.fontSize = `${rems('24px')}`;
            break;
        case 'xlarge':
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

Button.propTypes = {
    fontSize: PropTypes.string,
    type: PropTypes.string
};

Button.defaultProps = {
    fontSize: 'medium',
    type: 'primary'
};
