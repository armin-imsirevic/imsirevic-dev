import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
    ...eslintPluginAstro.configs.recommended,
    {
        files: ['**/*.ts'],
        ignores: [
            'node_modules/',
            'dist/',
            '.astro/',
            'public/',
            '**/*.d.ts',
        ],
        plugins: { '@typescript-eslint': tseslint },
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                project: './tsconfig.json', // <-- Add this line
            },
        },
        rules: {
            ...tseslint.configs.recommended.rules,
            '@typescript-eslint/no-unused-vars': 'error',
        },
    },
];