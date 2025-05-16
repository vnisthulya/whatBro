import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Cart from './components/Cart';
import { createBrowserRouter, RouterProvider } from 'react-router';


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
    
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
]);

// Render area

const root = ReactDOM.createRoot(document.getElementById('root'));

// Direct render
// root.render(<AppLayout />);

 root.render(<RouterProvider router={appRouter} />);
