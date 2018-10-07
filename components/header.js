import React, { Fragment, Component } from 'react'
import Link from 'next/link'

export default class Header extends Component {

    render() {
        return (
            <Fragment>
                <div className="accountbar">

                </div>
                <header>
                    <div className="logo column">
                        <Link href="/"><a><img src="/static/logo-white-nocircle.png" alt="Perfect Pair Logo" /></a></Link>
                    </div>
                    <div className="nav column">
                        <nav>
                            <ul>
                                <li><a>Account</a></li>
                                <li><Link href="/checkout"><a>Cart: 0 items</a></Link></li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </Fragment>
        )
    }
}
