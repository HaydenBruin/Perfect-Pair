const fetch = require('isomorphic-fetch')
const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')
const withSass = require('@zeit/next-sass')

const api_url = 'https://api.perfectpair.nz';
const prod = process.env.NODE_ENV === 'production';

module.exports = withSass({
    useFileSystemPublicRoutes: false,
    webpack: (config) => {
        config.plugins.push(
            new webpack.EnvironmentPlugin(localEnv)
        )
        return config
    },
    exportPathMap: async function () {
        
        const productFetch = await fetch(`${api_url}/api/products`);
        const productList = await productFetch.json();

        let productPages = [];
        if(productList.data) {
            productPages = productList.data.reduce(
                (productPages, product) => 
                    Object.assign({}, productPages, {
                        [`/product/${product.slug}/${product.id}`]: {
                            page: '/product',
                            query: { slug: product.slug, id: product.id }
                        }
                    }),
                {}
            )
        }

        return Object.assign({}, productPages, {
            '/': { page: '/' },

            '/legal/terms-and-conditions': { page: '/legal/terms-and-conditions' },
            '/legal/privacy-policy': { page: '/legal/privacy-policy' },
            '/legal/cookie-policy': { page: '/legal/cookie-policy' },
            
            '/delivery': { page: '/delivery' },
            '/returns': { page: '/returns' },
            '/contact': { page: '/contact' },
            '/about': { page: '/about' },

            '/checkout': { page: '/checkout' },
            '/checkout/payment': { page: '/checkout/payment' },
            '/checkout/delivery': { page: '/checkout/delivery' },
            '/checkout/completed': { page: '/checkout/completed' }
        })
    },
    publicRuntimeConfig: {
        API_URL: api_url,
        STRIPE_PUBLIC: prod ? 'pk_live_h3O9uDR1sgFrz1sLfbU6QynV' : 'pk_test_xxaqpzviIbXJ63m1TPUhoyz8'
    }
});