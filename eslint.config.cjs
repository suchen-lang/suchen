/* eslint-env node */
const typescriptParser = require('@typescript-eslint/parser')
const importPlugin = require('eslint-plugin-import')
const pluginVue = require('eslint-plugin-vue')
const vueParser = require('vue-eslint-parser')
module.exports = [
  {
    ignores: ['**/node_modules/**/*', '**/dist/**/*', '**/lib/**/*', '**/types/**/*.d.ts'],
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
    plugins: {
      import: importPlugin
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true }
        }
      ]
    }
  },
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
