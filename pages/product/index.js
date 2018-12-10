import React, { Component } from 'react'
import DefaultLayout from '../../components/layouts/default-layout'
import AddToCart from '../../components/add-to-cart'
import { getProduct } from '../../components/apis/product'

export default class Product extends Component {

    render() {
        if(!this.props.product) return null;

        return (
            <DefaultLayout>
                <div className="product-details">
                    <div className="details">
                        <h1>{this.props.product.title}</h1>
                        <p>{this.props.product.description}</p>
                        <div className="pricing">
                            <div className="price">${this.props.product.price}</div>
                        </div>
                        <AddToCart product={this.props.product} />
                    </div>
                    <div className="img">
                        <img src={this.props.product.image} className="productimg"/>
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}

Product.getInitialProps = async ({ query }) => {
    if(query.id)
    {
        const productFetch = await getProduct(query);
        const productJson = await productFetch.json()
        return {
            product: productJson
        }
    }
    return {}
}
  