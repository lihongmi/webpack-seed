module.exports = {
  root: true,
  extends: ["plugin:prettier/recommended"],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6
  },
  env: {
    browser: true
  },
  // rules: {
  //   "规则名": [规则值, 规则配置]
  // }
  // "off"或者0    //关闭规则关闭
  // "warn"或者1   //在打开的规则作为警告（不影响退出代码）
  // "error"或者2   //把规则作为一个错误（退出代码触发时为1）
  rules: {
  
  }
}
