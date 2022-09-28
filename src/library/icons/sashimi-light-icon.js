import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as SashimiLight } from './svgs/sashimi-light.svg';
import { rems } from '../theme/utils';

const SashimiLightIcon = ({
    size = 'medium',
    ...remainingProps
}) => {
    const iconProps = {};

    switch (size) {
        case 'small':
            iconProps.width = `${rems('12px')}`;
            break;
        default:
        case 'medium':
            iconProps.width = `${rems('16px')}`;
            break;
        case 'large':
            iconProps.width = `${rems('24px')}`;
            break;
        case 'xlarge':
            iconProps.width = `${rems('36px')}`;
            break;
    }

    return (
        <div style={iconProps} {...remainingProps}>
            <SashimiLight />
        </div>
    );
};

SashimiLightIcon.propTypes = {
    size: PropTypes.string
};

export default SashimiLightIcon;
