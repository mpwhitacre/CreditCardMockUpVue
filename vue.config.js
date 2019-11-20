module.exports = {
  devServer: {
    proxy: {
      '/api/add': {
        target: 'http://localhost:8090',
        changeOrigin: true
    }
  }
 }
}

