
module.exports = {
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*"
    },
    proxy: {
      // '/api': 'http://localhost:3001',
      '/api': {
        target: '/api',
        bypass: function (req, res, proxyOptions) {
          if (req.method === 'OPTIONS') {
            res.statusCode = 204
            return 'a'  // <----  这个a我也不知道干嘛的
          }
        },
      }
    }
  }
}