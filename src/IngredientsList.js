import React, { Component } from 'react'
import Ingredient from './Ingredient.js'

function IngredientsList(props) {   
    let newIngredientChange = props.newIngredientChange
    let ingredients = props.ingredients.map( (ingredient, i) => {
        return (
            <div>
                <Ingredient ingredient={ingredient} newIngredientChange={props.newIngredientChange} key={`ingredientKey ${i}`} />
                <button onClick={() => newIngredientChange(ingredient)}>Add to your burger</button>
            </div>
            )
    })
        
    return (
        <div>
            {ingredients}
        </div>
        )
        
}

export default IngredientsList