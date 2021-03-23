import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

export default function BasicRouter() {
    /*
        Basic router with a Switch, showing various ways
        to specify components to render
    */
    return (
        <Router>
            <Switch>
                <Route path="/about" render={() => { return (<div><h2>About</h2><p>This is my awesome app...</p></div>)}}/>
                <Route path="/contact" component={Contact} />
                <Route>
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

function Home() {
    return (
        <>
            <h2>Homepage</h2>
            <p>This is the homepage...</p>
        </>
    )
}