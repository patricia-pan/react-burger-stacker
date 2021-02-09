// https://github.com/WDI-SEA/react-burger-stacker

import './App.css';
import React, { Component, useState, useEffect } from 'react'
import IngredientsList from './IngredientsList'
import BurgerPane from './BurgerPane'

function App() {
  const ingredientOptions = [
    {name: 'Kaiser Bun', color: 'saddlebrown'},
    {name: 'Sesame Bun', color: 'sandybrown'},
    {name: 'Gluten Free Bun', color: 'peru'},
    {name: 'Lettuce Wrap', color: 'olivedrab'},
    {name: 'Beef Patty', color: '#3F250B'},
    {name: 'Soy Patty', color: '#3F250B'},
    {name: 'Black Bean Patty', color: '#3F250B'},
    {name: 'Chicken Patty', color: 'burlywood'},
    {name: 'Lettuce', color: 'lawngreen'},
    {name: 'Tomato', color: 'tomato'},
    {name: 'Bacon', color: 'maroon'},
    {name: 'Onion', color: 'lightyellow'}
  ]

  const [burgerIngredients, setBurgerIngredients] = useState([])
  const [newItem, setNewItem] = useState('')

  const clearBurger = (e) => {
    console.log("Clear Burger is running!")
    setBurgerIngredients([])
  }

  const newIngredientChange = (ingredient) => {
    console.log(ingredient)
    setNewItem(ingredient)
    addIngredient(ingredient)
    // setState( { newItem: ingredient },
    //   this.addIngredient )
  }

  const addIngredient = (newItem) => {
    console.log("Adding ingredient", newItem)
    let tempArray = burgerIngredients
    // tempArray.splice(0, 0, this.state.newItem)
    // console.log(tempArray)
    // tempArray.push(this.state.newItem)
  
    
    // tempArray.unshift(newItem)
    // setBurgerIngredients(tempArray) // This method didn't work for some reason, I had to use the spread operator.

    setBurgerIngredients(burgerIngredients => [...burgerIngredients, newItem])
    // Can also use setBurgerIngredients( burgerIngredients.concat(newItem) )
    console.log("The burgerIngredients are", burgerIngredients)
    // OR, setBurgerIngredients([...burgerIngredients, {name: e.target.innerText}])
    setNewItem('')
  }
  
  return (
    <div className="App"> 

      <IngredientsList ingredients={ingredientOptions} newIngredientChange={newIngredientChange}/>
    
      <BurgerPane ingredients={burgerIngredients} clearBurger={clearBurger}/>

    </div>
  )
  
}

export default App;
