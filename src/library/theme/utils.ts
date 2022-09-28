import React from 'react';

// @ts-expect-error
import { ThemeContext, theme } from './theme';

const BASE_FONT_SIZE = 16;

export const rems = (pixels: string) => {
    const numbers = pixels
        .trim()
        .split(' ')
        .map((pixel) => {
            return `${Number(pixel.replace('px', '')) / BASE_FONT_SIZE}rem`;
        });

    return numbers.join(' ');
};

export const color = (token: string, colors: typeof theme, mode: string) => {
    if (!colors || !mode) {
        console.error('error retrieving color from token');

        return '#000000';
    }

    // 'text'
    const tokenSplit = token.split('.');

    // colors = { light: {}, dark: {} }
    const availableColors = colors[mode];

    // light = { 'text': '', etc... }
    let currentKey = availableColors;

    for (let tokenIdx = 0; tokenIdx < tokenSplit.length; tokenIdx++) {
        const currenToken = tokenSplit[tokenIdx];

        if (currentKey[currenToken]) {
            if (tokenIdx === tokenSplit.length - 1) {
                return currentKey[currenToken];
            }

            currentKey = currentKey[currenToken];
        } else {
            console.error('error retrieving color from token');

            return '#000000';
        }
    }
};
