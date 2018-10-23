import React, { Fragment, Component } from 'react'
import DefaultLayout from '../components/layouts/default-layout'
import Products from '../components/products'
import '../assets/scss/app.scss'
import Head from 'next/head'

export default class index extends Component {
    render() {
        return (
            <Fragment>
                <Head>
                    <title>Perfect Pair - Say it with socks</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
                <DefaultLayout>
                    <Products />
                </DefaultLayout>
            </Fragment>
        )
    }
}
