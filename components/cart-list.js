import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loading from '../components/loading'
import Link from 'next/link'

class CartList extends Component {

    render() {
        if(this.props.cartProducts.length === 0)
        {
            return (
                <Loading />
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