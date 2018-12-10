import React, { Component } from 'react'
import { Link } from '../routes'
import AddToCart from './add-to-cart'
import LoadingProduct from "../components/loading-product";
import getConfig from 'next/config'
import { connect } from 'react-redux'
const { publicRuntimeConfig } = getConfig()

class Products extends Component {

    render() {
        if (this.props.products.data.length === 0) {
            let elements = [];
            for (let i = 0; i < 8; i++) { elements.push(<LoadingProduct key={i} />) }

            return (
                <div className="products">
                    <div className="container">
                        <div className="products-list">
                            {elements}
                        </div>
                    </div>
                </div>
            )
        }
        //<div className="saleprice">${product.saleprice}</div>
        return (
            <div className="products">
                <div className="container">
                    <div className="products-list">
                        {
                            this.props.products.data.map((product, index) => {
                                return (
                                    <div className="product" key={index}>
                                        <Link route="product" params={{ slug: product.slug, id: product.id }}>
                                            <a><img src={product.image} className="productimg" /></a>
                                        </Link>
                                        <div className="details">
                                            <div className="title">
                                                <h2>{product.title}</h2>
                                            </div>
                                            <div className="pricing">
                                                <div className="price">${product.price}</div>
                                            </div>
                                        </div>
                                        <AddToCart product={product} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Products)
