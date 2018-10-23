const routes = module.exports = require('next-routes')()
routes
.add('/', 'index')
.add('/checkout', '/checkout/index')
.add('/checkout/payment','/checkout/payment')
.add('/checkout/delivery','/checkout/delivery')
.add('/checkout/completed','/checkout/completed')
.add({name: 'product', pattern: '/product/:slug/:id', page: '/product/index'})
