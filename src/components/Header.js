import logo from '../../img/Logo.png';
import { useState, useEffect } from 'react';



const Logo = () => {
    return (
    <div className='logo-container'>
        <img src={logo} alt='logo' width='150px' />
    </div>
    );
}

const Header = () => {

    const [logBtnValue, setlogBtnValue] = useState('Login');

    //  if no dependency array useEffect will called every render
    // if dependency array is empty => on initial render only once
    // if dependency array is high value [logBtnValue] => is called everytime the logBtnValue is updated 
    useEffect( ()=> {
        console.log("UseEffect called,...");
    }, [logBtnValue]);
    // let logBtnValue ='Login';
    
    return (
    <div id='header-container' className='header-container'>
        <Logo />
        <div className='navList'>
            <ul>
                <li><a href='#'> Home </a></li>
                <li><a href='#'> Products </a></li>
                <li><a href='#'> Contact us </a></li>
                <li><a href='#'> Cart </a></li>
                <button className='loginBtn' onClick={
                    () => {
                        logBtnValue == "Login" ? setlogBtnValue('Logout') : setlogBtnValue('Login');
                        console.log("but but::", logBtnValue);    
                    }
                } > {logBtnValue} </button>
            </ul>
        </div>
    </div>
);
}

export default Header;