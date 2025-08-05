import eslintPluginAstro from "eslint-plugin-astro";
export default [
    ...eslintPluginAstro.configs.recommended,
    {
        files: ["**/*.astro"],
        ignores: ["astro.config.mjs"],
        rules: {
            "astro/no-set-html-directive": "error",
            "indent": ["error", 4],
        },
    },
];
