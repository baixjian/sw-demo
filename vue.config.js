module.exports = {
  devServer: {
    port: '8090',
    proxy: {
      '/browser': {
        target: 'http://xxx:12800/',
        changeOrigin: true,
      },
      '/graphql': {
        target: 'http://xxx:12800/',
        changeOrigin: true,
      },
      '/v3': {
        target: 'http://xxx:12800/',
        changeOrigin: true,
      },
    },
  }
}
