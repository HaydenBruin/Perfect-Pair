import React, { Component } from 'react'
import Loading from "../components/loading"
import Link from 'next/link'

export default class CartList extends Component {

    state = {
        cart: []
    }

    componentDidMount = () => {
        if(this.state.cart.length === 0)
        {
            fetch(`${process.env.API_URL}/api/cart/`, {
                method: 'get',
                credentials: 'include',
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }).then(response => response.json())
            .then(data => this.setState({ cart: data.cart }));
        }
    }

    render() {
        if(this.state.cart.length === 0)
        {
            return (
                <div className="cart">
                    <div className="logo">
                        <img src="/static/logo-circle-pp-blue.png" alt="Perfect Pair Logo" />
                    </div>

                    <Loading />
                </div>
            )
        }

        return (
            <div className="cart">
                <div className="logo">
                    <Link href="/"><a><img src="/static/logo-circle-pp-blue.png" alt="Perfect Pair Logo" /></a></Link>
                </div>
                
                <div className="cartlist">
                    {
                        this.state.cart.products.map((product, index) => {
                            return (
                                <div className="product" key={index}>
                                    <div className="image">
                                        <img src={product.image} alt={product.title} />
                                    </div>
                                    <div className="details">
                                        <h2>{product.title}</h2>
                                    </div>
                                    <div className="price">
                                        <span className="oldprice">${product.price}</span>
                                        <span className="onsale">${product.saleprice}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                    <div className="total">
                        <div className="fullprice">${parseInt(this.state.cart.overview.totalPrice) + parseInt(this.state.cart.overview.totalSavings)}</div>
                        <div className="saleprice">${this.state.cart.overview.totalPrice}</div>
                    </div>
                </div>
            </div>
        )
    }
}
