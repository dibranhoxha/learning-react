import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Test = (props) => {
    return (
        <div>
            <h1>{props.str}</h1>
            <h1>{props.bool ? 'Bool' : 'No Bool'}</h1>
            <h1>{props.strOrNum}</h1>
            <div>
                {props.array.map(e => <li key={e}>{e}</li>)}
            </div>
            <div>
                {props.arrOfObj.map(obj => <li key={obj.age}>{obj.name}</li>)}
            </div>
        </div>
    )
}

Test.propTypes = {
    str: PropTypes.string,
    bool: PropTypes.bool,
    strOrNum: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    array: PropTypes.arrayOf(PropTypes.number),
    arrOfObj: PropTypes.arrayOf(PropTypes.shape(
        {
            name: PropTypes.string,
            age: PropTypes.number
        }
    ))
}

class PropTypesComponent extends Component {
    render() {
        return (
            <div>
                <Test
                    str={'Dibran'}
                    bool
                    strOrNum={10}
                    array={[1, 2, 3]}
                    arrOfObj={[{ name: 'dibi', age: 23 }, { name: 'shkodri', age: 24 }]}
                />
            </div>
        )
    }
}

export default PropTypesComponent
