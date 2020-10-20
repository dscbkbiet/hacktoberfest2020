
import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

import Hacker from './Hackers/Hacker';

import Ramakrishna from './Hackers/Ramakrishna';

import Niharika from './Hackers/Niharika';

import Nidhi from './Hackers/Nidhi';

import Aniket from './Hackers/Aniket';

import Shreya from './Hackers/Shreya';

import Home from './Hackers/Home';


function App() {
    return (
        <div className = "App" >
        <Router >


        <Switch>
            <Route path = "/hacker" component = { Hacker }/>
            <Route path = "/" component = { Home }/>
        </Switch>

        <nav>

            <ul>
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/hacker">Hacker Name</Link>
                </li>
        
                <li>
                    <Link to = "/hacker">Ramakrishna Chhipa</Link>
                </li>
        
                <li>
                    <Link to = "/hacker">Niharika</Link>
                </li>
            </ul>
        </nav>
        </Router></div>
    );

     
}


export default App;
