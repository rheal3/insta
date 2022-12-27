import React from 'react';
import Recipe from './Recipe/recipe'
import RecipeCard from './RecipeCard/recipeCard'
import useStyles from './styles';

const Recipes = () => {
    const classes = useStyles();
    return (
        <>
           <h1>RECIPES</h1>
           <RecipeCard />  
           <RecipeCard />   
        </>

    );
}

export default Recipes;