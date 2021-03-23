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
        target: 'http://mydevstoreAPI.com:8888/api', // 后台请求地址
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' //通过pathRewrite重写地址，将前缀/api转为/
        }
      }
    }
  }
}