import React, { Component } from 'react'
import DefaultLayout from '../components/layouts/default-layout'
import Products from '../components/products'

export default class index extends Component {
    constructor() {
        super();
        console.log('REACT_APP_API_URL: ' + process.env.REACT_APP_API_URL);
        console.log('CUSTOM_API_URL: ' + process.env.CUSTOM_API_URL);
        console.log('API_URL: ' + process.env.API_URL);
    }
    render() {
        return (
            <DefaultLayout>
                <Products />
            </DefaultLayout>
        )
    }
}
