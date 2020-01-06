/*
 * @Author: Lanrri
 * @Date: 2019-12-31 15:20:02
 * @Description:
 * @LastEditors  : Lanrri
 * @LastEditTime : 2020-01-06 15:57:15
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier', '@vue/typescript'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-var': 0,
    'arrow-parens': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    // 强制使用单引号
    'quotes': ['error', 'single'],
    'quote-props': ['error', 'consistent'],
    // 强制不使用分号结尾
    'semi': ['error', 'never']
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
