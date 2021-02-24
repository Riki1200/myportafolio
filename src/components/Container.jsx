import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import About from '../components/About/About';


const Container = () => {


    return <div className='container'>
        <Router>
            <Navbar />
            <Main>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/projects'>
                        <Projects />
                    </Route>
                    <Route path='/contact'>
                        <Contact />
                    </Route>
                    <Route path='/about'>
                        <About/>
                    </Route>
                </Switch>
            </Main>
        </Router>
        <Footer />
    </div>
}

export default Container;