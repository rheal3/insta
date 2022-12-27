import React from 'react';
import Recipe from './Recipe/recipe'
import useStyles from './styles';

const Recipes = () => {
    const classes = useStyles();
    return (
        <>
           <h1>RECIPES</h1>
           <Recipe />  
           <Recipe />   
        </>

    );
}

export default Recipes;