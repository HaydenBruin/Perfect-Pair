const routes = require('next-routes')

module.exports = routes()
.add('/', 'index')
.add('/checkout', '/checkout/index')
.add('/checkout/payment','/checkout/payment')
.add('/checkout/delivery','/checkout/delivery')
.add('/checkout/completed','/checkout/completed')
.add('/product/:product','/product/index')
