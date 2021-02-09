import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default function BurgerStack(props) {
    let ingredients = props.ingredients.map( (ingredient, i) => {
        // console.log('BurgerStack.js ingredient: ', ingredient)
        return <Ingredient ingredient={ingredient} key={`burgerKey ${i}`} />
    })
    return (
            <div>
                {ingredients.reverse()}
            {/* {props.ingredients.map( (ingredient, i) => {
                // console.log('BurgerStack.js ingredient: ', ingredient)
                return <Ingredient ingredient={ingredient} key={`burgerKey ${i}`} />
            })} */}
            </div>
        )
}
