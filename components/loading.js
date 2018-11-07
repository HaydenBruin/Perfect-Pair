import React, { Component } from 'react'

class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <svg width="125px"  height="125px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" fill="none" ng-attr-stroke="{{config.color}}" ng-attr-stroke-width="{{config.width}}" ng-attr-r="{{config.radius}}" ng-attr-stroke-dasharray="{{config.dasharray}}" stroke="#74B9FF" strokeWidth="7" r="35" strokeDasharray="164.93361431346415 56.97787143782138" transform="rotate(139.908 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1.5s" begin="0s" repeatCount="indefinite"></animateTransform></circle></svg>
            </div>
        )
    }
}
export default Loading