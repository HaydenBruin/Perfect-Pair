import React, { Fragment, Component } from 'react'
import Header from '../components/header'
import Products from '../components/products'
import '../assets/scss/app.scss'

export default class index extends Component {
    render() {
        return (
            <Fragment>
                <Header />

                <Products />
            </Fragment>
        )
    }
}
