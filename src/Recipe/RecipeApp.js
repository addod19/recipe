import React from 'react';

import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import Main from './Main/Main';

const RecipeApp = () => {
    return(
        <div className="RecipeApp">
            <Nav />
            <Main />
            <Footer />
        </div>
    );
}

export default RecipeApp;