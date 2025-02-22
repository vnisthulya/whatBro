import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './img/Logo.png'


/*
header :: components>>

    :: logo-img | logo-name
    :: navigation items

body :: components>>

    :: search bar | button    
    :: restaurant card

Footer :: components>>

    :: copy rights
    :: footer links    

*/


// React Elements : logo

const Logo = () => {
    return (
    <div>
        <img src={logo} alt='logo' width='150px' />
    </div>
    );
}
const Header = () => {
    return (
    <div id='container'>
        <Logo />
        <div className='navList'>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Cart</li>
        </ul>
    </div>
    </div>
);
}
// React components




// React functional component
const AppLayout = () => (
    <Header />
);

// Render area

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
