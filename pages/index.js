import React, { Component } from 'react'
import DefaultLayout from '../components/layouts/default-layout'
import Products from '../components/products'
import { getAllProducts } from '../components/apis/product'

export default class index extends Component {
    render() {
        return (
            <DefaultLayout>
                <div className="christmas-delivery">
                    <p>Order before 21st December to guarantee christmas delivery!<br />We ship all orders locally!</p>
                </div>
                <Products products={this.props.products} />
            </DefaultLayout>
        )
    }
}

index.getInitialProps = async () => {
    const productFetch = await getAllProducts();
    const productJson = await productFetch.json();
    return {
        products: productJson
    }
}
