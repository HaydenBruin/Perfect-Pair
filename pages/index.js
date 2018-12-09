import React, { Component } from 'react'
import DefaultLayout from '../components/layouts/default-layout'
import Products from '../components/products'
import getAllProducts from '../components/apis/product'

export default class index extends Component {
    render() {
        return (
            <DefaultLayout>
                <Products />
            </DefaultLayout>
        )
    }
}

index.getInitialProps = async () => {
    const productFetch = await getAllProducts();
    const productJson = await productFetch.json()
    return productJson;
}
