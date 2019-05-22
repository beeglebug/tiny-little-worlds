const DISABLE = 0
const WARNING = 1
const ERROR = 2

module.exports = {
  'extends': ['standard', 'plugin:react/recommended'],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
      'modules': true,
    },
  },
  'plugins': [
    'react',
    'react-hooks',
    'import',
  ],
  'parser': 'babel-eslint',
  'env': {
    'browser': true,
    'node': true,
    'jasmine': true,
    'jest': true,
  },
  rules: {
    'comma-dangle': [ERROR, 'always-multiline'],
    'generator-star-spacing': [ERROR, 'after'],
    'react/jsx-uses-vars': WARNING,
    'react/jsx-uses-react': WARNING,
    'react/prop-types': [ERROR, { ignore: ['navigation'], skipUndeclared: true }],
    'react/jsx-indent': [ERROR, 2],
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARNING,
    'react/sort-comp': [
      ERROR,
      {
        order: [
          'static-methods',
          'instance-variables',
          'lifecycle',
          'everything-else',
          'handlers',
          'rendering',
        ],
        groups: {
          rendering: [
            '/^render.+$/',
            'render',
          ],
          handlers: [
            '/^handle.+$/',
          ],
        },
      },
    ],
    'import/newline-after-import': ERROR,
    'import/order': [ERROR, { 'groups': [['builtin', 'external', 'internal'], 'parent', 'sibling', 'index'] }],
    'no-console': [ERROR, { allow: ['warn', 'error'] }],
    'object-curly-spacing': [ERROR, 'always'],
    'react/jsx-curly-spacing': [ERROR, 'never'],
    'react/sort-prop-types': ERROR,
    'react/jsx-first-prop-new-line': ERROR,
    'react/jsx-max-props-per-line': ERROR,
    'react/jsx-closing-bracket-location': [ERROR, { location: 'line-aligned' }],
    'prefer-promise-reject-errors': WARNING,
    'padded-blocks': DISABLE
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    __VERSION: true,
    __ENVIRONMENT: true
  }
}
