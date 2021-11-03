import { defineConfig } from 'dumi';
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

export default defineConfig({
  title: 'myapp',
  favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  chainWebpack: (memo) => {
    // 更多配置 https://github.com/Microsoft/monaco-editor-webpack-plugin#options
    memo.plugin('monaco-editor').use(MonacoWebpackPlugin, [
      // 按需配置
      { languages: ['javascript'] }
    ]);
    return memo;
  }
  // more config: https://d.umijs.org/config
});
