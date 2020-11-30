// @flow
import React, { Component } from 'react'
// import ClickCounter from './Advanced React/higher-order-components/ClickCounter'
// import HoverCounter from './Advanced React/higher-order-components/HoverCounter'
import ClickCounter2 from './Advanced React/render-props/ClickCounter2'
import HoverCounter2 from './Advanced React/render-props/HoverCounter2'
import User from './Advanced React/render-props/User'
import Counter from './Advanced React/render-props/Counter'
class App extends Component {
    render() {
        return (
            <div>
                {/* <ClickCounter name='Dibran' />
                <HoverCounter /> */}
                {/* <ClickCounter2 />
                <HoverCounter2 />
                <User render={(isLoggedIn) => isLoggedIn ? 'Dibran' : 'Guest'} /> */}
                <Counter
                    render={(count, incrementCount) => (
                        <ClickCounter2 count={count} incrementCount={incrementCount} />
                    )}
                />
                <Counter
                    render={(count, incrementCount) => (
                        <HoverCounter2 count={count} incrementCount={incrementCount} />
                    )}
                />
            </div>
        )
    }
}

export default App


