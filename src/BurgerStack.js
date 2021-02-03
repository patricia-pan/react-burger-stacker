import React, { Component } from 'react'
import Ingredient from './Ingredient'

class BurgerStack extends Component {
    render() {
        return (
            <div>
            {this.props.ingredients.map( (ingredient, i) => {
                // console.log('BurgerStack.js ingredient: ', ingredient)
                return <Ingredient ingredient={ingredient} key={`burgerKey ${i}`} />
            })}
            </div>

        )
    }

}

export default BurgerStack