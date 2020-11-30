import React, { Component } from 'react'
// import ClickCounter from './Advanced React/higher-order-components/ClickCounter'
// import HoverCounter from './Advanced React/higher-order-components/HoverCounter'
// import User from './Advanced React/render-props/User'
import ClickCounter2 from './Advanced React/render-props/ClickCounter2'
import HoverCounter2 from './Advanced React/render-props/HoverCounter2'
import Counter from './Advanced React/render-props/Counter'
import PropTypesComponent from './Advanced React/proptypes/PropTypesComponent'

class App extends Component {
    render() {
        return (
            <div>
                {/* <ClickCounter name='Dibran' />
                <HoverCounter /> */}
                {/* <ClickCounter2 />
                <HoverCounter2 />
                <User render={(isLoggedIn) => isLoggedIn ? 'Dibran' : 'Guest'} /> */}
                {/* <React.StrictMode>
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
                </React.StrictMode> */}
                <PropTypesComponent />
            </div>

        )
    }
}

export default App


