import logo from '../../img/Logo.png';


const Logo = () => {
    return (
    <div className='logo-container'>
        <img src={logo} alt='logo' width='150px' />
    </div>
    );
}

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

export default Header;