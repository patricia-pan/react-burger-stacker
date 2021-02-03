import './App.css';
import React, { Component } from 'react'
import IngredientsList from './IngredientsList'
import BurgerPane from './BurgerPane'

class App extends Component {
  ingredientOptions = [
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

  state = {
    burgerIngredients: [],
    // burgerIngredients: [
    //   {name: 'Kaiser Bun', color: 'saddlebrown'},
    //   {name: 'Sesame Bun', color: 'sandybrown'},
    //   {name: 'Gluten Free Bun', color: 'peru'},
    //   {name: 'Lettuce Wrap', color: 'olivedrab'}
    // ],
    newItem: ''
  }

  clearBurger = (e) => {
    console.log("Clear Burger is running!")
    this.setState({
      burgerIngredients: []
    })
  }

  newIngredientChange = (ingredient) => {
    console.log(ingredient)
    this.setState( { newItem: ingredient },
      this.addIngredient )
  }

  addIngredient = (e) => {
    let tempArray = this.state.burgerIngredients
    // tempArray.splice(0, 0, this.state.newItem)
    // console.log(tempArray)
    // tempArray.push(this.state.newItem)
    tempArray.unshift(this.state.newItem)
    this.setState({
      // selectedIngredients: [this.state.newItem, ...this.state.selectedIngredients], // tempArray,
      burgerIngredients: tempArray,
      newItem: ''
    })
  }

  render () {
    return (
      <div className="App"> 

        <IngredientsList ingredients={this.ingredientOptions} newIngredientChange={this.newIngredientChange}/>
      
        <BurgerPane ingredients={this.state.burgerIngredients} clearBurger={this.clearBurger}/>

      </div>
    )
  }
}

export default App;
