/*
 * @Author: Lanrri
 * @Date: 2019-12-06 15:39:39
 * @Description: vue config
 * @LastEditors  : Lanrri
 * @LastEditTime : 2019-12-31 15:07:23
 */
module.exports = {
  publicPath: process.env.VUE_APP_ADDRESS === 'build' ? 'https://res2.owohpet.cn/web/' : '/',
  assetsDir: '',
  configureWebpack: {
    resolve: {
      alias: {
        $assets: '@/assets',
        $components: '@/components',
        $views: '@/views'
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "$assets/scss/mixins.scss";`
      }
    }
  },
  // webpack-dev-server 相关配置
  devServer: {
    // host: '0.0.0.0',
    open: true,
    port: 3000,
    https: false,
    hotOnly: false
  }
}
