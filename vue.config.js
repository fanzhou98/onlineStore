module.exports = {
  configureWebpack: {
    resolve: {
      alias:{
        'components':'@/components',
        'assets':'@/assets',
        'network':'@/network',
        'views':'@/views',
        'common':'@/common',
        'store':'@/store',
      }
    }
  },
  //
  devServer: {
    proxy: {
      '/api': {
        target: 'http://mydevstoreAPI.com:8888/api', // back-end host
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // rewrite '/api' as ''
        }
      }
    }
  }
}