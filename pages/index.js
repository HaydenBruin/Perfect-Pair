import React, { Component } from 'react'
import DefaultLayout from '../components/layouts/default-layout'
import Products from '../components/products'

export default class index extends Component {
    render() {
        return (
            <DefaultLayout>
            <p>API_KEY value is "{process.env.API_KEY}"</p>
                <p>NODE_ENV value is "{process.env.NODE_ENV}"</p>
        <p>CUSTOM_ENV_VAR value is "{process.env.CUSTOM_ENV_VAR}"</p>
        <p>REACT_APP_CUSTOM_ENV_VAR value is "{process.env.REACT_APP_CUSTOM_ENV_VAR}"</p>
        <p>TOML_ENV_VAR value is "{process.env.TOML_ENV_VAR}"</p>
        <p>REACT_APP_TOML_ENV_VAR value is "{process.env.REACT_APP_TOML_ENV_VAR}"</p>
                <Products />
            </DefaultLayout>
        )
    }
}
