const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')
const withSass = require('@zeit/next-sass')

module.exports = withSass({
    useFileSystemPublicRoutes: false,
    webpack: (config) => {
        config.plugins.push(
          new webpack.EnvironmentPlugin(localEnv)
        )
        return config
    },
    publicRuntimeConfig: {
        API_URL: 'http://localhost:8000' //https://api.perfectpair.nz
    }
});