import React from 'react';


const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className="each-recipe">
            <div className="first-wrap">
                <h1 className>{title}</h1>
                <img className="img" src={image} alt=""></img>
            </div>
            <div className="second-wrap">
                <div className="ingredients">
                    <h3>Ingredients</h3>
                    <ol>
                        {ingredients.map(ingredient => (
                        <div>
                            <li>{ingredient.text}</li>
                        </div>
                        ))}
                    </ol>
                </div>
                <div className="calories">
                    <h5>Calories</h5>
                    <p>{calories}</p>
                </div>  
            </div>
        </div>
    )
}

export default Recipe;