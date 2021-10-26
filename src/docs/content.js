import React from 'react';
import PropTypes from 'prop-types';

// import { Text, Button, IconButton } from "./components";
// import * as THEME from "./components/constants";
import { Home, ButtonDocs, IconButtonDocs, TextDocs } from './pages';

export default function Content(props) {
    const router = () => {
        switch (props.currentPage) {
            case 'button':
                return <ButtonDocs />;
            case 'icon-button':
                return <IconButtonDocs />;
            case 'text':
                return <TextDocs />;
            case 'home':
            default:
                return <Home />;
        }
    };

    return <div style={{ padding: '16px' }}>{router()}</div>;
}

Content.propTypes = {
    currentPage: PropTypes.string
};
