import React, { Component } from 'react'
import Ingredient from './Ingredient.js'

class IngredientsList extends Component {
    ingredients = this.props.ingredients
    render() {
        let ingredients = this.ingredients.map( (ingredient, i) => {
            return (
                <div>
                    <Ingredient ingredient={ingredient} newIngredientChange={this.props.newIngredientChange} key={`ingredientKey ${i}`} />
                    <button onClick={() => this.props.newIngredientChange(ingredient)}>Add to your burger</button>
                </div>
                )
        })
        
        // comment
        
        return (
            <div>
                {ingredients}
            </div>
            )
    }
        
}

export default IngredientsList