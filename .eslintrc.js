module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base/legacy',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'semi': ['error', 'never'],
    'no-var': 'error',
    'vue/order-in-components': 'error',
    'vue/require-default-prop': 'error',
    'vue/attributes-order': 'error',
    'vue/custom-event-name-casing': ['error', 'kebab-case']
  },
};
