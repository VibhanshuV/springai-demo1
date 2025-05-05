import React, { useState } from 'react';

function RecipeGenerator({url}) {
  const [ingredients, setIngredients] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');
  const [recipe, setRecipe] = useState('');
  const generateRecipe = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${url}/create-recipe?ingredients=${ingredients}&cuisine=${cuisine}&dietaryRestrictions=${dietaryRestrictions}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.text();
      console.log('Generated Recipe:', data);
      setRecipe(data);
    } catch (e) {
      console.error('Error fetching recipe:', e);
    }
  };

  return (
    <div>
      <h2>Create a Recipe</h2>
      <form action="">
        <input type="text" value={ingredients} placeholder='Enter ingredients' onChange={(e)=> setIngredients(e.target.value)}/>
        <input type="text" value={cuisine} placeholder='Enter cuisine' onChange={(e)=> setCuisine(e.target.value)}/>
        <input type="text" value={dietaryRestrictions} placeholder='Enter dietary restrictions' onChange={(e)=> setDietaryRestrictions(e.target.value)}/>
        <button onClick={generateRecipe}>Generate Recipe</button>
      </form>

      <div>
        <pre className='recipe-text'>{recipe}</pre>
      </div>
    </div>
  );
}

export default RecipeGenerator ;