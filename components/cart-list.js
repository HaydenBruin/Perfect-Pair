import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loading from '../components/loading'
import { updateCart } from '../store'

class CartList extends Component {

    removeProduct = (productid) => {
        fetch(`${process.env.API_URL}/api/cart/remove`, {
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
            fetch(`${process.env.API_URL}/api/cart`, {
                method: 'get',
                credentials: 'include',
                headers: {
                  "Content-Type": "application/json"
                }
            }).then(response => response.json())
            .then(data => {
                this.props.dispatch(updateCart(data.cart))
            });
        });
    }

    render() {
        if(this.props.cartProducts.length === 0)
        {
            return (
                <div className="cart-empty">
                    <p>Your cart is empty :(</p>
                </div>
            )
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
                                        <span className="onsale">${product.totalsaleprice}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                
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
    cartProducts: state.cartProducts
})

export default connect(mapStateToProps)(CartList);