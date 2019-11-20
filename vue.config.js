module.exports = {
  devServer: {
    proxy: {
      '/api/add': {
        target: 'http://127.0.0.1:8090',
        changeOrigin: true
    }
  }
}

