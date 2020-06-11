import React from 'react';


const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div>
            <h1 className>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={image} alt=""></img>
        </div>
    )
}

export default Recipe;