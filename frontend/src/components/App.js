import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import DinosaurList from "./DinosaurList";
import DinosaurDetail from "./DinosaurDetail";

class App extends Component {
    render() {
        return (
            <Switch>
                <h1>Hi</h1>
                <Route to={'/dinosaurs/:id'}><DinosaurDetail/></Route>
                <Route to={'/dinosaurs'}><DinosaurList/></Route>
            </Switch>
        )
    }
}

export default App;
const container = document.getElementById("app");
render(<App />, container);