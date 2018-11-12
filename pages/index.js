import React, { Component } from 'react'
import DefaultLayout from '../components/layouts/default-layout'
import Products from '../components/products'

export default class index extends Component {
    render() {
        return (
            <DefaultLayout>
                <p>API_KEY value is "{process.env.REACT_APP_API_URL}"</p>
                <p>API_KEY value is "{process.env.API_URL}"</p>
                <Products />
            </DefaultLayout>
        )
    }
}
