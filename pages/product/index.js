import React, { Component } from 'react'
import DefaultLayout from '../../components/layouts/default-layout'
import AddToCart from '../../components/add-to-cart'
import getProduct from '../../components/apis/product'

export default class Product extends Component {

    render() {
        console.log(this.props);
        return (
            <DefaultLayout>
                <div className="product-details">
                    <div className="details">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.description}</p>
                        <div className="pricing">
                            <div className="price">${this.props.price}</div>
                        </div>
                        <AddToCart product={this.props} />
                    </div>
                    <div className="img">
                        <img src={this.props.image} className="productimg"/>
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}

Product.getInitialProps = async ({ query }) => {
    console.log('hey');
    const productFetch = await getProduct(query);
    const productJson = await productFetch.json()
    console.log('wefwe');
    return productJson;
}
  