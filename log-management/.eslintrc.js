// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never',
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'semi': ["error", "never"],
    'eol-last': ["off"],
    'consistent-return':["off"],
    'max-len':["warn"],
    'linebreak-style':["off"],
    'import/prefer-default-export':["off"],
    'import/no-extraneous-dependencies':['off'],
    'import/no-webpack-loader-syntax':['off'],
    'no-restricted-syntax':['off'],
    'default-case':['off'],
    'func-names':['off'],
    'prefer-arrow-callback':['off'],
    'no-await-in-loop':['off'],
    'no-shadow':['warn'],
    'no-param-reassign':['off'],
    'camelcase':['off'],
  }
}
