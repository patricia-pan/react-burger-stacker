import React, { Component } from 'react'

function Ingredient(props) {
    // Before, when we said color=this.props.ingredient.color, React was viewing this as a method as opposed to an assignment.
    // It also wasn't being updated whenever stuff was re-rendered, since it was outside the render function.
    let color = props.ingredient.color
    // console.log('Ingredient.js color: ', this.color)
    return (
        <div style={{color: color}}> 
            <form> 
                <input 
                    type="hidden"
                    value={props.ingredient} />
                {props.ingredient.name}
            </form>
        </div>
    )
}

export default Ingredient;

// How to inline style in React: 
// https://stackoverflow.com/questions/43366026/react-inline-style-style-prop-expects-a-mapping-from-style-properties-to-value