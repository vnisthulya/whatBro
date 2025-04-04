import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

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
