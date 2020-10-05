import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

export default function App() {
    return (
        <Router>  
            <switch>
                <Route path="/campains">
                    <p> I am at the campains page</p>
                </Route>
                <Route path="/signin">
                    <p> I am at the signin page</p>
                </Route> 

                <Route path="/fqa">
                    <p> I am at the fqa page</p>
                </Route> 
                <Route path="/about">
                    <p> I am at the about page</p>
                </Route> 

                <Route path="/"> 
                    <p> I am at the home page</p>
                </Route>
            </switch>  
        </Router>
    );
}