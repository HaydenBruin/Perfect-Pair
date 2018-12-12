import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateCart, createNotification } from '../store'
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
                this.props.dispatch(createNotification("The product has been removed from your cart"));
            });
    }

    render() {
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
                                        <p className="remove"><a onClick={() => this.removeProduct(product.id)}>Remove</a></p>
                                    </div>
                                    <div className="price">
                                        <span className="oldprice">${product.totalprice}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                { this.props.cartCoupons.length ? (
                        <div className="coupons">
                            {
                                this.props.cartCoupons.map((coupon, index) => {
                                    return (
                                        <div className="coupon" key={index}>{coupon.description}</div>
                                    )
                                })
                            }
                        </div>
                    ) : null
                }

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