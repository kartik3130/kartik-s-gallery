import React from "react";
import "/Users/kartikpatidar/Desktop/react-tutorial/normal_web/node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/Users/kartikpatidar/Desktop/react-tutorial/normal_web/node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Redirect, Route, Switch } from "react-router";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Navbar from "./Navbar";

const App = () => {
    return (
        <>
        <Navbar />
            <Switch>
                <Route exact path="/" component = {Home}/>
                <Route exact path="/about" component = {About}/>
                <Route exact path="/services" component = {Services}/>
                <Route exact path="/contact" component = {Contact}/>
                <Redirect to = "/"/>
            </Switch>
        </>
    )
};

export default App;