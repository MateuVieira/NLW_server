module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'prettier',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    "project": "./tsconfig.json",
    "ecmaFeatures": {
        "jsx": true
    },
    "ecmaVersion": 11,
    "sourceType": "module"
},
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        "alwaysTryTypes": true
    }
    },
  },
  plugins: [
    '@typescript-eslint',
    "eslint-plugin-prettier"
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js', '.ts', '.tsx']
      }
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': 'off',
    'import/no-unresolved': 'off',
    '@typescript-eslint/camelcase': 'off',
    "suppressImplicitAnyIndexErrors": true
  },
};
