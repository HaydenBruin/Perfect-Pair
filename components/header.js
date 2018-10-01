import React, { Component } from 'react'

export default class Header extends Component {

    render() {
        return (
            <header>
                <div className="logo column">
                    <img src="/static/logo-circle-pp-blue.png" alt="Perfect Pair Logo" />
                </div>
                <div className="nav column">
                    <nav>
                        <ul>
                            <li><a href="/account">Account</a></li>
                            <li><a href="/cart">Cart: 0 items</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
