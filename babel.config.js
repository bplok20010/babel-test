module.exports = function(api) {
    api.cache(true);

    return {
        presets: [
            [
                "@babel/env",
                {
                    targets: {
                        // edge: "17",
                        firefox: "60",
                        chrome: "67",
                        safari: "11.1"
                    },
                    useBuiltIns: "usage",
                    // ignoreBrowserslistConfig: true,
                    // modules: "cjs",
                    // useBuiltIns: "entry",
                    // Set the corejs version we are using to avoid warnings in console
                    // This will need to change once we upgrade to corejs@3
                    corejs: 3,
                    // Do not transform modules to CJS
                    modules: false,
                    exclude: ["transform-typeof-symbol"]
                }
            ],
            "@babel/preset-react",
            "@babel/preset-flow"
        ],
        plugins: [
            // "@babel/plugin-transform-modules-umd",
            // "@babel/plugin-transform-modules-commonjs",
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-proposal-async-generator-functions",
            [
                "@babel/plugin-proposal-decorators",
                {
                    decoratorsBeforeExport: true,
                    legacy: false
                }
            ],
            [
                "@babel/plugin-proposal-class-properties",
                {
                    loose: true
                }
            ],
            [
                "@babel/plugin-proposal-private-methods",
                {
                    loose: true
                }
            ],
            "@babel/plugin-proposal-do-expressions",
            "@babel/plugin-proposal-export-default-from",
            "@babel/plugin-proposal-export-namespace-from",
            "@babel/plugin-proposal-function-bind",
            "@babel/plugin-proposal-function-sent",
            "@babel/plugin-proposal-logical-assignment-operators",
            "@babel/plugin-proposal-nullish-coalescing-operator",
            "@babel/plugin-proposal-numeric-separator",
            "@babel/plugin-proposal-optional-chaining",
            "@babel/plugin-proposal-partial-application",
            "@babel/plugin-proposal-throw-expressions",
            // "@babel/plugin-transform-react-jsx",
            // "@babel/plugin-transform-proto-to-assign", //Internet Explorer(10 and below)
            [
                "@babel/plugin-proposal-pipeline-operator",
                { proposal: "minimal" }
            ],
            [
                "@babel/plugin-transform-runtime",
                {
                    corejs: false
                }
            ]
        ]
    };
};
