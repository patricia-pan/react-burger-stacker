import React, { Component } from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

class BurgerPane extends Component {
    ingredients = this.props.ingredients
    render() {
        return (
            <div>
                <BurgerStack ingredients={this.props.ingredients}/>
                
                <ClearBurger clearBurger={this.props.clearBurger}/>
            </div>

        )
    }

}

export default BurgerPane