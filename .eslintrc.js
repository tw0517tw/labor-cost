module.exports = {
  parser: 'babel-eslint',
  extends: ['yoctol'],
  env: {
    browser: true,
    node: true,
    jest: true,
    jasmine: true,
  },
  plugins: ['prettier'],
  rules: {
    'class-methods-use-this': 'off',
  },
};
