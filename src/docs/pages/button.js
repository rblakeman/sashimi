import React from 'react';

import { Example } from '../';

import { Button, Text } from '../../library/components';
// import * as THEME from "../../components/constants";

const ButtonDocs = () => {
    const name = 'Button';
    const examples = [
        {
            title: 'Types',
            description: 'An example of styled Button components',
            code: (
                <>
                    <Button>Primary</Button>
                    <Button type="secondary">Secondary</Button>
                    <Button type="fiduciary">Fiduciary</Button>
                    <Button type="tertiary">Tertiary</Button>
                </>
            )
        },
        {
            title: 'Sizes',
            description: 'An example of differently sized buttons',
            code: (
                <>
                    <Button fontSize="small">Small</Button>
                    <Button fontSize="medium" type="secondary">
                        Medium
                    </Button>
                    <Button fontSize="large" type="fiduciary">
                        Large
                    </Button>
                    <Button fontSize="xlarge" type="tertiary">
                        XLarge
                    </Button>
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

export default ButtonDocs;
