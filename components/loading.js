import React, { Component } from 'react'

class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <svg width="125px"  height="125px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <circle cx="50" cy="50" fill="none" stroke="#FFFFFF" strokeWidth="8" r="35" strokeDasharray="164.93361431346415 56.97787143782138" transform="rotate(359.784 50.0036 50.0036)">
                        <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="2s" begin="0s" repeatCount="indefinite"></animateTransform>
                    </circle>
                </svg>
            </div>
        )
    }
}
export default Loading