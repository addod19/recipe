import React, {useEffect, useState} from 'react';


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
        <main>
            <h1 className="mainTitle">Search your favorite recipe now!!!</h1>
            <p>super cool react app</p>
        </main>
    );
}

export default Main;