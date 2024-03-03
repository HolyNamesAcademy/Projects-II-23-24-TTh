module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'airbnb',
    'airbnb/hooks',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'linebreak-style': 'off',
    'no-plusplus': 'off',
  },
  overrides: [
    {
      files: ['*.test.js', 'setupTests.js'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'react/jsx-filename-extension': 'off',
      },
    },
    {
      files: ['./src/scenes/*'],
      rules: {
        'class-methods-use-this': 'off',
      },
    },
    {
      files: ['./src/store/*'],
      rules: {
        'no-param-reassign': 'off',
      },
    },
  ],
};
