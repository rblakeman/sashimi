// // Import rollup plugins
// import { rollupPluginHTML as html } from "@web/rollup-plugin-html";
// import {copy} from '@web/rollup-plugin-copy';
// import resolve from '@rollup/plugin-node-resolve';
// import {terser} from 'rollup-plugin-terser';
// import minifyHTML from 'rollup-plugin-minify-html-literals';
// import summary from 'rollup-plugin-summary';

// export default {
//   plugins: [
//     // Entry point for application build; can specify a glob to build multiple
//     // HTML files for non-SPA app
//     html({
//       input: '**/*.ts',
//     }),
//     // Resolve bare module specifiers to relative paths
//     resolve(),
//     // Minify HTML template literals
//     minifyHTML.default(),
//     // Minify JS
//     terser({
//       ecma: 2020,
//       module: true,
//       warnings: true,
//     }),
//     // Print bundle summary
//     summary.default(),
//     // Optional: copy any static assets to build directory
//     copy({
//       patterns: ['images/**/*'],
//     }),
//   ],
//   output: {
//     dir: 'build',
//   },
//   preserveEntrySignatures: 'strict',
// };

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
// Need to fix error here to allow pkg: { browser, main, module } to be in package.json
// import pkg from './package.json';

export default [
    // browser-friendly UMD build
    {
        input: 'src/index.ts',
        output: {
            name: 'howLongUntilLunch',
            file: 'dist/typography.umd.js', // pkg.browser,
            format: 'umd'
        },
        plugins: [
            resolve(), // so Rollup can find `ms`
            commonjs(), // so Rollup can convert `ms` to an ES module
            typescript()
        ]
    },

    // CommonJS (for Node) and ES module (for bundlers) build.
    // (We could have three entries in the configuration array
    // instead of two, but it's quicker to generate multiple
    // builds from a single configuration where possible, using
    // an array for the `output` option, where we can specify
    // `file` and `format` for each target)
    {
        input: 'src/index.ts',
        external: ['ms'],
        plugins: [
            typescript()
        ],
        output: [
            {
                file: 'dist/typography.cjs.js', // pkg.main,
                format: 'cjs'
            },
            {
                file: 'dist/typography.esm.js', // pkg.module,
                format: 'es'
            }
        ]
    }
];