import React, { Component } from 'react'
import Ingredient from './Ingredient'

class BurgerPane extends Component {
    ingredients = this.props.ingredients
    render() {
        return (
            <div>
            {this.ingredients.map( (ingredient, i) => {
                // console.log('BurgerStack.js ingredient: ', ingredient)
                return <Ingredient ingredient={ingredient} key={`burgerKey ${i}`} />
            })}
            </div>

        )
    }

}

export default BurgerPane