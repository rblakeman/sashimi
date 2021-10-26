import React, { useState } from 'react';
import PropTypes from 'prop-types';

import * as THEME from '../constants';
import { rems } from '../utils';

export const IconButton = ({ children, fontSize, type, ...remainingProps }) => {
    const [hover, setHover] = useState(false);

    const iconButtonStyles = {
        backgroundColor: `${THEME.WHITE}`,
        border: `${rems('1px')} solid ${THEME.WHITE}`,
        borderRadius: '50%',
        boxShadow: `${rems('0px 0px 3px')} gray`,
        color: `${THEME.WHITE}`,
        cursor: 'pointer',
        fontFamily: `${THEME.LIGHT}`,
        margin: `${rems('3px')}`,
        padding: `${rems('0px 12px')}`

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
            iconButtonStyles.backgroundColor = THEME.BLUE;
            iconButtonStyles.borderColor = THEME.BLUE;
            break;
        case 'secondary':
            iconButtonStyles.backgroundColor = THEME.SALMON;
            iconButtonStyles.borderColor = THEME.SALMON;
            break;
        case 'fiduciary':
            iconButtonStyles.backgroundColor = THEME.WHITE;
            iconButtonStyles.borderColor = THEME.GRAY1;
            iconButtonStyles.color = THEME.BLACK;
            break;
        case 'tertiary':
            iconButtonStyles.backgroundColor = THEME.GRAY1;
            iconButtonStyles.borderColor = THEME.GRAY1;
            break;
    }

    switch (fontSize) {
        case 'small':
            iconButtonStyles.fontSize = `${rems('16px')}`;
            iconButtonStyles.height = '36px';
            iconButtonStyles.width = '36px';
            break;
        default:
        case 'medium':
            iconButtonStyles.fontSize = `${rems('24px')}`;
            iconButtonStyles.height = '42px';
            iconButtonStyles.width = '42px';
            break;
        case 'large':
            iconButtonStyles.fontSize = `${rems('36px')}`;
            iconButtonStyles.height = '56px';
            iconButtonStyles.width = '56px';
            break;
        case 'xlarge':
            iconButtonStyles.fontSize = `${rems('48px')}`;
            iconButtonStyles.height = '72px';
            iconButtonStyles.width = '72px';
            break;
    }

    let styling = {
        ...iconButtonStyles
    };

    if (hover) {
        styling = {
            ...iconButtonStyles,
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

IconButton.propTypes = {
    fontSize: PropTypes.string,
    type: PropTypes.string
};

IconButton.defaultProps = {
    fontSize: 'medium',
    type: 'primary'
};
