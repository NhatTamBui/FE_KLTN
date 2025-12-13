const PROXY_CONFIG = [
  // {
  //   context: [
  //     "/api",
  //   ],
  //   target: "http://localhost:8080",
  //   secure: false,
  //   "changeOrigin": true,
  //   "logLevel": "debug",
  //   headers: {host: 'localhost'},
  //   pathRewrite: {"^/api": "/api"}
  // },
  {
    context: [
        "/api",
    ],
    target: "https://currency-raises-diet-contributions.trycloudflare.com",
    secure: false,
    "changeOrigin": true,
    "logLevel": "debug",
    headers: {host: 'localhost'},
    pathRewrite: {"^/api": "/api"}
  }
];
module.exports = PROXY_CONFIG;
