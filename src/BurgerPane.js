import React, { Component } from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

function BurgerPane(props) {
    let ingredients = props.ingredients
    return (
        <div>
            {/* Not sure why reverse isn't working; it's not reverse the order in which the burger gets rendered. */}
            <BurgerStack ingredients={props.ingredients}/>
            
            <ClearBurger clearBurger={props.clearBurger}/>
        </div>
    )
}

export default BurgerPane