const { parsed: localEnv } = require('dotenv').config()
const routes = require('./routes')
const webpack = require('webpack')
const withSass = require('@zeit/next-sass')

module.exports = withSass({
    useFileSystemPublicRoutes: false,
    exportPathMap: routes,
    webpack: (config) => {
        config.plugins.push(
          new webpack.EnvironmentPlugin(localEnv)
        )
        return config
    }
});