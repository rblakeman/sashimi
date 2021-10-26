import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeContext } from '../library';
import { color } from '../library/utils';
// import { Text, Button, IconButton } from "./components";
// import * as THEME from "./components/constants";

const ExampleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  align-items: flex-start;
`;

const Header2 = styled.h2`
  color: ${({ theme, mode }) => color('text.title', theme, mode)};
  margin: 0px;
`;

const Header3 = styled.h3`
  color: ${({ theme, mode }) => color('text.description', theme, mode)};
  margin-bottom: 8px;
`;

const ExampleContent = styled.h3`
  border: 1px solid;
  border-color: ${({ theme, mode }) => color('border', theme, mode)};
  display: flex;
  padding: 8px;
  min-height: 64px;
  width: 100%;
`;

export default function Example(props) {
    const { theme, mode, changeMode } = React.useContext(ThemeContext);

    return (
        <ExampleContainer>
            <Header2 theme={theme} mode={mode}>
                {props.title}
            </Header2>
            <Header3 theme={theme} mode={mode}>
                {props.description}
            </Header3>
            <ExampleContent theme={theme} mode={mode}>
                {props.code}
            </ExampleContent>
        </ExampleContainer>
    );
}

Example.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    code: PropTypes.object.isRequired
};
