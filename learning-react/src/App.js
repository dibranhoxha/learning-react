import React, { Component } from 'react'
import ClickCounter from './Advanced React/higher-order-components/ClickCounter'
import HoverCounter from './Advanced React/higher-order-components/HoverCounter'
export default class App extends Component {
    render() {
        return (
            <div>
                <ClickCounter name='Dibran' />
                <HoverCounter />
            </div>
        )
    }
}


