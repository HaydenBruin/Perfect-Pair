import React, { Component } from 'react'
import Link from 'next/link'
import AddToCart from './add-to-cart'

export default class Products extends Component {

    state = {
        products: []
    }

    componentDidMount = () => {
        if(this.state.products.length === 0)
        {
            fetch(`${process.env.API_URL}/api/products/`, {
                method: 'get',
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }).then(response => response.json())
            .then(data => this.setState({ products: data }));
        }
    }

    render() {
        return (
            <div className="products">
                <div className="products-list">
                    {
                        this.state.products.map((product, index) => {
                            return (
                                <div className="product" key={index}>
                                    <Link href={`/product/${product.slug}`}><img src={product.image} className="productimg"/></Link>
                                    <div className="details">
                                        <h2>{product.title}</h2>
                                        <div className="pricing">
                                            <div className="saleprice">${product.saleprice}</div>
                                            <div className="price">${product.price}</div>
                                        </div>
                                        <AddToCart product={product} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}