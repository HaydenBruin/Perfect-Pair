import React, { Fragment, Component } from 'react'
import Link from 'next/link'

export default class Header extends Component {

    render() {
        return (
            <header>
                <div className="container">
                    <div className="logo column">
                        <Link href="/"><a><img src="/static/logo-circle-pp-blue.png" alt="Perfect Pair Logo" /></a></Link>
                    </div>
                    <div className="nav column">
                        <nav>
                            <ul>
                                <li><a>Account</a></li>
                                <li><Link href="/checkout"><a>Cart: 0 items</a></Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}
