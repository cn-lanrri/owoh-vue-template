/*
 * @Author: Lanrri
 * @Date: 2019-12-31 15:20:02
 * @Description:
 * @LastEditors  : Lanrri
 * @LastEditTime : 2019-12-31 18:04:30
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier', '@vue/typescript'],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
