import React from 'react';
import Header from './Header/Header.jsx';
import Home from './Home/Home.jsx';
import About from './About/About.jsx';
import Skillsets from './Skillsets/Skillsets.jsx';
import Projects from './Project/Projects.jsx';
import Footer from './Footer/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';  

function App() {
    return (
        <>
            <Header />
            <Home />
            <div className="my-5 mx-auto" style={{ borderTop: '3px solid #d1a85f', width: '80%' }} />
            <About />
            <Projects />
            <Skillsets />
            <Footer />
        </>
    );
}

export default App;
