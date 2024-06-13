// @ts-check
const { defineConfig } = require("eslint-define-config");
module.exports = defineConfig({
  root: true, // 设定此配置文件为根配置文件，ESLint 不会再往上寻找其他配置文件
  env: {
    browser: true, // 支持浏览器全局变量
    node: true, // 支持 Node.js 全局变量和作用域
    es6: true, // 支持 ES6 语法
  },
  globals: {
    pako: true, // 全局变量 pako 可用
  },
  parser: "vue-eslint-parser", // 使用 vue-eslint-parser 解析 .vue 文件
  parserOptions: {
    parser: "@typescript-eslint/parser", // 使用 @typescript-eslint/parser 解析 TypeScript
    ecmaVersion: 2020, // 支持 ECMAScript 2020 语法
    sourceType: "module", // 支持 ECMAScript 模块
    jsxPragma: "Vue", // 设置 JSX 的 pragma 为 Vue
    ecmaFeatures: {
      jsx: true, // 启用 JSX 支持
    },
  },
  extends: [
    "plugin:vue/vue3-recommended", // 使用 Vue 3 推荐的规则
    "plugin:@typescript-eslint/recommended", // 使用 TypeScript 推荐的规则
    "prettier", // 使用 Prettier 规则
    "plugin:prettier/recommended", // 启用 prettier 插件，显示 prettier 错误为 ESLint 错误
  ],
  rules: {
    // TypeScript 规则配置
    "@typescript-eslint/ban-ts-ignore": "off", // 允许 @ts-ignore 注释
    "@typescript-eslint/explicit-function-return-type": "off", // 允许隐式返回类型
    "@typescript-eslint/no-explicit-any": "off", // 允许使用 any 类型
    "@typescript-eslint/no-var-requires": "off", // 允许 require 语句
    "@typescript-eslint/no-empty-function": "off", // 允许空函数
    "@typescript-eslint/no-use-before-define": "off", // 允许在定义前使用变量
    "@typescript-eslint/ban-ts-comment": "off", // 允许 @ts-comment 注释
    "@typescript-eslint/ban-types": "off", // 允许禁止某些类型
    "@typescript-eslint/no-non-null-assertion": "off", // 允许非空断言
    "@typescript-eslint/explicit-module-boundary-types": "off", // 允许隐式模块边界类型
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_", // 忽略下划线开头的参数
        varsIgnorePattern: "^_", // 忽略下划线开头的变量
      },
    ],

    // 通用规则配置
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_", // 忽略下划线开头的参数
        varsIgnorePattern: "^_", // 忽略下划线开头的变量
      },
    ],
    "no-use-before-define": "off", // 允许在定义前使用变量
    "space-before-function-paren": "off", // 关闭函数括号前的空格检查

    // Vue 规则配置
    "vue/custom-event-name-casing": "off", // 允许自定义事件名称使用 kebab-case
    "vue/attributes-order": "off", // 关闭属性顺序检查
    "vue/one-component-per-file": "off", // 允许每个文件多个组件
    "vue/html-closing-bracket-newline": "off", // 关闭 HTML 闭合标签换行检查
    "vue/max-attributes-per-line": "off", // 关闭每行最大属性数检查
    "vue/multiline-html-element-content-newline": "off", // 关闭多行 HTML 元素内容换行检查
    "vue/singleline-html-element-content-newline": "off", // 关闭单行 HTML 元素内容换行检查
    "vue/attribute-hyphenation": "off", // 关闭属性连字符检查
    "vue/require-default-prop": "off", // 关闭默认属性检查
    "vue/comment-directive": "error", // 启用 Vue 注释指令规则
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always", // 空元素自闭合
          normal: "never", // 普通元素不自闭合
          component: "always", // 组件自闭合
        },
        svg: "always", // SVG 元素自闭合
        math: "always", // 数学元素自闭合
      },
    ],
    "vue/require-explicit-emits": "off", // 关闭显式 emits 检查
  },
});
