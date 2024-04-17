const { resolve } = require('node:path')
const project = resolve(process.cwd(), 'tsconfig.json')

module.exports = {
    env: {
        es2021: true,
        node: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:prettier/recommended',
    ],
    globals: {
        JSX: true,
    },
    ignorePatterns: ['node_modules/', 'dist/', '*..eslintrc.js', 'shared-config/eslint.base.js', 'bin/'],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}', 'shared-config/eslint.base.js'],
            parserOptions: {
                sourceType: 'script',
            },
        },
        {
            files: ['*.spec.ts', '*.spec.tsx'],
            rules: {
                '@typescript-eslint/no-explicit-any': 'off',
            },
        },
        {
            files: ['**/tsup.config.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project,
        ecmaVersion: 'latest',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['@typescript-eslint', 'react', 'react-native'],
    rules: {
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}
