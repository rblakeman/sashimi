import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeContext } from '../library';
import { Text, Button, IconButton } from '../library/components';
import { SashimiDarkIcon, SashimiLightIcon } from '../library/icons';
import { color } from '../library/utils';
// import * as THEME from "./components/constants";

const LINKS = [
    { name: 'Home', url: 'home' },
    { name: 'Button', url: 'button' },
    { name: 'IconButton', url: 'icon-button' },
    { name: 'Text', url: 'text' }
];

const SideNavContainer = styled.div`
    background-color: #999999;
    border-radius: 6px;
    border-right: 2px solid #666666;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 25%;
    padding: 16px;
`;

const Header = styled.span`
    display: flex;
    font-size: 36px;
    margin-left: 4px;
    margin-bottom: 8px;
    justify-content: center;
`;

const Title = styled.span``;

const NavItem = styled.button`
    background-color: ${({ theme, mode }) => color('background', theme, mode)};
    border: 2px solid #999999;
    border-radius: 3px;
    cursor: pointer;
    color: ${({ theme, mode }) => color('text', theme, mode)};
    margin: 4px;
    text-align: left;
`;

export default function SideNav(props) {
    const { onRouteChange } = props;
    const { theme, mode, changeMode } = React.useContext(ThemeContext);

    const route = (url) => {
        // const routeName = ev.target.textContent.toLowerCase();
        onRouteChange(url);

        // eslint-disable-next-line
        history.pushState(null, "", `/${url}`);
    };

    const ModeIcon = mode === 'light' ? SashimiDarkIcon : SashimiLightIcon;

    return (
        <SideNavContainer>
            <Header>
                <ModeIcon
                    size="large"
                    style={{ marginRight: '8px', cursor: 'pointer', flexBasis: '24px' }}
                    onClick={changeMode} />
                <Title>Sashimi</Title>
            </Header>
            {LINKS.map(({ name, url }, idx) => {
                return (
                    <NavItem
                        theme={theme}
                        mode={mode}
                        key={idx}
                        onClick={() => route(url)}>
                        {name}
                    </NavItem>
                );
            })}
            {/* <Text>CodeSandbox</Text>
            <Button onClick={() => alert("clicked")} fontSize="36px">
                Test
            </Button>
            <Button backgroundColor={THEME.SALMON} fontSize="36px">
                Test
            </Button>
            <IconButton>+</IconButton> */}
        </SideNavContainer>
    );
}

SideNav.propTypes = {
    onRouteChange: PropTypes.func
};
