export default {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:astro/recommended',
        'plugin:jsx-a11y/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'astro',
        'jsx-a11y',
    ],
    settings: {
        'astro/typescript': true,
    },
    rules: {
        // Example: allow unused vars starting with _
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
};
