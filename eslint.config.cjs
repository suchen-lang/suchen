/* eslint-env node */
const pluginVue = require('eslint-plugin-vue')
const vueParser = require('vue-eslint-parser')
const typescriptParser = require('@typescript-eslint/parser')

module.exports = [
  {
    ignores: [
      '**/node_modules/**/*',
      '**/jsbridge/**.js',
      '**/dist/**/*',
      '**/lib/**/*',
      '**/types/**/*.d.ts'
    ],
    files: ['**/*.ts', '**/*.tsx', '**/*.vue', '**/*.js', '**/*.jsx', '**/*.cjs']
  },
  {
    plugins: { typescriptParser },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue', '.ts', '.tsx', 'css']
      }
    }
  },
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: typescriptParser,
        sourceType: 'module',
        jsx: true
      }
    }
  }
]
