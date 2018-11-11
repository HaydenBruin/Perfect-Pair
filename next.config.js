const { parsed: localEnv } = require('dotenv').config()
const getRoutes = require('./routes')
const webpack = require('webpack')
const withSass = require('@zeit/next-sass')

module.exports = withSass({
    useFileSystemPublicRoutes: false,
    exportPathMap: getRoutes,
    webpack: (config) => {
        config.plugins.push(
          new webpack.EnvironmentPlugin(localEnv)
        )
        return config
    }
});