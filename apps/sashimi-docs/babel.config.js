module.exports = {
    presets: [require.resolve('@docusaurus/core/lib/babel/preset')],
    plugins: [
        /**
         * In @babel/plugin-proposal-class-properties, set "loose" to "false" to solve this build error:
         *
         * Though the "loose" option was set to "true" in your @babel/preset-env config, it will not be used for @babel/plugin-proposal-private-property-in-object since the "loose" mode option was set to "false" for @babel/plugin-proposal-class-properties.
         * The "loose" option must be the same for @babel/plugin-proposal-class-properties, @babel/plugin-proposal-private-methods and @babel/plugin-proposal-private-property-in-object (when they are enabled): you can silence this warning by explicitly adding
         *  >	["@babel/plugin-proposal-private-property-in-object", { "loose": false }]
         *  to the "plugins" section of your Babel config.
         */
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }]
    ]
};
