import React from 'react';

import { Example } from '../';

import { IconButton, Text } from '../../library/components';
// import * as THEME from "../../components/constants";

const IconButtonDocs = () => {
    const name = 'IconButton';
    const examples = [
        {
            title: 'Types',
            description: 'An example of styled IconButton components',
            code: (
                <>
                    <IconButton>+</IconButton>
                    <IconButton type="secondary">-</IconButton>
                    <IconButton type="fiduciary">O</IconButton>
                    <IconButton type="tertiary">X</IconButton>
                </>
            )
        },
        {
            title: 'Sizes',
            description: 'An example of differently sized IconButtons',
            code: (
                <>
                    <IconButton fontSize="small">+</IconButton>
                    <IconButton fontSize="medium" type="secondary">
                        -
                    </IconButton>
                    <IconButton fontSize="large" type="fiduciary">
                        O
                    </IconButton>
                    <IconButton fontSize="xlarge" type="tertiary">
                        X
                    </IconButton>
                </>
            )
        }
    ];

    return (
        <>
            <Text size="title">{name}</Text>
            {examples.map((example, idx) => (
                <Example key={`${name}-Example-${idx}`} {...example} />
            ))}
        </>
    );
};

export default IconButtonDocs;
