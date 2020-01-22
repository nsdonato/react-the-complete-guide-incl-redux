import React, {useState} from 'react';
import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

function Ingredients() {
  const [ userIngredients, setUserIngredients] = useState([]);

  const addIngredientHandler = ingredient => {
    console.log(ingredient)
    setUserIngredients(prevIngredients => [
      ...prevIngredients,
      {id: Math.random().toString(), ...ingredient}
    ]);
  }

  const removeItemHandler = ingredient => {
    let ingredient = user.find(ingredient.id)
    setUserIngredients(prevIngredients => [
      ...prevIngredients,
      {id: Math.random().toString(), ...ingredient}
    ]);
  }

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeItemHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
