import React, { Component } from 'react'

class Ingredient extends Component {
    color = this.props.ingredient.color
    render() {
        // console.log('Ingredient.js color: ', this.color)
        return (
            <div style={{color: this.color}}> 
                <form> 
                    <input 
                        type="hidden"
                        value={this.props.ingredient} />
                    {this.props.ingredient.name}
                </form>
            </div>
        )
    }
}

export default Ingredient;

// How to inline style in React: 
// https://stackoverflow.com/questions/43366026/react-inline-style-style-prop-expects-a-mapping-from-style-properties-to-value