import React, { Component } from 'react';
import {render} from "react-dom";
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import DinosaurList from "./DinosaurList";
import DinosaurDetail from "./DinosaurDetail";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path={'/dinosaurs/:id'}><DinosaurDetail/></Route>
                    <Route path={'/dinosaurs'}><DinosaurList/></Route>
                </Switch>
            </Router>
        )
    }
}

export default App;
const container = document.getElementById("app");
render(<App />, container);