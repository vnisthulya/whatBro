import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './img/Logo.png'
import searchIcon from './img/search.png'


/*
header :: components>>

    :: logo-img | logo-name
    :: navigation items

body :: components>>

    :: search bar | button    
    :: restaurant card
        :: img
        :: Restaurant name
        :: cuisines
        :: delivery time
        :: price

Footer :: components>>

    :: copy rights
    :: footer links    

*/


// React Elements : logo

const Logo = () => {
    return (
    <div className='logo-container'>
        <img src={logo} alt='logo' width='150px' />
    </div>
    );
}


// React functional components

const Header = () => {
    return (
    <div id='header-container' className='header-container'>
        <Logo />
        <div className='navList'>
            <ul>
                <li><a href='#'> Home </a></li>
                <li><a href='#'> Products </a></li>
                <li><a href='#'> Contact us </a></li>
                <li><a href='#'> Cart </a></li>
            </ul>
        </div>
    </div>
);
}

const RestoCard = () => {
    return(
        <div className='res-card'>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/4/9/b7f823ab-9291-4be3-bb39-e5415ca70c35_5a6a3c4d-1a35-44c7-b7f0-02fd55b9fc83.JPG" alt='biriyani' className='food-img' />
            <h3 className='resto-name'> Meghna Foods</h3>
            <h3 className='cuisine'> Biriyani</h3>
        </div>
    );
}
const Body = () => {
    return(
        <div className='body'>
            <div className='search-bar'> Search     
                <a href='#'><img src={searchIcon} alt='search-icon' /></a>
            </div>
            <div className='resto-container'>
                <RestoCard />
            </div>
        </div>

    );
}

const Footer = () => {

}



// React functional component
const AppLayout = () => {
    return(
        <div className='app-container'>
            <Header />
            <Body />
        </div>
    );
}
    


// Render area

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
