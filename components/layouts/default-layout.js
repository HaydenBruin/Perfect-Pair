import React, { Fragment, Component } from 'react'
import Header from '../header'

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
