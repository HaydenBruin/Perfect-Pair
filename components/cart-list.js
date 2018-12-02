import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateCart } from '../store'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

class CartList extends Component {

    removeProduct = (productid) => {
        fetch(`${publicRuntimeConfig.API_URL}/api/cart/remove`, {
            method: 'post',
            credentials: 'include',
            body: JSON.stringify({
                productId: productid
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
            .then(data => {
                this.props.dispatch(updateCart(data.cart));
            });
    }

    render() {
        let cartCoupons;
        if(this.props.cartCoupons.length)
        {
            cartCoupons = `
                <div className="coupons">
                    this.props.cartCoupons.forEach((coupon) => {
                        <div className="coupon">Lorem ipsum dolar lorem ipsum dolar</div>
                        <div className="coupon">Lorem ipsum dolar lorem ipsum dolar</div>
                    })
                </div>
            `
        }
        return (
            <div className="cartlist">
                <div className="cartproducts">
                    {
                        this.props.cartProducts.map((product, index) => {
                            return (
                                <div className="product" key={index}>
                                    <div className="image">
                                        <img src={product.image} alt={product.title} />
                                    </div>
                                    <div className="details">
                                        <h2>{product.title}</h2>
                                        <p>Quantity: x{product._cart.quantity}</p>
                                        <p><a onClick={() => this.removeProduct(product.id)}>Remove from cart</a></p>
                                    </div>
                                    <div className="price">
                                        <span className="oldprice">${product.totalprice}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                {cartCoupons}

                <div className="total">
                    <div className="fullprice">${this.props.cartOverview.totalFullPrice}</div>
                    <div className="saleprice">${this.props.cartOverview.totalPrice}</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cartOverview: state.cartOverview,
    cartCoupons: state.cartCoupons,
    cartProducts: state.cartProducts
})

export default connect(mapStateToProps)(CartList);