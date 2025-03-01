import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './img/Logo.png';
import searchIcon from './img/search.png';
import starIcon from './img/star.png';



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
            <h2 className='resto-name'> Border barotta kadai</h2>
            <div className='starNtime'>
                <img src={starIcon} alt='star' />
                <h3 className=''> 4.3 * 43 min</h3>
            </div>
            <h4 className='cuisine'> Biriyani, south Indian</h4>
            <h4 className='place' >Pallikaranai</h4>
        </div>
    );
}
const Body = () => {
    return(
        <div className='body'>
            <div className='search-bar'>      
                <a href='#'>Search <img src={searchIcon} alt='search-icon' /></a>
            </div>
            <div className='resto-container'>
                <RestoCard />
                <RestoCard />
                <RestoCard />
                <RestoCard />
                <RestoCard />
                <RestoCard />
                <RestoCard />
                <RestoCard />
                <RestoCard />
                <RestoCard />
                <RestoCard />
                <RestoCard />
            </div>
        </div>

    );
}



const Footer = () => {
    return(
        <div className='footer-container'>
            <h4 className='' > © 2025 WhatBro. All rights reserved.</h4>
            <div className='navList'>
                <ul className='footer-nav'>
                    <li><a href='#' >site map</a></li>
                    <li><a href='#' >compliance</a></li>
                    <li><a href='#' >Contact us</a></li>
                </ul>
            </div>
        </div>
    );
}


// React functional component
const AppLayout = () => {
    return(
        <div className='app-container'>
            <Header />
            <Body />
            <Footer />
        </div>
    );
}
    


// Render area

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
