const routes = require('next-routes')
// If you change something in here change it within next.config.js as well
module.exports = routes()
.add('/', 'index')

.add('/legal/terms-and-conditions', 'legal/terms-and-conditions')
.add('/legal/privacy-policy', 'legal/privacy-policy')
.add('/legal/cookie-policy', 'legal/cookie-policy')

.add('/delivery', 'delivery')
.add('/returns', 'returns')
.add('/contact', 'contact')
.add('/about', 'about')

.add('/checkout', '/checkout/index')
.add('/checkout/payment','/checkout/payment')
.add('/checkout/delivery','/checkout/delivery')
.add('/checkout/completed','/checkout/completed')

.add({name: 'product', pattern: '/product/:slug/:id', page: '/product/index'})