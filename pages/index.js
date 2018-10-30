import React, { Component } from 'react'
import DefaultLayout from '../components/layouts/default-layout'
import Products from '../components/products'
import '../assets/scss/app.scss'

export default class index extends Component {
    render() {
        return (
            <DefaultLayout>
                <Products />
            </DefaultLayout>
        )
    }
}
