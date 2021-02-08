import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Nav } from "./components/Navbar/Nav";
import { Participants } from "./components/Participants/Participants";
import { Counter } from "./components/Count/Counter";
import { Generator } from "./components/RandomPokemonGenerator/Generator";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Nav />

        <Switch>
          <div className="Content">
            <Route path="/" exact component={Participants} />
            <Route path="/random_pokemon_generator" component={Generator} />
          </div>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
