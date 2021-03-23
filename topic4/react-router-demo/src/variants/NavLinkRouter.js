import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from 'react-router-dom';

export default function NavLinkRouter() {
    /*
        Demoing use of NavLink
    */
    return (
        <Router>
            <div>
                <nav>
                    <NavLink to="/" exact={true}>Home</NavLink>{/* note use of `exact` here! */}
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
            </div>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

function Contact() {
    return (
        <> {/* see "fragments" https://reactjs.org/docs/fragments.html#short-syntax */}
            <h2>Contact Us</h2>
            <p>Get in touch!</p>
        </>
    )
}

function About() {
    return (
        <>
            <h2>About</h2>
            <p>This is my awesome pp...</p>
        </>
    )
}

function Home() {
    return (
        <>
            <h2>Homepage</h2>
            <p>This is the homepage...</p>
        </>
    )
}