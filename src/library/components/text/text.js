import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@stitches/react';

// import * as THEME from '../../constants';
// import { ThemeContext } from '../../theme';
import { rems, color as colorUtil } from '../../theme/utils';

const TextStyled = styled('p', {
    variants: {
        kind: {
            h1: {
                fontSize: '48px',
                fontFamily: '',
                color: '$text_heading'
            },
            h2: {
                fontSize: '36px',
                fontFamily: '',
                color: '$text_heading'
            },
            h3: {
                fontSize: '24px',
                fontFamily: '',
                color: '$text_heading'
            },
            h4: {
                fontSize: '18px',
                fontFamily: '',
                color: '$text_heading'
            },
            description: {},
            standard: {
                fontSize: '14px',
                fontFamily: '',
                color: '$text_body'
            },
            label: {
                fontSize: '',
                fontFamily: '',
                color: '$text_label'
            },
            small: {
                fontSize: '12px',
                fontFamily: '',
                color: '$text_body'
            },
            tiny: {
                fontSize: '10px',
                fontFamily: '',
                color: '$text_body'
            },
        }
    },
    margin: `${rems('8px 0px')}`,
    defaultVariants: {
        kind: 'standard'
    }
});

export const Text = ({
    // bold = false,
    // semibold = false,
    // light = false,
    // kind = 'standard',
    // color = THEME.BLACK,
    children,
    ...remainingProps
}) => {
    // const { theme, mode } = useContext(ThemeContext);

    // const textStyles = {
    //     color: colorUtil('text', theme, mode),
    //     fontWeight: '400', // normal
    //     margin: `${rems('8px 0px')}`
    // };

    // if (bold) {
    //     textStyles.fontWeight = '900';
    // } else if (semibold) {
    //     textStyles.fontWeight = '600';
    // } else if (light) {
    //     textStyles.fontWeight = '100';
    // }

    // switch (size) {
    //     case 'title':
    //         textStyles.fontSize = `${rems('54px')}`;
    //         break;
    //     case 'header':
    //         textStyles.fontSize = `${rems('36px')}`;
    //         break;
    //     case 'description':
    //         textStyles.fontSize = `${rems('24px')}`;
    //         break;
    //     default:
    //     case 'standard':
    //         textStyles.fontSize = `${rems('16px')}`;
    //         break;
    //     case 'small':
    //         textStyles.fontSize = `${rems('12px')}`;
    //         break;
    // }

    return (
        <TextStyled {...remainingProps}>
            {children}
        </TextStyled>
    );
};

Text.propTypes = {
    // bold: PropTypes.bool,
    // color: PropTypes.string,
    // light: PropTypes.bool,
    // semibold: PropTypes.bool,
    kind: PropTypes.string
};
