/** @type {import('prettier').Options} */
export default {
    plugins: ['prettier-plugin-astro'],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
                tabWidth: 4,
                useTabs: false,
            },
        },
    ],
    // General formatting options
    singleQuote: true,
    semi: true,
    tabWidth: 4,
    useTabs: false,
    trailingComma: 'es5',
    bracketSpacing: true,
    arrowParens: 'avoid',
    printWidth: 80,
    endOfLine: 'lf',

    // Astro specific options
    astroAllowShorthand: true,
};
