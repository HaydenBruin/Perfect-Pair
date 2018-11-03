const routes = module.exports = require('next-routes')()
routes
.add('/', 'index')

.add('/legal/terms-and-conditions', 'legal/terms-and-conditions')
.add('/legal/privacy-policy', 'legal/privacy-policy')
.add('/legal/cookie-policy', 'legal/cookie-policy')

.add('/delivery', 'general/delivery')
.add('/returns', 'general/returns')
.add('/contact', 'general/contact')
.add('/about', 'general/about')

.add('/checkout', '/checkout/index')
.add('/checkout/payment','/checkout/payment')
.add('/checkout/delivery','/checkout/delivery')
.add('/checkout/completed','/checkout/completed')

.add({name: 'product', pattern: '/product/:slug/:id', page: '/product/index'})

