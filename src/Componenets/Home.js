import React from 'react';
import About from './About';
import Carouselandsignup from './Carouselandsignup';
import Features from './Features';
import Footer from './Footer';
import Navbar from './Navbar';
import Rest_index from './Rest_index';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Carouselandsignup/>
            <Rest_index/>
            <About/>
            <Features/>
            <Footer/>

            
        </div>

    )
}

export default Home;