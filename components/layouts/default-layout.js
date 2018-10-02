import React, { Component } from 'react'
import Header from '../header'
import '../../assets/scss/app.scss'

export default class DefaultLayout extends Component {
    render() {
        return (
            <div className="default-layout">
                <Header />

                { this.props.children }
            </div>
        )
    }
}
