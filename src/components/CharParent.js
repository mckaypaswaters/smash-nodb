import React, {Component} from 'react'
import Stats from './Stats'
import AddChar from './AddChar'
import Characters from './Characters'

// THIS COMPONENT WILL HOLD LOGIC AND STATE TO BE PASSED DOWN THROUGH PROPS TO CHILDREN

export default class CharParent extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div> CharParent
                <Stats/>
                <AddChar/>
                <Characters/>
            </div>
        )
    }
}