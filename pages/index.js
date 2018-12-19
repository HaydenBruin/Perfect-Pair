import React, { Component } from 'react'
import DefaultLayout from '../components/layouts/default-layout'
import Products from '../components/products'
import { getAllProducts } from '../components/apis/product'

export default class index extends Component {
    render() {
        return (
            <DefaultLayout>
                <div className="christmas-delivery">
                    <p>It's too late for christmas but you could be looking snazzy in the new year!</p>
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
