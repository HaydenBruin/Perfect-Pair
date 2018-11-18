import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeNotification } from '../store'

class Notification extends Component {

    render() {
        if(!this.props.notifications)
        {
            return null;
        }

        return (
            <div className="notification">
                {
                    this.props.notifications.map((notification, index) => {
                        console.log('hello');
                        return (
                            <p className="text" key={index} onClick={() => this.props.dispatch(removeNotification(index))}><img src="/static/success.png" /> {index}: {notification}</p>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    notifications: state.notificationList
})

export default connect(mapStateToProps)(Notification)
