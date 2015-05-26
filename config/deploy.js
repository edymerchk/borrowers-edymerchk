module.exports = {
  development: {
    buildEnv: 'development', // Override the environment passed to the ember asset build. Defaults to 'production'
    store: {
      type: 'redis', // the default store is 'redis'
      host: 'localhost',
      port: 6379
    },
    assets: {
      type: 's3', // default asset-adapter is 's3'
      gzip: false, // if undefined or set to true, files are gziped
      gzipExtensions: ['js', 'css', 'svg'], // if undefined, js, css & svg files are gziped
      accessKeyId: process.env['ACCESS_TEST'],
      secretAccessKey: process.env['SECRET_TEST'],
      bucket: 'borrowers-edymerchk'
    }
  },

  staging: {
    buildEnv: 'staging', // Override the environment passed to the ember asset build. Defaults to 'production'
    store: {
      host: 'hammerjaw.redistogo.com',
      port: 10211,
      password: process.env['REDIS_PASSWORD_TEST']
    },
    assets: {
      accessKeyId: process.env['ACCESS_TEST'],
      secretAccessKey: process.env['SECRET_TEST'],
      bucket: 'borrowers-edymerchk'
    }
  },

   production: {
    store: {
      host: 'hammerjaw.redistogo.com',
      port: 10211,
      password: process.env['REDIS_PASSWORD_TEST']
    },
    assets: {
      accessKeyId: process.env['ACCESS_TEST'],
      secretAccessKey: process.env['SECRET_TEST'],
      bucket: 'borrowers-edymerchk'
    }
  }
};
