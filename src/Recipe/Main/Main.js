import React, {useEffect, useState} from 'react';

import Recipe from './Recipe';
import './Main.css';

const Main = () => {
    const APP_ID = '67d62c8a';
    const APP_KEY = '34f530f5e5c5c4ee8d0b6ea08b047289';

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('fish');

    useEffect(() => {
        GET_RECEPIES();
    }, [query]);
    
    const GET_RECEPIES = async () => {
        const RESPONSE = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const DATA = await RESPONSE.json();
        setRecipes(DATA.hits);
        console.log(DATA.hits);
    };

    const UPDATE_SEARCH = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
    }

    return(
        <main className="wrapper">
            <h1 className="mainTitle">Search your favorite recipe</h1>
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" value={search} onChange={UPDATE_SEARCH} />
                <button className="search-button" type="submit">
                Search
                </button>
            </form> 
            <div className="recipes">
                {recipes.map(recipe => (
                <Recipe 
                key={recipe.recipe.label}
                title={recipe.recipe.label} 
                image={recipe.recipe.image}
                calories={`${Math.round(recipe.recipe.calories * 100) / 100}`}
                ingredients={recipe.recipe.ingredients}>
                </Recipe>
                ))}
            </div>

        </main>
    );
}

export default Main;