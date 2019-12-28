import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Profile from "./pages/profile";
import Navbar from "./components/navbar";
import Alert from "./components/alert";
import AlertState from "./context/alert/AlertState";
import GithubState from "./context/github/GithubState";

function App() {
    return (
        <>
            <GithubState>
                <AlertState>
                    <BrowserRouter>
                        <Navbar/>
                        <div className="container pt-4">
                            <Alert alert={{text: 'Test alert'}}/>
                            <Switch>
                                <Route path="/" exact component={Home}/>
                                <Route path="/about" component={About}/>
                                <Route path="/profile/:name" component={Profile}/>
                            </Switch>
                        </div>
                    </BrowserRouter>
                </AlertState>
            </GithubState>
        </>
    );
}

export default App;
