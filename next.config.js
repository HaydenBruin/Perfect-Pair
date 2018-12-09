const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')
const withSass = require('@zeit/next-sass')

const prod = process.env.NODE_ENV === 'production';

module.exports = withSass({
    useFileSystemPublicRoutes: false,
    webpack: (config) => {
        config.plugins.push(
          new webpack.EnvironmentPlugin(localEnv)
        )
        return config
    },
    publicRuntimeConfig: {
        API_URL: 'http://localhost:8000', //'https://api.perfectpair.nz',
        STRIPE_PUBLIC: prod ? 'pk_live_h3O9uDR1sgFrz1sLfbU6QynV' : 'pk_test_xxaqpzviIbXJ63m1TPUhoyz8'
    }
});