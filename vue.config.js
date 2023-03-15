const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        // 导入mixins样式，可直接在组件中使用变量和函数
        additionalData: `@import "@/assets/styles/import.scss";`
      },
      postcss: {
        postcssOptions: {
          plugins: [
            require('postcss-plugin-px2rem')({
              rootValue: 37.5,
              minPixeValue: 3,
              exclude: /(node_modules)/
            })
          ]
        }
      }
    }
  }
})
