import React, { Component } from 'react'

class ClearBurger extends Component {
    
    render() {
        return (
            <button onClick={(e) => {this.props.clearBurger(e)}}>Clear Burger</button>
        )
    }
}

export default ClearBurger