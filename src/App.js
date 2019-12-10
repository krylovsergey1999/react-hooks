import React from 'react';
import Navbar from "./navbar/navbar";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Profile from "./pages/profile";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <div className="container pt-4">
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/profile/:name" component={Profile}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
